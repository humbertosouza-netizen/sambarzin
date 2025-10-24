"use client";

import { useEffect, useState } from "react";

// ==================== CONSTANTES ====================
const GUICHEWEB_URL = "https://www.guicheweb.com.br/feijoada-de-inauguracao_47653";

const EVENT = {
  date: "2025-11-09T13:00:00-03:00",
  address: "Rua Coronel Serrado, 202 — São Gonçalo/RJ",
  artists: ["Revelação", "Marquinhos Sensação", "Terreiro de Crioulo"],
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
    tracking.utm_campaign = "feijoada-sambarzin";
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
  const formattedTime = eventDate.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <>
      {/* Decoração topo - faixa geométrica */}
      <div className="fixed top-0 left-0 right-0 h-2 bg-gradient-to-r from-samba-fuchsia via-samba-yellow to-samba-cyan z-50" />
      <div className="fixed top-2 left-0 right-0 h-1 bg-gradient-to-r from-samba-cyan via-samba-fuchsia to-samba-yellow opacity-50 z-50" />

      <main className="relative min-h-screen flex items-center justify-center px-4 py-20 md:py-12">
        {/* Pattern decorativo de fundo */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%">
            <pattern
              id="samba-pattern"
              x="0"
              y="0"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="40" cy="40" r="2" fill="currentColor" />
              <circle cx="0" cy="0" r="2" fill="currentColor" />
              <circle cx="80" cy="0" r="2" fill="currentColor" />
              <circle cx="0" cy="80" r="2" fill="currentColor" />
              <circle cx="80" cy="80" r="2" fill="currentColor" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#samba-pattern)" />
          </svg>
        </div>

        {/* Container principal */}
        <div className="relative max-w-6xl w-full grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Imagem (mobile acima, desktop à esquerda) */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl ring-4 ring-samba-fuchsia/30">
              <div className="absolute inset-0 bg-gradient-to-br from-samba-fuchsia/20 via-transparent to-samba-cyan/20" />
              <img
                src="/bannerevento.png"
                alt="Poster Feijoada de Inauguração | Sambarzin"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback caso imagem não exista
                  e.currentTarget.style.display = "none";
                  e.currentTarget.parentElement!.innerHTML = `
                    <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-samba-fuchsia via-purple-600 to-samba-cyan p-8">
                      <div class="text-center">
                        <div class="text-6xl mb-4">🎵🍲</div>
                        <div class="font-display text-4xl text-white drop-shadow-lg">Feijoada<br/>Sambarzin</div>
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
            <div className="inline-block px-4 py-2 bg-samba-yellow/20 backdrop-blur-sm border border-samba-yellow/50 rounded-full">
              <span className="text-samba-yellow font-bold text-sm uppercase tracking-wider">
                Inauguração
              </span>
            </div>

            {/* Título principal */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight text-white drop-shadow-2xl">
              O melhor Samba de São Gonçalo está de volta
            </h1>

            {/* Data */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-samba-fuchsia to-pink-600 rounded-2xl shadow-xl">
              <div className="text-white">
                <div className="text-3xl md:text-4xl font-display leading-none">
                  09 NOV
                </div>
                <div className="text-sm opacity-90 uppercase">
                  DOM — 13h
                </div>
              </div>
            </div>

            {/* Artistas */}
            <div className="space-y-3">
              <p className="text-samba-cyan font-semibold text-sm uppercase tracking-wider">
                Com participação de:
              </p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {EVENT.artists.map((artist, i) => (
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
            <div className="flex items-start gap-3 text-samba-cream/80 max-w-md mx-auto md:mx-0">
              <svg
                className="w-6 h-6 flex-shrink-0 mt-0.5"
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

            {/* CTA Desktop */}
            <div className="hidden md:block pt-4">
              <button
                onClick={onCtaClick}
                aria-label="Comprar ingressos no GuichêWeb"
                className="group relative inline-flex items-center gap-3 px-8 py-4 
                  bg-gradient-to-r from-samba-fuchsia via-pink-500 to-samba-yellow
                  text-white font-bold text-lg rounded-full
                  shadow-[0_0_30px_rgba(217,70,239,0.6),0_10px_25px_rgba(0,0,0,0.4)]
                  hover:shadow-[0_0_50px_rgba(217,70,239,0.8),0_15px_35px_rgba(0,0,0,0.5)]
                  hover:scale-105 active:scale-95
                  transition-all duration-300 ease-out
                  focus:outline-none focus:ring-4 focus:ring-samba-fuchsia/50
                  animate-pulse-glow
                  hover:animate-swing"
              >
                <span className="relative z-10">Ir para o GuichêWeb</span>
                <svg
                  className="w-6 h-6 group-hover:translate-x-1 transition-transform"
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
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-samba-fuchsia to-samba-yellow opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
              </button>
            </div>
          </div>
        </div>

        {/* CTA Mobile Sticky */}
        {mounted && (
          <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-samba-navy via-samba-navy to-transparent z-40">
            <button
              onClick={onCtaClick}
              aria-label="Comprar ingressos no GuichêWeb"
              className="group relative w-full flex items-center justify-center gap-3 px-6 py-4 
                bg-gradient-to-r from-samba-fuchsia via-pink-500 to-samba-yellow
                text-white font-bold text-lg rounded-full
                shadow-[0_0_30px_rgba(217,70,239,0.6),0_10px_25px_rgba(0,0,0,0.4)]
                active:scale-95
                transition-all duration-300 ease-out
                focus:outline-none focus:ring-4 focus:ring-samba-fuchsia/50
                animate-pulse-glow"
            >
              <span className="relative z-10">Ir para o GuichêWeb</span>
              <svg
                className="w-6 h-6"
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
      <div className="fixed bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-samba-yellow via-samba-fuchsia to-samba-cyan opacity-50 z-50" />
      <div className="fixed bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-samba-cyan via-samba-yellow to-samba-fuchsia z-50" />
    </>
  );
}

// Declaração global para TypeScript
declare global {
  interface Window {
    dataLayer?: Array<Record<string, any>>;
  }
}

