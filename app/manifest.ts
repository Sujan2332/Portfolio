import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: '/',
    name: 'Sai Sujan S Portfolio',
    short_name: 'SaiSujan',
    description:
      'Portfolio of Sai Sujan S, a full-stack developer specializing in modern web products and e-commerce experiences.',
    start_url: '/',
    scope: '/',
    lang: 'en-US',
    display: 'standalone',
    background_color: '#050816',
    theme_color: '#050816',
    orientation: 'portrait',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/favicon.ico', sizes: '48x48', type: 'image/x-icon' },
    ],
  };
}
