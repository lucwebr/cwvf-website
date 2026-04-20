import type { SiteContent } from "@/lib/content/types";

export const fallbackSiteContent: SiteContent = {
  siteSettings: {
    brandName: "Weber Versicherungs- & Finanzkonzepte",
    companyName: "Weber Versicherungs- & Finanzkonzepte",
    legalName: "Lambert & Weber oHG · C.Weber GmbH",
    legalEntities: ["Lambert & Weber oHG", "C.Weber GmbH"],
    tagline:
      "Absicherung, Vorsorge und Vermögensaufbau mit gründlicher, persönlicher Beratung.",
    brandIntro:
      "Gemeinsamer Markenauftritt von Lambert & Weber oHG und C.Weber GmbH.",
    phone: "+496806922146",
    phoneDisplay: "06806 922146",
    email: "info@cwvf.de",
    addressLines: ["Goethestraße 9-11", "66292 Riegelsberg"],
    openingHours: [
      "Montag bis Freitag: 09:00 bis 18:00 Uhr",
      "Beratungstermine digital und vor Ort nach Vereinbarung",
    ],
    navigation: [
      { label: "Leistungen", href: "/leistungen" },
      { label: "Über uns", href: "/ueber-uns" },
      { label: "FAQ", href: "/faq" },
      { label: "Kontakt", href: "/kontakt" },
    ],
    footerServices: [
      { label: "Versicherungsanalyse", href: "/leistungen/versicherung" },
      { label: "Vorsorgeplanung", href: "/leistungen/vorsorge" },
      { label: "Vermögensaufbau", href: "/leistungen/vermoegensaufbau" },
    ],
    primaryCta: {
      label: "Nehmen Sie Kontakt auf",
      href: `tel:+496806922146`,
      variant: "secondary",
    },
    secondaryCta: {
      label: "Rückruf anfragen",
      href: "/#kontakt",
      variant: "primary",
    },
    seoTitleSuffix: "Weber Versicherungs- & Finanzkonzepte",
    seoDescription:
      "Deutschsprachige Website für persönliche Beratung zu Versicherung, Vorsorge und Vermögensaufbau mit klaren Ansprechpartnern und starkem Kontaktfokus.",
  },
  homePage: {
    eyebrow: "Persönliche Finanz- und Versicherungsberatung",
    title: "Sicherheit für heute. Klarheit für morgen.",
    intro:
      "Wir begleiten Privatkundinnen und Privatkunden bei Absicherung, Vorsorge und Vermögensaufbau mit verständlicher Sprache, gründlicher Analyse und einem klaren Blick auf Ziele, Wünsche und persönliche Lebensumstände.",
    trustHighlights: [
      "Persönliche Rundumberatung mit festem Ansprechpartner und Versorgungs-Check",
      "Gründliche Analyse statt Schnellschuss oder Produktdruck",
      "Maßgeschneiderte Konzepte auf Basis Ihrer Ziele und Lebenssituation",
    ],
    featuredServiceSlugs: [
      "versicherung",
      "vorsorge",
      "vermoegensaufbau",
    ],
    advisoryPrinciples: [
      "Wir hören zu, analysieren gründlich und entwickeln daraus intelligente, maßgeschneiderte Konzepte.",
      "Ziele, Wünsche und persönliche Lebensumstände werden in jeder Empfehlung gemeinsam berücksichtigt.",
      "Auf Basis einer umfassenden Analyse Ihrer Versorgungssituation erarbeiten wir Lösungen, die sich für Sie wirklich lohnen.",
    ],
    processSteps: [
      {
        title: "Erstgespräch mit Überblick",
        description:
          "Wir klären Ziele, Wünsche, Lebenssituation und offene Fragen, ohne direkt in Tarifdetails zu springen.",
      },
      {
        title: "Bestandsaufnahme",
        description:
          "Bestehende Policen, Vorsorgelösungen und Sparbausteine werden umfassend analysiert und strukturiert eingeordnet.",
      },
      {
        title: "Empfehlung mit Begründung",
        description:
          "Sie erhalten nachvollziehbare, maßgeschneiderte Optionen inklusive Vor- und Nachteilen sowie klarer Priorisierung.",
      },
      {
        title: "Laufende Begleitung",
        description:
          "Bei Lebensveränderungen passen wir Schutz, Rücklagen und Ziele gemeinsam an.",
      },
    ],
    reviewSummary: {
      provider: "eKomi",
      ratingLabel: "5,0 / 5",
      totalReviews: 189,
      recentReviews: 7,
      recentWindow: "letzte 12 Monate",
      award: "Gold-Siegel",
      updatedLabel: "Stand: Juli 2025",
      sourceUrl:
        "https://www.ekomi.de/bewertungen-e4a5a9c9344d772b603b81e77798826b.html",
    },
    seo: {
      title: "Versicherungs- und Finanzberatung für Privatkunden",
      description:
        "Weber Versicherungs- & Finanzkonzepte begleitet Privatkunden bei Versicherung, Vorsorge und Vermögensaufbau mit persönlicher Beratung, klaren Ansprechpartnern und einem starken Kontaktfokus.",
      path: "/",
    },
  },
  services: [
    {
      slug: "versicherung",
      title: "Versicherungsanalyse und Schutzkonzepte",
      shortTitle: "Versicherung",
      kicker: "Risiken sortieren, Verträge verständlich machen",
      summary:
        "Wir ordnen bestehende Policen, prüfen Lücken und priorisieren Schutz, der im Alltag wirklich trägt.",
      heroText:
        "Gute Absicherung beginnt nicht mit einer langen Produktliste, sondern mit einer nüchternen Bestandsaufnahme. Gemeinsam klären wir, welche Risiken Sie tatsächlich absichern sollten und welche Verträge zu Ihrer Lebensphase passen.",
      audience:
        "Für Berufseinsteiger, Familien, Immobilienkäufer und alle, die bestehende Verträge einmal mit Ruhe prüfen möchten.",
      highlights: [
        "Privathaftpflicht, Hausrat und Wohngebäude strukturiert prüfen",
        "Berufsunfähigkeit, Risikoabsicherung und existenzielle Lücken priorisieren",
        "Bestehende Policen verständlich zusammenfassen und Doppelungen aufdecken",
      ],
      benefits: [
        "Sie wissen, welche Bausteine unverzichtbar sind und wo Sie aufräumen können.",
        "Empfehlungen orientieren sich an Ihrer Lebensrealität statt an Einzelprodukten.",
        "Unterlagen werden so vorbereitet, dass spätere Anpassungen leichter fallen.",
      ],
      process: [
        "Bestehende Verträge sammeln und in eine klare Übersicht bringen",
        "Risiken nach Relevanz für Einkommen, Wohnen und Familie sortieren",
        "Empfehlungen mit Priorität, Kostenrahmen und Umsetzungsreihenfolge festhalten",
      ],
      seo: {
        title: "Versicherungsanalyse für Privatkunden",
        description:
          "Bestehende Verträge prüfen, Versorgungslücken erkennen und Schutzkonzepte verständlich priorisieren.",
        path: "/leistungen/versicherung",
      },
      faqSlugs: ["beratung-kosten", "unterlagen-zum-erstgespraech"],
    },
    {
      slug: "vorsorge",
      title: "Vorsorgeplanung mit Augenmaß",
      shortTitle: "Vorsorge",
      kicker: "Zukunft planen, ohne den Alltag auszublenden",
      summary:
        "Wir strukturieren Rücklagen, Altersvorsorge und Absicherung so, dass Entscheidungen in Etappen möglich bleiben.",
      heroText:
        "Vorsorge wirkt oft komplex, weil mehrere Themen gleichzeitig zusammenlaufen. Wir übersetzen diese Themen in einen realistischen Plan: Was ist sofort wichtig, was kann warten und wie passt das zu Ihrem Einkommen und Ihren Zielen?",
      audience:
        "Für Menschen mit familiärer Verantwortung, Selbstständige im Privathaushalt und alle, die ihre private Vorsorge neu sortieren möchten.",
      highlights: [
        "Rücklagen, Notfallreserven und Altersvorsorge gemeinsam betrachten",
        "Ziele in kurz-, mittel- und langfristige Etappen übersetzen",
        "Versorgungslücken nachvollziehbar und ohne Alarmismus sichtbar machen",
      ],
      benefits: [
        "Sie erhalten einen Vorsorgefahrplan statt einzelner unverbundener Empfehlungen.",
        "Entscheidungen bleiben flexibel und an veränderte Lebenssituationen anpassbar.",
        "Kosten, Laufzeiten und Prioritäten werden offen besprochen.",
      ],
      process: [
        "Status quo von Rücklagen, Versorgung und bestehenden Bausteinen erfassen",
        "Lebensziele und finanziellen Spielraum in konkrete Prioritäten übersetzen",
        "Vorsorgeplan mit zeitlicher Reihenfolge und klaren nächsten Schritten ableiten",
      ],
      seo: {
        title: "Vorsorgeberatung und Planung",
        description:
          "Strukturierte Vorsorgeplanung für Privatkunden mit Blick auf Rücklagen, Absicherung und langfristige Ziele.",
        path: "/leistungen/vorsorge",
      },
      faqSlugs: ["digitale-beratung", "beratung-kosten"],
    },
    {
      slug: "vermoegensaufbau",
      title: "Vermögensaufbau mit klarer Struktur",
      shortTitle: "Vermögensaufbau",
      kicker: "Anlegen verständlich machen und langfristig durchhalten",
      summary:
        "Wir bringen Ordnung in Sparziele, Anlagehorizonte und bestehende Bausteine, damit Vermögensaufbau planbar wird.",
      heroText:
        "Vermögensaufbau muss weder spekulativ noch unübersichtlich sein. Gemeinsam entwickeln wir eine Struktur, die zu Ihrem Zeithorizont, Ihrer Risikobereitschaft und Ihren übrigen Verpflichtungen passt.",
      audience:
        "Für Privatkunden, die regelmäßiges Sparen, bestehende Depots oder größere Einmalbeträge sinnvoll einordnen möchten.",
      highlights: [
        "Sparziele, Zeithorizonte und Liquiditätsbedarf sauber trennen",
        "Bestehende Anlagebausteine nachvollziehbar einordnen",
        "Regelmäßiges Investieren mit der übrigen Finanzplanung verzahnen",
      ],
      benefits: [
        "Sie bekommen eine klare Struktur statt widersprüchlicher Einzelimpulse.",
        "Anlageentscheidungen bleiben an Ihren Alltag und Ihre Ziele angebunden.",
        "Die Beratung reduziert Komplexität und schafft eine belastbare Routine.",
      ],
      process: [
        "Ziele und Anlagehorizonte nach kurzfristig, planbar und langfristig gliedern",
        "Bestehende Depots, Sparpläne und freie Liquidität zusammen betrachten",
        "Empfehlung mit realistischen Beiträgen und Überprüfungspunkten festlegen",
      ],
      partner: {
        eyebrow: "Partner für Finanzanlagen",
        title: "FFB als Plattform für Finanzanlagen",
        description:
          "Für Finanzanlagen arbeiten wir mit der FIL Fondsbank (FFB) als Partner innerhalb der Fidelity Group. Damit lassen sich Depotlösungen, Sparpläne und bestehende Anlagebausteine in einer strukturierten Plattformumgebung abbilden.",
        href: "https://www.ffb.de",
        logoSrc: "/partner/ffb-fidelity-group-rgb.png",
        logoAlt: "FFB Fidelity Group Logo",
      },
      seo: {
        title: "Beratung für Vermögensaufbau",
        description:
          "Vermögensaufbau mit klarer Struktur, verständlichen Empfehlungen und langfristigem Plan für Privatkunden.",
        path: "/leistungen/vermoegensaufbau",
      },
      faqSlugs: ["welche-themen", "digitale-beratung"],
    },
  ],
  teamMembers: [
    {
      name: "Christoph Weber",
      role: "Funktion folgt",
      bio: "Kurzprofil folgt. Weitere Informationen zu Aufgabenbereich und Beratungsschwerpunkten werden ergänzt.",
      focusAreas: [],
      initials: "CW",
      imageSrc: "/team/christoph-weber.png",
    },
    {
      name: "Silke Weber",
      role: "Funktion folgt",
      bio: "Kurzprofil folgt. Weitere Informationen zu Aufgabenbereich und Beratungsschwerpunkten werden ergänzt.",
      focusAreas: [],
      initials: "SW",
      imageSrc: "/team/silke-weber.png",
    },
    {
      name: "Wolfgang Wetzel",
      role: "Funktion folgt",
      bio: "Kurzprofil folgt. Weitere Informationen zu Aufgabenbereich und Beratungsschwerpunkten werden ergänzt.",
      focusAreas: [],
      initials: "WW",
      imageSrc: "/team/wolfgang-wetzel.png",
    },
    {
      name: "Martin Latz",
      role: "Funktion folgt",
      bio: "Kurzprofil folgt. Weitere Informationen zu Aufgabenbereich und Beratungsschwerpunkten werden ergänzt.",
      focusAreas: [],
      initials: "ML",
      imageSrc: "/team/martin-latz.png",
    },
    {
      name: "Dieter Klein",
      role: "Funktion folgt",
      bio: "Kurzprofil folgt. Weitere Informationen zu Aufgabenbereich und Beratungsschwerpunkten werden ergänzt.",
      focusAreas: [],
      initials: "DK",
      imageSrc: "/team/dieter-klein.jpg",
    },
    {
      name: "Nicole Feller",
      role: "Funktion folgt",
      bio: "Kurzprofil folgt. Weitere Informationen zu Aufgabenbereich und Beratungsschwerpunkten werden ergänzt.",
      focusAreas: [],
      initials: "NF",
      imageSrc: "/team/nicole-feller.jpg",
    },
  ],
  testimonials: [
    {
      quote:
        "Mein Berater ist sehr freundlich und sehr kompetent in der Beratung. Auf Fragen oder Anfragen wird immer unverzüglich reagiert. Sehr schnelle Schadensregulierung.",
      authorName: "eKomi Bewertung",
      authorRole: "verifizierte Kundenstimme",
      location: "Juni 2022",
      source: "eKomi",
    },
    {
      quote:
        "Immer hilfsbereit, sehr kompetent, konstruktive Beratung und Hilfe. Schnelle Lösung der Anliegen. Das wichtigste: persönlicher erreichbarer Ansprechpartner, der sich um die Belange des Versicherten sehr engagiert kümmert.",
      authorName: "eKomi Bewertung",
      authorRole: "verifizierte Kundenstimme",
      location: "Juni 2023",
      source: "eKomi",
    },
    {
      quote:
        "Tolle Beratung, bei Schäden sehr schnelle Hilfe. Ich bin seit vielen Jahren sehr zufrieden.",
      authorName: "eKomi Bewertung",
      authorRole: "verifizierte Kundenstimme",
      location: "Juni 2022",
      source: "eKomi",
    },
  ],
  faqs: [
    {
      slug: "beratung-kosten",
      question: "Was kostet ein erstes Beratungsgespräch?",
      answer:
        "Das Erstgespräch dient der Einordnung Ihrer Situation und ist unverbindlich. Danach besprechen wir transparent, wie eine weitere Zusammenarbeit aussieht.",
      category: "Beratung",
    },
    {
      slug: "unterlagen-zum-erstgespraech",
      question: "Welche Unterlagen sollte ich mitbringen?",
      answer:
        "Hilfreich sind bestehende Policen, Vorsorgeunterlagen, eine Übersicht über Sparverträge und offene Fragen, die Sie bereits gesammelt haben.",
      category: "Beratung",
    },
    {
      slug: "digitale-beratung",
      question: "Sind Beratungen auch digital möglich?",
      answer:
        "Ja. Viele Gespräche können per Videotermin stattfinden. Unterlagen bereiten wir digital vor, damit Entscheidungen auch zwischen Terminen nachvollziehbar bleiben.",
      category: "Ablauf",
    },
    {
      slug: "welche-themen",
      question: "Muss ich alle Themen auf einmal angehen?",
      answer:
        "Nein. Wir priorisieren gemeinsam, welche Themen zuerst wichtig sind. So entsteht ein realisierbarer Fahrplan statt einer Überforderung durch zu viele Baustellen gleichzeitig.",
      category: "Strategie",
    },
    {
      slug: "wechsel-bestehender-vertraege",
      question: "Prüfen Sie auch bestehende Verträge, ohne direkt alles zu ersetzen?",
      answer:
        "Ja. Häufig ist es sinnvoller, Bestehendes zuerst zu verstehen und nur gezielt anzupassen, statt pauschal neu abzuschließen.",
      category: "Versicherung",
    },
    {
      slug: "rueckruf",
      question: "Wie schnell erhalte ich eine Rückmeldung?",
      answer:
        "Wir melden uns schnellstmöglich bei Ihnen zurück. Wenn Sie einen bevorzugten Zeitraum angeben, berücksichtigen wir ihn gern nach Möglichkeit.",
      category: "Kontakt",
    },
  ],
  legalPages: [
    {
      slug: "impressum",
      title: "Impressum",
      intro:
        "Dieses Impressum ist als technische Vorlage angelegt. Vor dem Livegang müssen die echten Unternehmens-, Aufsichts- und Kontaktdaten ergänzt und rechtlich geprüft werden.",
      sections: [
        {
          heading: "Angaben gemäß § 5 TMG",
          paragraphs: [
            "Lambert & Weber oHG · C.Weber GmbH",
            "Goethestraße 9-11, 66292 Riegelsberg",
            "E-Mail: info@cwvf.de, Telefon: 06806 922146",
          ],
        },
        {
          heading: "Verantwortlich für den Inhalt",
          paragraphs: [
            "Vertreten durch: Christoph Weber",
            "Gegebenenfalls weitere Vertretungsberechtigungen und Funktionsbezeichnungen sind vor Veröffentlichung mit den tatsächlichen Unternehmensdaten abzugleichen.",
          ],
        },
        {
          heading: "Regulatorische Hinweise",
          paragraphs: [
            "Je nach Unternehmensform und Beratungsschwerpunkt können weitere Pflichtangaben erforderlich sein, etwa Registereinträge, Aufsichtsbehörden, Vermittlerstatus oder Umsatzsteuer-Identifikationsnummern.",
            "Diese Angaben müssen vor dem Livegang verbindlich ergänzt werden.",
          ],
        },
      ],
      seo: {
        title: "Impressum",
        description:
          "Impressum der Website von Weber Versicherungs- & Finanzkonzepte.",
        path: "/impressum",
      },
    },
    {
      slug: "datenschutz",
      title: "Datenschutz",
      intro:
        "Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.",
      sections: [
        {
          heading: "1. Datenschutz auf einen Blick",
          paragraphs: [
            "Allgemeine Hinweise: Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie dieser Datenschutzerklärung.",
            "Datenerfassung auf dieser Website: Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen.",
            "Wie erfassen wir Ihre Daten? Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.",
            "Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten, zum Beispiel Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs. Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.",
            "Wofür nutzen wir Ihre Daten? Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.",
            "Welche Rechte haben Sie bezüglich Ihrer Daten? Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.",
            "Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.",
            "Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.",
            "Analyse-Tools und Tools von Drittanbietern: Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit sogenannten Analyseprogrammen. Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der folgenden Datenschutzerklärung.",
          ],
        },
        {
          heading: "2. Allgemeine Hinweise und Pflichtinformationen",
          paragraphs: [
            "Datenschutz: Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.",
            "Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Diese Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.",
            "Wir weisen darauf hin, dass die Datenübertragung im Internet, zum Beispiel bei der Kommunikation per E-Mail, Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.",
            "Hinweis zur verantwortlichen Stelle: Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist Christoph Weber, Goethestraße 9-11, 66292 Riegelsberg, Telefon: 06806 922146, E-Mail: c.weber@cwvf.de.",
            "Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten, zum Beispiel von Namen, E-Mail-Adressen oder ähnlichen Angaben, entscheidet.",
            "Speicherdauer: Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben, zum Beispiel steuer- oder handelsrechtliche Aufbewahrungsfristen. Im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.",
            "Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website: Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO beziehungsweise Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden.",
            "Im Falle einer ausdrücklichen Einwilligung in die Übertragung personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in Ihr Endgerät, zum Beispiel via Device-Fingerprinting, eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs. 1 TTDSG. Die Einwilligung ist jederzeit widerrufbar.",
            "Sind Ihre Daten zur Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind, auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. Über die jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird in den folgenden Absätzen dieser Datenschutzerklärung informiert.",
            "Widerruf Ihrer Einwilligung zur Datenverarbeitung: Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.",
            "Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung gemäß Art. 21 DSGVO: Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, haben Sie jederzeit das Recht, aus Gründen, die sich aus ihrer besonderen Situation ergeben, gegen die Verarbeitung ihrer personenbezogenen Daten Widerspruch einzulegen. Dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling.",
            "Die jeweilige Rechtsgrundlage, auf der eine Verarbeitung beruht, entnehmen Sie dieser Datenschutzerklärung. Wenn Sie Widerspruch einlegen, werden wir Ihre betroffenen personenbezogenen Daten nicht mehr verarbeiten, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.",
            "Werden Ihre personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, so haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung sie betreffender personenbezogener Daten zum Zwecke derartiger Werbung einzulegen. Dies gilt auch für das Profiling, soweit es mit solcher Direktwerbung in Verbindung steht. Wenn Sie widersprechen, werden Ihre personenbezogenen Daten anschließend nicht mehr zum Zwecke der Direktwerbung verwendet.",
            "Beschwerderecht bei der zuständigen Aufsichtsbehörde: Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde zu, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.",
            "Recht auf Datenübertragbarkeit: Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.",
            "Auskunft, Berichtigung und Löschung: Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie gegebenenfalls ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.",
            "Recht auf Einschränkung der Verarbeitung: Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit an uns wenden.",
            "Das Recht auf Einschränkung der Verarbeitung besteht insbesondere dann, wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah oder geschieht, wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie diese jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen oder wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben und noch nicht feststeht, wessen Interessen überwiegen.",
            "Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.",
            "SSL- bzw. TLS-Verschlüsselung: Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- beziehungsweise TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.",
            "Wenn die SSL- beziehungsweise TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.",
          ],
        },
        {
          heading: "3. Datenerfassung auf dieser Website",
          paragraphs: [
            "Server-Log-Dateien: Der Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage sowie die IP-Adresse.",
            "Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.",
            "Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website. Hierzu müssen die Server-Log-Files erfasst werden.",
            "Kontaktformular: Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.",
            "Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen gemäß Art. 6 Abs. 1 lit. f DSGVO oder auf Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO, sofern diese abgefragt wurde. Die Einwilligung ist jederzeit widerrufbar.",
            "Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt, zum Beispiel nach abgeschlossener Bearbeitung Ihrer Anfrage. Zwingende gesetzliche Bestimmungen, insbesondere Aufbewahrungsfristen, bleiben unberührt.",
            "Anfrage per E-Mail, Telefon oder Telefax: Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten, also insbesondere Name und Anfrage, zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.",
            "Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen gemäß Art. 6 Abs. 1 lit. f DSGVO oder auf Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO, sofern diese abgefragt wurde. Die Einwilligung ist jederzeit widerrufbar.",
            "Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt, zum Beispiel nach abgeschlossener Bearbeitung Ihres Anliegens. Zwingende gesetzliche Bestimmungen, insbesondere gesetzliche Aufbewahrungsfristen, bleiben unberührt.",
            "Quelle: https://www.e-recht24.de",
          ],
        },
      ],
      seo: {
        title: "Datenschutz",
        description:
          "Datenschutzhinweise der Website von Weber Versicherungs- & Finanzkonzepte.",
        path: "/datenschutz",
      },
    },
  ],
};
