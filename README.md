# 🎵🔥 Inauguração Sambarzin - Tá Na Mente

Landing page minimalista para o evento Inauguração Sambarzin - Tá Na Mente com identidade dourada e festiva.

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

Adicione a imagem do evento em `public/bannerfesta.png`.

Se não houver imagem, será exibido um fallback automático com gradiente e emojis.

## 📊 Tracking

A landing implementa tracking automático:

- **Evento GTM**: `cta_guiche_click` é enviado ao `dataLayer` em cada clique no CTA
- **Parâmetros preservados**: UTMs, gclid, fbclid da URL atual
- **UTMs default**: Se não houver UTMs na URL, usa:
  - `utm_source=landing`
  - `utm_medium=cpc`
  - `utm_campaign=inauguracao-sambarzin-ta-na-mente`
- **Click ID**: Gera um ID único de 8 caracteres (base36) para cada clique

## 🎨 Recursos

- ✅ Responsivo (mobile-first)
- ✅ CTA sticky no mobile
- ✅ Animações e efeitos visuais
- ✅ Paleta de cores tribal/afro-indígena (preto, amarelo vibrante, laranja queimado, vermelho, cinza)
- ✅ Botão WhatsApp integrado
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
└── sambadocaboclo.heic  # Imagem do evento (opcional)
```

---

## 📅 Informações do Evento

**Data**: Sábado, 13 de Dezembro — 22h  
**Local**: Rua Coronel Serrado, 202, São Gonçalo, Rio de Janeiro  
**Contato**: [Chamar no WhatsApp](https://wa.me/5521983541011)  
**Marca**: Sambarzin — Pra Vida Inteira

### 🎤 Atrações

**Atração Principal**: Tá na mente  
**Line-up de Apoio**: BemD+ • DJ Benny

## 🎨 Paleta de Cores

**Paleta Principal**:
- **Dourado Principal** (#D4A857) - Cor principal do evento
- **Dourado Escuro** (#B27F30) - Tons escuros
- **Dourado Claro** (#F3C97A) - Tons claros
- **Preto** (#000000) - Fundo
- **Preto Suave** (#0D0D0F) - Fundo alternativo
- **Cinza Fumaça** (#1A1A1D) - Texturas
- **Branco** (#FFFFFF) - Textos principais
- **Branco Suave** (#F5F5F5) - Textos secundários

**Feeling**: Dourado luxuoso • Festivo e elegante

