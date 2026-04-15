import { ButtonLink } from "@/components/button-link";
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
  if (variant === "plain") {
    return (
      <section className="px-6 pb-8 pt-14 md:px-10 md:pt-18">
        <div className="mx-auto max-w-[88rem]">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-accent">
            {eyebrow}
          </p>
          <div className="mt-5 max-w-5xl">
            <h1 className="font-display text-4xl leading-tight text-brand-ink md:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
              {intro}
            </p>
          </div>
          {actions.length > 0 ? (
            <div className="mt-8 flex flex-wrap gap-3">
              {actions.map((action) => (
                <ButtonLink
                  key={`${action.href}-${action.label}`}
                  href={action.href}
                  variant={action.variant}
                >
                  {action.label}
                </ButtonLink>
              ))}
            </div>
          ) : null}
        </div>
      </section>
    );
  }

  return (
    <section className="px-6 pb-10 pt-14 md:px-10 md:pt-20">
      <div className="mx-auto max-w-[88rem] rounded-[2rem] border border-border-soft bg-white/62 px-6 py-10 shadow-[var(--shadow-card)] backdrop-blur md:px-10 md:py-14">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-accent">
          {eyebrow}
        </p>
        <div className="mt-5 max-w-4xl">
          <h1 className="font-display text-4xl leading-tight text-brand-ink md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">{intro}</p>
        </div>
        {actions.length > 0 ? (
          <div className="mt-8 flex flex-wrap gap-3">
            {actions.map((action) => (
              <ButtonLink
                key={`${action.href}-${action.label}`}
                href={action.href}
                variant={action.variant}
              >
                {action.label}
              </ButtonLink>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
