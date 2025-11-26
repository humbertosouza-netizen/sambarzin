import type { Metadata } from "next";
import { Inter, Titan_One } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans",
});

const titanOne = Titan_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: {
    default: "Inauguração Sambarzin - Tá Na Mente",
    template: "%s | Inauguração Sambarzin - Tá Na Mente",
  },
  description: "Inauguração Sambarzin - Tá Na Mente. Sábado, 13 de dezembro às 22h. Rua Coronel Serrado, 202, São Gonçalo, Rio de Janeiro. Com Tá na mente, BemD+ e DJ Benny.",
  openGraph: {
    title: "Inauguração Sambarzin - Tá Na Mente",
    description: "Inauguração Sambarzin - Tá Na Mente. Sábado, 13 de dezembro às 22h. Rua Coronel Serrado, 202, São Gonçalo, Rio de Janeiro. Com Tá na mente, BemD+ e DJ Benny.",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "https://impulsosg.com.br/bannerfesta.png?v=3",
        width: 1200,
        height: 630,
        alt: "Inauguração Sambarzin - Tá Na Mente",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Inauguração Sambarzin - Tá Na Mente",
    description: "Inauguração Sambarzin - Tá Na Mente. Sábado, 13 de dezembro às 22h. Rua Coronel Serrado, 202, São Gonçalo, Rio de Janeiro. Com Tá na mente, BemD+ e DJ Benny.",
    images: ["https://impulsosg.com.br/bannerfesta.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Open Graph Tags explícitas para Facebook - PRIMEIRO para garantir prioridade */}
        <meta property="og:url" content="https://impulsosg.com.br" key="og-url" />
        <meta property="og:type" content="website" key="og-type" />
        <meta property="og:title" content="Inauguração Sambarzin - Tá Na Mente" key="og-title" />
        <meta property="og:site_name" content="Inauguração Sambarzin - Tá Na Mente" key="og-site-name" />
        <meta property="og:description" content="Inauguração Sambarzin - Tá Na Mente. Sábado, 13 de dezembro às 22h. Rua Coronel Serrado, 202, São Gonçalo, Rio de Janeiro. Com Tá na mente, BemD+ e DJ Benny." key="og-description" />
        <meta property="og:image" content="https://impulsosg.com.br/bannerfesta.png?v=3" key="og-image" />
        <meta property="og:image:secure_url" content="https://impulsosg.com.br/bannerfesta.png?v=3" key="og-image-secure" />
        <meta property="og:image:width" content="1200" key="og-image-width" />
        <meta property="og:image:height" content="630" key="og-image-height" />
        <meta property="og:image:alt" content="Inauguração Sambarzin - Tá Na Mente" key="og-image-alt" />
        <meta property="og:locale" content="pt_BR" key="og-locale" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Inauguração Sambarzin - Tá Na Mente" />
        <meta name="twitter:description" content="Inauguração Sambarzin - Tá Na Mente. Sábado, 13 de dezembro às 22h. Rua Coronel Serrado, 202, São Gonçalo, Rio de Janeiro. Com Tá na mente, BemD+ e DJ Benny." />
        <meta name="twitter:image" content="https://impulsosg.com.br/bannerfesta.png?v=3" />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
            `,
          }}
        />
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1718825615740600');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1718825615740600&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body className={`${inter.variable} ${titanOne.variable} font-sans bg-samba-blackSoft min-h-screen`}>
        {children}
      </body>
    </html>
  );
}

