import type { Metadata } from 'next';
import { ArrowRight, Smartphone, Brain, Users, CheckCircle2 } from 'lucide-react';
import { PageHero, Section, SectionHeader, SectionGrid, FAQSection, CTASection } from '@/components/sections';
import { Button, Badge, Card, FeatureCard } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Accura | AI-Powered Financial Management for Nigerian SMEs',
  description: 'Accura is the intelligent Financial OS that closes the gap between bookkeeping and business growth for African MSMEs.',
};

const faqs = [
  {
    question: 'How is Accura different from QuickBooks or Xero?',
    answer: 'Three key differences: (1) Pricing designed for Nigerian realities, not US/UK markets. (2) AI that actively works on your books, not just stores data. (3) Integrated access to vetted local accountants at flat monthly rates.',
  },
  {
    question: 'Is my financial data secure?',
    answer: 'Absolutely. Accura is built by Fortbridge, a team with deep cybersecurity expertise. We use bank-level encryption, secure cloud infrastructure, and are fully NDPR compliant. Your data is yours—we never sell or share it.',
  },
  {
    question: 'What if I already have an accountant?',
    answer: 'Great! Accura works alongside your existing accountant. In fact, many accountants prefer clients who use Accura because the books are already organized when they receive them. We also offer accountant portal access.',
  },
  {
    question: 'Which banks does Accura integrate with?',
    answer: 'We\'re actively integrating with major Nigerian banks. Current and upcoming integrations include GTBank, Access Bank, Zenith Bank, First Bank, UBA, and more.',
  },
  {
    question: 'What happens if I want to cancel?',
    answer: 'You can export all your data at any time in standard formats (CSV, PDF reports). No lock-in, no penalties. We believe in earning your business every month.',
  },
];

