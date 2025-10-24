# 🎵🍲 Feijoada de Inauguração | Sambarzin

Landing page minimalista para o evento de inauguração com o melhor samba de São Gonçalo.

## 🚀 Início Rápido

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## ⚙️ Configuração

### URL do GuichêWeb

Edite a constante `GUICHEWEB_URL` em `app/page.tsx`:

```typescript
const GUICHEWEB_URL = "https://www.guicheweb.com.br"; // ⬅️ TROCAR AQUI
```

### Imagem do Poster

Adicione a imagem do evento em `public/poster-feijoada.jpg`.

Se não houver imagem, será exibido um fallback automático com gradiente e emojis.

## 📊 Tracking

A landing implementa tracking automático:

- **Evento GTM**: `cta_guiche_click` é enviado ao `dataLayer` em cada clique no CTA
- **Parâmetros preservados**: UTMs, gclid, fbclid da URL atual
- **UTMs default**: Se não houver UTMs na URL, usa:
  - `utm_source=landing`
  - `utm_medium=cpc`
  - `utm_campaign=feijoada-sambarzin`
- **Click ID**: Gera um ID único de 8 caracteres (base36) para cada clique

## 🎨 Recursos

- ✅ Responsivo (mobile-first)
- ✅ CTA sticky no mobile
- ✅ Animações e efeitos visuais
- ✅ Paleta de cores "samba" (fúcsia, azul escuro, amarelo, ciano)
- ✅ Tipografia display (Titan One) + Inter
- ✅ Acessibilidade (contraste AA, aria-labels, foco visível)
- ✅ Meta tags e Open Graph
- ✅ Fallback automático para imagens

## 🛠️ Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Google Fonts (Titan One + Inter)

## 📦 Build para Produção

```bash
npm run build
npm start
```

## 🎯 Estrutura

```
app/
├── layout.tsx      # Layout raiz com fonts e meta tags
├── page.tsx        # Página principal com toda a lógica
└── globals.css     # Estilos globais Tailwind

public/
└── poster-feijoada.jpg  # Imagem do evento (opcional)
```

---

**Evento**: 09 de Novembro, Domingo, 13h  
**Local**: Rua Coronel Serrado, 202 — São Gonçalo/RJ  
**Artistas**: Revelação • Marquinhos Sensação • Terreiro de Crioulo

