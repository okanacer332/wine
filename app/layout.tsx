import type { Metadata } from "next";
import { Abril_Fatface, Lato } from "next/font/google";
import "./globals.css";

const abril = Abril_Fatface({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-abril",
});

const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Tasheli Winery | Endemik Anadolu Üzümleri",
  description: "Patkara ve Gök Üzüm'ün anavatanı Toroslar'dan doğan şaraplar.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${abril.variable} ${lato.variable} bg-dark-900 text-gray-200 antialiased selection:bg-gold-400 selection:text-black`}>
        {children}
      </body>
    </html>
  );
}