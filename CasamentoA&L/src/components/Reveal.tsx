import type { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, className: revealClass } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={cn(revealClass, className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function Divider() {
  return (
    <div className="mx-auto flex w-full max-w-[220px] items-center gap-3 py-8">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold-soft" />
      <span className="text-gold text-lg leading-none">&#10086;</span>
      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold-soft" />
    </div>
  );
}
