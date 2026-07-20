import type { Metadata, Viewport } from 'next';
import './globals.css';

const SITE_URL = 'https://sai-sujan-s-portfolio.onrender.com';
const SITE_NAME = 'Sai Sujan S Portfolio';
const TITLE = 'Sai Sujan S — Full Stack Developer | Portfolio';
const DESCRIPTION =
  'Full Stack Developer specializing in React, Next.js, and e-commerce. Building fast, accessible digital products. View portfolio & projects.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'Sai',
    'Sai Sujan',
    'Sai Sujan S Portfolio',
    'Sai Sujan S',
    'full stack developer',
    'frontend developer',
    'React developer',
    'Next.js developer',
    'e-commerce developer',
    'portfolio',
  ],
  authors: [{ name: 'Sai Sujan S', url: SITE_URL }],
  applicationName: SITE_NAME,
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  manifest: '/manifest.webmanifest',
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    title: TITLE,
    description: 'Full Stack Developer specializing in React, Next.js, and e-commerce. View my portfolio.',
    url: SITE_URL,
    locale: 'en_US',
    images: [
      {
        url: '/assets/s.jpeg',
        width: 1200,
        height: 630,
        alt: 'Sai Sujan S - Full Stack Developer Portfolio | React, Next.js, E-commerce',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: 'Full Stack Developer specializing in React, Next.js, and e-commerce. View my portfolio.',
    images: ['/assets/s.jpeg'],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#050816',
  colorScheme: 'dark light',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@id': `${SITE_URL}/#person`,
      '@type': 'Person',
      name: 'Sai Sujan S',
      jobTitle: 'Frontend-Focused Full Stack Developer',
      url: SITE_URL,
      image: `${SITE_URL}/og-image.jpg`,
      sameAs: ['https://github.com/sujan2332'],
      description:
        'Full-stack developer specializing in fast, accessible web experiences, modern React applications, and scalable e-commerce platforms.',
      knowsAbout: [
        'React.js',
        'Next.js',
        'Node.js',
        'MongoDB',
        'TypeScript',
        'Tailwind CSS',
        'E-commerce platforms',
      ],
      worksFor: {
        '@type': 'Organization',
        name: 'AIEnterprise Inc.',
        url: 'https://www.aienterprise.com',
      },
      alumniOf: [
        { '@type': 'CollegeOrUniversity', name: 'Jyothy Institute of Technology (JIT)' },
        { '@type': 'CollegeOrUniversity', name: 'Visvesvaraya Technological University (VTU)' },
      ],
    },
    {
      '@id': `${SITE_URL}/#website`,
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL,
      inLanguage: 'en-US',
      publisher: { '@id': `${SITE_URL}/#person` },
    },
    {
      '@id': `${SITE_URL}/#webpage`,
      '@type': 'ProfilePage',
      url: SITE_URL,
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: 'en-US',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      mainEntity: { '@id': `${SITE_URL}/#person` },
      about: { '@id': `${SITE_URL}/#person` },
      primaryImageOfPage: { '@id': `${SITE_URL}/#og-image` },
    },
    {
      '@id': `${SITE_URL}/#og-image`,
      '@type': 'ImageObject',
      url: `${SITE_URL}/og-image.jpg`,
      width: 555,
      height: 555,
    },
  ],
};

const fontFaceStyle = `
  @font-face {
    font-family: 'Syne';
    src: url('/fonts/Syne-VariableFont_wght.woff2') format('woff2');
    font-weight: 100 900;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Syne';
    src: url('/fonts/Syne-VariableFont_wght.woff2') format('woff2');
    font-weight: 100 900;
    font-style: italic;
    font-display: swap;
  }
  @font-face {
    font-family: 'Plus Jakarta Sans';
    src: url('/fonts/PlusJakartaSans-VariableFont_wght.woff2') format('woff2');
    font-weight: 100 900;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Plus Jakarta Sans';
    src: url('/fonts/PlusJakartaSans-VariableFont_wght.woff2') format('woff2');
    font-weight: 100 900;
    font-style: italic;
    font-display: swap;
  }
  @font-face {
    font-family: 'Cormorant Garamond';
    src: url('/fonts/CormorantGaramond-VariableFont_wght.woff2') format('woff2');
    font-weight: 100 900;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Cormorant Garamond';
    src: url('/fonts/CormorantGaramond-VariableFont_wght.woff2') format('woff2');
    font-weight: 100 900;
    font-style: italic;
    font-display: swap;
  }
  @font-face {
    font-family: 'Fira Code';
    src: url('/fonts/FiraCode-VariableFont_wght.woff2') format('woff2');
    font-weight: 100 900;
    font-style: normal;
    font-display: swap;
  }
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/fonts/Syne-VariableFont_wght.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/PlusJakartaSans-VariableFont_wght.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/CormorantGaramond-VariableFont_wght.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/FiraCode-VariableFont_wght.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        {/* eslint-disable-next-line react/no-danger */}
        <style dangerouslySetInnerHTML={{ __html: fontFaceStyle }} />
        {/* eslint-disable-next-line react/no-danger */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
