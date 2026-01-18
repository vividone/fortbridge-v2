import type { Metadata } from 'next';
import { Search, Lightbulb, Code2, Rocket, TrendingUp, ArrowRight } from 'lucide-react';
import { PageHero, Section, SectionHeader, SectionGrid, CTASection, ComparisonTable } from '@/components/sections';
import { Card, FeatureCard, Button } from '@/components/ui';

export const metadata: Metadata = {
  title: 'How We Build | The Fortbridge Startup Studio Model',
  description: 'Learn how Fortbridge\'s startup studio model de-risks innovation. Our Product Powerhouse methodology takes ventures from idea to launch in 4 months.',
};

export default function StudioModelPage() {
  return (
    <>
      <PageHero
        label="OUR METHODOLOGY"
        title="We De-Risk Innovation"
        description="Traditional startups fail because they're forced to figure out everything from scratch—product, technology, hiring, operations, fundraising—all at once. We invert this model."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'The Studio' }]}
      />

      {/* WHAT IS A STARTUP STUDIO */}
      <Section>
        <SectionHeader
          title="What Is a Startup Studio?"
          description="A startup studio (also called a venture studio or startup factory) is an organization that systematically creates new companies using shared resources, proven processes, and accumulated expertise."
        />
        <ComparisonTable
          usLabel="Fortbridge Studio"
          themLabel="Traditional Startup"
          rows={[
            { feature: 'Team', us: 'Experienced builders who\'ve done this before', them: 'First-time team' },
            { feature: 'Infrastructure', us: 'Shared, ready to deploy', them: 'Build from scratch' },
            { feature: 'Learning', us: 'Applied across portfolio', them: 'Learned expensively' },
            { feature: 'Risk', us: 'Portfolio of related ventures', them: 'Single bet' },
            { feature: 'Support', us: 'Deep operational involvement', them: 'Board seat only' },
            { feature: 'Quality', us: 'Consistent standard', them: 'Variable execution' },
          ]}
        />
      </Section>

      {/* THE PRODUCT POWERHOUSE */}
      <Section background="secondary">
        <SectionHeader
          label="OUR ENGINE"
          title="The Product Powerhouse"
          description="Every Fortbridge venture is built on the same foundation: our internal technical engine that handles everything from ideation to scale."
        />
        <SectionGrid columns={3}>
          <FeatureCard
            icon={<Code2 className="w-6 h-6" />}
            title="Fullstack Engineering"
            description="React Native, Next.js, Node.js, PostgreSQL—we build modern, scalable applications."
          />
          <FeatureCard
            icon={<Rocket className="w-6 h-6" />}
            title="Cloud Ops"
            description="AWS & GCP infrastructure, auto-scaling, disaster recovery, 99.9% uptime target."
          />
          <FeatureCard
            icon={<Search className="w-6 h-6" />}
            title="Quality Assurance"
            description="Automated testing, security audits, penetration testing, user acceptance protocols."
          />
        </SectionGrid>
      </Section>

      {/* THE METHODOLOGY */}
      <Section>
        <SectionHeader
          label="THE PROCESS"
          title="From Insight to Scale"
          description="Our venture creation methodology is systematic, repeatable, and continuously refined."
        />
        <div className="max-w-4xl mx-auto space-y-8">
          {[
            { phase: 'Discovery', duration: '4-6 weeks', icon: <Search className="w-6 h-6" />, desc: 'Market research, user interviews, problem validation, competitive analysis.' },
            { phase: 'Concept', duration: '2-4 weeks', icon: <Lightbulb className="w-6 h-6" />, desc: 'Solution design, business model canvas, unit economics modeling, go/no-go decision.' },
            { phase: 'Build', duration: '8-12 weeks', icon: <Code2 className="w-6 h-6" />, desc: 'MVP development, architecture design, core feature set, internal testing.' },
            { phase: 'Launch', duration: '2-4 weeks', icon: <Rocket className="w-6 h-6" />, desc: 'Beta release, early adopter onboarding, feedback loops, iteration.' },
            { phase: 'Scale', duration: 'Ongoing', icon: <TrendingUp className="w-6 h-6" />, desc: 'Growth optimization, team expansion, market expansion, continuous improvement.' },
          ].map((item, i) => (
            <div key={i} className="flex gap-6 items-start">
              <div className="w-16 h-16 rounded-2xl bg-[var(--color-primary-light)] flex items-center justify-center text-[var(--color-primary)] flex-shrink-0">
                {item.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-semibold text-[var(--color-black)]">
                    Phase {i + 1}: {item.phase}
                  </h3>
                  <span className="text-sm text-[var(--color-gray-500)]">{item.duration}</span>
                </div>
                <p className="text-[var(--color-gray-600)]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center mt-12 text-lg">
          <strong className="text-[var(--color-primary)]">Average time to MVP: 4 months</strong>
        </p>
      </Section>

      {/* VENTURE SELECTION */}
      <Section background="gradient">
        <SectionHeader
          title="How We Choose What to Build"
          description="We're selective. We focus on problems that match our thesis and capabilities."
        />
        <SectionGrid columns={2}>
          {[
            { title: 'Large, Underserved Market', desc: 'We target sectors with millions of potential users who lack adequate solutions.' },
            { title: 'Validated Pain Point', desc: 'Real problems confirmed through research, not hypothetical opportunities.' },
            { title: 'Context-Native Advantage', desc: 'Problems where deep understanding of African context is a moat.' },
            { title: 'Sustainable Unit Economics', desc: 'Business models that work at African price points.' },
            { title: 'Technical Feasibility', desc: 'Within our Product Powerhouse capabilities.' },
            { title: 'Software + Service Potential', desc: 'Opportunities to layer human expertise on top of technology.' },
          ].map((item, i) => (
            <Card key={i} hover>
              <h3 className="font-semibold text-[var(--color-black)] mb-2">{item.title}</h3>
              <p className="text-[var(--color-gray-600)]">{item.desc}</p>
            </Card>
          ))}
        </SectionGrid>
      </Section>

      {/* CTA */}
      <CTASection
        headline="Have a Problem Worth Solving?"
        description="We're always looking for domain experts who've identified systemic inefficiencies in their industries."
        primaryCTA={{ label: 'Explore the Founder-in-Residence Program', href: '/collaborate' }}
        secondaryCTA={{ label: 'View Our Portfolio', href: '/ventures' }}
      />
    </>
  );
}