export default function AccuraPage() {
  return (
    <>
      {/* HERO */}
      <PageHero
        label="FINTECH / FINANCIAL MANAGEMENT"
        title="The Intelligent Financial OS for African Business"
        description="Accura is a hybrid 'Software + Service' platform that combines AI-powered bookkeeping with a vetted expert marketplace—designed specifically for the financial realities of Nigerian businesses."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Ventures', href: '/ventures' },
          { label: 'Accura' },
        ]}
      />

      {/* STATUS & CTAS */}
      <Section spacing="sm" background="default">
        <div className="flex flex-wrap items-center justify-center gap-4 -mt-4">
          <Badge variant="success" size="lg" dot>MVP Live</Badge>
          <Button
            href="https://accura.fortbridge.co"
            external
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            Visit Accura
          </Button>
          <Button variant="outline" href="#business-case">
            For Investors
          </Button>
        </div>
      </Section>


      {/* THE PROBLEM */}
      <Section background="secondary">
        <SectionHeader
          label="THE CHALLENGE"
          title="Nigerian SMEs Are Fighting a Three-Front War"
          description="The financial management landscape for Nigerian small and medium enterprises has never been more challenging."
        />
        <SectionGrid columns={3}>
          <Card hover>
            <div className="w-12 h-12 rounded-xl bg-[var(--color-error-light)] flex items-center justify-center text-[var(--color-error)] mb-4">
              ₦
            </div>
            <h3 className="text-xl font-semibold text-[var(--color-black)] mb-2">The Pricing Crisis</h3>
            <p className="text-[var(--color-gray-600)] mb-4">
              The Naira&apos;s depreciation has turned modest SaaS subscriptions into enterprise-level expenses. QuickBooks now costs ₦30-50k/month.
            </p>
            <p className="text-sm text-[var(--color-gray-500)]">
              Businesses are reverting to spreadsheets—or flying blind.
            </p>
          </Card>
          <Card hover>
            <div className="w-12 h-12 rounded-xl bg-[var(--color-warning-light)] flex items-center justify-center text-[var(--color-warning)] mb-4">
              ⚖️
            </div>
            <h3 className="text-xl font-semibold text-[var(--color-black)] mb-2">The Regulatory Squeeze</h3>
            <p className="text-[var(--color-gray-600)] mb-4">
              The Finance Act 2025 has dramatically increased tax filing complexity. DIY accounting is now a compliance minefield.
            </p>
            <p className="text-sm text-[var(--color-gray-500)]">
              &ldquo;Figure it out yourself&rdquo; is no longer viable.
            </p>
          </Card>
          <Card hover>
            <div className="w-12 h-12 rounded-xl bg-[var(--color-info-light)] flex items-center justify-center text-[var(--color-info)] mb-4">
              👤
            </div>
            <h3 className="text-xl font-semibold text-[var(--color-black)] mb-2">The Expertise Gap</h3>
            <p className="text-[var(--color-gray-600)] mb-4">
              Skilled accountants are expensive. Hourly rates of ₦5-15k/hour with unpredictable monthly costs create barriers.
            </p>
            <p className="text-sm text-[var(--color-gray-500)]">
              60% of SME failures trace to poor financial management.
            </p>
          </Card>
        </SectionGrid>
      </Section>

      {/* THE SOLUTION */}
      <Section>
        <SectionHeader
          label="THE ACCURA ECOSYSTEM"
          title="A Tri-Layer Platform Built for African Realities"
          description="Accura isn't just another accounting app. It's a complete financial operating system."
        />
        <SectionGrid columns={3}>
          <FeatureCard
            icon={<Smartphone className="w-6 h-6" />}
            title="Accura Books"
            description="Mobile-first financial management. A modern, double-entry accounting system designed for how African entrepreneurs actually work."
            features={[
              'Double-entry ledger',
              'Bank feed integration',
              'OCR receipt scanning',
              'Multi-currency support',
            ]}
          />
          <FeatureCard
            icon={<Brain className="w-6 h-6" />}
            title="Accura Intelligence"
            description="Your AI-powered junior accountant. Automatically categorizes transactions, flags anomalies, and prepares books for review."
            features={[
              'Smart categorization',
              'Pattern recognition',
              'Receipt matching',
              'Tax prep automation',
            ]}
          />
          <FeatureCard
            icon={<Users className="w-6 h-6" />}
            title="Accura Experts"
            description="Vetted accountants at flat monthly rates. Professional support without unpredictable hourly billing."
            features={[
              'Starter: ₦10,000/mo',
              'Growth: ₦20,000/mo',
              'Scale: ₦30,000/mo',
              'Guaranteed response times',
            ]}
          />
        </SectionGrid>
        <div className="text-center mt-12">
          <p className="text-lg text-[var(--color-gray-600)]">
            <strong className="text-[var(--color-primary)]">80%</strong> of traditional data entry eliminated through automation
          </p>
        </div>
      </Section>

      {/* USER JOURNEY */}
      <Section background="gradient">
        <SectionHeader
          title="From Chaos to Clarity in 4 Steps"
        />
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { step: '1', title: 'Connect', desc: 'Link your bank accounts. Accura starts importing transactions automatically.', time: '5 minutes' },
            { step: '2', title: 'Automate', desc: 'Watch as Intelligence categorizes and organizes your financial data.', time: 'Continuous' },
            { step: '3', title: 'Review', desc: 'Quick daily check-ins to approve AI suggestions. Your books stay current.', time: '5 min/day' },
            { step: '4', title: 'Grow', desc: 'Your matched accountant reviews books monthly and provides guidance.', time: 'Monthly' },
          ].map((item) => (
            <div key={item.step} className="bg-white rounded-2xl p-6 text-center shadow-sm">
              <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-bold text-xl mx-auto mb-4">
                {item.step}
              </div>
              <h3 className="font-semibold text-[var(--color-black)] mb-2">{item.title}</h3>
              <p className="text-sm text-[var(--color-gray-600)] mb-3">{item.desc}</p>
              <Badge variant="default" size="sm">{item.time}</Badge>
            </div>
          ))}
        </div>
        <p className="text-center mt-8 text-[var(--color-gray-600)]">
          <strong>Total Active Time:</strong> ~10 minutes/day for professional-grade financial management
        </p>
      </Section>

      {/* BUSINESS CASE */}
      <Section id="business-case">
        <SectionHeader
          label="FOR INVESTORS"
          title="The Investment Thesis"
        />
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold text-[var(--color-black)] mb-4">Market Opportunity</h3>
            <p className="text-[var(--color-gray-600)] mb-6">
              Nigeria alone has <strong>41+ million MSMEs</strong>, the vast majority lacking adequate financial management tools.
            </p>
            <div className="space-y-3 mb-8">
              {[
                { label: 'Nigerian MSMEs', value: '41.5 million' },
                { label: 'Contribution to GDP', value: '46.3%' },
                { label: 'SME Failure Rate (5 years)', value: '~80%' },
                { label: 'Due to Financial Mismanagement', value: '60%' },
              ].map((item, i) => (
                <div key={i} className="flex justify-between py-2 border-b border-[var(--color-gray-100)]">
                  <span className="text-[var(--color-gray-600)]">{item.label}</span>
                  <span className="font-semibold text-[var(--color-black)]">{item.value}</span>
                </div>
              ))}
            </div>
            <Button href="/investors" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Request Investor Deck
            </Button>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[var(--color-black)] mb-4">The Moat</h3>
            <div className="space-y-4">
              {[
                { title: 'Software + Service Lock-in', desc: 'Switching means losing your accountant, history, and configured AI.' },
                { title: 'Data Network Effects', desc: 'Every transaction makes our AI smarter. Industry patterns emerge.' },
                { title: 'Expert Marketplace', desc: 'Building the largest vetted network of SME-focused accountants in Nigeria.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-[var(--color-black)]">{item.title}</h4>
                    <p className="text-sm text-[var(--color-gray-600)]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <FAQSection items={faqs} />

      {/* CTA */}
      <CTASection
        headline="Ready to Take Control of Your Finances?"
        description="Join the businesses building financial clarity with Accura."
        primaryCTA={{ label: 'Start Free Trial', href: 'https://accura.fortbridge.co', external: true }}
        secondaryCTA={{ label: 'Schedule a Demo', href: '/contact' }}
      >
        <p className="text-sm text-[var(--color-gray-500)] mt-4">
          ✓ No credit card required · ✓ 14-day free trial · ✓ Cancel anytime
        </p>
      </CTASection>
    </>
  );
}
