export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/privacy"],
      },
    ],
    sitemap: "https://www.5leventvipcilingir.com/sitemap.xml",
  };
}
