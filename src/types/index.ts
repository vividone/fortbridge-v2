import { type ReactNode } from 'react';

// ============================================
// COMMON TYPES
// ============================================

export interface BaseProps {
  className?: string;
  children?: ReactNode;
}

export interface LinkItem {
  label: string;
  href: string;
  external?: boolean;
  description?: string;
}

export interface NavItem extends LinkItem {
  children?: LinkItem[];
}

// ============================================
// VENTURE TYPES
// ============================================

export type VentureStatus = 'concept' | 'development' | 'mvp' | 'live' | 'scaling';

export interface Venture {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  status: VentureStatus;
  statusLabel: string;
  category: string;
  color: string;
  colorLight: string;
  logo?: string;
  website?: string;
  features: string[];
  metrics: VentureMetric[];
}

export interface VentureMetric {
  label: string;
  value: string;
  description?: string;
}

// ============================================
// SECTION TYPES
// ============================================

export interface SectionProps extends BaseProps {
  id?: string;
  label?: string;
  background?: 'default' | 'secondary' | 'tertiary' | 'gradient' | 'dark';
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
}

export interface HeroProps extends SectionProps {
  headline: string;
  subheadline?: string;
  supportingText?: string;
  primaryCTA?: CTAProps;
  secondaryCTA?: CTAProps;
  tertiaryCTA?: CTAProps;
  metrics?: MetricItem[];
  image?: string;
  imageAlt?: string;
}

export interface CTAProps {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost';
  external?: boolean;
  icon?: ReactNode;
}

export interface MetricItem {
  label: string;
  value: string | number;
  suffix?: string;
  prefix?: string;
}

// ============================================
// CARD TYPES
// ============================================

export interface CardProps extends BaseProps {
  title: string;
  description?: string;
  icon?: ReactNode;
  image?: string;
  imageAlt?: string;
  href?: string;
  cta?: CTAProps;
  badge?: string;
  badgeVariant?: 'default' | 'success' | 'warning' | 'info';
}

export interface FeatureCardProps extends CardProps {
  features?: string[];
}

export interface VentureCardProps extends CardProps {
  venture: Venture;
}

// ============================================
// FORM TYPES
// ============================================

export interface InputProps {
  id: string;
  name: string;
  label?: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'tel' | 'url' | 'password' | 'number';
  required?: boolean;
  disabled?: boolean;
  error?: string;
  helperText?: string;
  className?: string;
}

export interface TextareaProps extends Omit<InputProps, 'type'> {
  rows?: number;
  maxLength?: number;
}

export interface SelectProps extends Omit<InputProps, 'type'> {
  options: SelectOption[];
}

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

// ============================================
// CONTENT TYPES
// ============================================

export interface FAQ {
  question: string;
  answer: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role?: string;
  company?: string;
  image?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio?: string;
  image?: string;
  linkedin?: string;
  twitter?: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description?: string;
}

export interface ComparisonItem {
  feature: string;
  us: string | boolean;
  them: string | boolean;
}

// ============================================
// SEO TYPES
// ============================================

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: 'website' | 'article' | 'product';
  canonical?: string;
  noIndex?: boolean;
}

// ============================================
// LAYOUT TYPES
// ============================================

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface FooterColumn {
  title: string;
  links: LinkItem[];
}
