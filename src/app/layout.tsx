import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import { MotionProvider } from "@/components/providers/motion-provider";
import { QueryProvider } from "@/components/providers/query-provider";
import { SEO } from "@/lib/seo";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

/** JSON-LD structured data for search engines: app, organization, developer */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "@id": `${SEO.appUrl}/#webapp`,
      name: SEO.appName,
      description: SEO.defaultDescription,
      url: SEO.appUrl,
      applicationCategory: "FinanceApplication",
      operatingSystem: "Any",
      author: {
        "@type": "Person",
        name: SEO.developer.name,
        url: SEO.developer.url,
        email: SEO.developer.email,
      },
      publisher: {
        "@type": "Organization",
        name: SEO.company.name,
        url: SEO.company.url,
      },
    },
    {
      "@type": "Organization",
      "@id": `${SEO.appUrl}/#organization`,
      name: SEO.company.name,
      legalName: SEO.company.legalName,
      url: SEO.company.url,
      description: SEO.company.description,
    },
    {
      "@type": "Person",
      "@id": `${SEO.appUrl}/#developer`,
      name: SEO.developer.name,
      url: SEO.developer.url,
      email: SEO.developer.email,
      worksFor: { "@id": `${SEO.appUrl}/#organization` },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SEO.appUrl),
  title: {
    default: SEO.defaultTitle,
    template: `%s | ${SEO.appName}`,
  },
  description: SEO.defaultDescription,
  keywords: [...SEO.keywords],
  authors: [
    {
      name: SEO.developer.name,
      url: SEO.developer.url,
    },
  ],
  creator: SEO.company.name,
  publisher: SEO.company.name,
  applicationName: SEO.appName,
  category: "Finance",
  openGraph: {
    type: "website",
    locale: SEO.locale,
    url: SEO.appUrl,
    siteName: SEO.appName,
    title: SEO.defaultTitle,
    description: SEO.defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.defaultTitle,
    description: SEO.defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: SEO.appUrl,
  },
  other: {
    "developer": SEO.developer.name,
    "developer-url": SEO.developer.url,
    "company": SEO.company.name,
    "company-url": SEO.company.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${nunitoSans.variable} font-sans antialiased bg-[var(--gray-f5)] p-2 flex min-h-screen flex-col`}>
        <QueryProvider>
          <MotionProvider>
            <div className="min-h-0 flex-1">{children}</div>
          </MotionProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
