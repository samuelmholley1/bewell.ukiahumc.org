import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Serif_4, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-heading",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
  variable: "--font-body",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
  variable: "--font-ui",
});

const siteTitle = "Be Well Center — Adult Day Services in Ukiah, CA (Opening Soon)";
const siteDescription =
  "A place of dignity for adults who need a little more care. Daytime support, connection, and respite for families in Ukiah, CA. Supported by Ukiah United Methodist Church.";

export const metadata: Metadata = {
  metadataBase: new URL("https://bewell.ukiahumc.org"),
  title: siteTitle,
  description: siteDescription,
  keywords:
    "adult day care, adult day services, memory care, caregiver respite, senior care, Ukiah, Mendocino County, disabled adults, aging support",
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
    "theme-color": "#556B2F",
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
    logo: 'https://bewell.ukiahumc.org/bewell_logo_transparent.png',
    telephone: '+1-707-462-3360',
    email: 'bewell@ukiahumc.org',
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
    <html lang="en" className={`${cormorant.variable} ${sourceSerif.variable} ${sourceSans.variable}`}>
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
