import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-serif",
});

const siteTitle = "Be Well Center — Adult Day Memory Care (Opening Soon)";
const siteDescription =
  "Dignity-filled daytime support for adults living with memory loss in Ukiah, CA. A community project supported by Ukiah United Methodist Church.";

export const metadata: Metadata = {
  metadataBase: new URL("https://bewell.ukiahumc.org"),
  title: siteTitle,
  description: siteDescription,
  keywords:
    "adult day care, memory care, dementia care, Ukiah, Mendocino County, caregiver respite, Alzheimer's support",
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-image.png"],
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "48x48" },
    ],
    apple: "/apple-touch-icon.png",
  },
  other: {
    "theme-color": "#6B7F4E",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Be Well Center',
    description: siteDescription,
    url: 'https://bewell.ukiahumc.org',
    logo: 'https://bewell.ukiahumc.org/BeWell-logo-transparent.png',
    telephone: '+1-707-462-6226',
    email: 'info@ukiahumc.org',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '270 N Pine St',
      addressLocality: 'Ukiah',
      addressRegion: 'CA',
      postalCode: '95482',
      addressCountry: 'US',
    },
    parentOrganization: {
      '@type': 'Organization',
      name: 'Ukiah United Methodist Church',
      url: 'https://ukiahumc.org',
    },
  };

  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
