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
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-3 text-sm font-semibold uppercase tracking-[0.24em]",
            tone === "default" ? "text-brand-accent" : "text-brand-highlight",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-display text-4xl leading-tight md:text-5xl",
          tone === "default" ? "text-brand-ink" : "text-white",
          titleClassName,
        )}
      >
        {title}
      </h2>
      {body ? (
        <p
          className={cn(
            "mt-5 text-base leading-8 md:text-lg",
            tone === "default" ? "text-muted" : "text-white/80",
          )}
        >
          {body}
        </p>
      ) : null}
    </div>
  );
}
