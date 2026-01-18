import type { Metadata } from 'next';
import { CheckCircle2, Shield, TrendingUp, Layers } from 'lucide-react';
import { PageHero, Section, SectionHeader, SectionGrid, CTASection } from '@/components/sections';
import { Card, Badge, VentureCard } from '@/components/ui';
import { ventures } from '@/data/ventures';

export const metadata: Metadata = {
  title: 'Invest in Fortbridge | Startup Studio Investment Opportunity',
  description: 'Invest in Fortbridge\'s portfolio of de-risked African enterprise ventures. Studio model, proven methodology, 41M+ MSME market.',
};

export default function InvestorsPage() {
  return (
    <>
      <PageHero
        label="INVESTMENT OPPORTUNITY"
        title="De-Risked Innovation at Studio Speed"
        description="Fortbridge offers investors exposure to a portfolio of validated ventures—each built on shared infrastructure, guided by proven methodology, and focused on critical gaps in the African enterprise ecosystem."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Investors' }]}
      />

      {/* KEY METRICS */}
      <Section spacing="md" background="default">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-white rounded-2xl border border-[var(--color-gray-100)] shadow-sm -mt-8 relative z-10">
          {[
            { value: '3', label: 'Active Ventures' },
            { value: '41M+', label: 'MSMEs in Nigeria' },
            { value: '4 months', label: 'Avg. Time to MVP' },
            { value: 'In-house', label: 'Technical Team' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-[var(--color-primary)]">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-[var(--color-gray-600)]">{stat.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* THE THESIS */}
      <Section>
        <SectionHeader
          label="OUR THESIS"
          title="Why We Believe This Works"
        />
        <SectionGrid columns={2} gap="lg">
          <div>
            <h3 className="text-xl font-semibold text-[var(--color-black)] mb-4">The Macro Opportunity</h3>
            <p className="text-[var(--color-gray-600)] mb-6">
              Africa is experiencing a fundamental shift. Digital adoption is accelerating. Regulatory frameworks are forcing digitization. A generation of entrepreneurs needs operational infrastructure.
            </p>
            <ul className="space-y-3">
              {[
                'Global SaaS is priced out (FX volatility)',
                'Local alternatives are immature',
                'Context mismatch with Western tools',
                'Massive underserved market',
              ].map((item, i) => (
                <li key={i} className="flex gap-2 text-[var(--color-gray-600)]">
                  <CheckCircle2 className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[var(--color-black)] mb-4">The Studio Advantage</h3>
            <p className="text-[var(--color-gray-600)] mb-6">
              Traditional venture investing means backing individual founders with unproven teams. The studio model inverts this equation:
            </p>
            <ul className="space-y-3">
              {[
                'Experienced team, not first-time founders',
                'Shared infrastructure accelerates launches',
                'Lessons applied across portfolio',
                'Multiple shots on goal',
              ].map((item, i) => (
                <li key={i} className="flex gap-2 text-[var(--color-gray-600)]">
                  <CheckCircle2 className="w-5 h-5 text-[var(--color-secondary)] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </SectionGrid>
      </Section>

      {/* THE PORTFOLIO */}
      <Section background="secondary">
        <SectionHeader
          label="CURRENT PORTFOLIO"
          title="Three Ventures, One Thesis"
        />
        <SectionGrid columns={3}>
          {ventures.map((venture) => (
            <VentureCard
              key={venture.id}
              id={venture.id}
              name={venture.name}
              tagline={venture.tagline}
              description={venture.description}
              status={venture.statusLabel}
              statusVariant={venture.status === 'live' ? 'success' : 'info'}
              color={venture.color}
              href={`/ventures/${venture.slug}`}
              metrics={venture.metrics.slice(0, 2)}
            />
          ))}
        </SectionGrid>
      </Section>

      {/* THE MOAT */}
      <Section>
        <SectionHeader
          label="DEFENSIBILITY"
          title="How We Build Lasting Value"
        />
        <SectionGrid columns={3}>
          {[
            { icon: <Layers className="w-6 h-6" />, title: 'Vertical Integration', desc: 'Our ventures go deep. Accura owns software + service. High switching costs = high retention.' },
            { icon: <TrendingUp className="w-6 h-6" />, title: 'Data Network Effects', desc: 'Every transaction makes AI smarter. Patterns emerge. New entrants start with no data.' },
            { icon: <Shield className="w-6 h-6" />, title: 'Context-Native Design', desc: 'Offline capability, local payments, NDPR compliance. Built for African realities.' },
          ].map((item, i) => (
            <Card key={i} hover>
              <div className="w-12 h-12 rounded-xl bg-[var(--color-primary-light)] flex items-center justify-center text-[var(--color-primary)] mb-4">
                {item.icon}
              </div>
              <h3 className="font-semibold text-[var(--color-black)] mb-2">{item.title}</h3>
              <p className="text-sm text-[var(--color-gray-600)]">{item.desc}</p>
            </Card>
          ))}
        </SectionGrid>
      </Section>

      {/* UNIT ECONOMICS */}
      <Section background="gradient">
        <SectionHeader
          label="THE NUMBERS"
          title="Built for Sustainable Economics"
        />
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl p-8">
            <h3 className="text-lg font-semibold text-[var(--color-black)] mb-6">Portfolio-Wide Targets</h3>
            <div className="space-y-4">
              {[
                { metric: 'Customer Acquisition Cost (CAC)', target: '<₦20,000' },
                { metric: 'Average Revenue Per User (ARPU)', target: '₦20,000-40,000/mo' },
                { metric: 'Gross Margin', target: '70-80%' },
                { metric: 'Payback Period', target: '<2 months' },
                { metric: 'Monthly Churn', target: '<3%' },
                { metric: 'LTV:CAC Ratio', target: '>10:1' },
              ].map((item, i) => (
                <div key={i} className="flex justify-between py-3 border-b border-[var(--color-gray-100)] last:border-0">
                  <span className="text-[var(--color-gray-600)]">{item.metric}</span>
                  <span className="font-semibold text-[var(--color-black)]">{item.target}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-[var(--color-gray-500)] mt-6">
              *Illustrative targets. Actual metrics shared with serious investors under NDA.
            </p>
          </div>
        </div>
      </Section>

      {/* INVESTMENT OPTIONS */}
      <Section>
        <SectionHeader
          label="INVESTMENT OPTIONS"
          title="Ways to Partner With Us"
        />
        <SectionGrid columns={3}>
          {[
            { title: 'Studio-Level Investment', desc: 'Invest in Fortbridge as a studio, gaining exposure to the entire portfolio of current and future ventures.', badge: 'Portfolio Exposure' },
            { title: 'Venture-Specific Investment', desc: 'Invest directly in a specific venture (Accura, Bakr, or Valid8) as it raises growth capital.', badge: 'Concentrated Bet' },
            { title: 'Strategic Partnership', desc: 'For corporates and family offices with strategic interest beyond financial returns.', badge: 'Value-Add' },
          ].map((item, i) => (
            <Card key={i} hover className="p-8">
              <Badge variant="primary" size="sm" className="mb-4">{item.badge}</Badge>
              <h3 className="text-xl font-semibold text-[var(--color-black)] mb-3">{item.title}</h3>
              <p className="text-[var(--color-gray-600)]">{item.desc}</p>
            </Card>
          ))}
        </SectionGrid>
      </Section>

      {/* IDEAL INVESTORS */}
      <Section background="secondary">
        <SectionHeader
          title="Our Ideal Partners"
        />
        <div className="max-w-3xl mx-auto">
          <SectionGrid columns={2}>
            {[
              { title: 'African Market Understanding', desc: 'Or genuine curiosity—we\'re happy to educate' },
              { title: 'Patient Capital', desc: 'Building for long term; quick-flip doesn\'t fit' },
              { title: 'Strategic Value-Add', desc: 'Introductions, expertise, and guidance' },
              { title: 'Aligned Values', desc: 'Sustainable building and African enterprise potential' },
            ].map((item, i) => (
              <div key={i} className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-[var(--color-black)]">{item.title}</h4>
                  <p className="text-sm text-[var(--color-gray-600)]">{item.desc}</p>
                </div>
              </div>
            ))}
          </SectionGrid>
        </div>
      </Section>

      {/* CTA */}
      <CTASection
        variant="dark"
        headline="Let's Start the Conversation"
        description="If our thesis resonates and you'd like to learn more, we'd welcome the opportunity to connect."
        primaryCTA={{ label: 'Request Investor Deck', href: '/contact' }}
        secondaryCTA={{ label: 'Schedule a Call', href: '/contact' }}
      >
        <p className="text-sm text-[var(--color-gray-400)] mt-4">
          We respond to all inquiries within 48 hours
        </p>
      </CTASection>
    </>
  );
}
