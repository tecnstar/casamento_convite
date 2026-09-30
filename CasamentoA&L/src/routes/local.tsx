import { createFileRoute, Link } from "@tanstack/react-router";
import { Divider, Reveal } from "@/components/Reveal";
import { ADDRESS, IMAGES, MAPS_EMBED_URL, MAPS_URL } from "@/lib/wedding";

export const Route = createFileRoute("/local")({
  head: () => ({
    meta: [
      { title: "Local da Cerimônia — Aline & Luan" },
      {
        name: "description",
        content: `Cerimônia e festa do casamento de Aline e Luan: ${ADDRESS}.`,
      },
      { property: "og:title", content: "Local da Cerimônia — Aline & Luan" },
      {
        property: "og:description",
        content: "Veja o local da cerimônia, o mapa e a festa de Aline e Luan.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LocalPage,
});

function Photo({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="overflow-hidden rounded-sm border border-gold-soft/70 shadow-[var(--shadow-soft)]">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        width={1200}
        height={912}
        className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-[1.04]"
      />
    </figure>
  );
}

function LocalPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-5 pt-8 pb-16 sm:px-8">
      <Link
        to="/"
        className="text-[0.68rem] tracking-[0.3em] text-muted-foreground uppercase transition-colors hover:text-gold"
      >
        ← Voltar ao convite
      </Link>

      <Reveal className="mt-8 text-center">
        <h1 className="font-script text-4xl text-gold sm:text-5xl">Local da Cerimônia</h1>
      </Reveal>

      <Reveal className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Photo src={IMAGES.local1} alt="Local da cerimônia" />
        <Photo src={IMAGES.local2} alt="Local da cerimônia" />
      </Reveal>

      <Reveal className="mt-8 text-center">
        <p className="mx-auto max-w-md text-lg leading-relaxed">{ADDRESS}</p>
      </Reveal>

      <Reveal className="mt-6">
        <div className="overflow-hidden rounded-sm border border-gold-soft/70 shadow-[var(--shadow-soft)]">
          <iframe
            title="Mapa do local da cerimônia"
            src={MAPS_EMBED_URL}
            loading="lazy"
            className="h-[260px] w-full border-0 sm:h-[360px]"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noreferrer"
          className="mx-auto mt-4 flex w-full max-w-sm items-center justify-center rounded-sm px-6 py-4 text-[0.72rem] tracking-[0.3em] text-primary-foreground uppercase shadow-[var(--shadow-soft)] transition-transform active:scale-[0.98]"
          style={{ background: "var(--gradient-gold)" }}
        >
          Abrir no Google Maps
        </a>
      </Reveal>

      <Divider />

      <Reveal className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Photo src={IMAGES.festa1} alt="Festa de casamento" />
        <Photo src={IMAGES.festa2} alt="Festa de casamento" />
      </Reveal>

      <Reveal className="mt-8 text-center">
        <p className="mx-auto max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
          Após a cerimônia, a celebração continua! Esperamos vocês para comemorar esse
          momento tão especial conosco. ❤️
        </p>
      </Reveal>

      <Divider />

      <Reveal className="text-center">
        <p className="font-script text-3xl text-gold">Aline &amp; Luan</p>
        <p className="mt-2 text-[0.68rem] tracking-[0.35em] text-muted-foreground uppercase">
          12.12.2026
        </p>
      </Reveal>
    </main>
  );
}
