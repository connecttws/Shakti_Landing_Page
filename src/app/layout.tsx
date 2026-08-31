import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SHakti - Sexual Wellness, Intimacy & Rehabilitation",
  description: "Working Professionals Facing Intimacy Issues? Get Personalised Support for Sexual Wellness, Intimacy, Anxiety & Relationship Concerns with Dr. Dipali Ganesh Thakare.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-[100dvh] flex flex-col font-sans text-slate-800 bg-[#FAFAF8] selection:bg-teal-700 selection:text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
