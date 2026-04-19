import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ScrollReveal } from "@/components/scroll-reveal";
import { StructuredData } from "@/components/structured-data";
import { getSiteContent } from "@/lib/content";
import { buildMetadata, getFaqJsonLd } from "@/lib/content/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const { siteSettings } = await getSiteContent();
  return buildMetadata(
    {
      title: "FAQ",
      description:
        "Häufige Fragen zu Beratung, Ablauf, Versicherung, Vorsorge und Kontakt.",
      path: "/faq",
    },
    siteSettings,
  );
}

export default async function FaqPage() {
  const { faqs } = await getSiteContent();

  return (
    <>
      <StructuredData value={getFaqJsonLd(faqs)} />

      <PageHero
        actions={[
          {
            href: "/kontakt",
            label: "Kontakt aufnehmen",
            variant: "primary",
          },
        ]}
        eyebrow="FAQ"
        intro="Vor dem ersten Gespräch tauchen oft ähnliche Fragen auf. Hier finden Sie die wichtigsten Antworten gebündelt nach Themenfeldern."
        title="Häufige Fragen zur Zusammenarbeit"
      />

      <section className="px-6 py-12 md:px-10 md:pb-20">
        <ScrollReveal className="mx-auto max-w-[88rem]" delay={40}>
          <div className="grid gap-10 lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-12">
            <div className="pt-3">
              <p className="text-[0.76rem] font-semibold uppercase tracking-[0.26em] text-brand-accent">
                Antworten
              </p>
            </div>

            <div className="border-t border-border-soft">
              {faqs.map((faq, index) => (
                <details key={faq.slug} className="border-b border-border-soft" open={index === 0}>
                  <summary className="grid cursor-pointer gap-5 px-0 py-6 lg:grid-cols-[180px_minmax(0,1fr)_36px] lg:items-start">
                    <span className="text-[0.76rem] font-semibold uppercase tracking-[0.24em] text-brand-accent">
                      {faq.category}
                    </span>
                    <span className="text-[1.12rem] font-semibold leading-8 text-brand-ink">
                      {faq.question}
                    </span>
                    <span className="flex h-7 w-7 items-center justify-center border border-border-soft text-brand-ink">
                      {index === 0 ? "−" : "+"}
                    </span>
                  </summary>
                  <div className="grid gap-5 px-0 pb-6 lg:grid-cols-[180px_minmax(0,1fr)]">
                    <span />
                    <p className="max-w-4xl text-[1.02rem] leading-8 text-muted">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
