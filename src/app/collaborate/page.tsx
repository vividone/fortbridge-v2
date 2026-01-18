import type { Metadata } from 'next';
import { CheckCircle2, Users, Code2, Rocket, TrendingUp } from 'lucide-react';
import { PageHero, Section, SectionHeader, SectionGrid, FAQSection, CTASection } from '@/components/sections';
import { Card, List } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Partner With Us | Fortbridge Founder-in-Residence Program',
  description: 'Join Fortbridge\'s Founder-in-Residence program. Bring your domain expertise; we bring the technical team, capital, and infrastructure.',
};

const faqs = [
  {
    question: 'What does Fortbridge provide?',
    answer: 'We provide the complete technical team (CTO-level leadership, engineers, designers, QA), cloud infrastructure, cybersecurity expertise, operational support, and seed capital. You focus on product vision and market development.',
  },
  {
    question: 'What do you look for in a Founder-in-Residence?',
    answer: 'Deep domain expertise (5+ years in your industry), identified and validated a real problem, strong network in your industry, full-time commitment capability, and complementary skills to our technical focus.',
  },
  {
    question: 'What\'s the equity split?',
    answer: 'Equity structures are negotiated individually based on the opportunity, the founder\'s contribution, and capital requirements. We aim for fair arrangements that align incentives.',
  },
  {
    question: 'How long is the program?',
    answer: 'The program runs through the full venture creation cycle—typically 12-18 months from concept to growth stage. We&apos;re long-term partners, not short-term accelerators.',
  },
  {
    question: 'Do I need technical skills?',
    answer: 'No. That\'s what we bring. We\'re looking for domain experts who deeply understand their industry and can drive product vision and market development.',
  },
];

export default function CollaboratePage() {
  return (
    <>
      <PageHero
        label="BUILD WITH US"
        title="You Bring the Domain Expertise. We Bring the Venture Engine."
        description="The Founder-in-Residence program pairs exceptional domain experts with Fortbridge's Product Powerhouse to create category-defining ventures."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Collaborate' }]}
      />

      {/* THE MODEL */}
      <Section>
        <SectionHeader
          title="A Different Kind of Partnership"
          description="Most aspiring founders face an impossible choice: spend years learning to code, or hand their vision to unreliable contractors."
        />
        <SectionGrid columns={2}>
          <Card className="p-8 bg-[var(--color-primary-light)]">
            <h3 className="text-xl font-semibold text-[var(--color-black)] mb-4">You Bring</h3>
            <List
              items={[
                'Deep industry expertise (5+ years)',
                'Validated problem insight',
                'Network and distribution access',
                'Product vision and direction',
                'Full-time commitment',
              ]}
              variant="check"
            />
          </Card>
          <Card className="p-8 bg-[var(--color-secondary-light)]">
            <h3 className="text-xl font-semibold text-[var(--color-black)] mb-4">We Bring</h3>
            <List
              items={[
                'CTO-level technical leadership',
                'Full engineering team',
                'Cloud infrastructure & security',
                'Design and QA capabilities',
                'Seed capital and runway',
              ]}
              variant="check"
            />
          </Card>
        </SectionGrid>
      </Section>

      {/* HOW IT WORKS */}
      <Section background="secondary">
        <SectionHeader
          label="THE JOURNEY"
          title="How the Program Works"
        />
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            { phase: 'Apply', icon: <Users className="w-5 h-5" />, desc: 'Submit your application with your background, the problem you&apos;ve identified, and why you&apos;re the right person to solve it.' },
            { phase: 'Evaluate', icon: <CheckCircle2 className="w-5 h-5" />, desc: 'We assess fit: market opportunity, problem validity, your domain depth, and alignment with our thesis.' },
            { phase: 'Align', icon: <Code2 className="w-5 h-5" />, desc: 'If there&apos;s mutual interest, we work together to define the venture concept, roles, and equity structure.' },
            { phase: 'Build', icon: <Rocket className="w-5 h-5" />, desc: 'You join full-time. The Product Powerhouse activates. We build your MVP together in 4-6 months.' },
            { phase: 'Launch', icon: <TrendingUp className="w-5 h-5" />, desc: 'Go to market with support. You lead the business; we remain operational partners.' },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-xl p-6 flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-bold">
                {i + 1}
              </div>
              <div>
                <h3 className="font-semibold text-[var(--color-black)] mb-1">{item.phase}</h3>
                <p className="text-[var(--color-gray-600)]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* IDEAL CANDIDATE */}
      <Section>
        <SectionHeader
          title="Who We're Looking For"
        />
        <SectionGrid columns={2}>
          <div>
            <h3 className="text-xl font-semibold text-[var(--color-black)] mb-4">You might be a fit if:</h3>
            <List
              items={[
                'You&apos;ve spent 5+ years in an industry and understand its pain points deeply',
                'You&apos;ve identified a problem that keeps you up at night',
                'You have a network that trusts your judgment',
                'You&apos;re ready to commit full-time to building something',
                'You&apos;re comfortable leading product and market strategy',
              ]}
              variant="check"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[var(--color-black)] mb-4">Industries we&apos;re excited about:</h3>
            <List
              items={[
                'Healthcare operations & clinic management',
                'Logistics & last-mile delivery',
                'Retail inventory & POS systems',
                'Agricultural supply chain',
                'B2B services and operational tools',
              ]}
              variant="bullet"
            />
            <p className="text-sm text-[var(--color-gray-500)] mt-4">
              Not on this list? We&apos;re always interested in compelling opportunities.
            </p>
          </div>
        </SectionGrid>
      </Section>

      {/* FAQ */}
      <FAQSection items={faqs} />

      {/* CTA */}
      <CTASection
        headline="Ready to Build Something That Matters?"
        description="Apply to the Founder-in-Residence program and let's explore building together."
        primaryCTA={{ label: 'Apply Now', href: '/contact' }}
        secondaryCTA={{ label: 'Learn About Our Studio Model', href: '/studio-model' }}
      />
    </>
  );
}
