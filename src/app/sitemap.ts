import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://bl4ko.com", priority: 1 },
    { url: "https://bl4ko.com/projects", priority: 0.8 },
    { url: "https://bl4ko.com/experience", priority: 0.8 },
  ];
}
