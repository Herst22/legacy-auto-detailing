import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://legacyautodetailingar.com"),

  title: {
    default:
      "Legacy Auto Detailing LLC | Premium Automotive Detailing",
    template: "%s | Legacy Auto Detailing LLC",
  },

  description:
    "Premium mobile automotive detailing in Arkansas offering interior and exterior detailing, monthly memberships, and professional vehicle care. Aircraft detailing services are coming soon.",

  keywords: [
    "Legacy Auto Detailing",
    "Auto Detailing Arkansas",
    "Mobile Auto Detailing",
    "Car Detailing",
    "Interior Detailing",
    "Exterior Detailing",
    "Premium Auto Detailing",
    "Arkansas Auto Detailer",
    "Aircraft Detailing Coming Soon",
    "Aircraft Detailing Arkansas",
    "Private Aircraft Detailing",
  ],

  authors: [{ name: "Legacy Auto Detailing LLC" }],
  creator: "Legacy Auto Detailing LLC",
  publisher: "Legacy Auto Detailing LLC",

  applicationName: "Legacy Auto Detailing LLC",
  category: "Automotive Detailing",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title:
      "Legacy Auto Detailing LLC | Automotive Care & Aircraft Detailing Coming Soon",
    description:
      "Premium mobile automotive detailing, monthly maintenance memberships, and future aircraft detailing services built around quality, precision, and protection.",
    url: "https://legacyautodetailingar.com",
    siteName: "Legacy Auto Detailing LLC",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Legacy Auto Detailing LLC | Premium Automotive Detailing",
    description:
      "Premium automotive detailing built around quality, protection, and exceptional care. Aircraft detailing services are coming soon.",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}