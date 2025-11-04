"use client";

import { useEffect, useState } from "react";

// ==================== CONSTANTES ====================
const GUICHEWEB_URL = "https://www.guicheweb.com.br/samba-de-caboclo_47652";

const EVENT = {
  date: "2025-11-20T14:00:00-03:00",
  address: "Rua Coronel Serrado, 202 — São Gonçalo, RJ",
  mainArtist: "Irmãos de Axé",
  supportArtists: ["Jóia do Couro", "Ellen Motta", "Alujá", "DJ RJay"],
};

// ==================== FUNÇÕES DE TRACKING ====================

/**
 * Gera um click_id único (8 caracteres base36)
 */
function generateClickId(): string {
  return Math.random().toString(36).substring(2, 10).toUpperCase();
}

/**
 * Extrai parâmetros UTM/tracking da URL atual
 */
function getCurrentTrackingParams(): Record<string, string> {
  if (typeof window === "undefined") return {};

  const params = new URLSearchParams(window.location.search);
  const tracking: Record<string, string> = {};

  // Preservar UTMs, gclid, fbclid
  const preserveParams = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_content",
    "utm_term",
    "gclid",
    "fbclid",
  ];

  preserveParams.forEach((param) => {
    const value = params.get(param);
    if (value) tracking[param] = value;
  });

  return tracking;
}

/**
 * Constrói URL com parâmetros de tracking
 */
function buildTrackedUrl(baseUrl: string): string {
  const url = new URL(baseUrl);
  const tracking = getCurrentTrackingParams();

  // Se não houver UTMs, usar defaults
  if (!tracking.utm_source && !tracking.utm_medium && !tracking.utm_campaign) {
    tracking.utm_source = "landing";
    tracking.utm_medium = "cpc";
    tracking.utm_campaign = "samba-de-caboclo-sambarzin";
  }

  // Adicionar click_id
  tracking.click_id = generateClickId();

  // Aplicar parâmetros
  Object.entries(tracking).forEach(([key, value]) => {
    url.searchParams.set(key, value);
  });

  return url.toString();
}

/**
 * Handler do clique no CTA
 */
function onCtaClick() {
  // Push evento para dataLayer (GTM)
  if (typeof window !== "undefined") {
    window.dataLayer?.push({ event: "cta_guiche_click" });
    
    // Meta Pixel tracking
    if (typeof (window as any).fbq !== "undefined") {
      (window as any).fbq("track", "Lead");
    }
  }

  // Redirect com tracking
  const trackedUrl = buildTrackedUrl(GUICHEWEB_URL);
  window.location.href = trackedUrl;
}

