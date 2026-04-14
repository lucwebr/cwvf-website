"use client";

import { useSyncExternalStore } from "react";

const STORAGE_KEY = "cwvf-consent";
const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function emitChange() {
  listeners.forEach((listener) => listener());
}

function getSnapshot() {
  if (typeof window === "undefined") {
    return false;
  }

  return !window.localStorage.getItem(STORAGE_KEY);
}

export function ConsentBanner() {
  const visible = useSyncExternalStore(subscribe, getSnapshot, () => false);

  function storeConsent(value: "accepted" | "necessary") {
    window.localStorage.setItem(STORAGE_KEY, value);
    emitChange();
  }

  if (!visible) {
    return null;
  }

  return (
    <aside className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-4xl rounded-[1.5rem] border border-border-soft bg-brand-ink px-5 py-5 text-white shadow-[var(--shadow-banner)] md:px-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-highlight">
            Cookie-Hinweis
          </p>
          <p className="mt-2 text-sm leading-7 text-white/80 md:text-base">
            Notwendige Funktionen sind aktiv. Analyse- und Marketingdienste
            bleiben deaktiviert, bis Sie ausdrücklich zustimmen.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            className="rounded-full border border-white/18 px-4 py-2 text-sm font-semibold text-white hover:border-white/40 hover:bg-white/6"
            onClick={() => storeConsent("necessary")}
            type="button"
          >
            Nur notwendige Cookies
          </button>
          <button
            className="rounded-full bg-brand-highlight px-4 py-2 text-sm font-semibold text-brand-ink hover:-translate-y-0.5 hover:bg-[#e4c583]"
            onClick={() => storeConsent("accepted")}
            type="button"
          >
            Zustimmung erteilen
          </button>
        </div>
      </div>
    </aside>
  );
}
