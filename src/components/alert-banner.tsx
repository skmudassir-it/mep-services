"use client";

import { useState } from "react";
import { X, Megaphone } from "lucide-react";

export function AlertBanner({ message = "24/7 emergency HVAC service — call our hotline anytime." }: { message?: string }) {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <div className="fixed inset-x-0 top-0 z-[60]">
      <div className="flex items-center justify-center gap-3 bg-gradient-to-r from-primary via-[#244b7a] to-[#2a5a92] px-10 py-2.5 text-center text-sm text-white shadow-lg">
        <Megaphone className="h-4 w-4 shrink-0 text-accent" />
        <span className="truncate">{message}</span>
        <button
          type="button"
          onClick={() => setVisible(false)}
          className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-white/80 transition-colors hover:bg-white/10 hover:text-white"
          aria-label="Dismiss notification"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
