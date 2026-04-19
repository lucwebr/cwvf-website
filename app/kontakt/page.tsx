import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { ScrollReveal } from "@/components/scroll-reveal";
import { StructuredData } from "@/components/structured-data";
import { getSiteContent } from "@/lib/content";
import {
  buildMetadata,
  getOrganizationJsonLd,
} from "@/lib/content/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const { siteSettings } = await getSiteContent();
  return buildMetadata(
    {
      title: "Kontakt",
      description:
        "Kontaktseite von Weber Versicherungs- & Finanzkonzepte mit direktem Telefon-, E-Mail- und Kontaktwunsch.",
      path: "/kontakt",
    },
    siteSettings,
  );
}

export default async function ContactPage() {
  const { siteSettings } = await getSiteContent();
  const routeUrl =
    "https://www.google.com/maps/search/?api=1&query=Goethestra%C3%9Fe%209-11%2C%2066292%20Riegelsberg";

  return (
    <>
      <StructuredData value={getOrganizationJsonLd(siteSettings)} />

      <PageHero
        eyebrow="Kontakt"
        intro="Ob Erstgespräch, Vertragscheck oder eine neue Priorisierung Ihrer Finanzthemen: Wir starten mit einem ruhigen Überblick und einer klaren Rückmeldung."
        title="Direkt erreichbar per Telefon, E-Mail oder vorbereiteter Anfrage."
        variant="plain"
      />

      <section className="bg-[#e9eff4] px-6 py-16 md:px-10 md:py-20">
        <ScrollReveal className="mx-auto max-w-[88rem]" delay={40}>
          <div className="grid gap-10 lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-12">
            <div className="pt-3">
              <p className="text-[0.76rem] font-semibold uppercase tracking-[0.26em] text-brand-accent">
                Kontakt
              </p>
            </div>

            <div className="grid gap-12 xl:grid-cols-[minmax(0,0.48fr)_minmax(0,0.52fr)] xl:gap-18">
              <div>
                <h2 className="max-w-3xl font-display text-[clamp(3rem,5vw,4.8rem)] leading-[1] tracking-[-0.045em] text-brand-ink">
                  Ein Gespräch ist oft der beste nächste Schritt.
                </h2>
                <p className="mt-6 max-w-2xl text-[1.02rem] leading-8 text-muted">
                  Wenn Sie Ordnung in Versicherungen, Vorsorge oder
                  Vermögensaufbau bringen möchten, starten wir mit einem ruhigen
                  Überblick und einer klaren Priorisierung.
                </p>

                <div className="mt-12 space-y-7">
                  <div>
                    <p className="text-[0.76rem] font-semibold uppercase tracking-[0.24em] text-brand-accent">
                      Telefon
                    </p>
                    <a
                      className="mt-3 block text-5xl font-display leading-none text-brand-ink hover:text-brand-accent"
                      href={`tel:${siteSettings.phone}`}
                    >
                      {siteSettings.phoneDisplay}
                    </a>
                  </div>

                  <div>
                    <p className="text-[0.76rem] font-semibold uppercase tracking-[0.24em] text-brand-accent">
                      E-Mail
                    </p>
                    <a
                      className="mt-3 block text-[1.1rem] leading-8 text-brand-ink hover:text-brand-accent"
                      href={`mailto:${siteSettings.email}`}
                    >
                      {siteSettings.email}
                    </a>
                  </div>

                  <div>
                    <p className="text-[0.76rem] font-semibold uppercase tracking-[0.24em] text-brand-accent">
                      Büro
                    </p>
                    <p className="mt-3 text-[1.04rem] leading-8 text-brand-ink">
                      {siteSettings.addressLines[0]}
                      <br />
                      {siteSettings.addressLines[1]}
                    </p>
                  </div>

                  <div>
                    <p className="text-[0.76rem] font-semibold uppercase tracking-[0.24em] text-brand-accent">
                      Beratungszeiten
                    </p>
                    <ul className="mt-3 space-y-1 text-[1.02rem] leading-8 text-brand-ink">
                      {siteSettings.openingHours.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2">
                    <ButtonLink href={routeUrl} variant="ghost">
                      Route planen →
                    </ButtonLink>
                  </div>
                </div>
              </div>

              <ContactForm />
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
