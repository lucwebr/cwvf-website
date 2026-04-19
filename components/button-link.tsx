import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const variantClasses: Record<
  NonNullable<ButtonLinkProps["variant"]>,
  string
> = {
  primary:
    "min-h-10.5 border border-brand-ink bg-brand-ink px-5 text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-white hover:bg-[#203650] hover:border-[#203650]",
  secondary:
    "min-h-10.5 border border-border-soft bg-transparent px-5 text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-brand-ink hover:border-brand-ink/24 hover:bg-white/55",
  ghost:
    "px-0 text-[0.96rem] font-semibold tracking-[0.01em] text-brand-accent hover:text-brand-ink",
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
    "inline-flex items-center justify-center rounded-none text-center",
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
