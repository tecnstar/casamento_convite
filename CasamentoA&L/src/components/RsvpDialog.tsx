import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { confirmRsvp } from "@/lib/supabase";

const input =
  "w-full rounded-sm border border-gold/50 bg-background px-4 py-3 text-base text-foreground outline-none focus:border-gold";

export function RsvpDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) {
  const [name, setName] = useState("");
  const [companions, setCompanions] = useState<string[]>([]);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState("");

  function reset() {
    setName("");
    setCompanions([]);
    setStatus("idle");
    setError("");
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const n = name.trim();
    if (n.length < 2) return setError("Digite seu nome completo.");
    const comps = companions.map((c) => c.trim()).filter(Boolean);
    if (comps.length !== companions.length) return setError("Preencha o nome de cada acompanhante ou remova-o.");
    setError("");
    setStatus("sending");
    try {
      await confirmRsvp(n, comps);
      setStatus("done");
    } catch (err) {
      console.error(err);
      setStatus("error");
      setError("Não foi possível confirmar agora. Tente novamente.");
    }
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        onOpenChange(v);
        if (!v) setTimeout(reset, 300);
      }}
    >
      <DialogContent className="paper max-h-[90vh] overflow-y-auto border-gold/40 sm:max-w-md">
        <DialogHeader className="text-center sm:text-center">
          <DialogTitle className="font-script text-4xl font-normal text-gold">Confirmar Presença</DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            Aline &amp; Luan · 12.12.2026
          </DialogDescription>
        </DialogHeader>

        {status === "done" ? (
          <div className="py-6 text-center">
            <p className="text-xl italic text-foreground">Presença confirmada!</p>
            <p className="mt-2 text-sm text-muted-foreground">Obrigado, esperamos você com muito carinho.</p>
            <button
              onClick={() => onOpenChange(false)}
              className="mt-6 rounded-sm px-8 py-3 text-[0.72rem] tracking-[0.28em] text-primary-foreground uppercase"
              style={{ background: "var(--gradient-gold)" }}
            >
              Fechar
            </button>
          </div>
        ) : (
          <form onSubmit={submit} className="flex flex-col gap-4">
            <label className="flex flex-col gap-2">
              <span className="text-[0.68rem] tracking-[0.28em] text-muted-foreground uppercase">Seu nome</span>
              <input className={input} value={name} maxLength={120} onChange={(e) => setName(e.target.value)} placeholder="Nome completo" />
            </label>

            {companions.map((c, i) => (
              <div key={i} className="flex flex-col gap-2">
                <span className="text-[0.68rem] tracking-[0.28em] text-muted-foreground uppercase">
                  Acompanhante {companions.length > 1 ? i + 1 : ""}
                </span>
                <div className="flex gap-2">
                  <input
                    className={input}
                    value={c}
                    maxLength={120}
                    placeholder="Nome do acompanhante"
                    onChange={(e) => setCompanions(companions.map((x, j) => (j === i ? e.target.value : x)))}
                  />
                  <button
                    type="button"
                    aria-label="Remover acompanhante"
                    onClick={() => setCompanions(companions.filter((_, j) => j !== i))}
                    className="rounded-sm border border-gold/50 px-3 text-muted-foreground hover:bg-champagne"
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}

            <button
              type="button"
              onClick={() => setCompanions([...companions, ""])}
              className="rounded-sm border border-dashed border-gold/60 py-3 text-[0.68rem] tracking-[0.25em] text-secondary-foreground uppercase hover:bg-champagne"
            >
              + Adicionar acompanhante
            </button>

            {error && <p className="text-center text-sm text-destructive">{error}</p>}

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-2 rounded-sm py-4 text-[0.75rem] tracking-[0.3em] text-primary-foreground uppercase disabled:opacity-60"
              style={{ background: "var(--gradient-gold)" }}
            >
              {status === "sending" ? "Enviando..." : "Confirmar"}
            </button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
