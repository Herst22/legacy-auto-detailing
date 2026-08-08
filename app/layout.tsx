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
    default: "Legacy Auto Detailing LLC | Premium Auto Detailing",
    template: "%s | Legacy Auto Detailing LLC",
  },

  description:
    "Premium auto detailing in Arkansas offering professional interior and exterior detailing, monthly memberships, and premium vehicle care.",

  keywords: [
    "Legacy Auto Detailing",
    "Auto Detailing Arkansas",
    "Mobile Auto Detailing",
    "Car Detailing",
    "Interior Detailing",
    "Exterior Detailing",
    "Premium Auto Detailing",
    "Arkansas Auto Detailer",
  ],

  authors: [{ name: "Legacy Auto Detailing LLC" }],
  creator: "Legacy Auto Detailing LLC",
  publisher: "Legacy Auto Detailing LLC",

  applicationName: "Legacy Auto Detailing LLC",
  category: "Automotive",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Legacy Auto Detailing LLC",
    description:
      "Premium auto detailing with professional results, monthly memberships, and 20% discounts for military and first responders.",
    url: "https://legacyautodetailingar.com",
    siteName: "Legacy Auto Detailing LLC",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Legacy Auto Detailing LLC",
    description:
      "Premium automotive detailing built around quality, protection, and exceptional care.",
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