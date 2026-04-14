import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
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

  return (
    <>
      <StructuredData value={getOrganizationJsonLd(siteSettings)} />

      <PageHero
        eyebrow="Kontakt"
        intro="Ob Erstgespräch, Vertragscheck oder eine neue Priorisierung Ihrer Finanzthemen: Wir starten mit einem ruhigen Überblick und einer klaren Rückmeldung."
        title="Direkt erreichbar per Telefon, E-Mail oder vorbereitetem Kontaktwunsch"
      />

      <section className="px-6 py-8 md:px-10 md:pb-20">
        <div className="mx-auto grid max-w-[88rem] gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <aside className="rounded-[1.85rem] border border-border-soft bg-brand-ink p-6 text-white shadow-[var(--shadow-panel)] md:p-8">
            <SectionHeading
              eyebrow="Schnellster Weg"
              title="Wir melden uns persönlich zurück."
              body="Der MVP setzt bewusst auf direkte Kontaktwege. So bleibt der Einstieg einfach und glaubwürdig, bis die Formularanbindung live geschaltet wird."
              tone="inverse"
            />

            <div className="mt-8 space-y-5">
              <div className="rounded-[1.4rem] border border-white/10 bg-white/7 px-5 py-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-highlight">
                  Telefon
                </p>
                <a
                  className="mt-2 block text-2xl font-semibold text-white hover:text-brand-highlight"
                  href={`tel:${siteSettings.phone}`}
                >
                  {siteSettings.phoneDisplay}
                </a>
              </div>
              <div className="rounded-[1.4rem] border border-white/10 bg-white/7 px-5 py-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-highlight">
                  E-Mail
                </p>
                <a
                  className="mt-2 block text-base text-white hover:text-brand-highlight"
                  href={`mailto:${siteSettings.email}`}
                >
                  {siteSettings.email}
                </a>
              </div>
              <div className="rounded-[1.4rem] border border-white/10 bg-white/7 px-5 py-5 text-sm leading-7 text-white/82">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-highlight">
                  Büro und Zeiten
                </p>
                <p className="mt-2">{siteSettings.addressLines.join(", ")}</p>
                <ul className="mt-3 space-y-1">
                  {siteSettings.openingHours.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
