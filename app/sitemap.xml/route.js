export async function GET() {
  const urls = [
    "",
    "servisbolgeleri",
    "hizmetler",
    "iletisim",
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map(
        (url) => `
      <url>
        <loc>https://www.5leventvipcilingir.com/${url}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>`
      )
      .join("")}
  </urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}