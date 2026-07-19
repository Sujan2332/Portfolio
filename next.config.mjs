/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: every route is pre-rendered to plain HTML at build time.
  // This is the strongest option for crawlability — search engines and AI
  // crawlers get complete HTML with no JavaScript execution required, and
  // TTFB is as fast as a CDN can serve a static file.
  // Remove this line only if you later add server-rendered/dynamic routes.
  output: 'export',
  trailingSlash: false,

  // No <img>/next/image usage in this project today, and the Image
  // Optimization API isn't available under static export anyway.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
