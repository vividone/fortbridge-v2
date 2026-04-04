import type { Metadata } from 'next';
import { Linkedin, Code2, Cloud, Shield, Lightbulb, Target } from 'lucide-react';
import { PageHero, Section, SectionHeader, SectionGrid, CTASection } from '@/components/sections';
import { Card, Blockquote, Button } from '@/components/ui';

export const metadata: Metadata = {
  title: 'About Fortbridge | Our Story, Mission & Team',
  description: 'Fortbridge is a Nigerian startup studio founded by Victor Olaitan. Learn our story—from technical agency to venture builder creating African enterprise infrastructure.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="ABOUT US"
        title="Building the Digital Infrastructure for African Enterprise"
        description="We're a startup studio creating essential software for businesses across Africa. Our mission: solve the 'unsexy' problems that others ignore."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About' }]}
      />

      {/* ORIGIN STORY */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-[var(--color-black)] mb-8">
            The Fortbridge Story
          </h2>
          <div className="prose prose-lg text-[var(--color-gray-600)] space-y-6">
            <p>
              Fortbridge started in 2019 as a technical services company. We built products for clients—startups, enterprises, organizations with visions they couldn&apos;t execute alone. We were good at it. Our clients scaled. Their apps worked. Their infrastructure held.
            </p>
            <p>
              But over the years, a pattern emerged. We kept encountering the same problems—financial management chaos in growing SMEs, inventory leakage in food businesses, identity friction in institutions.
            </p>
            <p>
              These weren&apos;t glamorous problems. They weren&apos;t the kind that attract Silicon Valley attention or headline tech conferences. They were &ldquo;unsexy&rdquo; operational challenges that silently destroyed viable businesses every day.
            </p>
            <p>
              <strong>The realization hit in 2024:</strong> We had the technical capability to solve these problems. We had the market insight from years of working across industries. We had the operational experience to build and scale.
            </p>
            <p>
              Why were we building other people&apos;s visions when we could see exactly what needed to be built?
            </p>
            <p>
              <strong>So we pivoted.</strong> We transformed from a services company into a startup studio. Instead of billing hours, we started building equity. Instead of executing others&apos; ideas, we started executing our own.
            </p>
          </div>
          <div className="mt-12">
            <Blockquote
              author="Victor Olaitan"
              role="Founder & Lead Product Architect"
            >
              The best problems to solve are the ones everyone else ignores. That&apos;s where we found our calling.
            </Blockquote>
          </div>
        </div>
      </Section>

      {/* MISSION & VISION */}
      <Section background="gradient">
        <SectionGrid columns={2}>
          <Card className="p-8">
            <Target className="w-10 h-10 text-[var(--color-primary)] mb-4" />
            <h3 className="text-xl font-semibold text-[var(--color-black)] mb-3">Our Mission</h3>
            <p className="text-[var(--color-gray-600)]">
              To build the digital infrastructure that enables African businesses to operate, grow, and compete—solving the operational challenges that others overlook.
            </p>
          </Card>
          <Card className="p-8">
            <Lightbulb className="w-10 h-10 text-[var(--color-secondary)] mb-4" />
            <h3 className="text-xl font-semibold text-[var(--color-black)] mb-3">Our Vision</h3>
            <p className="text-[var(--color-gray-600)]">
              A portfolio of essential, context-native software companies that form the backbone of African enterprise—built to last, not to flip.
            </p>
          </Card>
        </SectionGrid>
      </Section>

      {/* FOUNDER */}
      <Section>
        <SectionHeader
          label="LEADERSHIP"
          title="Meet the Founder"
        />
        <div className="max-w-4xl mx-auto">
          <Card className="p-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-32 h-32 rounded-2xl bg-[var(--color-gray-200)] flex-shrink-0 flex items-center justify-center">
                <span className="text-4xl font-bold text-[var(--color-gray-400)]">VO</span>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-black)]">Victor Olaitan</h3>
                <p className="text-[var(--color-primary)] font-medium mb-4">Founder & Lead Product Architect</p>
                <p className="text-[var(--color-gray-600)] mb-4">
                  Victor brings a rare combination of cybersecurity expertise and product development experience. Before founding Fortbridge, he spent years in penetration testing and security consulting, giving him deep understanding of how to build systems that are secure by design.
                </p>
                <p className="text-[var(--color-gray-600)] mb-4">
                  This security-first background informs every product Fortbridge builds—compliance and security aren&apos;t afterthoughts, they&apos;re foundational. His transition from security specialist to product architect to studio founder reflects the evolution of Fortbridge itself.
                </p>
                <Button
                  href="https://linkedin.com/in/victorolaitan"
                  external
                  variant="outline"
                  size="sm"
                  leftIcon={<Linkedin className="w-4 h-4" />}
                >
                  Connect on LinkedIn
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* THE TEAM */}
      <Section background="secondary">
        <SectionHeader
          title="The Product Powerhouse Team"
          description="Our in-house technical team powers every venture we build."
        />
        <SectionGrid columns={3}>
          {[
            { icon: <Code2 className="w-6 h-6" />, title: 'Engineering', desc: 'Fullstack developers building scalable applications with React, Next.js, Node.js, and more.' },
            { icon: <Cloud className="w-6 h-6" />, title: 'Cloud Ops', desc: 'Infrastructure specialists ensuring 99.9% uptime on AWS and GCP.' },
            { icon: <Shield className="w-6 h-6" />, title: 'Security', desc: 'Security experts baking compliance and protection into every product.' },
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
        <div className="text-center mt-10">
          <p className="text-[var(--color-gray-600)] mb-4">
            Interested in joining the team?
          </p>
          <Button href="/contact" variant="outline">
            Get in Touch
          </Button>
        </div>
      </Section>

      {/* MILESTONES */}
      <Section>
        <SectionHeader
          label="MILESTONES"
          title="Our Journey So Far"
        />
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {[
              { year: '2019', event: 'Fortbridge founded as technical services company' },
              { year: '2020', event: 'First major enterprise client secured' },
              { year: '2021', event: 'Expanded team to full Product Powerhouse capability' },
              { year: '2022', event: 'Completed 20+ successful client projects' },
              { year: '2023', event: 'Security practice recognized; penetration testing engagements' },
              { year: '2024', event: 'Strategic pivot to startup studio model' },
              { year: '2025', event: 'Accurify MVP launched at accurify.co' },
              { year: '2025', event: 'Bakr MVP launched at thebakrapp.xyz' },
              { year: '2025', event: 'Valid8 development initiated' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <span className="text-sm font-bold text-[var(--color-primary)] w-12 flex-shrink-0">
                  {item.year}
                </span>
                <div className="flex-1 pb-4 border-b border-[var(--color-gray-100)]">
                  <p className="text-[var(--color-gray-700)]">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <CTASection
        headline="Let's Connect"
        description="Whether you're a potential partner, investor, journalist, or just curious about what we're building—we'd love to hear from you."
        primaryCTA={{ label: 'Get in Touch', href: '/contact' }}
        secondaryCTA={{ label: 'View Our Ventures', href: '/ventures' }}
      />
    </>
  );
}
