import type { MetadataRoute } from 'next';

const SITE_URL = 'https://sai-sujan-s-portfolio.onrender.com';
const DISALLOWED_PATHS = ['/api/', '/private/'];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        disallow: DISALLOWED_PATHS,
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
