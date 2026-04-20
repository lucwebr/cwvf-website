import Image from "next/image";
import Link from "next/link";
import type { SiteSettings } from "@/lib/content/types";

const PARTNER_LOGOS = [
  {
    alt: "vfm Service Logo",
    height: 245,
    src: "/partner/vfm-service.png",
    width: 669,
  },
  {
    alt: "IGAL Logo",
    height: 777,
    src: "/partner/igal-signet.png",
    width: 1830,
  },
  {
    alt: "Adminova Logo",
    height: 480,
    src: "/partner/adminova.png",
    width: 1018,
  },
];

const COMPANY_LOGOS = [
  {
    alt: "C.Weber GmbH Logo",
    height: 371,
    src: "/weber-cw-logo.png",
    width: 1084,
  },
  {
    alt: "Lambert & Weber oHG Logo",
    height: 370,
    src: "/weber-lw-logo.png",
    width: 1084,
  },
];

type SiteFooterProps = {
  settings: SiteSettings;
};

export function SiteFooter({ settings }: SiteFooterProps) {
  return (
    <footer className="bg-brand-ink px-6 pb-10 pt-14 text-white md:px-10">
      <div className="mx-auto max-w-[88rem]">
        <div className="border-b border-white/10 pb-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr_1fr_18rem] lg:gap-12">
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
              <div className="flex max-w-[17rem] flex-col gap-3">
                {COMPANY_LOGOS.map((logo) => (
                  <div
                    key={logo.src}
                    className="flex h-20 items-center justify-center rounded-[1rem] border border-white/10 bg-white px-3 py-2.5"
                  >
                    <Image
                      alt={logo.alt}
                      className="h-auto max-h-full w-full object-contain"
                      height={logo.height}
                      src={logo.src}
                      width={logo.width}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-4 border-t border-white/10 pt-8 lg:gap-5">
            {PARTNER_LOGOS.map((logo) => (
              <div
                key={logo.src}
                className="flex h-20 w-full items-center justify-center rounded-[1rem] border border-white/10 bg-white px-5 py-4 sm:w-[13rem] lg:h-24 lg:w-[15rem]"
              >
                <Image
                  alt={logo.alt}
                  className="h-auto max-h-full w-full object-contain"
                  height={logo.height}
                  src={logo.src}
                  width={logo.width}
                />
              </div>
            ))}
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
