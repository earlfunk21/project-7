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
  title: "24/7 Computer Repair & IT Support | onService - Fast Expert Help",
  description: "Get professional computer repair and IT support 24/7. Expert help for network issues, cyber threats, server problems & more. $49.99 per computer. If we can't fix it, you don't pay!",
  keywords: [
    "computer repair",
    "IT support",
    "24/7 tech support",
    "managed IT services",
    "network security",
    "help desk support",
    "server monitoring",
    "backup and recovery",
    "emergency IT support",
    "remote computer help"
  ],
  authors: [{ name: "onService, Inc." }],
  openGraph: {
    title: "24/7 Computer Repair & IT Support | onService",
    description: "Professional IT support available 24/7. Fast response, expert team. $49.99 per computer. Call 1-877-843-1717 now!",
    url: "https://www.onserviceit.com",
    siteName: "onService IT Support",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "24/7 Computer Repair & IT Support | onService",
    description: "Get expert IT support 24/7. Fast response. $49.99 per computer. If we can't fix it, you don't pay!",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
