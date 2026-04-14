"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { ContactSubmitButton } from "@/components/contact-submit-button";
import {
  type ContactFormState,
  submitContactForm,
} from "@/app/kontakt/actions";

const initialContactFormState: ContactFormState = {
  status: "idle",
  message: "",
};

export function ContactForm() {
  const [state, formAction] = useActionState(
    submitContactForm,
    initialContactFormState,
  );
  const formRef = useRef<HTMLFormElement>(null);
  const [contactPreference, setContactPreference] = useState<
    "callback" | "email"
  >("callback");
  const previousStatusRef = useRef<ContactFormState["status"]>("idle");
  const emailOnly = contactPreference === "email";

  useEffect(() => {
    if (
      state.status === "success" &&
      previousStatusRef.current !== "success"
    ) {
      formRef.current?.reset();
      queueMicrotask(() => setContactPreference("callback"));
    }

    previousStatusRef.current = state.status;
  }, [state.status]);

  return (
    <div
      className="rounded-[1.75rem] border border-border-soft bg-white/78 p-6 shadow-[var(--shadow-card)] backdrop-blur"
      data-surface="card"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-accent">
            Kontaktwunsch
          </p>
          <h3 className="mt-3 font-display text-2xl text-brand-ink">
            Kontaktformular
          </h3>
        </div>
        <span className="rounded-full border border-brand-highlight/50 bg-brand-highlight/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand-ink">
          Live
        </span>
      </div>

      <p className="mt-4 text-sm leading-7 text-muted">
        Geben Sie einfach an, ob Sie einen Rückruf wünschen oder Informationen
        per E-Mail erhalten möchten. Ihr Kontaktwunsch wird direkt an unser Team
        weitergeleitet.
      </p>

      <form action={formAction} className="mt-6 space-y-4" ref={formRef}>
        <div className="grid gap-4 md:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-brand-ink">
              Name
            </span>
            <input
              className="w-full rounded-2xl border border-border-soft bg-surface/76 px-4 py-3 text-sm outline-none focus:border-brand-accent"
              name="name"
              placeholder="Vor- und Nachname"
              required
              type="text"
            />
            {state.fieldErrors?.name ? (
              <p className="mt-2 text-sm text-red-700">{state.fieldErrors.name}</p>
            ) : null}
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-brand-ink">
              E-Mail
            </span>
            <input
              className="w-full rounded-2xl border border-border-soft bg-surface/76 px-4 py-3 text-sm outline-none focus:border-brand-accent"
              name="email"
              placeholder="name@beispiel.de"
              required
              type="email"
            />
            {state.fieldErrors?.email ? (
              <p className="mt-2 text-sm text-red-700">{state.fieldErrors.email}</p>
            ) : null}
          </label>
        </div>

        <fieldset className="rounded-[1.5rem] border border-border-soft bg-surface/72 px-4 py-4">
          <legend className="px-2 text-sm font-medium text-brand-ink">
            Gewünschte Kontaktart
          </legend>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            <label className="flex items-start gap-3 rounded-[1.2rem] border border-border-soft bg-white/78 px-4 py-4 text-sm leading-6 text-brand-ink">
              <input
                className="mt-1 h-4 w-4 accent-brand-accent"
                defaultChecked
                name="contactPreference"
                onChange={() => setContactPreference("callback")}
                type="radio"
                value="callback"
              />
              <span>
                <span className="block font-semibold text-brand-ink">
                  Rückruf gewünscht
                </span>
                <span className="block text-muted">
                  Wir melden uns telefonisch im gewünschten Zeitraum.
                </span>
              </span>
            </label>

            <label className="flex items-start gap-3 rounded-[1.2rem] border border-border-soft bg-white/78 px-4 py-4 text-sm leading-6 text-brand-ink">
              <input
                className="mt-1 h-4 w-4 accent-brand-accent"
                name="contactPreference"
                onChange={() => setContactPreference("email")}
                type="radio"
                value="email"
              />
              <span>
                <span className="block font-semibold text-brand-ink">
                  Infos per E-Mail
                </span>
                <span className="block text-muted">
                  Wir senden die erste Rückmeldung und Unterlagen per E-Mail.
                </span>
              </span>
            </label>
          </div>
          {state.fieldErrors?.contactPreference ? (
            <p className="mt-3 text-sm text-red-700">
              {state.fieldErrors.contactPreference}
            </p>
          ) : null}
        </fieldset>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-brand-ink">
              Telefon
            </span>
            <input
              className="w-full rounded-2xl border border-border-soft bg-surface/76 px-4 py-3 text-sm outline-none focus:border-brand-accent"
              name="phone"
              placeholder="06806 922146"
              type="tel"
            />
            {state.fieldErrors?.phone ? (
              <p className="mt-2 text-sm text-red-700">{state.fieldErrors.phone}</p>
            ) : null}
          </label>
          <label className="block">
            <span
              className={`mb-2 block text-sm font-medium ${
                emailOnly ? "text-muted" : "text-brand-ink"
              }`}
            >
              Bevorzugte Kontaktzeit
            </span>
            <select
              className={`w-full rounded-2xl border px-4 py-3 text-sm outline-none ${
                emailOnly
                  ? "cursor-not-allowed border-border-soft/70 bg-surface/45 text-muted"
                  : "border-border-soft bg-surface/76 focus:border-brand-accent"
              }`}
              disabled={emailOnly}
              name="preferredTime"
            >
              <option>Bitte auswählen</option>
              <option>Morgens</option>
              <option>Mittags</option>
              <option>Nachmittags</option>
              <option>Per E-Mail ausreichend</option>
            </select>
          </label>
        </div>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-brand-ink">
            Anliegen
          </span>
          <textarea
            className="min-h-32 w-full rounded-2xl border border-border-soft bg-surface/76 px-4 py-3 text-sm outline-none focus:border-brand-accent"
            name="message"
            placeholder="Worum geht es in Ihrem Anliegen?"
            required
          />
          {state.fieldErrors?.message ? (
            <p className="mt-2 text-sm text-red-700">{state.fieldErrors.message}</p>
          ) : null}
        </label>

        <label className="flex items-start gap-3 rounded-2xl border border-border-soft bg-surface/76 px-4 py-4 text-sm leading-6 text-muted">
          <input
            className="mt-1 h-4 w-4 accent-brand-accent"
            name="consent"
            required
            type="checkbox"
          />
          <span>
            Ich habe die Datenschutzhinweise gelesen und bin mit einer
            Kontaktaufnahme zur Bearbeitung meines Anliegens einverstanden.
          </span>
        </label>
        {state.fieldErrors?.consent ? (
          <p className="text-sm text-red-700">{state.fieldErrors.consent}</p>
        ) : null}

        <div className="pt-2">
          <ContactSubmitButton />
          {state.message ? (
            <p
              className={`mt-3 text-sm leading-6 ${
                state.status === "success" ? "text-green-700" : "text-red-700"
              }`}
            >
              {state.message}
            </p>
          ) : null}
        </div>
      </form>
    </div>
  );
}
