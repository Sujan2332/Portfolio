import type { MetadataRoute } from 'next';

const SITE_URL = 'https://sai-sujan-s-portfolio.onrender.com';

const explicitlyAllowedBots = [
  'Googlebot',
  'Googlebot-Image',
  'Googlebot-News',
  'Googlebot-Video',
  'AdsBot-Google',
  'Bingbot',
  'Slurp',
  'DuckDuckBot',
  'Applebot',
  'YandexBot',
  'Baiduspider',
  'facebookexternalhit',
  'Twitterbot',
  'LinkedInBot',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/private/'],
      },
      ...explicitlyAllowedBots.map((userAgent) => ({
        userAgent,
        allow: '/',
      })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
