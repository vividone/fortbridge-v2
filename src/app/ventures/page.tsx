import type { Metadata } from 'next';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { PageHero, Section, SectionHeader, SectionGrid, CTASection } from '@/components/sections';
import { VentureCard, Card, Button, List } from '@/components/ui';
import { ventures } from '@/data/ventures';

export const metadata: Metadata = {
  title: 'Our Ventures | Portfolio Overview',
  description: 'Explore Fortbridge\'s portfolio: Accura (financial management), Bakr (bakery operations), and Valid8 (identity verification). Enterprise software built for Africa.',
};

export default function VenturesPage() {
  return (
    <>
      {/* HERO */}
      <PageHero
        label="OUR PORTFOLIO"
        title="Ventures Built to Last"
        description="Each company in our portfolio addresses a critical gap in the African enterprise ecosystem. They are independent businesses united by shared infrastructure, rigorous methodology, and a commitment to solving 'unsexy' problems that others overlook."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Ventures' }]}
      />

      {/* STATS BAR */}
      <Section spacing="md" background="default">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-white rounded-2xl border border-[var(--color-gray-100)] shadow-sm -mt-8 relative z-10">
          {[
            { value: '3', label: 'Active Ventures' },
            { value: '41M+', label: 'Combined TAM' },
            { value: 'FinTech, Vertical SaaS, Identity', label: 'Sectors' },
            { value: '4 months', label: 'Avg. Time to MVP' },
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

      {/* PHILOSOPHY */}
      <Section background="secondary">
        <SectionHeader
          title="What Unites Our Ventures"
          description="Despite operating in different industries, every Fortbridge venture shares a common DNA:"
          align="left"
        />
        <SectionGrid columns={2} gap="lg">
          {[
            {
              title: 'Problem-First Thinking',
              description: 'We start with validated pain points, not solutions looking for problems. Every venture begins with extensive market research and user interviews.',
            },
            {
              title: 'Context-Native Design',
              description: 'Built for African realities—FX volatility, infrastructure gaps, regulatory complexity. No copy-paste from Silicon Valley playbooks.',
            },
            {
              title: 'Enterprise-Grade from Day 1',
              description: 'Security, scalability, and compliance aren\'t afterthoughts. Our Product Powerhouse ensures professional-grade architecture from the first commit.',
            },
            {
              title: 'Sustainable Unit Economics',
              description: 'We design business models that work at African price points while maintaining healthy margins. No "burn now, figure it out later."',
            },
            {
              title: 'Software + Service Hybrid',
              description: 'Where pure SaaS falls short, we layer human expertise. Technology enables scale; humans ensure adoption.',
            },
          ].map((item, i) => (
            <div key={i} className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-[var(--color-black)] mb-1">{item.title}</h3>
                <p className="text-[var(--color-gray-600)]">{item.description}</p>
              </div>
            </div>
          ))}
        </SectionGrid>
      </Section>

      {/* VENTURE GRID */}
      <Section>
        <SectionHeader
          label="THE PORTFOLIO"
          title="Our Ventures"
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

      {/* STUDIO ADVANTAGE */}
      <Section background="secondary">
        <SectionHeader
          title="Why Studio-Built Ventures Win"
          description="Unlike traditional startups that cobble together freelancers and burn runway on technical mistakes, our ventures launch with:"
        />
        <SectionGrid columns={2}>
          {[
            {
              title: 'Shared Infrastructure',
              description: 'Cloud Ops, QA pipelines, and component libraries used across all ventures—reducing cost and accelerating timelines.',
            },
            {
              title: 'Security-First DNA',
              description: 'Every venture inherits our cybersecurity expertise. Compliance (NDPR/GDPR) is built-in, not bolted-on.',
            },
            {
              title: 'Cross-Pollination',
              description: 'Learnings from Accura inform Bakr. Patterns from Valid8 feed back into the studio. The portfolio gets smarter together.',
            },
            {
              title: 'Patient Capital',
              description: 'We\'re not chasing vanity metrics. We build for sustainable growth and positive unit economics.',
            },
          ].map((item, i) => (
            <Card key={i} hover>
              <h3 className="font-semibold text-[var(--color-black)] mb-2">{item.title}</h3>
              <p className="text-[var(--color-gray-600)]">{item.description}</p>
            </Card>
          ))}
        </SectionGrid>
      </Section>

      {/* PIPELINE TEASER */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-[var(--color-black)] mb-4">
            What&apos;s Next?
          </h2>
          <p className="text-[var(--color-gray-600)] mb-8">
            Our thesis focuses on &ldquo;unsexy&rdquo; industries ripe for digital transformation—sectors where friction is high, digital adoption is low, and the right solution can become critical infrastructure.
          </p>
          <div className="bg-[var(--color-gray-50)] rounded-2xl p-8 mb-8">
            <h3 className="font-semibold text-[var(--color-black)] mb-4">Industries We&apos;re Watching</h3>
            <List
              items={[
                'Healthcare operations & clinic management',
                'Logistics & last-mile delivery',
                'Retail inventory & POS systems',
                'Agricultural supply chain',
              ]}
              variant="bullet"
              className="text-left max-w-md mx-auto"
            />
          </div>
          <p className="text-[var(--color-gray-600)] mb-6">
            Have domain expertise in one of these sectors?
          </p>
          <Button href="/collaborate" rightIcon={<ArrowRight className="w-4 h-4" />}>
            Explore the Founder-in-Residence Program
          </Button>
        </div>
      </Section>

      {/* INVESTOR CTA */}
      <CTASection
        variant="dark"
        headline="Interested in Our Portfolio?"
        description="We offer investors exposure to a diversified portfolio of validated ventures—all built on shared infrastructure with rigorous methodology."
        primaryCTA={{ label: 'View Investment Thesis', href: '/investors' }}
      />
    </>
  );
}
