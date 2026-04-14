import type { Metadata } from "next";
import type { FaqItem, SeoConfig, SiteSettings } from "@/lib/content/types";

const DEFAULT_SITE_URL = "http://localhost:3000";

export function absoluteUrl(path: string) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL;
  return new URL(path, baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`);
}

export function buildMetadata(
  seo: SeoConfig,
  settings: SiteSettings,
): Metadata {
  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: seo.path,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: seo.path,
      siteName: settings.companyName,
      locale: "de_DE",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
    },
  };
}

export function getOrganizationJsonLd(settings: SiteSettings) {
  return {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: settings.companyName,
    description: settings.tagline,
    email: settings.email,
    telephone: settings.phoneDisplay,
    address: {
      "@type": "PostalAddress",
      streetAddress: settings.addressLines[0],
      postalCode: settings.addressLines[1]?.split(" ")[0] ?? "",
      addressLocality: settings.addressLines[1]?.split(" ").slice(1).join(" ") ?? "",
      addressCountry: "DE",
    },
    url: absoluteUrl("/").toString(),
  };
}

export function getFaqJsonLd(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
