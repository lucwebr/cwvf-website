import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { getLegalPage, getSiteContent } from "@/lib/content";
import { buildMetadata } from "@/lib/content/metadata";

function renderParagraph(paragraph: string) {
  const colonIndex = paragraph.indexOf(":");
  const hasLead = colonIndex > 0 && colonIndex <= 60;

  if (!hasLead) {
    return paragraph;
  }

  const lead = paragraph.slice(0, colonIndex + 1);
  const rest = paragraph.slice(colonIndex + 1).trimStart();

  return (
    <>
      <strong className="font-semibold text-brand-ink">{lead}</strong>{" "}
      {rest}
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const page = await getLegalPage("datenschutz");
  const { siteSettings } = await getSiteContent();

  if (!page) {
    return buildMetadata(
      {
        title: "Datenschutz",
        description: "Datenschutz",
        path: "/datenschutz",
      },
      siteSettings,
    );
  }

  return buildMetadata(page.seo, siteSettings);
}

export default async function PrivacyPage() {
  const page = await getLegalPage("datenschutz");

  if (!page) {
    notFound();
  }

  return (
    <>
      <PageHero eyebrow="Rechtliches" intro={page.intro} title={page.title} />
      <section className="px-6 py-8 md:px-10 md:pb-20">
        <div className="mx-auto max-w-[88rem] rounded-[1.85rem] border border-border-soft bg-white/78 p-6 shadow-[var(--shadow-card)] backdrop-blur md:p-8">
          <div className="grid gap-6">
            {page.sections.map((section, index) => (
              <section
                key={section.heading}
                className="rounded-[1.5rem] border border-brand-ink/8 bg-surface/72 p-5 shadow-[var(--shadow-pill)] md:p-7"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="max-w-4xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-accent">
                      Abschnitt {String(index + 1).padStart(2, "0")}
                    </p>
                    <h2 className="mt-3 font-display text-2xl leading-tight text-brand-ink md:text-3xl">
                      {section.heading}
                    </h2>
                  </div>
                  <span className="inline-flex w-fit rounded-full border border-brand-accent/20 bg-brand-accent/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
                    Datenschutz
                  </span>
                </div>

                <div className="mt-5 space-y-4 text-sm leading-8 text-muted md:max-w-5xl md:text-base">
                  {section.paragraphs.map((paragraph, paragraphIndex) => (
                    <p key={`${section.heading}-${paragraphIndex}`}>
                      {renderParagraph(paragraph)}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
