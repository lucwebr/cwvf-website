# Strapi Content Model Scaffold

Dieses Verzeichnis enthält ein leichtgewichtiges Schema-Scaffold für die in der Website verwendeten Content-Modelle.

Die Website selbst läuft bereits mit lokalem Fallback-Content und einer Strapi-kompatiblen Datenabstraktion. Sobald eine echte Strapi-Instanz vorhanden ist, können die Schemata als Grundlage für die Content-Typen dienen und die Frontend-Umgebungsvariablen aus `.env.example` gesetzt werden.

## Enthaltene Modelle

- `site-setting` als Single Type für Kontakt, Navigation, Footer und globale SEO-Daten
- `home-page` als Single Type für Startseiteninhalte
- `service` für Leistungsdetailseiten
- `team-member` für Teamprofile
- `testimonial` für Mandantenstimmen
- `faq-item` für FAQ-Einträge
- `legal-page` für Impressum und Datenschutz

## Geplanter Anschluss

1. Strapi lokal oder auf eigenem Server starten.
2. Die Content-Typen anhand der JSON-Schemata anlegen.
3. Inhalte befüllen.
4. `STRAPI_URL`, optional `STRAPI_API_TOKEN` und `REVALIDATE_SECRET` setzen.
5. Optional einen Webhook auf `/api/revalidate` konfigurieren.
