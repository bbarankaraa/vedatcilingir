import ServiceCard from "./_components/ServiceCard";
import { siteMetadata } from "@/lib/siteMetadata";

export const metadata = {
  title: `Hizmetler | ${siteMetadata.title}`,
  description:
    "Eyüp ve çevresinde 7/24 çilingir hizmetleri: oto çilingir, kasa çilingir, kapı tamiri, göbek değişimi.",
  keywords: "çilingir, hizmetler, eyüp çilingir, alibeyköy çilingir",
  alternates: {
    canonical: "https://www.5leventvipcilingir.com/hizmetler",
  },
};
const SERVICES = [
  { id: 1, img: "/services1.jpg", title: "7/24 Çilingir" },
  { id: 2, img: "/services2.jpg", title: "Oto Çilingir" },
  { id: 3, img: "/services3.jpg", title: "Kapı Tamiri" },
  { id: 4, img: "/services4.jpg", title: "Göbek Değiştirme" },
  { id: 5, img: "/services5.jpg", title: "Kasa Çilingir" },
];

const ServicesPage = () => {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          Hizmetlerimiz
        </h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
          Profesyonel ekibimiz ile 7/24 hizmetinizdeyiz. Tüm çilingir ve kapı
          tamiri ihtiyaçlarınızı hızlı ve güvenli şekilde çözüyoruz.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {SERVICES.map((service, i) => (
          <ServiceCard key={service.id} service={service} index={i} />
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
