import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const variantClasses: Record<NonNullable<ButtonLinkProps["variant"]>, string> = {
  primary:
    "bg-brand-ink text-white shadow-[var(--shadow-pill-strong)] hover:-translate-y-0.5 hover:bg-[#0f119c]",
  secondary:
    "border border-brand-ink/12 bg-white/72 text-brand-ink shadow-[var(--shadow-pill)] backdrop-blur hover:-translate-y-0.5 hover:border-brand-accent/22 hover:bg-white/82",
  ghost:
    "text-brand-accent hover:-translate-y-0.5 hover:text-brand-ink",
};

function isExternal(href: string) {
  return (
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")
  );
}

function isAnchorLink(href: string) {
  return href.startsWith("#") || href.includes("/#");
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: ButtonLinkProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-center text-sm font-semibold tracking-[0.01em]",
    variantClasses[variant],
    className,
  );

  if (isExternal(href) || isAnchorLink(href)) {
    return (
      <a className={classes} href={href}>
        {children}
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      {children}
    </Link>
  );
}
