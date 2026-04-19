import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
  tone?: "default" | "inverse";
  className?: string;
  titleClassName?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "left",
  tone = "default",
  className,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-4xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-5 text-[0.76rem] font-semibold uppercase tracking-[0.26em]",
            tone === "default" ? "text-brand-accent" : "text-brand-highlight",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-display text-[clamp(2.8rem,5vw,5.4rem)] leading-[0.98] tracking-[-0.045em]",
          tone === "default" ? "text-brand-ink" : "text-white",
          titleClassName,
        )}
      >
        {title}
      </h2>
      {body ? (
        <p
          className={cn(
            "mt-6 max-w-3xl text-[1.02rem] leading-8 md:text-[1.08rem]",
            tone === "default" ? "text-muted" : "text-white/72",
          )}
        >
          {body}
        </p>
      ) : null}
    </div>
  );
}
