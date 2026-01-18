import { Code2, Cloud, Shield, ArrowRight } from 'lucide-react';
import {
  Hero,
  Section,
  SectionHeader,
  SectionGrid,
  SplitSection,
  CTASection,
} from '@/components/sections';
import {
  Button,
  FeatureCard,
  VentureCard,
  Blockquote,
} from '@/components/ui';
import { ventures } from '@/data/ventures';

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <Hero
        headline="Architecting the Next Generation of African Enterprise"
        subheadline="Fortbridge is a Startup Studio that transforms deep market insights into high-growth ventures. We combine capital, technical mastery, and operational grit to build the digital infrastructure for a resilient economy."
        supportingText="Based in Nigeria. Building for Africa. Scaling Globally."
        primaryCTA={{ label: 'Explore Our Ventures', href: '/ventures' }}
        secondaryCTA={{ label: 'Partner With Us', href: '/collaborate' }}
        tertiaryCTA={{ label: 'See How We Build', href: '/studio-model' }}
        metrics={[
          { value: '3', label: 'Ventures Launched' },
          { value: '41M+', label: 'Target Market MSMEs' },
          { value: 'In-House', label: 'Technical Team' },
          { value: '3x Faster', label: 'Launch Speed' },
        ]}
      />

      {/* PROBLEM SECTION */}
      <Section background="secondary" id="problem">
        <SplitSection>
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)] mb-4">
              THE AFRICAN ENTERPRISE GAP
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-[var(--color-black)] mb-6">
              Great Businesses Are Failing for Preventable Reasons
            </h2>
            <p className="text-[var(--color-gray-600)] mb-6">
              Across Nigeria and the broader African continent, we see the same story repeat: ambitious entrepreneurs with viable businesses are held back—not by lack of effort, but by lack of infrastructure.
            </p>
            <div className="space-y-4">
              <ProblemItem
                title="The Financial Blind Spot"
                description="60% of SME failures trace back to poor financial management and record-keeping."
              />
              <ProblemItem
                title="The Tool Pricing Crisis"
                description="Global SaaS tools like QuickBooks now cost ₦30,000-50,000/month due to FX volatility."
              />
              <ProblemItem
                title="The Expertise Gap"
                description="Access to quality accountants, compliance experts, and operational guidance remains a luxury."
              />
              <ProblemItem
                title="The Vertical Vacuum"
                description="Industries like F&B, logistics, and healthcare lack purpose-built digital tools."
              />
            </div>
          </div>
          <div className="bg-gradient-to-br from-[var(--color-primary-light)] to-[var(--color-secondary-light)] rounded-3xl p-8 flex items-center justify-center min-h-[400px]">
            <p className="text-2xl md:text-3xl font-heading font-semibold text-[var(--color-black)] text-center text-balance">
              We founded Fortbridge to close these gaps—not with generic tools, but with deeply contextualized ventures built from the ground up.
            </p>
          </div>
        </SplitSection>
      </Section>

      {/* PRODUCT POWERHOUSE SECTION */}
      <Section id="powerhouse">
        <SectionHeader
          label="OUR UNFAIR ADVANTAGE"
          title="We Don't Just Write Code. We Build Companies."
          description="Every venture we launch is powered by our internal technical engine—ensuring enterprise-grade quality from Day 1."
        />
        <SectionGrid columns={3}>
          <FeatureCard
            icon={<Code2 className="w-6 h-6" />}
            title="Fullstack Engineering"
            description="Robust, scalable application development tailored to industry requirements. From mobile-first interfaces to complex backend architectures, we build for growth."
            features={[
              'React Native & Next.js expertise',
              'API-first architecture',
              'Shared component libraries',
            ]}
          />
          <FeatureCard
            icon={<Cloud className="w-6 h-6" />}
            title="Cloud Ops & Infrastructure"
            description="We design and deploy secure, high-efficiency cloud environments. Our infrastructure is built for 99.9% uptime and horizontal scalability."
            features={[
              'AWS & GCP certified',
              'Auto-scaling configurations',
              'Disaster recovery protocols',
            ]}
          />
          <FeatureCard
            icon={<Shield className="w-6 h-6" />}
            title="Quality Assurance"
            description="Meticulous functional, security, and usability testing ensures every product is bug-free and market-ready before launch."
            features={[
              'Automated testing pipelines',
              'Security penetration testing',
              'User acceptance protocols',
            ]}
          />
        </SectionGrid>
        <p className="text-center mt-12 text-lg text-[var(--color-gray-600)]">
          This shared infrastructure means we launch ventures{' '}
          <strong className="text-[var(--color-primary)]">3x faster</strong> than traditional startups—and with significantly lower technical debt.
        </p>
      </Section>

      {/* VENTURES PREVIEW */}
      <Section background="secondary" id="ventures">
        <SectionHeader
          label="THE PROOF OF WORK"
          title="Our Ventures"
          description="Independent companies. Shared DNA. Each solving a critical gap in the African enterprise ecosystem."
        />
        <SectionGrid columns={3}>
          {ventures.map((venture) => (
            <VentureCard
              key={venture.id}
              name={venture.name}
              tagline={venture.tagline}
              description={venture.description}
              status={venture.statusLabel}
              statusVariant={venture.status === 'live' ? 'success' : 'info'}
              color={venture.color}
              colorLight={venture.colorLight}
              href={`/ventures/${venture.slug}`}
              metrics={venture.metrics.slice(0, 2)}
            />
          ))}
        </SectionGrid>
        <div className="text-center mt-10">
          <Button href="/ventures" variant="outline" rightIcon={<ArrowRight className="w-4 h-4" />}>
            View Full Portfolio
          </Button>
        </div>
      </Section>

      {/* PHILOSOPHY SECTION */}
      <Section id="philosophy">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)] mb-4">
            WHY WE EXIST
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-[var(--color-black)] mb-8">
            From &ldquo;Service&rdquo; to &ldquo;Sovereignty&rdquo;
          </h2>
          <div className="prose prose-lg max-w-none text-[var(--color-gray-600)] space-y-6">
            <p>
              For years, Fortbridge operated as a trusted technical partner—building products for other people&apos;s visions. We were good at it. Our clients scaled. Their apps worked. Their infrastructure held.
            </p>
            <p>But something was missing.</p>
            <p>
              We kept seeing the same patterns: the same gaps, the same &ldquo;unsexy&rdquo; problems that global players ignored. Financial chaos in growing SMEs. Inventory waste bleeding bakeries dry. Identity friction slowing down institutions.
            </p>
            <p>
              <strong>The realization hit:</strong> The deepest market gaps weren&apos;t being filled by generic global tools. They required builders who understood the context—the FX volatility, the regulatory shifts, the infrastructure constraints.
            </p>
            <p>
              <strong>So we pivoted.</strong> We stopped being a vendor. We became a Venture Builder.
            </p>
            <p>
              Now, every line of code we write builds equity—for us, for our ventures, and for the ecosystem we serve.
            </p>
          </div>
          <div className="mt-12">
            <Blockquote
              author="Victor Olaitan"
              role="Founder & Lead Product Architect"
            >
              We don&apos;t just build apps; we build the operating systems for the next generation of African success stories.
            </Blockquote>
          </div>
        </div>
      </Section>

      {/* COLLABORATION CTA */}
      <Section background="gradient" id="collaborate">
        <SplitSection>
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)] mb-4">
              BUILD WITH US
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-[var(--color-black)] mb-6">
              Are You Sitting on an Industry Problem?
            </h2>
            <p className="text-[var(--color-gray-600)] mb-6">
              We partner with domain experts and industry veterans who have identified systemic inefficiencies but lack the technical firepower to build the solution.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-semibold text-[var(--color-black)] mb-2">You bring:</h4>
                <ul className="space-y-2 text-[var(--color-gray-600)]">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
                    Deep industry insight
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
                    Network access
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
                    Domain leadership
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-[var(--color-black)] mb-2">We bring:</h4>
                <ul className="space-y-2 text-[var(--color-gray-600)]">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)]" />
                    The CTO & engineering team
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)]" />
                    Cloud Ops infrastructure
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)]" />
                    Go-to-market strategy
                  </li>
                </ul>
              </div>
            </div>
            <Button href="/collaborate" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Explore the Founder-in-Residence Program
            </Button>
          </div>
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-xl font-semibold text-[var(--color-black)] mb-4">
              Industries We&apos;re Watching
            </h3>
            <ul className="space-y-4">
              {[
                'Healthcare operations & clinic management',
                'Logistics & last-mile delivery',
                'Retail inventory & POS systems',
                'Agricultural supply chain',
              ].map((industry, i) => (
                <li key={i} className="flex items-center gap-3 text-[var(--color-gray-600)]">
                  <span className="w-8 h-8 rounded-lg bg-[var(--color-gray-100)] flex items-center justify-center text-sm font-semibold text-[var(--color-gray-500)]">
                    {i + 1}
                  </span>
                  {industry}
                </li>
              ))}
            </ul>
          </div>
        </SplitSection>
      </Section>

      {/* INVESTORS TEASER */}
      <CTASection
        variant="dark"
        label="FOR INVESTORS"
        headline="De-Risked Innovation at Studio Speed"
        description="Our studio model means lower overhead, faster iteration, and shared infrastructure across ventures. We design for positive unit economics from Day 1."
        primaryCTA={{ label: 'View Investment Thesis', href: '/investors' }}
        secondaryCTA={{ label: 'Explore Our Portfolio', href: '/ventures' }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-3xl mx-auto text-left">
          <div className="bg-[var(--color-gray-800)] rounded-xl p-4">
            <p className="text-sm text-[var(--color-gray-400)]">Repeatable Framework</p>
            <p className="text-white font-medium">Shared Cloud Ops & QA</p>
          </div>
          <div className="bg-[var(--color-gray-800)] rounded-xl p-4">
            <p className="text-sm text-[var(--color-gray-400)]">Massive TAM</p>
            <p className="text-white font-medium">41M+ MSMEs in Nigeria</p>
          </div>
          <div className="bg-[var(--color-gray-800)] rounded-xl p-4">
            <p className="text-sm text-[var(--color-gray-400)]">Built-in Moats</p>
            <p className="text-white font-medium">High switching costs</p>
          </div>
        </div>
      </CTASection>
    </>
  );
}

function ProblemItem({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] mt-2 flex-shrink-0" />
      <div>
        <h4 className="font-semibold text-[var(--color-black)]">{title}</h4>
        <p className="text-sm text-[var(--color-gray-600)]">{description}</p>
      </div>
    </div>
  );
}
