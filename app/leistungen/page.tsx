import Image from "next/image";
import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { PageHero } from "@/components/page-hero";
import { ScrollReveal } from "@/components/scroll-reveal";
import { getSiteContent } from "@/lib/content";
import { buildMetadata } from "@/lib/content/metadata";

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
  const { services, siteSettings } = await getSiteContent();

  return (
    <>
      <PageHero
        actions={[
          {
            href: siteSettings.primaryCta.href,
            label: "Kontakt aufnehmen",
            variant: "primary",
          },
        ]}
        eyebrow="Leistungen"
        intro="Unsere Beratung bündelt drei Themenfelder, die sich im Alltag gegenseitig beeinflussen: Schutz, Zukunftsplanung und langfristiger Vermögensaufbau."
        title="Versicherung, Vorsorge und Vermögensaufbau greifen ineinander."
      />

      <section className="border-y border-border-soft bg-[#efe6d9] px-6 py-16 md:px-10 md:py-20">
        <ScrollReveal className="mx-auto max-w-[88rem]" delay={40}>
          <div className="grid gap-8 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-14">
            <div className="pt-3">
              <p className="text-[0.76rem] font-semibold uppercase tracking-[0.26em] text-brand-accent">
                Beratungsschwerpunkte
              </p>
            </div>

            <div>
              <h2 className="max-w-[12ch] font-display text-[clamp(2.7rem,4.5vw,4.55rem)] leading-[1] tracking-[-0.04em] text-brand-ink">
                Drei Säulen für eine stabile Finanz- und Risikoarchitektur.
              </h2>
              <p className="mt-6 max-w-3xl text-[1.04rem] leading-8 text-muted">
                Die einzelnen Themen können separat starten, entfalten aber ihre
                größte Wirkung, wenn sie zusammen betrachtet und priorisiert
                werden.
              </p>

              <div className="mt-14">
                {services.map((service, index) => (
                  <article
                    key={service.slug}
                    className="grid gap-8 border-t border-border-soft py-10 lg:grid-cols-[90px_minmax(0,1fr)_minmax(0,0.88fr)] lg:gap-10"
                  >
                    <p className="pt-2 text-[0.88rem] leading-7 text-muted">
                      {`0${index + 1}`}
                    </p>
                    <div>
                      <p className="text-[0.76rem] font-semibold uppercase tracking-[0.24em] text-brand-accent">
                        {service.kicker}
                      </p>
                      <h3 className="mt-4 font-display text-[clamp(2.2rem,3.2vw,3.3rem)] leading-[1] tracking-[-0.03em] text-brand-ink">
                        {service.title}
                      </h3>
                      <p className="mt-4 max-w-2xl text-[1.02rem] leading-8 text-muted">
                        {service.heroText}
                      </p>
                      <p className="mt-6 max-w-2xl text-[1rem] leading-8 text-brand-ink">
                        {service.audience}
                      </p>
                    </div>

                    <div className="flex h-full flex-col pt-1 text-sm leading-7 text-muted">
                      <div className="grid gap-3">
                      {service.benefits.map((benefit) => (
                        <p key={benefit} className="flex gap-3">
                          <span className="mt-[0.78rem] h-1.5 w-1.5 rounded-full bg-brand-highlight" />
                          <span>{benefit}</span>
                        </p>
                      ))}
                      </div>
                      <div className="mt-auto pt-6">
                        <ButtonLink
                          className="sm:min-w-[13.5rem]"
                          href={`/leistungen/${service.slug}`}
                          variant="secondary"
                        >
                          Detailseite öffnen →
                        </ButtonLink>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="px-6 py-16 md:px-10 md:py-20">
        <ScrollReveal className="mx-auto max-w-[88rem] border-b border-border-soft pb-16" delay={70}>
          <div className="grid gap-10 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-14">
            <div className="pt-3">
              <p className="text-[0.76rem] font-semibold uppercase tracking-[0.26em] text-brand-accent">
                Versichererzugang
              </p>
            </div>

            <div className="grid gap-10 xl:grid-cols-[minmax(0,0.64fr)_minmax(0,1.36fr)] xl:items-start">
              <div className="min-w-0">
                <h2 className="max-w-[12ch] text-balance font-display text-[clamp(2.25rem,3.4vw,3.7rem)] leading-[1.02] tracking-[-0.035em] text-brand-ink">
                  Breiter Zugriff auf eine große Auswahl an Versicherern.
                </h2>
                <p className="mt-6 max-w-2xl text-[1.02rem] leading-8 text-muted">
                  Über IGAL und den Partner vfm Service steht uns eine breite
                  Produktpalette offen. Damit können wir je nach Bedarf passende
                  Lösungen aus vielen Gesellschaften gegenüberstellen.
                </p>
                <div className="mt-8 space-y-4 border-t border-border-soft pt-6 text-sm leading-7 text-muted">
                  {[
                    "Mehr als 100 Versicherungsgesellschaften im Zugriff",
                    "Premiumpartner wie Alte Leipziger, Hallesche und Itzehoer",
                    "Zusätzliche Produktauswahl über den Partner vfm Service",
                  ].map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-5">
                  <ButtonLink href="/partner/pp-plakat-igal.pdf">
                    Plakat als PDF öffnen
                  </ButtonLink>
                  <ButtonLink href="/kontakt" variant="ghost">
                    Kontakt aufnehmen →
                  </ButtonLink>
                </div>
              </div>

              <a
                className="block self-start overflow-hidden border border-border-soft bg-[#f3ede3]"
                href="/partner/pp-plakat-igal.pdf"
                rel="noreferrer"
                target="_blank"
              >
                <Image
                  alt="Partnerplakat mit Auswahl an Versicherungsgesellschaften über IGAL und vfm"
                  className="h-auto w-full"
                  height={2000}
                  src="/partner/pp-plakat-igal.png"
                  width={1414}
                />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>

    </>
  );
}
