import Footer from "@/components/Footer/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Topbar from "@/components/Topbar/Topbar";
import ActionButtons from "@/components/ActionButtons/ActionButtons";
import WPButton from "@/components/WPButton/WPButton";
import { siteMetadata } from "@/lib/siteMetadata";
import Script from "next/script";

export const metadata = {
  title: {
    template: `%s | ${siteMetadata.title}`,
    default: siteMetadata.title,
  },
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [`${siteMetadata.siteUrl}${siteMetadata.socialBanner}`],
    locale: siteMetadata.locale,
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        <WPButton />
        <ActionButtons />
        <Topbar />
        <Navbar />
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EE09BNFTEP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EE09BNFTEP');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "5 Levent Çilingir",
              url: "https://www.5leventvipcilingir.com",
              telephone: ["+90 535 950 16 82", "+90 539 736 96 82"],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Eyüp, İstanbul",
                addressCountry: "TR",
              },
              openingHours: "Mo-Su 00:00-23:59",
              areaServed: ["Alibeyköy", "Çırçır", "Mecidiyeköy", "Güzeltepe"],
              priceRange: "₺₺",
              keywords: "çilingir, eyüp çilingir, alibeyköy çilingir, çırçır çilingir, mecidiyeköy çilingir, 7/24 çilingir",
            }),
          }}
        />
        <Footer />
      </body>
    </html>
  );
}
