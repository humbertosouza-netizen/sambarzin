# 🎵🔥 SAMBA DE CABOCLO — Sambarzin

Landing page minimalista para o evento SAMBA DE CABOCLO com identidade urbana/raiz, tribal/afro-indígena e festiva.

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

Adicione a imagem do evento em `public/sambadocaboclo.heic`.

Se não houver imagem, será exibido um fallback automático com gradiente e emojis.

## 📊 Tracking

A landing implementa tracking automático:

- **Evento GTM**: `cta_guiche_click` é enviado ao `dataLayer` em cada clique no CTA
- **Parâmetros preservados**: UTMs, gclid, fbclid da URL atual
- **UTMs default**: Se não houver UTMs na URL, usa:
  - `utm_source=landing`
  - `utm_medium=cpc`
  - `utm_campaign=samba-de-caboclo-sambarzin`
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

**Data**: Quinta, 20 de Novembro (Feriado) — 14h  
**Local**: Rua Coronel Serrado, 202 — São Gonçalo, RJ  
**Contato**: [Chamar no WhatsApp](https://wa.me/5521983541011)  
**Marca**: Sambarzin — Pra Vida Inteira

### 🎤 Atrações

**Atração Principal**: Irmãos de Axé  
**Line-up de Apoio**: Jóia do Couro • Ellen Motta • Alujá • DJ RJay

## 🎨 Paleta de Cores

**Paleta Principal**:
- **Preto** (#000000) - Fundo/parede
- **Amarelo Vibrante** (#FFD700) - Título "SAMBA", destaques
- **Laranja Queimado** (#FF6B35) - Ornamentos indígenas/traços
- **Branco** (#FFFFFF) - Textos secundários
- **Vermelho** (#DC2626) - Detalhes, destaque "FERIADO!" e setinhas

**Paleta Secundária**:
- **Cinza** (#6B7280) - Textura do fundo e fumaça/luz

**Feeling**: Urbana/raiz • Tribal/afro-indígena • Festivo e quente (tons quentes destacando samba/caboclo)

