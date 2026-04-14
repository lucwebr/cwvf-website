import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
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
  const groupedFaqs = Object.entries(
    faqs.reduce<Record<string, typeof faqs>>((groups, faq) => {
      groups[faq.category] ??= [];
      groups[faq.category].push(faq);
      return groups;
    }, {}),
  );

  return (
    <>
      <StructuredData value={getFaqJsonLd(faqs)} />

      <PageHero
        actions={[
          {
            href: "/#kontakt",
            label: "Kontakt aufnehmen",
            variant: "primary",
          },
        ]}
        eyebrow="FAQ"
        intro="Vor dem ersten Gespräch tauchen oft ähnliche Fragen auf. Hier finden Sie die wichtigsten Antworten gebündelt nach Themenfeldern."
        title="Häufige Fragen zur Zusammenarbeit"
      />

      <section className="px-6 py-8 md:px-10 md:pb-20">
        <div className="mx-auto max-w-[88rem] space-y-8">
          {groupedFaqs.map(([category, items]) => (
            <section
              key={category}
              className="rounded-[1.85rem] border border-border-soft bg-white/78 p-6 shadow-[var(--shadow-card)] backdrop-blur md:p-8"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-accent">
                {category}
              </p>
              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                {items.map((faq) => (
                  <details
                    key={faq.slug}
                    className="rounded-[1.4rem] border border-border-soft bg-surface/78 px-5 py-4"
                    open={faq.slug === "beratung-kosten"}
                  >
                    <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-brand-ink">
                      {faq.question}
                      <span className="text-brand-accent">+</span>
                    </summary>
                    <p className="mt-3 text-sm leading-7 text-muted">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </>
  );
}
