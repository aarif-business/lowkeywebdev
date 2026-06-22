import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://www.lowkeywebdev.com', lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: 'https://www.lowkeywebdev.com/about', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://www.lowkeywebdev.com/portfolio', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://www.lowkeywebdev.com/contact', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7 },
    { url: 'https://www.lowkeywebdev.com/privacy', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ];
}
