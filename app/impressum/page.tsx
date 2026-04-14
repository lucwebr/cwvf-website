import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { getLegalPage, getSiteContent } from "@/lib/content";
import { buildMetadata } from "@/lib/content/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getLegalPage("impressum");
  const { siteSettings } = await getSiteContent();

  if (!page) {
    return buildMetadata(
      {
        title: "Impressum",
        description: "Impressum",
        path: "/impressum",
      },
      siteSettings,
    );
  }

  return buildMetadata(page.seo, siteSettings);
}

export default async function ImprintPage() {
  const page = await getLegalPage("impressum");

  if (!page) {
    notFound();
  }

  return (
    <>
      <PageHero eyebrow="Rechtliches" intro={page.intro} title={page.title} />
      <section className="px-6 py-8 md:px-10 md:pb-20">
        <div className="mx-auto max-w-4xl rounded-[1.85rem] border border-border-soft bg-white/78 p-6 shadow-[var(--shadow-card)] backdrop-blur md:p-8">
          <div className="space-y-8">
            {page.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-display text-3xl text-brand-ink">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-8 text-muted md:text-base">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
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
