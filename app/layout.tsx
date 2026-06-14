import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  metadataBase: new URL("https://leduss.com"),
  title: "LEDUSS | Factory-Direct LED Display Manufacturer",
  description:
    "LEDUSS is a factory-direct LED display manufacturer from Shenzhen, China, providing indoor, outdoor, floor, foldable and custom-shaped LED display solutions for global projects.",
  alternates: {
    canonical: "https://leduss.com"
  },
  openGraph: {
    title: "LEDUSS | Factory-Direct LED Display Manufacturer",
    description:
      "Indoor, outdoor, floor, foldable and custom-shaped LED display solutions for global B2B projects.",
    url: "https://leduss.com",
    siteName: "LEDUSS",
    images: [
      {
        url: "/assets/hero-bana.png",
        width: 1374,
        height: 768,
        alt: "LEDUSS factory and LED display production"
      }
    ],
    locale: "en_US",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
