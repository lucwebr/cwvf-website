import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";
import { StructuredData } from "@/components/structured-data";
import { getFaqsBySlugs, getSiteContent } from "@/lib/content";
import {
  buildMetadata,
  getFaqJsonLd,
  getOrganizationJsonLd,
} from "@/lib/content/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const { homePage, siteSettings } = await getSiteContent();
  return buildMetadata(homePage.seo, siteSettings);
}

export default async function Home() {
  const { homePage, services, teamMembers, testimonials, siteSettings } =
    await getSiteContent();
  const featuredServices = services.filter((service) =>
    homePage.featuredServiceSlugs.includes(service.slug),
  );
  const homeFaqs = await getFaqsBySlugs([
    "beratung-kosten",
    "unterlagen-zum-erstgespraech",
    "digitale-beratung",
    "rueckruf",
  ]);

  return (
    <>
      <StructuredData value={getOrganizationJsonLd(siteSettings)} />
      <StructuredData value={getFaqJsonLd(homeFaqs)} />

      <section className="px-6 pb-12 pt-12 md:px-10 md:pt-16">
        <div className="mx-auto grid max-w-[88rem] gap-8 lg:grid-cols-[1.18fr_0.82fr] lg:items-stretch">
          <div className="rounded-[2.25rem] border border-border-soft bg-white/66 p-8 shadow-[var(--shadow-card)] backdrop-blur md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-accent">
              {homePage.eyebrow}
            </p>
            <h1 className="mt-5 max-w-3xl font-display text-5xl leading-none text-brand-ink md:text-7xl">
              {homePage.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              {homePage.intro}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={siteSettings.primaryCta.href}>
                {siteSettings.primaryCta.label}
              </ButtonLink>
            </div>

            <div className="mt-12 grid gap-3 md:grid-cols-3">
              {homePage.trustHighlights.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.5rem] border border-border-soft bg-surface/78 px-4 py-4"
                >
                  <p className="text-sm leading-7 text-brand-ink">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <aside
            className="rounded-[2.25rem] border border-border-soft bg-brand-ink p-8 text-white shadow-[var(--shadow-panel)]"
            data-grid="soft"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-highlight">
              Direktkontakt
            </p>
            <h2 className="mt-4 font-display text-3xl leading-tight">
              Beratung ohne Umwege.
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/80 md:text-base">
              Wenn Sie eine erste Einordnung wünschen, erreichen Sie uns direkt
              telefonisch oder per E-Mail. Wir melden uns schnellstmöglich bei
              Ihnen zurück.
            </p>

            <div className="mt-8 space-y-4 rounded-[1.5rem] border border-white/10 bg-white/6 p-5 backdrop-blur">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-highlight">
                  Telefon
                </p>
                <a
                  className="mt-1 block text-xl font-semibold hover:text-brand-highlight"
                  href={`tel:${siteSettings.phone}`}
                >
                  {siteSettings.phoneDisplay}
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-highlight">
                  E-Mail
                </p>
                <a
                  className="mt-1 block text-base hover:text-brand-highlight"
                  href={`mailto:${siteSettings.email}`}
                >
                  {siteSettings.email}
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-highlight">
                  Büro
                </p>
                <p className="mt-1 text-sm leading-7 text-white/80">
                  {siteSettings.addressLines.join(", ")}
                </p>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-highlight">
                Beratungszeiten
              </p>
              <ul className="mt-3 space-y-2 text-sm leading-7 text-white/80">
                {siteSettings.openingHours.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-4 text-xs leading-6 text-white/60">
                {siteSettings.brandIntro}
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="px-6 py-12 md:px-10">
        <div className="mx-auto max-w-[88rem]">
          <SectionHeading
            eyebrow="Unsere Beratungsfelder"
            title="Drei Themen, die sinnvoll zusammen gedacht werden."
            body="Statt unverbundener Einzellösungen arbeiten wir entlang der Fragen, die Privatkunden im Alltag wirklich beschäftigen."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {featuredServices.map((service) => (
              <article
                key={service.slug}
                className="flex h-full flex-col rounded-[1.75rem] border border-border-soft bg-white/78 p-6 shadow-[var(--shadow-card)] backdrop-blur"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-accent">
                  {service.shortTitle}
                </p>
                <h3 className="mt-4 font-display text-3xl text-brand-ink">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted">
                  {service.summary}
                </p>
                <ul className="mt-6 space-y-3 text-sm leading-7 text-brand-ink">
                  {service.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-brand-highlight" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-8">
                  <Link
                    className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-brand-ink px-5 py-3 text-center text-sm font-semibold text-white shadow-[var(--shadow-pill-strong)] hover:-translate-y-0.5 hover:bg-foreground"
                    href={`/leistungen/${service.slug}`}
                  >
                    Mehr zu {service.shortTitle}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-12 md:px-10">
        <div className="mx-auto grid max-w-[88rem] gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="rounded-[2rem] border border-border-soft bg-brand-ink px-6 py-8 text-white shadow-[var(--shadow-panel)] md:px-8">
          <SectionHeading
            eyebrow="Beratungsstil"
            title="Wie wir Entscheidungen leichter machen"
            body="Unser Ansatz bleibt persönlich und strukturiert: erst Überblick, dann Prioritäten, dann eine Empfehlung mit sauberer Begründung."
            tone="inverse"
          />
            <ul className="mt-8 space-y-4 text-sm leading-7 text-white/80">
              {homePage.advisoryPrinciples.map((principle) => (
                <li
                  key={principle}
                  className="rounded-[1.4rem] border border-white/10 bg-white/6 px-4 py-4"
                >
                  {principle}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] border border-border-soft bg-white/78 p-6 shadow-[var(--shadow-card)] backdrop-blur md:p-8">
            <SectionHeading
              eyebrow="So läuft die Zusammenarbeit"
              title="Vom ersten Überblick bis zur laufenden Begleitung"
            />
            <div className="mt-8 grid gap-5">
              {homePage.processSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="grid gap-4 rounded-[1.5rem] border border-border-soft bg-surface/78 px-4 py-5 md:grid-cols-[auto_1fr]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-ink text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-brand-ink">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-muted">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 md:px-10">
        <div className="mx-auto max-w-[88rem]">
          <SectionHeading
            eyebrow="Team"
            title="Ansprechbar, persönlich und strukturiert"
            body="Im Mittelpunkt stehen klare Ansprechpartner, eine ruhige Beratung und die Fähigkeit, komplexe Themen alltagstauglich zu übersetzen."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {teamMembers.map((member) => (
              <article
                key={member.name}
                className="min-h-[23rem] rounded-[1.75rem] border border-border-soft bg-white/78 p-6 shadow-[var(--shadow-card)] backdrop-blur md:p-7"
              >
                <div className="flex items-start gap-5">
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
                    <h3 className="font-display text-3xl text-brand-ink">
                      {member.name}
                    </h3>
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

      <section className="px-6 py-12 md:px-10">
        <div className="mx-auto max-w-[88rem]">
          <SectionHeading
            eyebrow="Vertrauen"
            title="Verifizierte Stimmen der Kunden über eKomi"
            className="max-w-5xl"
            titleClassName="lg:whitespace-nowrap"
          />
          <div className="mt-4 grid gap-5 lg:grid-cols-[0.78fr_1.22fr]">
            <article className="rounded-[1.75rem] border border-border-soft bg-brand-ink p-6 text-white shadow-[var(--shadow-panel)]">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-highlight">
                {homePage.reviewSummary.provider}
              </p>
              <div className="mt-5 flex items-end gap-3">
                <span className="font-display text-6xl leading-none">
                  {homePage.reviewSummary.ratingLabel}
                </span>
                <span className="pb-2 text-sm uppercase tracking-[0.18em] text-white/65">
                  Bewertung
                </span>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-[1.2rem] border border-white/10 bg-white/6 px-4 py-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-brand-highlight">
                    Gesamt
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-white">
                    {homePage.reviewSummary.totalReviews}
                  </p>
                </div>
                <div className="rounded-[1.2rem] border border-white/10 bg-white/6 px-4 py-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-brand-highlight">
                    Letzte 12 Monate
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-white">
                    {homePage.reviewSummary.recentReviews}
                  </p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-7 text-white/80">
                {homePage.reviewSummary.award} · {homePage.reviewSummary.updatedLabel}
              </p>
              <ButtonLink
                className="mt-6 w-full sm:w-auto"
                href={homePage.reviewSummary.sourceUrl}
                variant="secondary"
              >
                eKomi-Bewertungen ansehen
              </ButtonLink>
            </article>

            <div className="grid gap-5 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <article
                  key={`${testimonial.authorName}-${testimonial.location}-${testimonial.quote}`}
                  className="flex h-full flex-col rounded-[1.75rem] border border-border-soft bg-white/78 p-6 shadow-[var(--shadow-card)] backdrop-blur"
                >
                  <p className="text-lg leading-8 text-brand-ink">
                    “{testimonial.quote}”
                  </p>
                  <div className="mt-auto border-t border-border-soft pt-4 text-sm text-muted">
                    <p className="font-semibold text-brand-ink">
                      {testimonial.authorName}
                    </p>
                    <p>{testimonial.authorRole}</p>
                    <p>{testimonial.location}</p>
                    {testimonial.source ? (
                      <p className="mt-2 text-brand-accent">{testimonial.source}</p>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 md:px-10">
        <div className="mx-auto max-w-[88rem] rounded-[2rem] border border-border-soft bg-white/78 px-6 py-8 shadow-[var(--shadow-card)] backdrop-blur md:px-8">
          <SectionHeading
            eyebrow="Häufige Fragen"
            title="Antworten vor dem ersten Gespräch"
          />
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {homeFaqs.map((faq) => (
              <details
                key={faq.slug}
                className="rounded-[1.5rem] border border-border-soft bg-surface/78 px-5 py-4"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-brand-ink">
                  {faq.question}
                  <span className="text-brand-accent">+</span>
                </summary>
                <p className="mt-3 text-sm leading-7 text-muted">{faq.answer}</p>
              </details>
            ))}
          </div>
          <div className="mt-8">
            <ButtonLink href="/faq" variant="ghost">
              Alle Fragen ansehen
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 md:px-10 md:pb-20" id="kontakt">
        <div className="mx-auto grid max-w-[88rem] gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="rounded-[2rem] border border-border-soft bg-brand-ink px-6 py-8 text-white shadow-[var(--shadow-panel)] md:px-8">
            <SectionHeading
              eyebrow="Kontakt"
              title="Ein Gespräch ist oft der beste nächste Schritt."
              body="Wenn Sie Ordnung in Versicherungen, Vorsorge oder Vermögensaufbau bringen möchten, starten wir mit einem ruhigen Überblick und einer klaren Priorisierung."
              tone="inverse"
            />
            <div className="mt-8 space-y-5 text-sm leading-7 text-white/82">
              <p className="rounded-[1.4rem] border border-white/10 bg-white/6 px-4 py-4 text-white/80">
                {siteSettings.brandIntro}
              </p>
              <p>
                Telefonisch erreichen Sie uns unter{" "}
                <a className="font-semibold text-white" href={`tel:${siteSettings.phone}`}>
                  {siteSettings.phoneDisplay}
                </a>
                .
              </p>
              <p>
                Alternativ schreiben Sie an{" "}
                <a className="font-semibold text-white" href={`mailto:${siteSettings.email}`}>
                  {siteSettings.email}
                </a>
                .
              </p>
              <p>
                Für spätere CRM- oder E-Mail-Anbindung ist das Formular bereits
                als UI vorbereitet.
              </p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
