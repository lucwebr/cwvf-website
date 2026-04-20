import Image from "next/image";
import type { Metadata } from "next";
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
      <section className="bg-[#f6f0e6] px-6 pb-16 pt-16 md:px-10 md:pb-20 md:pt-20">
        <ScrollReveal className="mx-auto max-w-[88rem]" delay={30}>
          <div className="grid gap-8 lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-12">
            <div className="pt-3">
              <div className="h-px w-6 bg-brand-accent" />
              <p className="text-[0.76rem] font-semibold uppercase tracking-[0.26em] text-brand-accent">
                Über uns
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.96fr)_minmax(0,1.04fr)] lg:items-end lg:gap-10">
              <div>
                <h1 className="max-w-[8.2ch] font-display text-[clamp(3.2rem,5.8vw,5.85rem)] leading-[0.96] tracking-[-0.05em] text-brand-ink">
                  Ein kleines Büro mit festen Ansprechpartnern.
                </h1>
              </div>
              <div className="max-w-2xl lg:max-w-[34rem] lg:justify-self-end">
                <p className="text-[1.02rem] leading-8 text-muted md:text-[1.08rem]">
                  Weber Versicherungs- & Finanzkonzepte verbindet persönliche Beratung mit einem klaren, strukturierten Vorgehen. Wir möchten, dass Entscheidungen verständlich bleiben und nicht im Fachjargon verschwinden.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-5">
                  <a
                    className="inline-flex min-h-12 items-center justify-center bg-brand-ink px-6 py-3 text-[0.9rem] font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-brand-accent"
                    href={siteSettings.primaryCta.href}
                  >
                    Kontakt aufnehmen
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="bg-[#efe6d9] px-6 py-16 md:px-10 md:py-20">
        <ScrollReveal className="mx-auto max-w-[88rem]" delay={45}>
          <div className="grid gap-8 lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-12">
            <div className="pt-3">
              <p className="text-[0.76rem] font-semibold uppercase tracking-[0.26em] text-brand-accent">
                Gesellschaften
              </p>
            </div>

            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.96fr)_minmax(0,1.04fr)] lg:items-start lg:gap-10">
              <div>
                <h2 className="max-w-[11ch] font-display text-[clamp(2.4rem,3.8vw,4rem)] leading-[1.02] tracking-[-0.035em] text-brand-ink">
                  Zwei Gesellschaften, ein gemeinsamer Auftritt.
                </h2>
                <p className="mt-5 max-w-2xl text-[1.02rem] leading-8 text-muted">
                  {siteSettings.brandIntro} Beide Gesellschaften arbeiten unter
                  dem gemeinsamen Dach von Weber Versicherungs- & Finanzkonzepte
                  zusammen und bringen ihre Beratung in einem klaren Auftritt
                  zusammen.
                </p>
              </div>

              <div className="grid w-full max-w-2xl gap-3 lg:max-w-[34rem] lg:justify-self-end">
                <a
                  className="flex min-h-[5.2rem] max-w-[29rem] items-center rounded-[0.95rem] border border-border-soft bg-white px-3 py-2 shadow-[var(--shadow-card-brand)] transition hover:-translate-y-0.5 hover:border-brand-accent/18 hover:shadow-[var(--shadow-card)]"
                  href="https://ig.al/webergmbh/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Image
                    alt="C.Weber GmbH Logo"
                    className="h-auto w-full object-contain object-left"
                    height={371}
                    src="/weber-cw-logo.png"
                    width={1084}
                  />
                </a>
                <a
                  className="flex min-h-[5.2rem] max-w-[29rem] items-center rounded-[0.95rem] border border-border-soft bg-white px-3 py-2 shadow-[var(--shadow-card-brand)] transition hover:-translate-y-0.5 hover:border-brand-accent/18 hover:shadow-[var(--shadow-card)]"
                  href="https://ig.al/weber/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Image
                    alt="Lambert & Weber oHG Logo"
                    className="h-auto w-full object-contain object-left"
                    height={370}
                    src="/weber-lw-logo.png"
                    width={1084}
                  />
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="bg-[#dddccf] px-6 py-16 md:px-10 md:py-20">
        <ScrollReveal className="mx-auto max-w-[88rem]" delay={55}>
          <div className="grid gap-8 lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-12">
            <div className="pt-3">
              <p className="text-[0.76rem] font-semibold uppercase tracking-[0.26em] text-brand-accent">
                Arbeitsweise
              </p>
            </div>

            <div className="grid gap-10 lg:grid-cols-[minmax(19rem,34rem)_minmax(0,1fr)] lg:gap-16 xl:grid-cols-[minmax(22rem,38rem)_minmax(0,1fr)]">
              <div>
                <h2 className="max-w-[8ch] text-balance font-display text-[clamp(2.8rem,4.8vw,4.8rem)] leading-[0.98] tracking-[-0.04em] text-brand-ink">
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

      <section className="bg-[#e4ebf1] px-6 py-16 md:px-10 md:py-20">
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
