import { cache } from "react";
import { fallbackSiteContent } from "@/lib/content/fallback-data";
import type {
  FaqItem,
  LegalPage,
  ReviewSummary,
  Service,
  SiteContent,
  SiteSettings,
} from "@/lib/content/types";

const STRAPI_URL = process.env.STRAPI_URL?.replace(/\/$/, "");
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;
const HOME_CONTACT_HREF = "/#kontakt";

type StrapiResponse<T> = {
  data: T;
};

function withAuthHeaders() {
  if (!STRAPI_API_TOKEN) {
    return undefined;
  }

  return {
    Authorization: `Bearer ${STRAPI_API_TOKEN}`,
  };
}

function normalizeSiteSettings(siteSettings: SiteSettings): SiteSettings {
  return {
    ...siteSettings,
    primaryCta: {
      ...siteSettings.primaryCta,
      href: HOME_CONTACT_HREF,
    },
  };
}

function unwrapEntry<T>(entry: unknown): T {
  if (
    entry &&
    typeof entry === "object" &&
    "attributes" in entry &&
    entry.attributes
  ) {
    return entry.attributes as T;
  }

  return entry as T;
}

function unwrapCollection<T>(entries: unknown): T[] {
  if (!Array.isArray(entries)) {
    return [];
  }

  return entries.map((entry) => unwrapEntry<T>(entry));
}

function decodeHtmlEntities(value: string) {
  return value
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&uuml;/g, "ü")
    .replace(/&ouml;/g, "ö")
    .replace(/&auml;/g, "ä")
    .replace(/&Uuml;/g, "Ü")
    .replace(/&Ouml;/g, "Ö")
    .replace(/&Auml;/g, "Ä")
    .replace(/&szlig;/g, "ß");
}

function toPlainText(html: string) {
  return decodeHtmlEntities(
    html
      .replace(/<script[\s\S]*?<\/script>/gi, "")
      .replace(/<style[\s\S]*?<\/style>/gi, "")
      .replace(/<[^>]+>/g, "\n"),
  )
    .split("\n")
    .map((line) => line.replace(/\s+/g, " ").trim())
    .filter(Boolean);
}

function formatGermanDateLabel(value: string) {
  const parsedDate = new Date(value);

  if (Number.isNaN(parsedDate.getTime())) {
    return undefined;
  }

  return `Stand: ${new Intl.DateTimeFormat("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(parsedDate)}`;
}

function normalizeRatingLabel(rawValue: string) {
  const trimmed = rawValue.replace(/\s+/g, " ").trim();
  const match = trimmed.match(/(\d+(?:[.,]\d+)?)\s*\/\s*5/);

  if (!match) {
    return trimmed;
  }

  const numeric = match[1].replace(",", ".");
  const rating = Number(numeric);

  if (Number.isNaN(rating)) {
    return trimmed;
  }

  return `${rating.toFixed(1).replace(".", ",")} / 5`;
}

function extractReviewSummary(lines: string[], fallback: ReviewSummary) {
  const ratingLine = lines.find((line) => /\d+(?:[.,]\d+)?\s*\/\s*5/.test(line));
  const totalReviewsLine = lines.find((line) =>
    /Gesamtbewertungen[:\s]+\d+/i.test(line),
  );
  const recentReviewsLine = lines.find((line) =>
    /Schnitt ermittelt aus \d+ Bewertungen/i.test(line),
  );
  const awardLine = lines.find((line) =>
    /Ausgezeichnet durch das eKomi Siegel/i.test(line),
  );
  const updatedLine = lines.find((line) =>
    /Letzte Aktualisierung\s+\d{4}-\d{2}-\d{2}T/i.test(line),
  );

  const totalReviewsMatch = totalReviewsLine?.match(/Gesamtbewertungen[:\s]+(\d+)/i);
  const recentReviewsMatch = recentReviewsLine?.match(
    /Schnitt ermittelt aus (\d+) Bewertungen \(([^)]+)\)/i,
  );
  const awardMatch = awardLine?.match(/Siegel\s+([A-Za-zÄÖÜäöüß]+)!?/i);
  const updatedMatch = updatedLine?.match(
    /Letzte Aktualisierung\s+(\d{4}-\d{2}-\d{2}T[^ ]+)/i,
  );

  return {
    ...fallback,
    ratingLabel: ratingLine
      ? normalizeRatingLabel(ratingLine)
      : fallback.ratingLabel,
    totalReviews: totalReviewsMatch
      ? Number(totalReviewsMatch[1])
      : fallback.totalReviews,
    recentReviews: recentReviewsMatch
      ? Number(recentReviewsMatch[1])
      : fallback.recentReviews,
    recentWindow: recentReviewsMatch?.[2] ?? fallback.recentWindow,
    award: awardMatch ? `${awardMatch[1]}-Siegel` : fallback.award,
    updatedLabel:
      (updatedMatch ? formatGermanDateLabel(updatedMatch[1]) : undefined) ??
      fallback.updatedLabel,
  };
}

async function fetchEkomiContent(summaryFallback: ReviewSummary) {
  const response = await fetch(summaryFallback.sourceUrl, {
    next: {
      revalidate: 21600,
      tags: ["trust", "ekomi"],
    },
  });

  if (!response.ok) {
    throw new Error(`eKomi request failed: ${response.status}`);
  }

  const html = await response.text();
  const lines = toPlainText(html);

  return {
    reviewSummary: extractReviewSummary(lines, summaryFallback),
  };
}

