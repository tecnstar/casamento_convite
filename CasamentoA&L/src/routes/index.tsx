import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { EnvelopeIntro } from "@/components/EnvelopeIntro";
import { Countdown } from "@/components/Countdown";
import { InviteButtons } from "@/components/InviteButtons";
import { Divider, Reveal } from "@/components/Reveal";
import { IMAGES } from "@/lib/wedding";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aline & Luan — 12.12.2026" },
      {
        name: "description",
        content:
          "Aline e Luan convidam para a celebração de seu casamento, em 12 de dezembro de 2026, sábado às 17:10.",
      },
      { property: "og:title", content: "Aline & Luan — 12.12.2026" },
      {
        property: "og:description",
        content: "Com amor, esperamos vocês para celebrar o nosso sim.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      {!opened && <EnvelopeIntro onOpen={() => setOpened(true)} />}

      <main
        className={
          opened
            ? "mx-auto w-full max-w-3xl px-5 pb-16 animate-fade-in sm:px-8"
            : "pointer-events-none invisible h-0 overflow-hidden"
        }
      >
        <section className="pt-10">
          <Reveal>
            <figure className="overflow-hidden">
              <img
                src={IMAGES.casal}
                alt="Aline e Luan"
                width={1200}
                height={1504}
                className="h-auto w-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-[1.03]"
                style={{
                  WebkitMaskImage:
                    "linear-gradient(to bottom, black 55%, transparent 100%), radial-gradient(ellipse 100% 100% at 50% 30%, black 60%, transparent 100%)",
                  WebkitMaskComposite: "source-in",
                  maskImage:
                    "linear-gradient(to bottom, black 55%, transparent 100%), radial-gradient(ellipse 100% 100% at 50% 30%, black 60%, transparent 100%)",
                  maskComposite: "intersect",
                }}
              />
            </figure>
          </Reveal>
        </section>

        <Divider />

        <Reveal className="text-center">
          <p className="mx-auto max-w-md text-xl leading-relaxed text-foreground italic sm:text-2xl">
            “As muitas águas não poderão apagar o amor.”
          </p>
          <p className="mt-3 text-[0.68rem] tracking-[0.3em] text-muted-foreground uppercase">
            Cântico dos Cânticos 8,7
          </p>
        </Reveal>

        <Reveal className="mt-10 text-center" delay={120}>
          <p className="mx-auto max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
            Deus escreveu a nossa história com amor e, agora, diante d’Ele, damos um novo
            passo: unir nossas vidas para sempre.
          </p>
        </Reveal>

        <Divider />

        <Reveal className="text-center">
          <h1 className="font-script text-5xl leading-tight text-gold sm:text-7xl">
            Aline <span className="text-gold-soft">&amp;</span> Luan
          </h1>
          <p className="mt-6 text-[0.7rem] tracking-[0.3em] text-muted-foreground uppercase">
            Convidam para a celebração de seu casamento
          </p>
          <p className="mt-6 text-3xl font-light tracking-[0.12em] sm:text-4xl">
            12 / 12 / 2026
          </p>
          <p className="mt-2 text-sm tracking-[0.25em] text-muted-foreground uppercase">
            Sábado às 17:10
          </p>
        </Reveal>

        <Reveal className="mt-10">
          <Countdown />
        </Reveal>

        <Divider />

        <Reveal>
          <InviteButtons />
        </Reveal>

        <Divider />

        <Reveal className="pb-4 text-center">
          <p className="font-script text-4xl text-gold">Aline &amp; Luan</p>
          <p className="mt-2 text-[0.7rem] tracking-[0.35em] text-muted-foreground uppercase">
            12.12.2026
          </p>
          <p className="mt-4 text-base text-muted-foreground italic">
            “Com amor, esperamos vocês.”
          </p>
        </Reveal>
      </main>
    </>
  );
}
