import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Topbar from "./components/Topbar";

const aeonik = localFont({
  src: [
    {
      path: "./../public/fonts/normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./../public/fonts/bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./../public/fonts/black.woff2",
      weight: "900",
      style: "normal",
    }
  ],
  variable: "--font-aeonik",
});


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rate Shoppa - Compare Global Currency Exchange Rates in Real Time",
  description:
    "Rate Shoppa is a web app that lets you compare live currency exchange rates from banks, forex platforms, and money transfer services worldwide. Find the best rates and save more on every exchange.",
  keywords: [
    "exchange rates",
    "currency converter",
    "forex comparison",
    "global exchange rates",
    "money transfer",
    "Rate Shoppa",
    "compare exchange rates",
    "best currency rates"
  ],
  authors: [{ name: "Rate Shoppa Team" }],
  openGraph: {
    title: "Rate Shoppa – Compare Global Currency Exchange Rates",
    description:
      "Get real-time exchange rate comparisons from trusted sources worldwide. Save money with Rate Shoppa.",
    url: "https://www.rateshoppa.com",
    siteName: "Rate Shoppa",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rate Shoppa – Global Exchange Rate Comparison",
    description:
      "Compare and find the best currency exchange rates in real time with Rate Shoppa.",
  },
  icons: {
    icon: [
      { url: "./favicon-light.png", type: "image/png", sizes: "16x16" },
      { url: "./favicon-light.png", type: "image/png", sizes: "32x32" },
      { url: "./favicon-light.png", type: "image/png", sizes: "96x96" },
      { url: "./favicon-light.png", type: "image/png", sizes: "192x192" },
      { url: "./favicon-light.png", type: "image/x-icon" },
      { url: "./favicon-light.png", type: "image/png" }, // default fallback
    ],
    apple: [
      { url: "./favicon-light.png", sizes: "57x57" },
      { url: "./favicon-light.png", sizes: "60x60" },
      { url: "./favicon-light.png", sizes: "72x72" },
      { url: "./favicon-light.png", sizes: "76x76" },
      { url: "./favicon-light.png", sizes: "114x114" },
      { url: "./favicon-light.png", sizes: "120x120" },
      { url: "./favicon-light.png", sizes: "144x144" },
      { url: "./favicon-light.png", sizes: "152x152" },
      { url: "./favicon-light.png", sizes: "180x180" },
    ],
    shortcut: "./favicon-light.png", // legacy shortcut icon
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${aeonik.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Topbar />
        <Navbar />

        <main className="pt-33" role="main">{children}</main>
        
        <Footer />
      </body>
    </html>
  );
}
