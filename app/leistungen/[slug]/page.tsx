import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/button-link";
import { PageHero } from "@/components/page-hero";
import { ScrollReveal } from "@/components/scroll-reveal";
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
            href: "/kontakt",
            label: "Beratung anfragen",
            variant: "primary",
          },
          {
            href: "/leistungen",
            label: "Zur Leistungsübersicht",
            variant: "ghost",
          },
        ]}
        eyebrow={service.shortTitle}
        intro={service.heroText}
        title={service.title}
      />

      <section className="border-y border-border-soft bg-[#efe6d9] px-6 py-16 md:px-10 md:py-20">
        <ScrollReveal className="mx-auto max-w-[88rem]" delay={40}>
          <div className="grid gap-8 lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-12">
            <div className="pt-3">
              <p className="text-[0.76rem] font-semibold uppercase tracking-[0.26em] text-brand-accent">
                Worum es geht
              </p>
            </div>

            <div className="grid gap-10 xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] xl:gap-14">
              <div>
                <h2 className="max-w-[12ch] font-display text-[clamp(2.4rem,3.8vw,4rem)] leading-[1.02] tracking-[-0.035em] text-brand-ink">
                  {service.kicker}
                </h2>
                <p className="mt-6 max-w-2xl text-[1.04rem] leading-8 text-muted">
                  {service.audience}
                </p>
                <div className="mt-8 space-y-4 border-t border-border-soft pt-6 text-sm leading-7 text-muted">
                  {service.highlights.map((highlight) => (
                    <p key={highlight}>{highlight}</p>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[0.76rem] font-semibold uppercase tracking-[0.26em] text-brand-accent">
                  Ihr Nutzen
                </p>
                <div className="mt-6 space-y-4 border-t border-border-soft pt-6 text-sm leading-7 text-muted">
                  {service.benefits.map((benefit) => (
                    <p key={benefit} className="flex gap-3">
                      <span className="mt-[0.78rem] h-1.5 w-1.5 rounded-full bg-brand-highlight" />
                      <span>{benefit}</span>
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="px-6 py-16 md:px-10 md:py-20">
        <ScrollReveal className="mx-auto max-w-[88rem]" delay={70}>
          <div className="grid gap-10 lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-12">
            <div className="pt-3">
              <p className="text-[0.76rem] font-semibold uppercase tracking-[0.26em] text-brand-accent">
                Vorgehen
              </p>
            </div>

            <div className="border-t border-border-soft">
              {service.process.map((step, index) => (
                <div
                  key={step}
                  className="grid gap-8 border-b border-border-soft py-8 lg:grid-cols-[80px_minmax(0,1fr)]"
                >
                  <p className="pt-1 text-[0.88rem] leading-7 text-muted">
                    {`0${index + 1}`}
                  </p>
                  <p className="max-w-4xl text-[1.06rem] leading-8 text-brand-ink">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="bg-[#e9eff4] px-6 py-16 md:px-10 md:py-20">
        <ScrollReveal className="mx-auto max-w-[88rem]" delay={100}>
          <div className="grid gap-10 lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-12">
            <div className="pt-3">
              <p className="text-[0.76rem] font-semibold uppercase tracking-[0.26em] text-brand-accent">
                Fragen & Kontakt
              </p>
            </div>

            <div className="grid gap-12 xl:grid-cols-[minmax(0,1fr)_21rem] xl:gap-16">
              <div className="border-t border-border-soft">
                {faqs.map((faq) => (
                  <details key={faq.slug} className="border-b border-border-soft">
                    <summary className="grid cursor-pointer gap-5 px-0 py-6 lg:grid-cols-[minmax(0,1fr)_36px]">
                      <span className="text-[1.06rem] font-semibold leading-8 text-brand-ink">
                        {faq.question}
                      </span>
                      <span className="flex h-7 w-7 items-center justify-center border border-border-soft text-brand-ink">
                        +
                      </span>
                    </summary>
                    <p className="max-w-4xl pb-6 text-[1rem] leading-8 text-muted">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>

              <aside className="border-t border-border-soft pt-6">
                <p className="text-[0.76rem] font-semibold uppercase tracking-[0.26em] text-brand-accent">
                  Nächster Schritt
                </p>
                <h3 className="mt-5 font-display text-[2.4rem] leading-[1.02] tracking-[-0.03em] text-brand-ink">
                  Lieber direkt persönlich sprechen?
                </h3>
                <p className="mt-5 text-[1rem] leading-8 text-muted">
                  Wenn Sie wissen möchten, wie das Thema in Ihre aktuelle
                  Lebenssituation passt, starten wir mit einem ruhigen
                  Erstgespräch.
                </p>
                <div className="mt-7 space-y-3 text-[1rem] leading-8 text-brand-ink">
                  <p>
                    <a className="hover:text-brand-accent" href={`tel:${siteSettings.phone}`}>
                      {siteSettings.phoneDisplay}
                    </a>
                  </p>
                  <p>
                    <a className="hover:text-brand-accent" href={`mailto:${siteSettings.email}`}>
                      {siteSettings.email}
                    </a>
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-5">
                  <ButtonLink href="/kontakt">Zum Kontakt</ButtonLink>
                  <ButtonLink href="/faq" variant="ghost">
                    Allgemeine FAQ →
                  </ButtonLink>
                </div>
              </aside>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
