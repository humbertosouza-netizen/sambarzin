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
  title: "SAMBA DE CABOCLO — Sambarzin",
  description: "Samba de Caboclo — Sambarzin. Quinta, 20 de novembro (feriado) às 14h. Rua Coronel Serrado, 202 — São Gonçalo, RJ. Com Irmãos de Axé, Jóia do Couro, Ellen Motta, Alujá e DJ RJay.",
  openGraph: {
    title: "SAMBA DE CABOCLO — Sambarzin",
    description: "Samba de Caboclo — Sambarzin. Quinta, 20 de novembro (feriado) às 14h. Rua Coronel Serrado, 202 — São Gonçalo, RJ. Com Irmãos de Axé, Jóia do Couro, Ellen Motta, Alujá e DJ RJay.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "SAMBA DE CABOCLO — Sambarzin",
    description: "Samba de Caboclo — Sambarzin. Quinta, 20 de novembro (feriado) às 14h. Rua Coronel Serrado, 202 — São Gonçalo, RJ. Com Irmãos de Axé, Jóia do Couro, Ellen Motta, Alujá e DJ RJay.",
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
      <body className={`${inter.variable} ${titanOne.variable} font-sans bg-samba-black min-h-screen`}>
        {children}
      </body>
    </html>
  );
}

