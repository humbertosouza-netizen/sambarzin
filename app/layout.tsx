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
  title: "Inauguração Sambarzin - Tá Na Mente",
  description: "Inauguração Sambarzin - Tá Na Mente. Sábado, 13 de dezembro às 22h. Rua Coronel Serrado, 202, São Gonçalo, Rio de Janeiro. Com Tá na mente, BemD+ e DJ Benny.",
  openGraph: {
    title: "Inauguração Sambarzin - Tá Na Mente",
    description: "Inauguração Sambarzin - Tá Na Mente. Sábado, 13 de dezembro às 22h. Rua Coronel Serrado, 202, São Gonçalo, Rio de Janeiro. Com Tá na mente, BemD+ e DJ Benny.",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/bannerfesta.png",
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
    images: ["/bannerfesta.png"],
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

