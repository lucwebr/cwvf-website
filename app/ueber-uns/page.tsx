import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { getSiteContent } from "@/lib/content";
import { buildMetadata } from "@/lib/content/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const { siteSettings } = await getSiteContent();
  return buildMetadata(
    {
      title: "Über uns",
      description:
        "Lernen Sie das Team und den Beratungsansatz von Weber Versicherungs- & Finanzkonzepte kennen.",
      path: "/ueber-uns",
    },
    siteSettings,
  );
}

export default async function AboutPage() {
  const { teamMembers, homePage, siteSettings } = await getSiteContent();

  return (
    <>
      <PageHero
        actions={[
          {
            href: siteSettings.primaryCta.href,
            label: siteSettings.primaryCta.label,
            variant: "primary",
          },
        ]}
        eyebrow="Über uns"
        intro="Weber Versicherungs- & Finanzkonzepte verbindet persönliche Beratung mit einem klaren, strukturierten Vorgehen. Wir möchten, dass Entscheidungen verständlich bleiben und nicht im Fachjargon verschwinden."
        title="Ein kleines Büro mit festen Ansprechpartnern und ruhiger Arbeitsweise."
      />

      <section className="px-6 py-8 md:px-10">
        <div className="mx-auto grid max-w-[88rem] gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[1.85rem] border border-border-soft bg-white/78 p-6 shadow-[var(--shadow-card)] backdrop-blur md:p-8">
            <SectionHeading
              eyebrow="Arbeitsweise"
              title="Beratung ohne künstliche Dringlichkeit"
              body="Wir glauben an nachvollziehbare Prioritäten und saubere Kommunikation. Gerade bei Versicherung, Vorsorge und Vermögensaufbau entsteht Vertrauen selten durch Tempo, sondern durch Klarheit."
            />
            <ul className="mt-8 space-y-4 text-sm leading-7 text-brand-ink">
              {homePage.advisoryPrinciples.map((principle) => (
                <li
                  key={principle}
                  className="rounded-[1.35rem] border border-border-soft bg-surface/78 px-4 py-4"
                >
                  {principle}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[1.85rem] border border-border-soft bg-brand-ink p-6 text-white shadow-[var(--shadow-panel)] md:p-8">
            <SectionHeading
              eyebrow="Was Mandanten erwarten dürfen"
              title="Klare Antworten, feste Rückmeldung, langfristiger Blick"
              body="Wir arbeiten auf Augenhöhe, erläutern Entscheidungen verständlich und behalten auch nach dem ersten Abschluss die Entwicklung Ihrer Lebenssituation im Blick."
              tone="inverse"
            />
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                "Fester Ansprechpartner über mehrere Themen hinweg",
                "Unterlagen und Empfehlungen sauber dokumentiert",
                "Digitale Termine als gleichwertiger Beratungsweg",
                "Anpassungen bei Familien-, Berufs- oder Wohnsituationen",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[1.35rem] border border-white/10 bg-white/6 px-4 py-4 text-sm leading-7 text-white/82"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-10 md:px-10 md:pb-20">
        <div className="mx-auto max-w-[88rem]">
          <SectionHeading
            eyebrow="Team"
            title="Die Menschen hinter Weber"
            body="Die Teamprofile sind im Frontend bereits an die CMS-Struktur gekoppelt und können später direkt redaktionell gepflegt werden."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {teamMembers.map((member) => (
              <article
                key={member.name}
                className="min-h-[23rem] rounded-[1.75rem] border border-border-soft bg-white/78 p-6 shadow-[var(--shadow-card)] backdrop-blur md:p-7"
              >
                <div className="flex items-start gap-4">
                  {member.imageSrc ? (
                    <div className="relative h-28 w-28 overflow-hidden rounded-[1.55rem] shadow-[var(--shadow-card-soft)]">
                      <Image
                        alt={`Porträt von ${member.name}`}
                        className="object-cover"
                        fill
                        sizes="112px"
                        src={member.imageSrc}
                      />
                    </div>
                  ) : (
                    <div className="flex h-28 w-28 items-center justify-center rounded-[1.55rem] bg-brand-accent text-3xl font-semibold text-white shadow-[var(--shadow-card-soft)]">
                      {member.initials}
                    </div>
                  )}
                  <div>
                    <h2 className="font-display text-3xl text-brand-ink">
                      {member.name}
                    </h2>
                    <p className="mt-3 inline-flex rounded-full border border-brand-ink/12 bg-brand-ink px-4 py-2 text-sm font-semibold tracking-[0.04em] text-white shadow-[var(--shadow-pill-strong)]">
                      {member.role}
                    </p>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-7 text-muted">{member.bio}</p>
                {member.focusAreas.length > 0 ? (
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {member.focusAreas.map((area) => (
                      <li
                        key={area}
                        className="rounded-full border border-border-soft bg-surface/78 px-3 py-2 text-xs font-medium uppercase tracking-[0.12em] text-brand-ink"
                      >
                        {area}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
