import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
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
  const routeUrl =
    "https://www.google.com/maps/search/?api=1&query=Goethestra%C3%9Fe%209-11%2C%2066292%20Riegelsberg";

  return (
    <>
      <StructuredData value={getOrganizationJsonLd(siteSettings)} />

      <PageHero
        eyebrow="Kontakt"
        intro="Ob Erstgespräch, Vertragscheck oder eine neue Priorisierung Ihrer Finanzthemen: Wir starten mit einem ruhigen Überblick und einer klaren Rückmeldung."
        title="Direkt erreichbar per Telefon, E-Mail oder vorbereitetem Kontaktwunsch"
        variant="plain"
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

        <div className="mx-auto mt-8 grid max-w-[88rem] gap-8 overflow-hidden rounded-[2rem] border border-border-soft bg-white/78 shadow-[var(--shadow-card)] backdrop-blur lg:grid-cols-[0.95fr_1.05fr]">
          <div className="p-6 md:p-8">
            <SectionHeading
              eyebrow="Standort"
              title="Persönlich vor Ort in Riegelsberg"
              body="Unser Büro finden Sie in der Goethestraße 9-11. Beratung vor Ort erfolgt nach Vereinbarung, damit wir uns bewusst Zeit für Ihr Anliegen nehmen können."
            />
            <div className="mt-8 grid gap-4 text-sm leading-7 text-brand-ink sm:grid-cols-2">
              <div className="rounded-[1.35rem] border border-border-soft bg-surface/78 px-5 py-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
                  Adresse
                </p>
                <p className="mt-3 font-semibold">
                  {siteSettings.addressLines[0]}
                  <br />
                  {siteSettings.addressLines[1]}
                </p>
              </div>
              <div className="rounded-[1.35rem] border border-border-soft bg-surface/78 px-5 py-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
                  Vor Ort
                </p>
                <p className="mt-3">
                  Termine im Büro sind nach persönlicher Absprache möglich.
                </p>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={routeUrl}>Route planen</ButtonLink>
              <ButtonLink href={`tel:${siteSettings.phone}`} variant="secondary">
                Vorher anrufen
              </ButtonLink>
            </div>
          </div>

          <div
            aria-label="Abstrakte Standortkarte für Riegelsberg"
            className="relative min-h-[22rem] overflow-hidden bg-surface-strong"
          >
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(16,32,51,0.08)_1px,transparent_1px),linear-gradient(45deg,rgba(47,93,115,0.08)_1px,transparent_1px)] bg-[size:34px_34px]" />
            <div className="absolute left-[10%] top-[22%] h-4 w-[82%] rotate-[-8deg] rounded-full bg-white/80 shadow-[var(--shadow-pill)]" />
            <div className="absolute left-[18%] top-[56%] h-4 w-[74%] rotate-[9deg] rounded-full bg-white/80 shadow-[var(--shadow-pill)]" />
            <div className="absolute left-[46%] top-[8%] h-[82%] w-4 rotate-[4deg] rounded-full bg-white/80 shadow-[var(--shadow-pill)]" />
            <div className="absolute inset-x-8 bottom-8 rounded-[1.4rem] border border-border-soft bg-white/86 p-5 shadow-[var(--shadow-card-soft)] backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
                Weber Versicherungs- & Finanzkonzepte
              </p>
              <p className="mt-2 text-lg font-semibold text-brand-ink">
                Goethestraße 9-11
              </p>
              <p className="text-sm text-muted">66292 Riegelsberg</p>
            </div>
            <div className="absolute left-1/2 top-[42%] flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand-ink text-white shadow-[var(--shadow-panel)]">
              <span className="h-5 w-5 rounded-full bg-brand-highlight" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
