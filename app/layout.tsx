import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import '@fortawesome/fontawesome-free/css/all.min.css'
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PH8-EXT BLOKEMPE",
  description: "Next Generation PH8-EXT BLOKEMPE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <body className={inter.className}>
        <main>
        {children}
        </main>
        <Footer></Footer>
      </body>
    </html>
  );
}
