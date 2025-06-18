import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/platform/dashboard',
          '/platform/admin',
          '/login',
          '/api/',
          '/admin/',
          '/_next/',
          '/static/',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/platform/dashboard',
          '/platform/admin',
          '/login',
          '/api/',
          '/admin/',
        ],
      },
    ],
    sitemap: 'https://lendro.ai/sitemap.xml',
  }
} 