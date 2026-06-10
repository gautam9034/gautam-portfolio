import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.gautamyadav.me'),
  title: "Gautam Yadav | Data Analyst Portfolio",
  description: "Data Analyst skilled in SQL, Python, Power BI, Excel and Data Visualization.",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Gautam Yadav | Data Analyst Portfolio",
    description: "Data Analyst skilled in SQL, Python, Power BI, Excel and Data Visualization.",
    url: 'https://www.gautamyadav.me',
    siteName: 'Gautam Yadav Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gautam Yadav | Data Analyst Portfolio',
    description: 'Data Analyst skilled in SQL, Python, Power BI, Excel and Data Visualization.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Gautam Yadav',
    url: 'https://www.gautamyadav.me',
    jobTitle: 'Data Analyst',
    sameAs: [
      'https://www.linkedin.com/in/gautam-yadav-6661a732a',
      'https://github.com/gautam9034'
    ]
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Gautam Yadav Portfolio',
    url: 'https://www.gautamyadav.me'
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
