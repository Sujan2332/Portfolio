import type { MetadataRoute } from 'next';

const SITE_URL = 'https://sai-sujan-s-portfolio.onrender.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/resume.pdf`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
