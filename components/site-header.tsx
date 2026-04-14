import Link from "next/link";
import { BrandLockup } from "@/components/brand-lockup";
import { ButtonLink } from "@/components/button-link";
import type { SiteSettings } from "@/lib/content/types";

type SiteHeaderProps = {
  settings: SiteSettings;
};

export function SiteHeader({ settings }: SiteHeaderProps) {
  return (
    <header className="px-6 pt-5 md:px-10 md:pt-6">
      <div className="mx-auto max-w-[88rem] rounded-[1.75rem] border border-border-soft bg-white/68 px-5 py-4 shadow-[var(--shadow-card)] backdrop-blur md:px-6">
        <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_500px] xl:items-stretch">
          <div className="flex min-w-0 flex-col gap-3 xl:min-h-[168px] xl:justify-between">
            <div className="max-w-3xl">
              <p className="text-[0.82rem] font-semibold uppercase tracking-[0.24em] text-brand-accent">
                {settings.brandName}
              </p>
              <p className="mt-1 text-[0.95rem] leading-6 text-muted">
                {settings.brandIntro}
              </p>
            </div>

            <BrandLockup className="mt-auto max-w-[760px]" compact />
          </div>

          <div className="flex min-w-0 flex-col gap-3 rounded-[1.5rem] border border-border-soft bg-surface/72 px-5 py-4 xl:h-full xl:items-stretch xl:justify-between">
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted xl:min-h-[2.75rem] xl:justify-between">
              <a
                className="text-[1.12rem] font-semibold text-brand-ink"
                href={`tel:${settings.phone}`}
              >
                {settings.phoneDisplay}
              </a>
              <span
                aria-hidden="true"
                className="hidden h-7 w-px rounded-full bg-brand-ink/18 md:inline-block"
              />
              <a
                className="text-[1.04rem] hover:text-brand-ink"
                href={`mailto:${settings.email}`}
              >
                {settings.email}
              </a>
            </div>
            <div className="flex flex-col gap-4 xl:w-full xl:flex-1 xl:justify-between">
              <nav
                aria-label="Hauptnavigation"
                className="grid gap-2 xl:grid-cols-4"
              >
                {settings.navigation.map((item) => (
                  <Link
                    key={item.href}
                    className="rounded-full border border-brand-ink/12 bg-white/72 px-3 py-2 text-center text-[0.98rem] font-medium whitespace-nowrap text-brand-ink/80 shadow-[var(--shadow-pill)] backdrop-blur hover:-translate-y-0.5 hover:border-brand-accent/22 hover:bg-white/82 hover:text-brand-ink"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="grid gap-3">
                <ButtonLink
                  className="w-full px-5 py-3.5 text-[1.08rem]"
                  href={settings.primaryCta.href}
                  variant="primary"
                >
                  {settings.primaryCta.label}
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
