import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ScrollReveal } from "@/components/scroll-reveal";
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
            label: "Kontakt aufnehmen",
            variant: "primary",
          },
        ]}
        eyebrow="Über uns"
        intro="Weber Versicherungs- & Finanzkonzepte verbindet persönliche Beratung mit einem klaren, strukturierten Vorgehen. Wir möchten, dass Entscheidungen verständlich bleiben und nicht im Fachjargon verschwinden."
        title="Ein kleines Büro mit festen Ansprechpartnern und ruhiger Arbeitsweise."
      />

      <section className="border-y border-border-soft bg-[#efe6d9] px-6 py-16 md:px-10 md:py-20">
        <ScrollReveal className="mx-auto max-w-[88rem]" delay={40}>
          <div className="grid gap-8 lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-12">
            <div className="pt-3">
              <p className="text-[0.76rem] font-semibold uppercase tracking-[0.26em] text-brand-accent">
                Arbeitsweise
              </p>
            </div>

            <div className="grid gap-10 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-16">
              <div>
                <h2 className="font-display text-[clamp(2.8rem,4.8vw,4.8rem)] leading-[0.98] tracking-[-0.04em] text-brand-ink">
                  Beratung ohne künstliche Dringlichkeit.
                </h2>
              </div>

              <div className="border-t border-border-soft">
                {homePage.advisoryPrinciples.map((principle) => (
                  <div
                    key={principle}
                    className="grid gap-5 border-b border-border-soft py-7 lg:grid-cols-[24px_minmax(0,1fr)]"
                  >
                    <span className="text-muted">-</span>
                    <p className="text-[1.02rem] leading-8 text-brand-ink">
                      {principle}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="px-6 py-16 md:px-10 md:py-20">
        <ScrollReveal className="mx-auto max-w-[88rem]" delay={70}>
          <div className="grid gap-8 lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-12">
            <div className="pt-3">
              <p className="text-[0.76rem] font-semibold uppercase tracking-[0.26em] text-brand-accent">
                Team
              </p>
            </div>

            <div className="border-t border-border-soft">
              {teamMembers.map((member) => (
                <article
                  key={member.name}
                  className="grid gap-8 border-b border-border-soft py-8 lg:grid-cols-[180px_minmax(0,260px)_minmax(0,1fr)] lg:items-center"
                >
                  <p className="text-[0.76rem] font-semibold uppercase tracking-[0.24em] text-brand-accent">
                    {member.role}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center bg-brand-ink text-sm font-semibold uppercase tracking-[0.08em] text-white">
                      {member.initials}
                    </div>
                    <h2 className="font-display text-[2.25rem] leading-none tracking-[-0.02em] text-brand-ink">
                      {member.name}
                    </h2>
                  </div>
                  <p className="max-w-3xl text-[1rem] leading-8 text-muted">
                    {member.bio}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
