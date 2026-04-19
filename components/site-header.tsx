import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import type { SiteSettings } from "@/lib/content/types";

type SiteHeaderProps = {
  settings: SiteSettings;
};

export function SiteHeader({ settings }: SiteHeaderProps) {
  return (
    <header className="px-6 pt-3 md:px-10 md:pt-4">
      <div className="mx-auto max-w-[88rem] border-b border-border-soft pb-4">
        <div className="flex flex-col gap-5 lg:grid lg:grid-cols-[minmax(0,1fr)_auto] lg:items-stretch lg:gap-10">
          <div className="max-w-[46rem] lg:flex lg:items-stretch">
            <Link
              aria-label="Zur Startseite"
              className="inline-flex items-end gap-4 lg:min-h-[4.9rem] lg:h-full"
              href="/"
            >
              <span className="relative flex aspect-square h-[4.9rem] self-stretch items-center justify-center overflow-hidden rounded-[1rem] bg-brand-ink">
                <Image
                  alt="CWVF Logo"
                  className="object-contain p-2"
                  fill
                  priority
                  sizes="80px"
                  src="/cwvf-logo.png"
                />
              </span>
              <span className="flex min-w-0 self-end flex-col">
                <span className="text-[0.82rem] font-semibold uppercase tracking-[0.21em] text-brand-accent lg:whitespace-nowrap">
                  {settings.brandName}
                </span>
                <span className="mt-1 text-[1rem] leading-[1.4] text-muted lg:whitespace-nowrap">
                  {settings.tagline}
                </span>
              </span>
            </Link>
          </div>

          <div className="flex min-h-[4.9rem] flex-col gap-2.5 lg:items-end lg:justify-end">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-1 text-[0.95rem] text-muted lg:translate-y-0.5">
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
            <div className="flex flex-wrap items-end gap-x-5 gap-y-2">
              <nav
                aria-label="Hauptnavigation"
                className="flex flex-wrap items-center gap-x-5 gap-y-2 lg:translate-y-[2px]"
              >
                {settings.navigation.map((item) => (
                  <Link
                    key={item.href}
                    className="text-[0.98rem] leading-6 font-medium text-brand-ink/84 hover:text-brand-ink"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <ButtonLink className="px-4.5" href={settings.primaryCta.href}>
                {settings.primaryCta.label}
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
