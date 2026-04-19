"use client";

import { useFormStatus } from "react-dom";

export function ContactSubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="inline-flex min-h-11 items-center justify-center border border-brand-ink bg-brand-ink px-5 text-[0.82rem] font-semibold uppercase tracking-[0.18em] text-white transition hover:border-[#203650] hover:bg-[#203650] disabled:cursor-not-allowed disabled:opacity-70"
      disabled={pending}
      type="submit"
    >
      {pending ? "Anfrage wird gesendet ..." : "Anfrage senden"}
    </button>
  );
}
