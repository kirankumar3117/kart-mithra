import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kartmithra.com"),
  title: "Kart Mithra | Your Local Pre-Order & Chitty App",
  description:
    "Kart Mithra connects you to your neighborhood Kirana stores and juice shops for seamless pre-ordering and pickup. Upload your chitty, skip the line, and support local commerce.",
  keywords: [
    "Kart Mithra",
    "Kirana",
    "pre-order",
    "chitty",
    "local commerce",
    "grocery delivery",
    "juice pre-order",
    "neighborhood shop",
    "India",
    "hyper-local",
  ],
  authors: [{ name: "Kart Mithra" }],
  openGraph: {
    title: "Kart Mithra | Your Local Pre-Order & Chitty App",
    description:
      "Connect with your neighborhood Kirana stores. Upload your chitty, pre-order groceries & juice, and pick up hassle-free.",
    url: "https://kartmithra.com",
    siteName: "Kart Mithra",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kart Mithra — Your Local Pre-Order & Chitty App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kart Mithra | Your Local Pre-Order & Chitty App",
    description:
      "Connect with your neighborhood Kirana stores. Upload your chitty, pre-order groceries & juice, and pick up hassle-free.",
    images: ["/og-image.png"],
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
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
