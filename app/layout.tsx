import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Apex Aluminium & Glass | Premium Aluminium & Glass Solutions",
  description:
    "Trusted provider of premium aluminium and glass solutions including windows, doors, balustrades, shower enclosures, and shopfronts. Quality workmanship in Gauteng, South Africa.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
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
        className={`${geistSans.variable} ${geistMono.variable} ${dmSans.variable} font-sans`}
      >
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
