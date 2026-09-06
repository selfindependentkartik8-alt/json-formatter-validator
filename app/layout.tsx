import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://jsonformattervalidator.krishaiworks.com"
  ),

  title: "JSON Formatter & Validator | Format and Validate JSON Online",

  description:
    "Format, beautify, and validate JSON online with the free JSON Formatter & Validator by KrishAIWorks. Easily check JSON syntax and make your data readable.",

  keywords: [
    "JSON Formatter",
    "JSON Validator",
    "JSON Formatter and Validator",
    "JSON Beautifier",
    "JSON Beautifier Online",
    "JSON Validator Online",
    "Format JSON Online",
    "Validate JSON Online",
    "JSON Pretty Print",
    "Free JSON Formatter",
  ],

  authors: [
    {
      name: "KrishAIWorks",
      url: "https://krishaiworks.vercel.app",
    },
  ],

  creator: "KrishAIWorks",
  publisher: "KrishAIWorks",

  alternates: {
    canonical:
      "https://jsonformattervalidator.krishaiworks.com/",
  },

  openGraph: {
    title: "JSON Formatter & Validator | KrishAIWorks",
    description:
      "Format, beautify, and validate JSON online quickly and easily.",
    url: "https://jsonformattervalidator.krishaiworks.com/",
    siteName: "KrishAIWorks",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "JSON Formatter & Validator | KrishAIWorks",
    description:
      "Format and validate JSON online with a fast and simple tool.",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BS6TSMM1ZR"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-BS6TSMM1ZR');
          `}
        </Script>
      </body>
    </html>
  );
}