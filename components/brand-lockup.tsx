import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const BRAND_LINKS = {
  cw: "https://ig.al/webergmbh/",
  lw: "https://ig.al/weber/",
};

type BrandLockupProps = {
  compact?: boolean;
  showIntro?: boolean;
  className?: string;
};

export function BrandLockup({
  compact = false,
  showIntro = false,
  className,
}: BrandLockupProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-start gap-4 text-brand-ink",
        className,
      )}
    >
      <div
        className={cn(
          "grid w-full gap-3",
          compact
            ? "grid-cols-1 gap-3 md:w-fit md:grid-cols-[220px_360px] md:items-stretch"
            : "grid-cols-1 gap-4 lg:grid-cols-[260px_minmax(0,1fr)] lg:items-stretch",
        )}
      >
        <Link
          className={cn(
            "flex items-center justify-center rounded-[1.35rem] bg-brand-ink shadow-[var(--shadow-panel)] transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/40",
            compact ? "h-[186px] px-5 py-4" : "min-h-[180px] px-6 py-5",
          )}
          href="/"
          aria-label="Zur Startseite"
        >
          <Image
            alt="CWVF Logo"
            className={cn(
              "h-auto w-full object-contain",
              compact ? "max-w-[150px]" : "max-w-[190px]",
            )}
            height={768}
            priority
            src="/cwvf-logo.png"
            width={768}
          />
        </Link>

        <div className={cn("grid gap-2.5", compact && "h-[186px] grid-rows-2")}>
          <a
            className={cn(
              "flex items-center rounded-[1.2rem] border border-border-soft bg-white/78 shadow-[var(--shadow-card-brand)] backdrop-blur transition hover:-translate-y-0.5 hover:border-brand-accent/18 hover:bg-white",
              compact ? "h-full px-3 py-2.5" : "min-h-[82px] px-5 py-4",
            )}
            href={BRAND_LINKS.cw}
            rel="noreferrer"
            target="_blank"
          >
            <Image
              alt="C.Weber GmbH Logo"
              className={cn(
                "h-auto w-full object-contain object-left",
                compact && "max-h-[72px] max-w-none",
              )}
              height={371}
              priority
              src="/weber-cw-logo.png"
              width={1084}
            />
          </a>
          <a
            className={cn(
              "flex items-center rounded-[1.2rem] border border-border-soft bg-white/78 shadow-[var(--shadow-card-brand)] backdrop-blur transition hover:-translate-y-0.5 hover:border-brand-accent/18 hover:bg-white",
              compact ? "h-full px-3 py-2.5" : "min-h-[82px] px-5 py-4",
            )}
            href={BRAND_LINKS.lw}
            rel="noreferrer"
            target="_blank"
          >
            <Image
              alt="Lambert & Weber oHG Logo"
              className={cn(
                "h-auto w-full object-contain object-left",
                compact && "max-h-[72px] max-w-none",
              )}
              height={370}
              priority
              src="/weber-lw-logo.png"
              width={1084}
            />
          </a>
        </div>
      </div>

      {showIntro ? (
        <div className={cn(compact ? "max-w-2xl" : "max-w-xl")}>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-accent">
            Weber
          </p>
          <p className="mt-2 text-sm leading-7 text-muted">
            Versicherungs- & Finanzkonzepte als gemeinsamer Auftritt beider
            Gesellschaften.
          </p>
        </div>
      ) : null}
    </div>
  );
}
