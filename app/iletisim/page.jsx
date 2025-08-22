import MapEmbed from "./_components/MapEmbed";
import { siteMetadata } from "@/lib/siteMetadata";

export const metadata = {
  title: `İletişim | ${siteMetadata.title}`,
  description: "Eyüp ve çevresinde 7/24 çilingir hizmetimiz için iletişime geçin.",
  keywords: "çilingir, iletişim, eyüp çilingir, alibeyköy çilingir",
  alternates: {
    canonical: "https://www.5leventvipcilingir.com/iletisim",
  },
};
const ContactPage = () => {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          İletişim
        </h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
          Bize ulaşmak için aşağıdaki bilgileri kullanabilir veya harita üzerinden konumumuzu görebilirsiniz.
        </p>
      </header>
      <MapEmbed />
      <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
          İletişim Bilgileri
        </h3>
        <address className="space-y-2 text-sm not-italic text-slate-600 dark:text-slate-300">
          <p>Alibeyköy</p>
          <p>Tel: <a href="tel:+905359501682" className="hover:underline">+90 535 950 16 82</a></p>
          <p>Tel: <a href="tel:+905397369682" className="hover:underline">+90 539 736 96 82</a></p>
        </address>
      </div>
      <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center text-sm text-gray-400 md:flex-row">
        <p>© 2025 5. Levent Çilingir.</p>
      </div>
    </div>
  );
};

export default ContactPage;
