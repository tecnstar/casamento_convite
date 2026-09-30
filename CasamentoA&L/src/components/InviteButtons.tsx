import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { GIFT_LIST_URL } from "@/lib/wedding";
import { RsvpDialog } from "@/components/RsvpDialog";

const secondary =
  "flex w-full items-center justify-center rounded-sm border border-gold/60 bg-card/70 px-6 py-4 text-[0.72rem] tracking-[0.28em] text-secondary-foreground uppercase transition-colors hover:bg-champagne";

export function InviteButtons() {
  const [open, setOpen] = useState(false);
  return (
    <div className="mx-auto flex w-full max-w-sm flex-col gap-3">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex w-full items-center justify-center rounded-sm px-6 py-5 text-[0.78rem] tracking-[0.3em] text-primary-foreground uppercase shadow-[var(--shadow-soft)] transition-transform duration-200 active:scale-[0.98]"
        style={{ background: "var(--gradient-gold)" }}
      >
        Confirmar Presença
      </button>
      <Link to="/local" className={secondary}>
        Local da Cerimônia
      </Link>
      <a href={GIFT_LIST_URL} target="_blank" rel="noreferrer" className={secondary}>
        Lista de Presentes
      </a>
      <RsvpDialog open={open} onOpenChange={setOpen} />
    </div>
  );
}