async function enrichWithEkomi(baseContent: SiteContent): Promise<SiteContent> {
  try {
    const ekomiContent = await fetchEkomiContent(baseContent.homePage.reviewSummary);

    return {
      ...baseContent,
      homePage: {
        ...baseContent.homePage,
        reviewSummary: ekomiContent.reviewSummary,
      },
    };
  } catch (error) {
    console.error("Falling back to local eKomi content.", error);
    return baseContent;
  }
}

async function fetchStrapi<T>(path: string, tag: string): Promise<T> {
  if (!STRAPI_URL) {
    throw new Error("STRAPI_URL is not configured.");
  }

  const response = await fetch(`${STRAPI_URL}/api/${path}`, {
    headers: withAuthHeaders(),
    next: {
      revalidate: 3600,
      tags: [tag, "cms"],
    },
  });

  if (!response.ok) {
    throw new Error(`Strapi request failed for ${path}: ${response.status}`);
  }

  return response.json() as Promise<T>;
}

async function getStrapiContent(): Promise<SiteContent> {
  const [
    siteSettingsResponse,
    homePageResponse,
    servicesResponse,
    teamMembersResponse,
    testimonialsResponse,
    faqsResponse,
    legalPagesResponse,
  ] = await Promise.all([
    fetchStrapi<StrapiResponse<Partial<SiteSettings>>>(
      "site-setting?populate=*",
      "site-settings",
    ),
    fetchStrapi<StrapiResponse<Partial<SiteContent["homePage"]>>>(
      "home-page?populate=*",
      "home-page",
    ),
    fetchStrapi<StrapiResponse<Partial<Service>[]>>(
      "services?populate=*&sort[0]=title:asc",
      "services",
    ),
    fetchStrapi<StrapiResponse<SiteContent["teamMembers"][number][]>>(
      "team-members?populate=*&sort[0]=name:asc",
      "team-members",
    ),
    fetchStrapi<StrapiResponse<SiteContent["testimonials"][number][]>>(
      "testimonials?populate=*&sort[0]=id:asc",
      "testimonials",
    ),
    fetchStrapi<StrapiResponse<FaqItem[]>>(
      "faq-items?populate=*&sort[0]=category:asc",
      "faq-items",
    ),
    fetchStrapi<StrapiResponse<LegalPage[]>>(
      "legal-pages?populate=*&sort[0]=title:asc",
      "legal-pages",
    ),
  ]);

  return {
    siteSettings: normalizeSiteSettings({
      ...fallbackSiteContent.siteSettings,
      ...unwrapEntry<Partial<SiteSettings>>(siteSettingsResponse.data),
    }),
    homePage: {
      ...fallbackSiteContent.homePage,
      ...unwrapEntry<Partial<SiteContent["homePage"]>>(homePageResponse.data),
    },
    services: (() => {
      const services = unwrapCollection<Partial<Service>>(servicesResponse.data);
      return services.length > 0
        ? services.map((service) => ({
            ...fallbackSiteContent.services.find(
              (fallbackService) => fallbackService.slug === service.slug,
            ),
            ...service,
          })) as Service[]
        : fallbackSiteContent.services;
    })(),
    teamMembers: (() => {
      const teamMembers = unwrapCollection<SiteContent["teamMembers"][number]>(
        teamMembersResponse.data,
      );
      return teamMembers.length > 0
        ? teamMembers
        : fallbackSiteContent.teamMembers;
    })(),
    testimonials: (() => {
      const testimonials = unwrapCollection<
        SiteContent["testimonials"][number]
      >(testimonialsResponse.data);
      return testimonials.length > 0
        ? testimonials
        : fallbackSiteContent.testimonials;
    })(),
    faqs: (() => {
      const faqs = unwrapCollection<FaqItem>(faqsResponse.data);
      return faqs.length > 0 ? faqs : fallbackSiteContent.faqs;
    })(),
    legalPages: (() => {
      const legalPages = unwrapCollection<LegalPage>(legalPagesResponse.data);
      return legalPages.length > 0
        ? legalPages
        : fallbackSiteContent.legalPages;
    })(),
  };
}

export const getSiteContent = cache(async (): Promise<SiteContent> => {
  if (!STRAPI_URL) {
    return enrichWithEkomi({
      ...fallbackSiteContent,
      siteSettings: normalizeSiteSettings(fallbackSiteContent.siteSettings),
    });
  }

  try {
    const strapiContent = await getStrapiContent();
    return enrichWithEkomi(strapiContent);
  } catch (error) {
    console.error("Falling back to local content because Strapi is unavailable.", error);
    return enrichWithEkomi({
      ...fallbackSiteContent,
      siteSettings: normalizeSiteSettings(fallbackSiteContent.siteSettings),
    });
  }
});

export async function getServiceBySlug(slug: string) {
  const { services } = await getSiteContent();
  return services.find((service) => service.slug === slug) ?? null;
}

export async function getFaqsBySlugs(slugs: string[]) {
  const { faqs } = await getSiteContent();
  return faqs.filter((faq) => slugs.includes(faq.slug));
}

export async function getLegalPage(slug: string) {
  const { legalPages } = await getSiteContent();
  return legalPages.find((page) => page.slug === slug) ?? null;
}
