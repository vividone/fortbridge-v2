import type { Venture } from '@/types';

export const ventures: Venture[] = [
  {
    id: 'accura',
    name: 'Accura',
    slug: 'accura',
    tagline: 'The Intelligent Financial OS',
    description: 'Accura is a hybrid "Software + Service" platform designed to close the financial maturity gap for Nigerian SMEs. We combine AI-powered bookkeeping automation with a vetted expert marketplace—moving businesses from reactive compliance to proactive growth.',
    status: 'live',
    statusLabel: 'MVP Live',
    category: 'FinTech / Financial Management',
    color: '#10B981',
    colorLight: '#D1FAE5',
    website: 'https://accura.com.ng',
    logo: '/images/accura_logo.png',
    features: [
      'Mobile-first double-entry ledger',
      'AI transaction categorization',
      'Bank feed integration',
      'OCR receipt scanning',
      'Vetted accountant marketplace',
      'Multi-currency support',
    ],
    metrics: [
      { label: 'Target Market', value: '41M+ MSMEs' },
      { label: 'Automation Rate', value: '80%', description: 'of data entry' },
      { label: 'Entry Price', value: '₦10,000/month' },
      { label: 'Status', value: 'MVP Live' },
    ],
  },
  {
    id: 'bakr',
    name: 'Bakr',
    slug: 'bakr',
    tagline: 'The Operating System for Modern Bakeries',
    description: 'Bakr brings data-driven efficiency to an industry running on intuition and paper. Our platform tackles the "invisible leaks"—wastage, theft, unrecorded sales—that silently drain bakery profits in a low-margin, high-volume business.',
    status: 'live',
    statusLabel: 'MVP Live',
    category: 'Vertical SaaS / Food & Beverage',
    color: '#F59E0B',
    colorLight: '#FEF3C7',
    website: 'https://thebakrapp.xyz',
    logo: '/images/bakr_logo.png',
    features: [
      'Smart inventory with auto-deduction',
      'Real-time recipe costing',
      'Production tracking',
      'Distribution management',
      'Debt tracking dashboard',
      'Profitability analytics',
    ],
    metrics: [
      { label: 'Profit Leakage', value: 'Up to 20%', description: 'addressed' },
      { label: 'Target Segment', value: 'Urban bakeries' },
      { label: 'Key Insight', value: 'Success by the gram' },
      { label: 'Status', value: 'MVP Live' },
    ],
  },
  {
    id: 'valid8',
    name: 'Valid8',
    slug: 'valid8',
    tagline: 'The Unified Identity Gateway',
    description: 'Valid8 is a dual-mode platform serving both institutional identity management and high-traffic event access control. One codebase, two powerful use cases—built for speed, reliability, and offline resilience.',
    status: 'development',
    statusLabel: 'In Development',
    category: 'Identity & Access Management',
    color: '#8B5CF6',
    colorLight: '#EDE9FE',
    features: [
      'Sub-1-second QR verification',
      'Dual-mode (Institution + Event)',
      'Badge Studio with WYSIWYG editor',
      'Offline-first architecture',
      'Credit-based pricing',
      'Multi-gate support',
    ],
    logo: '/images/valid8_logo.png',
    metrics: [
      { label: 'Scan Latency', value: '<1 second' },
      { label: 'Platform Modes', value: '2', description: 'Institution + Event' },
      { label: 'Key Differentiator', value: 'Offline-first' },
      { label: 'Status', value: 'In Development' },
    ],
  },
];

export function getVentureBySlug(slug: string): Venture | undefined {
  return ventures.find((v) => v.slug === slug);
}

export function getVentureById(id: string): Venture | undefined {
  return ventures.find((v) => v.id === id);
}
