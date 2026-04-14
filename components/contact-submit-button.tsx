"use client";

import { useFormStatus } from "react-dom";

export function ContactSubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="inline-flex w-full items-center justify-center rounded-full bg-brand-ink px-5 py-3.5 text-sm font-semibold text-white shadow-[var(--shadow-pill-strong)] transition hover:-translate-y-0.5 hover:bg-[#0f119c] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
      disabled={pending}
      type="submit"
    >
      {pending ? "Kontaktwunsch wird versendet..." : "Kontaktwunsch absenden"}
    </button>
  );
}
