import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AdsterraGlobal } from "@/components/AdsterraGlobal";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Xapify — Magazine Blog",
  description:
    "A responsive magazine-style blog demo with featured stories, sidebars, and editorial widgets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full font-sans antialiased">
        <AdsterraGlobal />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
