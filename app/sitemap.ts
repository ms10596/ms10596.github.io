import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://ms10596.github.io',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1
    }
  ];
}
