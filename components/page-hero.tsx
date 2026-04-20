import { ButtonLink } from "@/components/button-link";
import { ScrollReveal } from "@/components/scroll-reveal";
import type { ActionLink } from "@/lib/content/types";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  actions?: ActionLink[];
  variant?: "card" | "plain";
  showBorder?: boolean;
};

export function PageHero({
  eyebrow,
  title,
  intro,
  actions = [],
  variant = "card",
  showBorder = true,
}: PageHeroProps) {
  const compact = variant === "plain";

  return (
    <section
      className={`bg-background px-6 md:px-10 ${compact ? "pb-10 pt-14 md:pt-16" : "pb-14 pt-14 md:pb-16 md:pt-20"}`}
    >
      <ScrollReveal
        className={`mx-auto max-w-[88rem] ${showBorder ? "border-b border-border-soft" : ""} ${compact ? "pb-10" : "pb-14"}`}
      >
        <div className="grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-14">
          <div className="pt-3">
            <div className="h-px w-6 bg-brand-accent" />
            <p className="mt-4 text-[0.76rem] font-semibold uppercase tracking-[0.26em] text-brand-accent">
              {eyebrow}
            </p>
          </div>

          <div className="grid gap-7 lg:grid-cols-[minmax(24rem,1.28fr)_minmax(20rem,0.72fr)] lg:items-center lg:gap-12 xl:grid-cols-[minmax(30rem,1.42fr)_minmax(22rem,0.58fr)]">
            <div className="min-w-0">
              <h1 className="max-w-[9ch] text-balance font-display text-[clamp(2.55rem,5.4vw,5.6rem)] leading-[0.96] tracking-[-0.048em] text-brand-ink">
                {title}
              </h1>
            </div>
            <div className="max-w-2xl lg:max-w-[34rem] lg:justify-self-end">
              <p className="text-[1rem] leading-7 text-muted md:text-[1.08rem] md:leading-8">
                {intro}
              </p>
              {actions.length > 0 ? (
                <div className="mt-8 flex flex-wrap items-center gap-5">
                  {actions.map((action, index) => (
                    <ButtonLink
                      key={`${action.href}-${action.label}`}
                      href={action.href}
                      variant={action.variant ?? (index === 0 ? "primary" : "ghost")}
                    >
                      {action.label}
                    </ButtonLink>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
