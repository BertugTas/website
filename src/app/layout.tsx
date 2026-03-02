import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bertuğ Taş | Data Science & Software Developer",
  description:
    "Dokuz Eylül Üniversitesi Bilgisayar Mühendisliği öğrencisi. Veri bilimi, iş zekası ve yazılım geliştirme alanlarında çalışıyorum.",
  keywords: [
    "Bertuğ Taş",
    "Data Science",
    "Business Intelligence",
    "Python",
    "Machine Learning",
    "Power BI",
    "SQL",
    "İzmir",
  ],
  authors: [{ name: "Bertuğ Taş" }],
  openGraph: {
    title: "Bertuğ Taş | Data Science & Software Developer",
    description:
      "Dokuz Eylül Üniversitesi Bilgisayar Mühendisliği öğrencisi. Veri bilimi ve yazılım geliştirme.",
    url: "https://bertugtas.com.tr",
    siteName: "Bertuğ Taş Portfolio",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bertuğ Taş | Data Science & Software Developer",
    description: "Veri bilimi, iş zekası ve yazılım geliştirme.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#020817] text-slate-200`}
      >
        {children}
      </body>
    </html>
  );
}
