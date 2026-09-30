import { useState } from "react";

export function EnvelopeIntro({ onOpen }: { onOpen: () => void }) {
  const [opening, setOpening] = useState(false);

  const handleOpen = () => {
    if (opening) return;
    setOpening(true);
    window.setTimeout(onOpen, 1500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden px-6"
      style={{
        background:
          "radial-gradient(circle at 50% 35%, oklch(0.97 0.02 88), oklch(0.91 0.03 86))",
        animation: opening ? "envelope-away 1.5s ease-in forwards" : undefined,
      }}
    >
      <div className="w-full max-w-sm" style={{ perspective: "1200px" }}>
        <p className="mb-6 text-center text-[0.7rem] tracking-[0.42em] text-muted-foreground uppercase">
          Convite de Casamento
        </p>

        <div
          className="relative mx-auto aspect-[4/5] w-full max-w-[19rem]"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* carta interna */}
          <div
            className="paper absolute inset-x-3 top-3 bottom-8 rounded-sm border border-gold-soft/70 shadow-[var(--shadow-card)]"
            style={{
              animation: opening ? "letter-rise 1.2s 0.5s ease-in forwards" : undefined,
            }}
          >
            <div className="flex h-full flex-col items-center justify-center gap-2 px-6 text-center">
              <span className="font-script text-4xl text-gold">Aline</span>
              <span className="text-[0.65rem] tracking-[0.4em] text-muted-foreground uppercase">
                &amp;
              </span>
              <span className="font-script text-4xl text-gold">Luan</span>
              <span className="mt-3 text-[0.68rem] tracking-[0.35em] text-muted-foreground uppercase">
                12 . 12 . 2026
              </span>
            </div>
          </div>

          {/* corpo do envelope */}
          <div className="paper absolute inset-0 rounded-sm border border-gold-soft shadow-[var(--shadow-card)]" />
          <div
            className="absolute inset-x-0 bottom-0 h-[62%] rounded-b-sm border border-gold-soft"
            style={{
              background:
                "linear-gradient(170deg, oklch(0.965 0.02 88), oklch(0.925 0.028 86))",
              clipPath: "polygon(0 22%, 50% 0, 100% 22%, 100% 100%, 0 100%)",
            }}
          />

          {/* aba superior */}
          <div
            className="absolute inset-x-0 top-0 h-[52%] origin-top"
            style={{
              background:
                "linear-gradient(180deg, oklch(0.955 0.024 88), oklch(0.915 0.03 86))",
              clipPath: "polygon(0 0, 100% 0, 50% 100%)",
              transformStyle: "preserve-3d",
              animation: opening ? "flap-open 0.8s ease-in-out forwards" : undefined,
            }}
          />

          {/* selo de cera + texto juntos */}
          <button
            type="button"
            onClick={handleOpen}
            aria-label="Abrir o convite"
            className="absolute top-[44%] left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 transition-transform duration-300 active:scale-95"
            style={{
              animation: opening ? undefined : "seal-pulse 2.6s ease-in-out infinite",
              opacity: opening ? 0 : 1,
            }}
          >
            <span
              className="grid h-20 w-20 place-items-center rounded-full border border-gold/50 text-primary-foreground"
              style={{
                background:
                  "radial-gradient(circle at 34% 28%, oklch(0.62 0.13 32), oklch(0.44 0.13 28))",
              }}
            >
              <span className="font-script text-3xl leading-none">AL</span>
            </span>
            <span className="text-[0.6rem] tracking-[0.3em] text-muted-foreground uppercase">
              clique aqui para abrir
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
