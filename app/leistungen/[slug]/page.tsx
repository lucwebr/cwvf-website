import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/button-link";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { StructuredData } from "@/components/structured-data";
import { getFaqsBySlugs, getServiceBySlug, getSiteContent } from "@/lib/content";
import { buildMetadata, getFaqJsonLd } from "@/lib/content/metadata";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const { services } = await getSiteContent();
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  const { siteSettings } = await getSiteContent();

  if (!service) {
    return buildMetadata(
      {
        title: "Leistung nicht gefunden",
        description: "Die angeforderte Leistungsseite konnte nicht gefunden werden.",
        path: `/leistungen/${slug}`,
      },
      siteSettings,
    );
  }

  return buildMetadata(service.seo, siteSettings);
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  const { siteSettings } = await getSiteContent();

  if (!service) {
    notFound();
  }

  const faqs = await getFaqsBySlugs(service.faqSlugs);

  return (
    <>
      <StructuredData value={getFaqJsonLd(faqs)} />

      <PageHero
        actions={[
          {
            href: "/#kontakt",
            label: "Beratung anfragen",
            variant: "primary",
          },
          {
            href: "/leistungen",
            label: "Zur Leistungsübersicht",
            variant: "secondary",
          },
        ]}
        eyebrow={service.shortTitle}
        intro={service.heroText}
        title={service.title}
      />

      <section className="px-6 py-8 md:px-10">
        <div className="mx-auto grid max-w-[88rem] gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="rounded-[1.85rem] border border-border-soft bg-white/78 p-6 shadow-[var(--shadow-card)] backdrop-blur md:p-8">
            <SectionHeading
              eyebrow="Worum es geht"
              title={service.kicker}
              body={service.audience}
            />
            <ul className="mt-8 space-y-4 text-sm leading-7 text-brand-ink">
              {service.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="rounded-[1.35rem] border border-border-soft bg-surface/78 px-4 py-4"
                >
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <aside className="rounded-[1.85rem] border border-border-soft bg-brand-ink p-6 text-white shadow-[var(--shadow-panel)] md:p-8">
            <SectionHeading
              eyebrow="Ihr Nutzen"
              title="Was Sie aus der Beratung mitnehmen"
              tone="inverse"
            />
            <ul className="mt-8 space-y-4 text-sm leading-7 text-white/82">
              {service.benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="rounded-[1.35rem] border border-white/10 bg-white/6 px-4 py-4"
                >
                  {benefit}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="px-6 py-10 md:px-10">
        <div className="mx-auto max-w-[88rem] rounded-[2rem] border border-border-soft bg-white/78 px-6 py-8 shadow-[var(--shadow-card)] backdrop-blur md:px-8">
          <SectionHeading
            eyebrow="Vorgehen"
            title="So strukturieren wir das Thema gemeinsam"
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {service.process.map((step, index) => (
              <div
                key={step}
                className="rounded-[1.5rem] border border-border-soft bg-surface/78 px-5 py-5"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-accent">
                  Schritt {index + 1}
                </p>
                <p className="mt-3 text-sm leading-7 text-brand-ink">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-10 md:px-10 md:pb-20">
        <div className="mx-auto grid max-w-[88rem] gap-8 lg:grid-cols-[0.96fr_1.04fr]">
          <div className="rounded-[1.85rem] border border-border-soft bg-white/78 p-6 shadow-[var(--shadow-card)] backdrop-blur md:p-8">
            <SectionHeading
              eyebrow="Häufige Fragen"
              title={`Fragen zu ${service.shortTitle}`}
            />
            <div className="mt-8 space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.slug}
                  className="rounded-[1.4rem] border border-border-soft bg-surface/78 px-4 py-4"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-brand-ink">
                    {faq.question}
                    <span className="text-brand-accent">+</span>
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-muted">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>

          <aside className="rounded-[1.85rem] border border-border-soft bg-surface/82 p-6 shadow-[var(--shadow-card)] backdrop-blur md:p-8">
            <SectionHeading
              eyebrow="Nächster Schritt"
              title="Lieber direkt persönlich sprechen?"
              body="Wenn Sie wissen möchten, wie das Thema in Ihre aktuelle Lebenssituation passt, starten wir mit einem ruhigen Erstgespräch."
            />
            <div className="mt-8 space-y-4 text-sm leading-7 text-brand-ink">
              <p>
                Telefon:{" "}
                <a className="font-semibold" href={`tel:${siteSettings.phone}`}>
                  {siteSettings.phoneDisplay}
                </a>
              </p>
              <p>
                E-Mail:{" "}
                <a className="font-semibold" href={`mailto:${siteSettings.email}`}>
                  {siteSettings.email}
                </a>
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/#kontakt">Zum Kontaktabschnitt</ButtonLink>
              <ButtonLink href="/faq" variant="ghost">
                Allgemeine FAQ
              </ButtonLink>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
