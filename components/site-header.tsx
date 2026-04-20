import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import type { SiteSettings } from "@/lib/content/types";

type SiteHeaderProps = {
  settings: SiteSettings;
};

export function SiteHeader({ settings }: SiteHeaderProps) {
  return (
    <header className="px-6 pt-2 md:px-10 md:pt-4">
      <div className="mx-auto max-w-[88rem] border-b border-border-soft pb-4">
        <div className="flex flex-col gap-5 xl:grid xl:grid-cols-[minmax(0,1fr)_auto] xl:items-stretch xl:gap-10">
          <div className="max-w-[46rem] xl:flex xl:items-stretch">
            <Link
              aria-label="Zur Startseite"
              className="grid w-full grid-cols-[4.1rem_minmax(0,1fr)] items-center gap-3 xl:inline-flex xl:min-h-[4.9rem] xl:h-full xl:w-auto xl:grid-cols-none xl:items-end xl:gap-4"
              href="/"
            >
              <span className="relative flex aspect-square h-[4.1rem] items-center justify-center overflow-hidden rounded-[1rem] bg-brand-ink xl:h-[4.9rem] xl:self-stretch xl:rounded-[1rem]">
                <Image
                  alt="CWVF Logo"
                  className="object-contain p-1.25 xl:p-2"
                  fill
                  priority
                  sizes="80px"
                  src="/cwvf-logo.png"
                />
              </span>
              <span className="flex min-w-0 flex-1 flex-col self-center xl:self-end">
                <span className="text-[0.66rem] font-semibold uppercase tracking-[0.12em] text-brand-accent xl:text-[0.78rem] xl:tracking-[0.18em] 2xl:text-[0.82rem] 2xl:tracking-[0.21em] 2xl:whitespace-nowrap">
                  {settings.brandName}
                </span>
                <span className="mt-1 text-[0.78rem] leading-[1.22] text-muted sm:text-[0.9rem] sm:leading-[1.32] xl:text-[0.95rem] xl:leading-[1.35] 2xl:text-[1rem] 2xl:leading-[1.4] 2xl:whitespace-nowrap">
                  {settings.tagline}
                </span>
              </span>
            </Link>
          </div>

          <div className="flex min-h-[4.9rem] flex-col gap-3 xl:items-end xl:justify-end">
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 pt-1 text-[0.9rem] text-muted xl:translate-y-0.5 xl:justify-start xl:text-[0.95rem]">
              <a
                className="font-semibold text-brand-ink hover:text-brand-accent"
                href={`tel:${settings.phone}`}
              >
                {settings.phoneDisplay}
              </a>
              <span
                aria-hidden="true"
                className="h-4 w-px bg-brand-ink/18"
              />
              <a
                className="hover:text-brand-ink"
                href={`mailto:${settings.email}`}
              >
                {settings.email}
              </a>
            </div>
            <div className="flex flex-col gap-3 xl:flex-row xl:flex-wrap xl:items-end xl:gap-x-5 xl:gap-y-2">
              <nav
                aria-label="Hauptnavigation"
                className="flex w-full flex-wrap items-center justify-between gap-x-4 gap-y-2 text-[0.96rem] xl:w-auto xl:translate-y-[2px] xl:justify-start xl:gap-x-5 xl:text-[0.98rem]"
              >
                {settings.navigation.map((item) => (
                  <Link
                    key={item.href}
                    className="leading-6 font-medium text-brand-ink/84 hover:text-brand-ink"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <ButtonLink className="w-full justify-center px-4.5 xl:w-auto" href={settings.primaryCta.href}>
                {settings.primaryCta.label}
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
