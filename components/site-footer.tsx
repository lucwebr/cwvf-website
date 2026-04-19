import Image from "next/image";
import Link from "next/link";
import type { SiteSettings } from "@/lib/content/types";

type SiteFooterProps = {
  settings: SiteSettings;
};

export function SiteFooter({ settings }: SiteFooterProps) {
  return (
    <footer className="bg-brand-ink px-6 pb-10 pt-14 text-white md:px-10">
      <div className="mx-auto max-w-[88rem]">
        <div className="grid gap-10 border-b border-white/10 pb-12 lg:grid-cols-[1fr_1fr_1fr_220px] lg:gap-12">
          <div>
            <p className="text-[0.76rem] font-semibold uppercase tracking-[0.24em] text-brand-highlight">
              Leistungen
            </p>
            <div className="mt-5 space-y-3 text-sm text-white/65">
              {settings.footerServices.map((item) => (
                <Link key={item.href} className="block hover:text-white" href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[0.76rem] font-semibold uppercase tracking-[0.24em] text-brand-highlight">
              Unternehmen
            </p>
            <div className="mt-5 space-y-3 text-sm text-white/65">
              <Link className="block hover:text-white" href="/ueber-uns">
                Über uns
              </Link>
              <Link className="block hover:text-white" href="/faq">
                FAQ
              </Link>
              <Link className="block hover:text-white" href="/kontakt">
                Kontakt
              </Link>
            </div>
          </div>

          <div>
            <p className="text-[0.76rem] font-semibold uppercase tracking-[0.24em] text-brand-highlight">
              Kontakt
            </p>
            <div className="mt-5 space-y-3 text-sm leading-7 text-white/65">
              <p>{settings.addressLines[0]}</p>
              <p>{settings.addressLines[1]}</p>
              <p className="pt-3">
                <a className="hover:text-white" href={`tel:${settings.phone}`}>
                  {settings.phoneDisplay}
                </a>
              </p>
              <p>
                <a className="hover:text-white" href={`mailto:${settings.email}`}>
                  {settings.email}
                </a>
              </p>
            </div>
          </div>

          <div className="lg:justify-self-end">
            <div className="flex h-14 w-14 items-center justify-center bg-white/6">
              <Image
                alt="CWVF Logo"
                className="h-auto w-full object-contain p-2"
                height={80}
                src="/cwvf-logo.png"
                width={80}
              />
            </div>
            <p className="mt-4 text-sm leading-7 text-white/65">
              Lambert & Weber oHG
              <br />
              C.Weber GmbH
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-8 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {settings.legalName}</p>
          <div className="flex flex-wrap gap-6">
            <Link className="hover:text-white" href="/impressum">
              Impressum
            </Link>
            <Link className="hover:text-white" href="/datenschutz">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