// ==================== COMPONENTE ====================

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const eventDate = new Date(EVENT.date);
  const formattedDate = eventDate.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    weekday: "short",
  });
  const formattedTime = "14h";

  return (
    <>
      {/* Decoração topo - faixa geométrica */}
      <div className="fixed top-0 left-0 right-0 h-2 bg-gradient-to-r from-samba-orange via-samba-red to-samba-yellow z-50" />
      <div className="fixed top-2 left-0 right-0 h-1 bg-gradient-to-r from-samba-yellow via-samba-orange to-samba-red opacity-50 z-50" />

      <main className="relative min-h-screen flex items-center justify-center px-4 py-20 md:py-12">
        {/* Pattern decorativo de fundo */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <pattern
              id="samba-pattern"
              x="0"
              y="0"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="40" cy="40" r="2" fill="#6B7280" />
              <circle cx="0" cy="0" r="2" fill="#6B7280" />
              <circle cx="80" cy="0" r="2" fill="#6B7280" />
              <circle cx="0" cy="80" r="2" fill="#6B7280" />
              <circle cx="80" cy="80" r="2" fill="#6B7280" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#samba-pattern)" />
          </svg>
        </div>

        {/* Container principal */}
        <div className="relative max-w-6xl w-full grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Imagem (mobile acima, desktop à esquerda) */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl ring-4 ring-samba-orange/30">
              <div className="absolute inset-0 bg-gradient-to-br from-samba-orange/20 via-transparent to-samba-red/20" />
              <img
                src="/sambadocaboclo.heic"
                alt="Poster SAMBA DE CABOCLO | Sambarzin"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback caso imagem não exista
                  e.currentTarget.style.display = "none";
                  e.currentTarget.parentElement!.innerHTML = `
                    <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-samba-orange via-samba-red to-samba-yellow p-8">
                      <div class="text-center">
                        <div class="text-6xl mb-4">🎵🔥</div>
                        <div class="font-display text-4xl text-white drop-shadow-lg">SAMBA DE CABOCLO<br/>Sambarzin</div>
                      </div>
                    </div>
                  `;
                }}
              />
            </div>
          </div>

          {/* Conteúdo */}
          <div className="order-2 md:order-1 text-center md:text-left space-y-6 md:space-y-8">
            {/* Logo/Badge */}
            <div className="flex items-center gap-3 flex-wrap justify-center md:justify-start">
              <div className="inline-block px-4 py-2 bg-samba-red/20 backdrop-blur-sm border border-samba-red/50 rounded-full">
                <span className="text-samba-red font-bold text-sm uppercase tracking-wider">
                  Feriado!
                </span>
              </div>
              <div className="text-samba-white/80 text-sm font-medium">
                Sambarzin — Pra Vida Inteira
              </div>
            </div>

            {/* Título principal */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight text-samba-yellow drop-shadow-2xl">
              SAMBA DE CABOCLO
            </h1>

            {/* Data */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-samba-orange to-samba-red rounded-2xl shadow-xl">
              <div className="text-white">
                <div className="text-3xl md:text-4xl font-display leading-none">
                  20 NOV
                </div>
                <div className="text-sm opacity-90 uppercase">
                  QUI — 14h
                </div>
              </div>
            </div>

            {/* Artistas */}
            <div className="space-y-3">
              <p className="text-samba-yellow font-semibold text-sm uppercase tracking-wider">
                Atração principal:
              </p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <span className="px-4 py-2 bg-samba-yellow/20 backdrop-blur-sm border border-samba-yellow/50 rounded-lg text-samba-yellow font-bold text-base">
                  {EVENT.mainArtist}
                </span>
              </div>
              <p className="text-samba-white/80 font-semibold text-sm uppercase tracking-wider mt-4">
                Line-up de apoio:
              </p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {EVENT.supportArtists.map((artist, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white font-medium text-sm"
                  >
                    {artist}
                  </span>
                ))}
              </div>
            </div>

            {/* Endereço */}
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-samba-white/80 max-w-md mx-auto md:mx-0">
                <svg
                  className="w-6 h-6 flex-shrink-0 mt-0.5 text-samba-yellow"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p className="text-base">{EVENT.address}</p>
              </div>
              {/* Contato WhatsApp */}
              <div className="max-w-md mx-auto md:mx-0">
                <a
                  href="https://wa.me/5521983541011"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 
                    bg-gradient-to-r from-green-500 to-green-600
                    text-white font-semibold text-base rounded-full
                    shadow-lg hover:shadow-xl
                    hover:scale-105 active:scale-95
                    transition-all duration-300 ease-out
                    focus:outline-none focus:ring-4 focus:ring-green-500/50"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.239-.375a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <span>Chamar no WhatsApp</span>
                </a>
              </div>
            </div>

            {/* CTA Desktop */}
            <div className="hidden md:block pt-4">
              <button
                onClick={onCtaClick}
                aria-label="Comprar ingressos no GuichêWeb"
                className="group relative inline-flex items-center gap-3 px-8 py-4 
                  bg-gradient-to-r from-samba-red via-samba-orange to-samba-yellow
                  text-white font-bold text-lg rounded-full
                  shadow-[0_0_30px_rgba(220,38,38,0.6),0_10px_25px_rgba(0,0,0,0.4)]
                  hover:shadow-[0_0_50px_rgba(220,38,38,0.8),0_15px_35px_rgba(0,0,0,0.5)]
                  hover:scale-105 active:scale-95
                  transition-all duration-300 ease-out
                  focus:outline-none focus:ring-4 focus:ring-samba-red/50
                  animate-pulse-glow
                  hover:animate-swing"
              >
                <span className="relative z-10">Comprar Ingresso</span>
                <svg
                  className="w-6 h-6 group-hover:translate-x-1 transition-transform text-samba-red"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-samba-red to-samba-yellow opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
              </button>
            </div>
          </div>
        </div>

        {/* CTA Mobile Sticky */}
        {mounted && (
          <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-samba-black via-samba-black to-transparent z-40">
            <button
              onClick={onCtaClick}
              aria-label="Comprar ingressos no GuichêWeb"
              className="group relative w-full flex items-center justify-center gap-3 px-6 py-4 
                bg-gradient-to-r from-samba-red via-samba-orange to-samba-yellow
                text-white font-bold text-lg rounded-full
                shadow-[0_0_30px_rgba(220,38,38,0.6),0_10px_25px_rgba(0,0,0,0.4)]
                active:scale-95
                transition-all duration-300 ease-out
                focus:outline-none focus:ring-4 focus:ring-samba-red/50
                animate-pulse-glow"
            >
              <span className="relative z-10">Comprar Ingresso</span>
              <svg
                className="w-6 h-6 text-samba-red"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
          </div>
        )}
      </main>

      {/* Decoração rodapé */}
      <div className="fixed bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-samba-yellow via-samba-orange to-samba-red opacity-50 z-50" />
      <div className="fixed bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-samba-red via-samba-yellow to-samba-orange z-50" />
    </>
  );
}

// Declaração global para TypeScript
declare global {
  interface Window {
    dataLayer?: Array<Record<string, any>>;
    fbq?: (
      action: string,
      event: string,
      params?: Record<string, any>
    ) => void;
  }
}

