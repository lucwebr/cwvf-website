# Weber Website

MVP-Website für Weber Versicherungs- & Finanzkonzepte auf Basis von `Next 16`, `React 19` und `Tailwind 4`.

## Enthalten

- deutschsprachige Marketing-Seite mit Startseite, Leistungen, Über uns, FAQ, Kontakt, Impressum und Datenschutz
- gemeinsame Content-Abstraktion mit lokalem Fallback und Strapi-kompatibler Fetch-Schicht
- vorbereiteter Consent-Banner
- SEO-Basis mit `metadata`, `robots`, `sitemap` und dynamischem OG-Bild
- Revalidation-Endpoint für spätere CMS-Webhooks
- Strapi-Schema-Scaffold unter [`cms/strapi`](/Users/lucaweber/cwvf-website/cms/strapi/README.md)

## Lokale Entwicklung

```bash
npm install
npm run dev
```

Wichtige Checks:

```bash
npm run lint
npm run typecheck
npm run build
```

## Kontaktformular

Das Kontaktformular auf [`/kontakt`](/Users/lucaweber/cwvf-website/app/kontakt/page.tsx) versendet Anfragen per Resend.

Dafür werden diese Variablen benötigt:

- `RESEND_API_KEY`
- `CONTACT_FROM_EMAIL`
- `CONTACT_TO_EMAIL` optional, Standard ist `info@cwvf.de`

## Strapi-Anbindung

Ohne CMS läuft die Website mit lokalem Fallback-Content aus [`lib/content/fallback-data.ts`](/Users/lucaweber/cwvf-website/lib/content/fallback-data.ts).

Für eine echte Strapi-Anbindung:

1. Self-hosted Strapi bereitstellen.
2. Content-Typen gemäß [`cms/strapi`](/Users/lucaweber/cwvf-website/cms/strapi/README.md) anlegen.
3. Variablen aus [`.env.example`](/Users/lucaweber/cwvf-website/.env.example) setzen.
4. Optional einen Webhook auf `/api/revalidate` konfigurieren.

## Hinweis zu Rechtstexten und Referenzen

Impressum, Datenschutz und Testimonials sind im aktuellen Stand bewusst als Projekt-/Placeholder-Grundgerüst formuliert und müssen vor einem Livegang mit echten, freigegebenen Daten ersetzt werden.
