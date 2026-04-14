"use server";

type FieldName =
  | "name"
  | "email"
  | "phone"
  | "contactPreference"
  | "preferredTime"
  | "message"
  | "consent";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: Partial<Record<FieldName, string>>;
};

function getStringValue(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function buildContactMail({
  name,
  email,
  phone,
  message,
  preferredTime,
  contactPreference,
}: {
  name: string;
  email: string;
  phone: string;
  message: string;
  preferredTime: string;
  contactPreference: string;
}) {
  const contactPreferenceLabel =
    contactPreference === "callback" ? "Rückruf gewünscht" : "Infos per E-Mail";

  const preferredTimeLabel =
    preferredTime && preferredTime !== "Bitte auswählen"
      ? preferredTime
      : "Keine Präferenz angegeben";

  const escapedMessage = escapeHtml(message).replaceAll("\n", "<br />");

  return {
    subject: `Neuer Kontaktwunsch von ${name}`,
    text: [
      "Neuer Kontaktwunsch über die Website",
      "",
      `Name: ${name}`,
      `E-Mail: ${email}`,
      `Telefon: ${phone || "Nicht angegeben"}`,
      `Kontaktart: ${contactPreferenceLabel}`,
      `Bevorzugte Kontaktzeit: ${preferredTimeLabel}`,
      "",
      "Anliegen:",
      message,
    ].join("\n"),
    html: `
      <div style="font-family: Arial, sans-serif; color: #102033; line-height: 1.6;">
        <h2 style="margin-bottom: 16px;">Neuer Kontaktwunsch über die Website</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>E-Mail:</strong> ${escapeHtml(email)}</p>
        <p><strong>Telefon:</strong> ${escapeHtml(phone || "Nicht angegeben")}</p>
        <p><strong>Kontaktart:</strong> ${escapeHtml(contactPreferenceLabel)}</p>
        <p><strong>Bevorzugte Kontaktzeit:</strong> ${escapeHtml(preferredTimeLabel)}</p>
        <p style="margin-top: 20px;"><strong>Anliegen:</strong></p>
        <p>${escapedMessage}</p>
      </div>
    `,
  };
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = getStringValue(formData, "name");
  const email = getStringValue(formData, "email");
  const phone = getStringValue(formData, "phone");
  const message = getStringValue(formData, "message");
  const preferredTime = getStringValue(formData, "preferredTime");
  const contactPreference = getStringValue(formData, "contactPreference");
  const consent = formData.get("consent");

  const fieldErrors: Partial<Record<FieldName, string>> = {};

  if (!name) {
    fieldErrors.name = "Bitte geben Sie Ihren Namen an.";
  }

  if (!email) {
    fieldErrors.email = "Bitte geben Sie Ihre E-Mail-Adresse an.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    fieldErrors.email = "Bitte geben Sie eine gültige E-Mail-Adresse an.";
  }

  if (!contactPreference) {
    fieldErrors.contactPreference = "Bitte wählen Sie eine Kontaktart aus.";
  }

  if (contactPreference === "callback" && !phone) {
    fieldErrors.phone = "Für einen Rückruf benötigen wir Ihre Telefonnummer.";
  }

  if (!message) {
    fieldErrors.message = "Bitte beschreiben Sie kurz Ihr Anliegen.";
  }

  if (!consent) {
    fieldErrors.consent =
      "Bitte bestätigen Sie die Datenschutzhinweise für die Kontaktaufnahme.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Bitte prüfen Sie Ihre Eingaben.",
      fieldErrors,
    };
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL ?? "info@cwvf.de";

  if (!resendApiKey || !from) {
    return {
      status: "error",
      message:
        "Der Formularversand ist noch nicht vollständig konfiguriert. Bitte setzen Sie RESEND_API_KEY und CONTACT_FROM_EMAIL auf dem Server.",
    };
  }

  const mail = buildContactMail({
    name,
    email,
    phone,
    message,
    preferredTime,
    contactPreference,
  });

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: mail.subject,
        html: mail.html,
        text: mail.text,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Contact form delivery failed.", errorText);
      return {
        status: "error",
        message:
          "Der Kontaktwunsch konnte gerade nicht versendet werden. Bitte versuchen Sie es erneut oder melden Sie sich direkt telefonisch.",
      };
    }

    return {
      status: "success",
      message:
        "Vielen Dank. Ihr Kontaktwunsch wurde erfolgreich versendet. Wir melden uns schnellstmöglich zurück.",
    };
  } catch (error) {
    console.error("Contact form request failed.", error);
    return {
      status: "error",
      message:
        "Der Kontaktwunsch konnte gerade nicht versendet werden. Bitte versuchen Sie es erneut oder melden Sie sich direkt telefonisch.",
    };
  }
}
