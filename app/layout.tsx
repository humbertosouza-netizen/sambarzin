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
  title: "Feijoada de Inauguração | Sambarzin",
  description: "O melhor Samba de São Gonçalo está de volta! Dia 9 de novembro com Revelação, Marquinhos Sensação e Terreiro de Crioulo.",
  openGraph: {
    title: "Feijoada de Inauguração | Sambarzin",
    description: "O melhor Samba de São Gonçalo está de volta! Dia 9 de novembro com Revelação, Marquinhos Sensação e Terreiro de Crioulo.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Feijoada de Inauguração | Sambarzin",
    description: "O melhor Samba de São Gonçalo está de volta! Dia 9 de novembro com Revelação, Marquinhos Sensação e Terreiro de Crioulo.",
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${titanOne.variable} font-sans bg-gradient-to-br from-samba-navy via-purple-900 to-samba-navy min-h-screen`}>
        {children}
      </body>
    </html>
  );
}

