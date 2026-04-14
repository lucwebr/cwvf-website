import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { getSiteContent } from "@/lib/content";
import { buildMetadata } from "@/lib/content/metadata";
import { ButtonLink } from "@/components/button-link";

export async function generateMetadata(): Promise<Metadata> {
  const { siteSettings } = await getSiteContent();
  return buildMetadata(
    {
      title: "Leistungen",
      description:
        "Überblick über Versicherungsanalyse, Vorsorgeplanung und Vermögensaufbau für Privatkunden.",
      path: "/leistungen",
    },
    siteSettings,
  );
}

export default async function ServicesPage() {
  const { services, homePage, siteSettings } = await getSiteContent();

  return (
    <>
      <PageHero
        actions={[siteSettings.primaryCta]}
        eyebrow="Leistungen"
        intro="Unsere Beratung bündelt drei Themenfelder, die sich im Alltag gegenseitig beeinflussen: Schutz, Zukunftsplanung und langfristiger Vermögensaufbau."
        title="Versicherung, Vorsorge und Vermögensaufbau greifen ineinander."
      />

      <section className="px-6 py-8 md:px-10">
        <div className="mx-auto max-w-[88rem]">
          <SectionHeading
            eyebrow="Beratungsschwerpunkte"
            title="Drei Säulen für eine stabile Finanz- und Risikoarchitektur"
            body="Die einzelnen Themen können separat starten, entfalten aber ihre größte Wirkung, wenn sie zusammen betrachtet und priorisiert werden."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.slug}
                className="rounded-[1.75rem] border border-border-soft bg-white/82 p-6 shadow-[var(--shadow-card-soft)] backdrop-blur"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-accent">
                  {service.kicker}
                </p>
                <h2 className="mt-4 font-display text-3xl text-brand-ink">
                  {service.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-muted">
                  {service.summary}
                </p>
                <div className="mt-6 rounded-[1.4rem] border border-border-soft bg-surface/78 px-4 py-4 text-sm leading-7 text-brand-ink">
                  {service.audience}
                </div>
                <ul className="mt-6 space-y-3 text-sm leading-7 text-brand-ink">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-3">
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-brand-highlight" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <ButtonLink
                  className="mt-8"
                  href={`/leistungen/${service.slug}`}
                  variant="secondary"
                >
                  Detailseite öffnen
                </ButtonLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-4 md:px-10 md:py-8">
        <div className="mx-auto max-w-[88rem] rounded-[2rem] border border-border-soft bg-white/82 p-6 shadow-[var(--shadow-card)] backdrop-blur md:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.98fr_1.02fr] lg:items-start">
            <div>
              <SectionHeading
                eyebrow="Versichererzugang"
                title="Breiter Zugriff auf eine große Auswahl an Versicherungsgesellschaften"
                body="Über IGAL und den Partner vfm Service steht uns eine sehr breite Produktpalette offen. Damit können wir je nach Bedarf passende Lösungen aus vielen Gesellschaften gegenüberstellen und nicht nur auf einzelne Anbieter zurückgreifen."
              />

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {[
                  "Mehr als 100 Versicherungsgesellschaften im Zugriff",
                  "Premiumpartner wie Alte Leipziger, Hallesche und Itzehoer",
                  "Zusätzliche Produktauswahl über den Partner vfm Service",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.4rem] border border-border-soft bg-surface/78 px-4 py-4 text-sm leading-7 text-brand-ink"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <ButtonLink href="/partner/pp-plakat-igal.pdf" variant="secondary">
                  Plakat als PDF öffnen
                </ButtonLink>
                <ButtonLink href="/#kontakt">Kontakt aufnehmen</ButtonLink>
              </div>
            </div>

            <a
              className="block overflow-hidden rounded-[1.75rem] border border-border-soft bg-surface shadow-[var(--shadow-card-soft)]"
              href="/partner/pp-plakat-igal.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                alt="Partnerplakat mit Auswahl an Versicherungsgesellschaften über IGAL und vfm"
                className="h-auto w-full"
                height={2000}
                priority={false}
                src="/partner/pp-plakat-igal.png"
                width={1414}
              />
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 py-10 md:px-10 md:pb-20">
        <div className="mx-auto max-w-[88rem] rounded-[2rem] border border-border-soft bg-brand-ink px-6 py-8 text-white shadow-[var(--shadow-panel)] md:px-8">
          <SectionHeading
            eyebrow="Zusammenarbeit"
            title="Der gleiche Beratungsrahmen trägt über alle Themen hinweg."
            body="Unabhängig vom Einstiegspunkt bleiben Übersicht, Priorisierung und nachvollziehbare Empfehlungen der gemeinsame Standard."
            tone="inverse"
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {homePage.processSteps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-[1.5rem] border border-white/10 bg-white/6 px-5 py-5"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-highlight">
                  Schritt {index + 1}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/80">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
