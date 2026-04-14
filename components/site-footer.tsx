import Image from "next/image";
import Link from "next/link";
import type { SiteSettings } from "@/lib/content/types";

type SiteFooterProps = {
  settings: SiteSettings;
};

export function SiteFooter({ settings }: SiteFooterProps) {
  return (
    <footer className="px-6 pb-8 pt-16 md:px-10">
      <div className="mx-auto max-w-[88rem] rounded-[2rem] border border-border-soft bg-brand-ink px-6 py-10 text-white shadow-[var(--shadow-panel-strong)] md:px-10">
        <div className="flex justify-start lg:justify-end">
          <div className="grid gap-8 lg:grid-cols-[180px_420px] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-highlight">
                Rechtliches
              </p>
              <div className="mt-4 flex flex-col gap-3 text-sm leading-7 text-white/72">
                <Link className="hover:text-white" href="/impressum">
                  Impressum
                </Link>
                <Link className="hover:text-white" href="/datenschutz">
                  Datenschutz
                </Link>
              </div>
            </div>

            <div className="max-w-md">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-highlight">
                Kontakt
              </p>
              <div className="mt-4 space-y-3 text-sm leading-7 text-white/80">
                <p>{settings.addressLines.join(", ")}</p>
                <p>
                  <a className="hover:text-white" href={`tel:${settings.phone}`}>
                    {settings.phoneDisplay}
                  </a>
                  <br />
                  <a className="hover:text-white" href={`mailto:${settings.email}`}>
                    {settings.email}
                  </a>
                </p>
                <ul className="space-y-1">
                  {settings.openingHours.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-white/6 px-5 py-6 backdrop-blur md:px-6">
          <div className="grid gap-6 lg:grid-cols-[0.4fr_1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-highlight">
                Partner & Kooperation
              </p>
              <p className="mt-2 text-sm leading-7 text-white/72">
                Im Verbund mit etablierten Partnern und Kooperationsstrukturen
                für eine breite Marktabdeckung.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-[1.35rem] border border-white/10 bg-white px-4 py-4 shadow-[var(--shadow-card-brand)]">
                <div className="flex min-h-[92px] items-center justify-center">
                  <Image
                    alt="IGAL Signet"
                    className="h-auto w-full max-w-[210px] object-contain"
                    height={338}
                    src="/partner/igal-signet.png"
                    width={597}
                  />
                </div>
              </div>

              <div className="rounded-[1.35rem] border border-white/10 bg-white px-4 py-4 shadow-[var(--shadow-card-brand)]">
                <div className="flex min-h-[92px] items-center justify-center">
                  <Image
                    alt="ADMInova Logo"
                    className="h-auto w-full max-w-[230px] object-contain"
                    height={311}
                    src="/partner/adminova.png"
                    width={1089}
                  />
                </div>
              </div>

              <div className="rounded-[1.35rem] border border-white/10 bg-white px-4 py-4 shadow-[var(--shadow-card-brand)]">
                <div className="flex min-h-[92px] items-center justify-center">
                  <Image
                    alt="vfm Service Logo"
                    className="h-auto w-full max-w-[220px] object-contain"
                    height={369}
                    src="/partner/vfm-service.png"
                    width={794}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/12 pt-6 text-sm text-white/65 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {settings.legalName}</p>
        </div>
      </div>
    </footer>
  );
}
