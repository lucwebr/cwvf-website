import type { Metadata } from "next";
import { ConsentBanner } from "@/components/consent-banner";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getSiteContent } from "@/lib/content";
import { absoluteUrl } from "@/lib/content/metadata";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const { siteSettings } = await getSiteContent();

  return {
    metadataBase: absoluteUrl("/"),
    title: {
      default: siteSettings.companyName,
      template: `%s | ${siteSettings.seoTitleSuffix}`,
    },
    description: siteSettings.seoDescription,
    openGraph: {
      title: siteSettings.companyName,
      description: siteSettings.seoDescription,
      url: "/",
      siteName: siteSettings.companyName,
      locale: "de_DE",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: siteSettings.companyName,
      description: siteSettings.seoDescription,
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { siteSettings } = await getSiteContent();

  return (
    <html lang="de" className="h-full antialiased">
      <body className="min-h-full bg-background text-foreground">
        <div className="relative flex min-h-full flex-col overflow-x-clip">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[42rem] bg-[radial-gradient(circle_at_top,_rgba(162,185,203,0.34),_transparent_45%),linear-gradient(180deg,_#f4efe8,_#f8f4ee_48%,_#f5f7fb)]"
          />
          <SiteHeader settings={siteSettings} />
          <main className="flex-1">{children}</main>
          <SiteFooter settings={siteSettings} />
          <ConsentBanner />
        </div>
      </body>
    </html>
  );
}
