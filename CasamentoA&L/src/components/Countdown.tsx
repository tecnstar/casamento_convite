import { useEffect, useState } from "react";
import { WEDDING_DATE_ISO } from "@/lib/wedding";

const TARGET = new Date(WEDDING_DATE_ISO).getTime();

function parts(diff: number) {
  const s = Math.floor(diff / 1000);
  return {
    dias: Math.floor(s / 86400),
    horas: Math.floor((s % 86400) / 3600),
    minutos: Math.floor((s % 3600) / 60),
    segundos: s % 60,
  };
}

export function Countdown() {
  const [diff, setDiff] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setDiff(TARGET - Date.now());
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  if (diff !== null && diff <= 0) {
    return (
      <p className="font-script text-4xl text-gold">Chegou o grande dia! ❤️</p>
    );
  }

  const p = parts(Math.max(diff ?? 0, 0));
  const items: Array<[string, number]> = [
    ["Dias", p.dias],
    ["Horas", p.horas],
    ["Minutos", p.minutos],
    ["Segundos", p.segundos],
  ];

  return (
    <div className="mx-auto grid w-full max-w-md grid-cols-4 gap-2 sm:gap-4">
      {items.map(([label, value]) => (
        <div
          key={label}
          className="paper rounded-sm border border-gold-soft/80 px-1 py-4 shadow-[var(--shadow-soft)]"
        >
          <div className="text-gold-gradient text-2xl font-light tabular-nums sm:text-4xl">
            {diff === null ? "--" : String(value).padStart(2, "0")}
          </div>
          <div className="mt-1 text-[0.55rem] tracking-[0.18em] text-muted-foreground uppercase sm:text-[0.65rem]">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}
