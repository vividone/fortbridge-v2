import type { NavItem, FooterColumn, LinkItem } from '@/types';

export const siteConfig = {
  name: 'Fortbridge',
  tagline: 'Building Africa\'s Digital Infrastructure',
  description: 'Fortbridge is a startup studio creating digital infrastructure for African businesses. We build ventures that solve critical enterprise gaps.',
  url: 'https://fortbridge.co',
  ogImage: '/fortbridge_default_icon.png',

  // Contact Information
  email: 'hello@fortbridge.co',
  investorEmail: 'investors@fortbridge.co',
  partnerEmail: 'partners@fortbridge.co',
  pressEmail: 'press@fortbridge.co',
  careersEmail: 'careers@fortbridge.co',

  // Social Links
  social: {
    linkedin: 'https://linkedin.com/company/fortbridge',
    twitter: 'https://twitter.com/fortbridge',
    instagram: 'https://instagram.com/fortbridgeinc',
  },

  // Location
  location: {
    city: 'Lagos',
    country: 'Nigeria',
  },

  // Company Info
  founded: 2019,
  copyright: `© ${new Date().getFullYear()} Fortbridge Technologies Ltd. All rights reserved.`,
};

export const navigation: NavItem[] = [
  {
    label: 'Ventures',
    href: '/ventures',
    children: [
      {
        label: 'All Ventures',
        href: '/ventures',
        description: 'Explore our portfolio',
      },
      {
        label: 'Accurify',
        href: '/ventures/accurify',
        description: 'The Intelligent Financial OS',
      },
      {
        label: 'Bakr',
        href: '/ventures/bakr',
        description: 'The Bakery Operating System',
      },
      {
        label: 'Valid8',
        href: '/ventures/valid8',
        description: 'The Identity Gateway',
      },
    ],
  },
  {
    label: 'The Studio',
    href: '/studio-model',
  },
  {
    label: 'Collaborate',
    href: '/collaborate',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Investors',
    href: '/investors',
  },
];

export const footerColumns: FooterColumn[] = [
  {
    title: 'Ventures',
    links: [
      { label: 'Accurify', href: '/ventures/accurify' },
      { label: 'Bakr', href: '/ventures/bakr' },
      { label: 'Valid8', href: '/ventures/valid8' },
      { label: 'All Ventures', href: '/ventures' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'The Studio Model', href: '/studio-model' },
      { label: 'About Us', href: '/about' },
      { label: 'Collaborate', href: '/collaborate' },
      { label: 'For Investors', href: '/investors' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'NDPR Compliance', href: '/privacy#ndpr' },
    ],
  },
];

export const socialLinks: LinkItem[] = [
  { label: 'LinkedIn', href: siteConfig.social.linkedin, external: true },
  { label: 'Twitter', href: siteConfig.social.twitter, external: true },
];
