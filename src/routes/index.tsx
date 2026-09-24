import { createFileRoute } from "@tanstack/react-router";
import { Check, MessageCircle, ShieldCheck, BookOpen, TrendingUp, Lock } from "lucide-react";
import { useEffect } from "react";
import livroCover from "@/assets/livro-segredos-do-trade.png";
import precoPromocional from "@/assets/preco-promocional.png";


const WHATSAPP_URL =
  "https://go.xbotting.com.br/api/redirect/whatsapp?flowId=b3260b3d-18e3-4655-806c-989f0a95fcd6&phone=5562996379794&text=" +
  encodeURIComponent("Eu quero comprar o Segredos do Trade!");

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Segredos do Trade — O livro que está transformando traders comuns em consistentes" },
      { name: "description", content: "Descubra os princípios usados pelos traders consistentes. Chame no WhatsApp e garanta seu exemplar de Segredos do Trade." },
      { property: "og:title", content: "Segredos do Trade — Garanta seu exemplar pelo WhatsApp" },
      { property: "og:description", content: "O guia definitivo para quem quer parar de operar no escuro. Atendimento rápido pelo WhatsApp." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function WhatsAppButton({ label = "Falar no WhatsApp", pulse = false }: { label?: string; pulse?: boolean }) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex w-full items-center justify-center gap-3 rounded-full px-6 py-5 text-base font-bold text-primary-foreground transition-transform active:scale-[0.98] ${pulse ? "animate-pulse-cta" : ""}`}
      style={{
        backgroundImage: "var(--gradient-primary)",
        boxShadow: "var(--shadow-cta)",
      }}
    >
      <span className="grid h-8 w-8 place-items-center rounded-full bg-white/20">
        <MessageCircle className="h-5 w-5" strokeWidth={2.5} />
      </span>
      {label}
    </a>
  );
}

function VslPlayer() {
  useEffect(() => {
    const id = "vturb-player-script-6aa095dd41105cb5210749b3";
    if (document.getElementById(id)) return;
    const s = document.createElement("script");
    s.id = id;
    s.src =
      "https://scripts.converteai.net/0c9a654a-b497-48cd-bf97-f473b0e9e701/players/6aa095dd41105cb5210749b3/v4/player.js";
    s.async = true;
    document.head.appendChild(s);
  }, []);

  return (
    <div
      className="mt-6"
      dangerouslySetInnerHTML={{
        __html: `<vturb-smartplayer id="vid-6aa095dd41105cb5210749b3" style="display:block;margin:0 auto;width:100%;"><div class="vturb-player-placeholder" style="position:relative;width:100%;padding:56.25% 0 0;z-index:0;background-color:black;"></div></vturb-smartplayer>`,
      }}
    />
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto w-full max-w-[480px] px-5 pb-14 pt-10">
        {/* Hero */}
        <header className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent-foreground">
            <Lock className="h-3 w-3" /> Edição limitada
          </span>
          <h1 className="mt-4 text-3xl font-black uppercase leading-tight tracking-tight sm:text-4xl">
            VOCÊ RECEBE O LIVRO PRIMEIRO...{" "}
            <span
              className="rounded-md px-2 py-0.5 italic text-primary-foreground"
              style={{ backgroundImage: "var(--gradient-primary)" }}
            >
              E SÓ PAGA DEPOIS!🤝
            </span>{" "}
          </h1>
          <div className="mt-5 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-widest text-primary-deep">
            <span className="h-px w-8 bg-primary/40" />
            100% Seguro · Atendimento Humano
            <span className="h-px w-8 bg-primary/40" />
          </div>
        </header>

        {/* Book card */}
        <section
          className="mt-7 rounded-3xl border border-primary/15 p-5"
          style={{
            backgroundImage: "var(--gradient-card)",
            boxShadow: "var(--shadow-card)",
          }}
        >
          <div className="flex items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
              <BookOpen className="h-3 w-3" /> Mais vendido
            </span>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-primary-deep">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Somente hoje
            </span>
          </div>

          <div className="mt-5 flex justify-center">
            <img
              src={livroCover}
              alt="Livro Segredos do Trade"
              width={1024}
              height={1024}
              className="h-56 w-auto drop-shadow-[0_18px_30px_rgba(0,60,30,0.35)]"
            />
          </div>

          <div className="mt-6 flex justify-center px-1">
            <img
              src={precoPromocional}
              alt="De R$ 189,90 por R$ 10,00 à vista ou parcelado no cartão"
              width={1024}
              height={183}
              className="h-auto w-full max-w-[360px] object-contain mix-blend-multiply"
            />
          </div>

          <div className="mt-5 grid grid-cols-3 gap-2 rounded-2xl bg-white/70 p-3 text-center">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Páginas</p>
              <p className="mt-1 text-sm font-black text-foreground">+30</p>
            </div>
            <div className="border-x border-border">
              <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Bônus</p>
              <p className="mt-1 text-sm font-black text-primary-deep">Surpresa</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Garantia</p>
              <p className="mt-1 text-sm font-black text-foreground">Vitalícia</p>
            </div>
          </div>

          <p className="mt-5 text-center text-sm leading-relaxed text-foreground/80">
            O método direto que ensina <span className="font-bold text-primary-deep">disciplina, gestão de risco e leitura de mercado,</span> sem promessas mirabolantes, sem fórmula mágica.
          </p>
        </section>

        {/* Primary CTA */}
        <div className="mt-6">
          <WhatsAppButton label="PEDIR AGORA NO WHATSAPP" pulse />
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Atendimento rápido · Pague como preferir
          </p>
        </div>

        {/* Instructions */}
        <section className="mt-8 rounded-3xl border border-border bg-card p-5">
          <h2 className="text-base font-black uppercase tracking-wide text-foreground">
            Como comprar em 30 segundos
          </h2>
          <ol className="mt-4 space-y-3 text-sm">
            {[
              <>Toque no botão verde <span className="font-bold">Falar no WhatsApp</span>.</>,
              <>Envie a mensagem que já vem pronta:{" "}
                <span className="font-bold text-primary-deep">
                  "Eu quero comprar o Segredos do Trade!"
                </span></>,
              <>Nosso time te responde na hora com o link de pagamento e a forma de envio.</>,
            ].map((text, i) => (
              <li key={i} className="flex gap-3">
                <span
                  className="grid h-6 w-6 shrink-0 place-items-center rounded-full text-[11px] font-black text-primary-foreground"
                  style={{ backgroundImage: "var(--gradient-primary)" }}
                >
                  {i + 1}
                </span>
                <span className="leading-relaxed text-foreground/85">{text}</span>
              </li>
            ))}
          </ol>
          <div className="mt-5 rounded-2xl border border-dashed border-primary/40 bg-accent/60 p-3 text-center text-xs font-semibold text-primary-deep">
            ⚡ Enviar a mensagem padrão garante prioridade no atendimento.
          </div>
        </section>

        {/* Benefits */}
        <section className="mt-8">
          <h2 className="text-center text-xl font-black uppercase tracking-tight">
            O que você vai dominar
          </h2>
          <ul className="mt-5 space-y-3">
            {[
              "Gestão de risco que protege sua banca em qualquer cenário",
              "Leitura de price action sem indicadores poluindo o gráfico",
              "Mentalidade dos traders consistentes (e por que 95% falha)",
              "Setups testados para day trade e swing trade",
              "Rotina diária para operar com clareza e disciplina",
            ].map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 rounded-2xl border border-border bg-card p-3"
              >
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary/15 text-primary-deep">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <span className="text-sm leading-relaxed text-foreground/85">{b}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Trust */}
        <section className="mt-8 grid grid-cols-3 gap-3 text-center">
          {[
            { icon: ShieldCheck, label: "Compra Segura" },
            { icon: TrendingUp, label: "Método Real" },
            { icon: BookOpen, label: "Edição Digital" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="rounded-2xl border border-border bg-card p-3">
              <Icon className="mx-auto h-5 w-5 text-primary-deep" />
              <p className="mt-2 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                {label}
              </p>
            </div>
          ))}
        </section>

        {/* Final CTA */}
        <section className="mt-10 rounded-3xl p-6 text-center" style={{ backgroundImage: "var(--gradient-primary)" }}>
          <h2 className="text-2xl font-black uppercase leading-tight text-primary-foreground">
            Pronto para virar a chave?
          </h2>
          <p className="mt-2 text-sm text-primary-foreground/90">
            Chame agora no WhatsApp e envie a mensagem padrão para garantir seu exemplar de Segredos do Trade.
          </p>
          <div className="mt-5 rounded-full bg-white/10 p-1 backdrop-blur">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-3 rounded-full bg-white px-6 py-4 text-base font-black text-primary-deep transition-transform active:scale-[0.98]"
            >
              <MessageCircle className="h-5 w-5" strokeWidth={2.5} />
              Falar no WhatsApp
            </a>
          </div>
          <p className="mt-3 text-[11px] font-semibold uppercase tracking-widest text-primary-foreground/80">
            +55 62 9 9637-9794
          </p>
        </section>

        {/* VSL */}
        <VslPlayer />

        <footer className="mt-10 text-center text-[11px] text-muted-foreground">
          © {new Date().getFullYear()} Segredos do Trade · Este produto não garante resultados financeiros. Investir envolve riscos.
        </footer>
      </main>

      {/* Sticky mobile CTA */}
      <div className="pointer-events-none sticky bottom-0 left-0 right-0 z-30 -mt-16 bg-gradient-to-t from-background via-background/95 to-transparent px-5 pb-4 pt-10">
        <div className="pointer-events-auto mx-auto w-full max-w-[480px]">
          <WhatsAppButton label="Quero meu exemplar agora" />
        </div>
      </div>
    </div>
  );
}
