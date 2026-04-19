import { ButtonLink } from "@/components/button-link";
import { ScrollReveal } from "@/components/scroll-reveal";
import type { ActionLink } from "@/lib/content/types";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  actions?: ActionLink[];
  variant?: "card" | "plain";
};

export function PageHero({
  eyebrow,
  title,
  intro,
  actions = [],
  variant = "card",
}: PageHeroProps) {
  const compact = variant === "plain";

  return (
    <section
      className={`bg-background px-6 md:px-10 ${compact ? "pb-10 pt-14 md:pt-16" : "pb-14 pt-16 md:pb-16 md:pt-20"}`}
    >
      <ScrollReveal
        className={`mx-auto max-w-[88rem] border-b border-border-soft ${compact ? "pb-10" : "pb-14"}`}
      >
        <div className="grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-14">
          <div className="pt-3">
            <div className="h-px w-6 bg-brand-accent" />
            <p className="mt-4 text-[0.76rem] font-semibold uppercase tracking-[0.26em] text-brand-accent">
              {eyebrow}
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.96fr)_minmax(0,1.04fr)] lg:items-end lg:gap-10">
            <div>
              <h1 className="max-w-[10ch] font-display text-[clamp(3rem,5.4vw,5.6rem)] leading-[0.96] tracking-[-0.048em] text-brand-ink">
                {title}
              </h1>
            </div>
            <div className="max-w-2xl lg:max-w-[34rem] lg:justify-self-end">
              <p className="text-[1.02rem] leading-8 text-muted md:text-[1.08rem]">
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
