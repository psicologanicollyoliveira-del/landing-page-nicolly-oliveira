import type { Metadata } from "next";
import "./globals.css";

import { Fraunces, Quicksand } from "next/font/google";

const quicksand = Quicksand({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-quicksand",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
});

export const metadata: Metadata = {
  title: "Psicóloga Nicolly Oliveira",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google Tag */}
        <script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17697138635"
          strategy="afterInteractive"
        />
        <script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17697138635');
          `}
        </script>
      </head>
      <body
        className={`${quicksand.variable} ${fraunces.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
