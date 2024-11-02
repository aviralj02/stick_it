import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://stick-it-olive.vercel.app",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://stick-it-olive.vercel.app/editor",
      lastModified: new Date().toISOString(),
    },
  ];
}
