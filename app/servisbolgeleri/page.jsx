import { siteMetadata } from "@/lib/siteMetadata";

export const metadata = {
  title: `Servis Bölgeleri | ${siteMetadata.title}`,
  description:
    "5 Levent Çilingir, Eyüp, Alibeyköy, Çırçır, Mecidiyeköy ve çevresinde 7/24 çilingir hizmeti sunar. Hızlı ve güvenilir çözümler.",
  keywords: "çilingir, servis bölgeleri, eyüp çilingir, alibeyköy çilingir, çırçır çilingir, mecidiyeköy çilingir",
  alternates: {
    canonical: "https://www.5leventvipcilingir.com/servisbolgeleri",
  },
};

const toTitleCase = (str) =>
  str
    .toLowerCase()
    .replace(/(^|\s|[-&/])([a-zçğıöşü])/g, (_, p1, p2) => p1 + p2.toUpperCase());

const AREAS = {
  mahalleler: [
    "libeyköy mah",
    "emniyettepe mah",
    "esentepe mah",
    "guzeltepe mah",
    "kazimkarabekir mah",
    "mevlana mah",
    "yesilpinar mah",
    "5 levent mah",
    "karadolap mah",
    "silahtaraga mah",
    "cırcır mah",
    "sakarya mah",
    "nurtepe mah",
    "karayolları mah",
    "baglar mah",
  ],
  siteler: [
    "finaskent konutlari",
    "avrupa konutlari",
    "essenora sitesi",
    "yıldız park sitesi",
    "yeni nesil sitesi",
    "5 levent korupark sitesi",
    "bayramoglu sitesi",
    "forev modern sitesi",
    "yenikoy konakları",
    "yeni nesil eyüp sitesi",
    "alpark sitesi",
    "5 levent kiptaş konutlari",
    "kiptaş yesilpinar sitesi",
  ],
};

const SectionSeparator = ({ label }) => (
  <div className="relative my-8 flex items-center">
    <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-300 to-transparent dark:via-slate-700" />
    <span className="absolute left-1/2 -translate-x-1/2 bg-white px-3 text-xs tracking-wider text-slate-500 dark:bg-slate-900 dark:text-slate-300">
      {label}
    </span>
  </div>
);

const AreaCard = ({ name, type }) => (
  <div
    className="group relative rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
  >
    <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-slate-900/5 group-hover:ring-slate-900/10" />
    <div className="mb-1 text-[10px] uppercase tracking-wider text-slate-500">
      {type}
    </div>
    <div className="text-sm font-semibold text-slate-800 dark:text-slate-100">
      {toTitleCase(name)}
    </div>
  </div>
);

const AreasGrid = ({ items, type }) => (
  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
    {items.map((n) => (
      <AreaCard key={n} name={n} type={type} />
    ))}
  </div>
);

const AreasPage = () => {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <header className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Servis Bölgeleri
        </h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
          Eyüp / çevresi için çilingir hizmeti verdiğimiz mahalle ve site/konut
          bölgeleri. Aşağıdaki kartlardan bölgenizi hızlıca bulabilirsiniz.
        </p>
      </header>

      <SectionSeparator label="Mahalleler" />
      <AreasGrid items={AREAS.mahalleler} type="Mahalle" />

      <SectionSeparator label="Siteler & Konutlar" />
      <AreasGrid items={AREAS.siteler} type="Site / Konut" />

      {/* Alternatif sunum: rozet listesi (isterseniz bu bölümü yorumdan çıkarın) */}
      {false && (
        <div className="mt-10">
          <SectionSeparator label="Alternatif Görünüm" />
          <div className="flex flex-wrap gap-2">
            {[...AREAS.mahalleler, ...AREAS.siteler].map((n) => (
              <span
                key={n}
                className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-700 shadow-sm dark:border-slate-700 dark:text-slate-200"
              >
                {toTitleCase(n)}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AreasPage;