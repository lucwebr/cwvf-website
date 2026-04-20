import Image from "next/image";
import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { ContactForm } from "@/components/contact-form";
import { ScrollReveal } from "@/components/scroll-reveal";
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
  const { homePage, services, testimonials, siteSettings } = await getSiteContent();
  const featuredServices = services.filter((service) =>
    homePage.featuredServiceSlugs.includes(service.slug),
  );
  const homeFaqs = await getFaqsBySlugs([
    "beratung-kosten",
    "unterlagen-zum-erstgespraech",
    "digitale-beratung",
    "rueckruf",
  ]);
  const leadTestimonials = testimonials.slice(0, 3);

  return (
    <>
      <StructuredData value={getOrganizationJsonLd(siteSettings)} />
      <StructuredData value={getFaqJsonLd(homeFaqs)} />

      <section className="bg-background px-6 pb-18 pt-16 md:px-10 md:pb-20 md:pt-20">
        <ScrollReveal className="mx-auto max-w-[88rem] border-b border-border-soft pb-18">
          <div className="grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-14">
            <div className="pt-3">
              <div className="h-px w-6 bg-brand-accent" />
              <p className="mt-4 text-[0.76rem] font-semibold uppercase tracking-[0.26em] text-brand-accent">
                {homePage.eyebrow}
              </p>
            </div>

            <div className="grid gap-14 xl:grid-cols-[minmax(0,1.08fr)_20.5rem] xl:items-end">
              <div>
                <h1 className="max-w-[8.2ch] font-display text-[clamp(3rem,7vw,6.65rem)] leading-[0.94] tracking-[-0.055em] text-brand-ink">
                  {homePage.title}
                </h1>
                <p className="mt-7 max-w-[41rem] text-[1rem] leading-8 text-muted md:mt-9 md:text-[1.04rem] md:leading-[2.05]">
                  {homePage.intro}
                </p>
                <div className="mt-10 flex flex-wrap items-center gap-5">
                  <ButtonLink href={siteSettings.primaryCta.href}>
                    Jetzt anrufen
                  </ButtonLink>
                  <ButtonLink href="/leistungen" variant="ghost">
                    Unsere Leistungen →
                  </ButtonLink>
                </div>
              </div>

              <div className="border-t border-border-soft pt-8 xl:max-w-[20.5rem] xl:self-end xl:justify-self-end">
                <p className="text-[0.76rem] font-semibold uppercase tracking-[0.26em] text-brand-highlight">
                  {homePage.reviewSummary.provider} Gold-Siegel
                </p>
                <p className="mt-5 font-display text-[clamp(3rem,10vw,3.7rem)] leading-none tracking-[-0.04em] text-brand-ink">
                  {homePage.reviewSummary.ratingLabel}
                </p>
                <p className="mt-4 text-[0.96rem] leading-7 text-muted">
                  {homePage.reviewSummary.totalReviews} verifizierte Bewertungen ·{" "}
                  {homePage.reviewSummary.updatedLabel}
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="border-y border-border-soft bg-[#efe6d9] px-6 py-16 md:px-10 md:py-20">
        <ScrollReveal className="mx-auto max-w-[88rem]" delay={40}>
          <div className="grid gap-8 lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-12">
            <div className="pt-3">
              <p className="text-[0.76rem] font-semibold uppercase tracking-[0.26em] text-brand-accent">
                Beratungsfelder
              </p>
            </div>

            <div>
              <h2 className="max-w-4xl font-display text-[clamp(3rem,5vw,5.2rem)] leading-[0.98] tracking-[-0.045em] text-brand-ink">
                Drei Themen, die sinnvoll zusammen gedacht werden.
              </h2>
              <p className="mt-6 max-w-3xl text-[1.04rem] leading-8 text-muted">
                Statt unverbundener Einzellösungen arbeiten wir entlang der
                Fragen, die Privatkunden im Alltag wirklich beschäftigen.
              </p>

              <div className="mt-14">
                {featuredServices.map((service, index) => (
                  <article
                    key={service.slug}
                    className="grid gap-8 border-t border-border-soft py-10 lg:grid-cols-[90px_minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-10"
                  >
                    <p className="pt-2 text-[0.88rem] leading-7 text-muted">
                      {`0${index + 1}`}
                    </p>
                    <div>
                      <p className="text-[0.76rem] font-semibold uppercase tracking-[0.24em] text-brand-accent">
                        {service.kicker}
                      </p>
                      <h3 className="mt-4 font-display text-[clamp(2.2rem,3.4vw,3.4rem)] leading-[1] tracking-[-0.03em] text-brand-ink">
                        {service.title}
                      </h3>
                      <p className="mt-4 max-w-2xl text-[1.02rem] leading-8 text-muted">
                        {service.summary}
                      </p>
                    </div>
                    <div className="grid gap-3 pt-1 text-sm leading-7 text-muted">
                      {service.highlights.slice(0, 4).map((highlight) => (
                        <p key={highlight} className="flex gap-3">
                          <span className="mt-[0.78rem] h-1.5 w-1.5 rounded-full bg-brand-highlight" />
                          <span>{highlight}</span>
                        </p>
                      ))}
                      <div className="pt-3">
                        <ButtonLink href={`/leistungen/${service.slug}`} variant="ghost">
                          Mehr zu {service.shortTitle} →
                        </ButtonLink>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="bg-brand-ink px-6 py-18 text-white md:px-10 md:py-20">
        <ScrollReveal className="mx-auto max-w-[88rem]" delay={60}>
          <div className="grid gap-10 lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-12">
            <div className="pt-3">
              <p className="text-[0.76rem] font-semibold uppercase tracking-[0.26em] text-brand-highlight">
                So arbeiten wir
              </p>
            </div>

            <div>
              <h2 className="max-w-4xl font-display text-[clamp(3rem,5vw,5rem)] leading-[1] tracking-[-0.045em] text-brand-highlight">
                Vom ersten Überblick bis zur laufenden Begleitung.
              </h2>

              <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
                {homePage.processSteps.map((step, index) => (
                  <div key={step.title}>
                    <p className="font-display text-6xl leading-none text-white/14">
                      {`0${index + 1}`}
                    </p>
                    <h3 className="mt-5 text-xl font-semibold text-brand-highlight">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-sm leading-8 text-white/62">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="bg-[#e9eff4] px-6 py-18 md:px-10 md:py-20">
        <ScrollReveal className="mx-auto max-w-[88rem]" delay={80}>
          <div className="grid gap-10 lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-12">
            <div className="pt-3">
              <p className="text-[0.76rem] font-semibold uppercase tracking-[0.26em] text-brand-highlight">
                Kundenstimmen
              </p>
            </div>

            <div>
              <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_16rem] xl:items-start xl:gap-10">
                <div>
                  <h2 className="max-w-4xl font-display text-[clamp(3rem,5vw,5rem)] leading-[1] tracking-[-0.045em] text-brand-ink">
                    Verifizierte Bewertungen über eKomi.
                  </h2>
                  <p className="mt-5 text-[1.02rem] leading-8 text-muted">
                    {homePage.reviewSummary.totalReviews} Bewertungen ·{" "}
                    {homePage.reviewSummary.ratingLabel} von 5 ·{" "}
                    {homePage.reviewSummary.award} · {homePage.reviewSummary.updatedLabel}
                  </p>
                </div>

                <a
                  className="block h-[8.5rem] w-[8.5rem] transition hover:-translate-y-0.5 xl:mt-2 xl:h-[11rem] xl:w-[11rem] xl:justify-self-end"
                  href={homePage.reviewSummary.sourceUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  <Image
                    alt="eKomi Gold-Siegel"
                    className="h-full w-full object-contain"
                    height={240}
                    src="/ekomi-logo.png"
                    width={240}
                  />
                </a>
              </div>

              <div className="mt-10 grid gap-8 lg:grid-cols-3">
                {leadTestimonials.map((testimonial) => (
                  <article
                    key={`${testimonial.authorName}-${testimonial.quote}`}
                    className="flex h-full min-h-0 flex-col md:min-h-[18rem]"
                  >
                    <p className="text-[1.08rem] leading-9 text-brand-ink">
                      &quot;{testimonial.quote}&quot;
                    </p>
                    <div className="mt-auto border-t border-border-soft pt-5 text-sm leading-7 text-muted">
                      <p className="font-semibold text-brand-highlight">
                        {testimonial.authorName}
                      </p>
                      <p>{testimonial.authorRole}</p>
                      <p>{testimonial.location}</p>
                      {testimonial.source ? <p>{testimonial.source}</p> : null}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="bg-background px-6 py-16 md:px-10 md:py-20">
        <ScrollReveal className="mx-auto max-w-[88rem]" delay={100}>
          <div className="grid gap-10 lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-12">
            <div className="pt-3">
              <p className="text-[0.76rem] font-semibold uppercase tracking-[0.26em] text-brand-accent">
                Häufige Fragen
              </p>
            </div>

            <div>
              <h2 className="max-w-4xl font-display text-[clamp(3rem,5vw,5rem)] leading-[1] tracking-[-0.045em] text-brand-ink">
                Antworten vor dem ersten Gespräch.
              </h2>

              <div className="mt-12 border-t border-border-soft">
                {homeFaqs.map((faq, index) => (
                  <details key={faq.slug} className="border-b border-border-soft" open={index === 0}>
                    <summary className="grid cursor-pointer gap-5 px-0 py-6 lg:grid-cols-[180px_minmax(0,1fr)_36px] lg:items-start">
                      <span className="text-[0.76rem] font-semibold uppercase tracking-[0.24em] text-brand-accent">
                        Beratung
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
          </div>
        </ScrollReveal>
      </section>

      <section className="bg-[#e9eff4] px-6 py-16 md:px-10 md:py-20" id="kontakt">
        <ScrollReveal className="mx-auto max-w-[88rem]" delay={120}>
          <div className="grid gap-10 lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-12">
            <div className="pt-3">
              <p className="text-[0.76rem] font-semibold uppercase tracking-[0.26em] text-brand-accent">
                Kontakt
              </p>
            </div>

            <div className="grid gap-12 xl:grid-cols-[minmax(0,0.48fr)_minmax(0,0.52fr)] xl:gap-18">
              <div>
                <h2 className="max-w-3xl font-display text-[clamp(3rem,5vw,4.8rem)] leading-[1] tracking-[-0.045em] text-brand-ink">
                  Ein Gespräch ist oft der beste nächste Schritt.
                </h2>
                <p className="mt-6 max-w-2xl text-[1.02rem] leading-8 text-muted">
                  Wenn Sie Ordnung in Versicherungen, Vorsorge oder
                  Vermögensaufbau bringen möchten, starten wir mit einem ruhigen
                  Überblick und einer klaren Priorisierung.
                </p>

                <div className="mt-12 border-t border-border-soft/70">
                  <div className="py-7">
                    <p className="text-[0.76rem] font-semibold uppercase tracking-[0.24em] text-brand-accent">
                      Telefon
                    </p>
                    <a
                      className="mt-3 block text-[2.9rem] font-display leading-none text-brand-ink hover:text-brand-accent md:text-[5rem]"
                      href={`tel:${siteSettings.phone}`}
                    >
                      {siteSettings.phoneDisplay}
                    </a>
                  </div>

                  <div className="border-t border-border-soft/70 py-7">
                    <p className="text-[0.76rem] font-semibold uppercase tracking-[0.24em] text-brand-accent">
                      E-Mail
                    </p>
                    <a
                      className="mt-3 block text-[1.1rem] leading-8 text-brand-ink hover:text-brand-accent"
                      href={`mailto:${siteSettings.email}`}
                    >
                      {siteSettings.email}
                    </a>
                  </div>

                  <div className="border-t border-border-soft/70 py-7">
                    <p className="text-[0.76rem] font-semibold uppercase tracking-[0.24em] text-brand-accent">
                      Büro
                    </p>
                    <p className="mt-3 text-[1.04rem] leading-8 text-brand-ink">
                      {siteSettings.addressLines[0]}
                      <br />
                      {siteSettings.addressLines[1]}
                    </p>
                  </div>

                  <div className="border-t border-border-soft/70 py-7">
                    <p className="text-[0.76rem] font-semibold uppercase tracking-[0.24em] text-brand-accent">
                      Beratungszeiten
                    </p>
                    <ul className="mt-3 space-y-1 text-[1.02rem] leading-8 text-brand-ink">
                      {siteSettings.openingHours.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <ContactForm />
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
