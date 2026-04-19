"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { ContactSubmitButton } from "@/components/contact-submit-button";
import {
  type ContactFormState,
  submitContactForm,
} from "@/app/kontakt/actions";
import { cn } from "@/lib/utils";

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
  const [preferredTime, setPreferredTime] = useState("");
  const previousStatusRef = useRef<ContactFormState["status"]>("idle");
  const emailOnly = contactPreference === "email";

  useEffect(() => {
    if (
      state.status === "success" &&
      previousStatusRef.current !== "success"
    ) {
      formRef.current?.reset();
      queueMicrotask(() => {
        setContactPreference("callback");
        setPreferredTime("");
      });
    }

    previousStatusRef.current = state.status;
  }, [state.status]);

  return (
    <div className="border-t border-border-soft pt-6">
      <p className="text-[0.76rem] font-semibold uppercase tracking-[0.26em] text-brand-accent">
        Anfrage
      </p>
      <form action={formAction} className="mt-6 space-y-7" ref={formRef}>
        <div className="grid gap-6 md:grid-cols-2">
          <label className="block border-t border-border-soft pt-4">
            <span className="block text-[0.76rem] font-semibold uppercase tracking-[0.22em] text-brand-accent">
              Vorname
            </span>
            <input
              className="mt-3 w-full bg-transparent text-base text-brand-ink outline-none placeholder:text-muted/55"
              name="name"
              placeholder="Max Mustermann"
              required
              type="text"
            />
            {state.fieldErrors?.name ? (
              <p className="mt-2 text-sm text-red-700">{state.fieldErrors.name}</p>
            ) : null}
          </label>

          <label className="block border-t border-border-soft pt-4">
            <span className="block text-[0.76rem] font-semibold uppercase tracking-[0.22em] text-brand-accent">
              E-Mail
            </span>
            <input
              className="mt-3 w-full bg-transparent text-base text-brand-ink outline-none placeholder:text-muted/55"
              name="email"
              placeholder="max@beispiel.de"
              required
              type="email"
            />
            {state.fieldErrors?.email ? (
              <p className="mt-2 text-sm text-red-700">{state.fieldErrors.email}</p>
            ) : null}
          </label>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <label className="block border-t border-border-soft pt-4">
            <span className="block text-[0.76rem] font-semibold uppercase tracking-[0.22em] text-brand-accent">
              Telefon
            </span>
            <input
              className="mt-3 w-full bg-transparent text-base text-brand-ink outline-none placeholder:text-muted/55"
              name="phone"
              placeholder="06806 922146"
              type="tel"
            />
            {state.fieldErrors?.phone ? (
              <p className="mt-2 text-sm text-red-700">{state.fieldErrors.phone}</p>
            ) : null}
          </label>

          <label className="block border-t border-border-soft pt-4">
            <span className="block text-[0.76rem] font-semibold uppercase tracking-[0.22em] text-brand-accent">
              Kontaktart
            </span>
            <select
              className="mt-3 w-full bg-transparent text-base text-brand-ink outline-none"
              name="contactPreference"
              onChange={(event) => {
                const nextPreference =
                  event.target.value === "email" ? "email" : "callback";
                setContactPreference(nextPreference);
                if (nextPreference === "email") {
                  setPreferredTime("");
                }
              }}
              value={contactPreference}
            >
              <option value="callback">Rückruf gewünscht</option>
              <option value="email">Infos per E-Mail</option>
            </select>
            {state.fieldErrors?.contactPreference ? (
              <p className="mt-2 text-sm text-red-700">
                {state.fieldErrors.contactPreference}
              </p>
            ) : null}
          </label>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <label className="block border-t border-border-soft pt-4">
            <span className="block text-[0.76rem] font-semibold uppercase tracking-[0.22em] text-brand-accent">
              Kontaktzeit
            </span>
            <select
              className={cn(
                "mt-3 w-full bg-transparent text-base outline-none",
                emailOnly
                  ? "cursor-not-allowed text-muted/45"
                  : "text-brand-ink",
              )}
              disabled={emailOnly}
              name="preferredTime"
              onChange={(event) => setPreferredTime(event.target.value)}
              value={preferredTime}
            >
              <option value="">Bitte auswählen</option>
              <option value="morgens">morgens</option>
              <option value="mittags">mittags</option>
              <option value="abends">abends</option>
            </select>
          </label>

          <div className="border-t border-border-soft pt-4 text-sm leading-7 text-muted">
            <p>
              Ihre Daten werden vertraulich behandelt und nicht weitergegeben.
            </p>
          </div>
        </div>

        <label className="block border-t border-border-soft pt-4">
          <span className="block text-[0.76rem] font-semibold uppercase tracking-[0.22em] text-brand-accent">
            Nachricht
          </span>
          <textarea
            className="mt-3 min-h-28 w-full bg-transparent text-base text-brand-ink outline-none placeholder:text-muted/55"
            name="message"
            placeholder="Womit kann ich Ihnen helfen?"
            required
          />
          {state.fieldErrors?.message ? (
            <p className="mt-2 text-sm text-red-700">{state.fieldErrors.message}</p>
          ) : null}
        </label>

        <label className="flex items-start gap-3 border-t border-border-soft pt-4 text-sm leading-6 text-muted">
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

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border-soft pt-6">
          <p className="max-w-md text-sm leading-7 text-muted">
            Wir melden uns persönlich zurück und ordnen Ihr Anliegen zunächst in
            Ruhe ein.
          </p>
          <ContactSubmitButton />
        </div>

        {state.message ? (
          <p
            className={`text-sm leading-6 ${
              state.status === "success" ? "text-green-700" : "text-red-700"
            }`}
          >
            {state.message}
          </p>
        ) : null}
      </form>
    </div>
  );
}
