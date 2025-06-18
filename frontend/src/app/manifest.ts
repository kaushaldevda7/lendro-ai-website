import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Lendro.AI - Agentic AI for Intelligent Lending',
    short_name: 'Lendro.AI',
    description: 'Autonomous AI agents that transform lending operations with unprecedented intelligence',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1E51DB',
    orientation: 'portrait',
    scope: '/',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'maskable',
      },
      {
        src: '/favicon.ico',
        sizes: '32x32',
        type: 'image/x-icon',
      },
    ],
    categories: ['business', 'finance', 'productivity'],
    lang: 'en',
    dir: 'ltr',
  }
} 