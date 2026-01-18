import type { Metadata } from 'next';
import { ArrowRight, QrCode, Calendar, WifiOff, Zap, Printer, Shield } from 'lucide-react';
import { PageHero, Section, SectionHeader, SectionGrid, CTASection } from '@/components/sections';
import { Button, Badge, Card, FeatureCard } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Valid8 | Identity Verification & Event Access Management Platform',
  description: 'Valid8 provides sub-1-second identity verification for institutions and events. QR-based credentials, badge printing, and offline-first architecture.',
};

export default function Valid8Page() {
  return (
    <>
      {/* HERO */}
      <PageHero
        label="IDENTITY & ACCESS MANAGEMENT"
        title="The Unified Identity & Access Gateway"
        description="Valid8 is a dual-mode platform serving both institutional identity management and high-traffic event access control. One codebase, two powerful use cases."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Ventures', href: '/ventures' },
          { label: 'Valid8' },
        ]}
      />

      {/* STATUS & CTAS */}
      <Section spacing="sm" background="default">
        <div className="flex flex-wrap items-center justify-center gap-4 -mt-4">
          <Badge variant="info" size="lg" dot>In Development</Badge>
          <Button href="/contact" rightIcon={<ArrowRight className="w-4 h-4" />}>
            Join the Waitlist
          </Button>
          <Button variant="outline" href="#business-case">
            For Investors
          </Button>
        </div>
        <p className="text-center text-sm text-[var(--color-gray-500)] mt-4">
          Valid8 is currently in active development. We&apos;re working with pilot institutions before public launch.
        </p>
      </Section>

      {/* THE PROBLEM */}
      <Section background="secondary">
        <SectionHeader
          label="THE CHALLENGES"
          title="Two Environments. One Broken System."
          description="Identity verification and access control remain painfully manual across Nigerian institutions and events."
        />
        <SectionGrid columns={2}>
          <Card hover className="p-8">
            <div className="w-12 h-12 rounded-xl bg-[var(--color-valid8-light)] flex items-center justify-center text-[var(--color-valid8)] mb-4">
              🏫
            </div>
            <h3 className="text-xl font-semibold text-[var(--color-black)] mb-2">Institutional Identity</h3>
            <p className="text-[var(--color-gray-600)] mb-4">
              Schools, universities, and organizations rely on physical ID cards that are easily lost, forged, or outdated.
            </p>
            <ul className="space-y-2 text-sm text-[var(--color-gray-600)]">
              <li>• Expired IDs in circulation</li>
              <li>• Manual verification by guards</li>
              <li>• No lifecycle management</li>
              <li>• Forgery vulnerability</li>
            </ul>
          </Card>
          <Card hover className="p-8">
            <div className="w-12 h-12 rounded-xl bg-[var(--color-valid8-light)] flex items-center justify-center text-[var(--color-valid8)] mb-4">
              🎫
            </div>
            <h3 className="text-xl font-semibold text-[var(--color-black)] mb-2">Event Access</h3>
            <p className="text-[var(--color-gray-600)] mb-4">
              Event check-in remains a bottleneck that frustrates attendees and creates security blind spots.
            </p>
            <ul className="space-y-2 text-sm text-[var(--color-gray-600)]">
              <li>• Entry bottlenecks & long queues</li>
              <li>• Ticket fraud & duplication</li>
              <li>• Manual check-in processes</li>
              <li>• No real-time analytics</li>
            </ul>
          </Card>
        </SectionGrid>
      </Section>

      {/* THE SOLUTION - DUAL MODE */}
      <Section>
        <SectionHeader
          label="THE VALID8 PLATFORM"
          title="One Platform. Two Powerful Modes."
          description="Sharing core verification infrastructure while offering specialized features for each use case."
        />
        <SectionGrid columns={2} gap="lg">
          {/* IDENTITY MODE */}
          <div className="bg-[var(--color-valid8-light)] rounded-3xl p-8">
            <Badge variant="valid8" size="lg" className="mb-4">Identity Mode</Badge>
            <h3 className="text-2xl font-semibold text-[var(--color-black)] mb-4">
              Secure, Dynamic ID Management
            </h3>
            <p className="text-[var(--color-gray-600)] mb-6">
              Transform static ID cards into living digital identities with complete lifecycle control.
            </p>
            <ul className="space-y-3">
              {[
                'Secure QR generation (unforgeable)',
                'Lifecycle management (activate, suspend, expire)',
                'Real-time verification (<1 second)',
                'Department & role tracking',
                'Visitor management',
                'Complete audit trail',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-[var(--color-gray-700)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-valid8)]" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-[var(--color-gray-200)]">
              <p className="text-sm font-medium text-[var(--color-black)] mb-2">Use Cases:</p>
              <p className="text-sm text-[var(--color-gray-600)]">
                Universities, polytechnics, secondary schools, corporate offices, membership organizations, gated communities
              </p>
            </div>
          </div>

          {/* EVENT MODE */}
          <div className="bg-[var(--color-secondary-light)] rounded-3xl p-8">
            <Badge variant="secondary" size="lg" className="mb-4">Event Mode</Badge>
            <h3 className="text-2xl font-semibold text-[var(--color-black)] mb-4">
              High-Speed Access Control
            </h3>
            <p className="text-[var(--color-gray-600)] mb-6">
              From intimate workshops to massive conferences—frictionless check-in with real-time analytics.
            </p>
            <ul className="space-y-3">
              {[
                'Sub-1-second scanning',
                'Ticket/registration integration',
                'Duplicate detection',
                'Multi-gate support',
                'Real-time attendance dashboard',
                'Badge Studio for instant printing',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-[var(--color-gray-700)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)]" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-[var(--color-gray-200)]">
              <p className="text-sm font-medium text-[var(--color-black)] mb-2">Use Cases:</p>
              <p className="text-sm text-[var(--color-gray-600)]">
                Corporate conferences, academic symposiums, music festivals, trade shows, private events
              </p>
            </div>
          </div>
        </SectionGrid>
      </Section>

      {/* BADGE STUDIO */}
      <Section background="gradient">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="valid8" size="lg" className="mb-4">Event Mode Feature</Badge>
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-[var(--color-black)] mb-4">
            The Badge Studio
          </h2>
          <p className="text-lg text-[var(--color-gray-600)] mb-8">
            Professional badges. Created on-site. In seconds.
          </p>
          <SectionGrid columns={3}>
            {[
              { icon: <Printer className="w-6 h-6" />, title: 'WYSIWYG Editor', desc: 'Design professional 6"x4" badges with no design skills' },
              { icon: <QrCode className="w-6 h-6" />, title: 'Dynamic Data', desc: 'Name, title, organization pull automatically from registration' },
              { icon: <Zap className="w-6 h-6" />, title: 'Instant Print', desc: 'Print on standard thermal or inkjet printers in <5 seconds' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-valid8-light)] flex items-center justify-center text-[var(--color-valid8)] mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-[var(--color-black)] mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--color-gray-600)]">{item.desc}</p>
              </div>
            ))}
          </SectionGrid>
        </div>
      </Section>

      {/* TECHNICAL DIFFERENTIATORS */}
      <Section>
        <SectionHeader
          label="UNDER THE HOOD"
          title="Built for Real-World Conditions"
          description="Valid8 isn't built for ideal conditions—it's built for African realities."
        />
        <SectionGrid columns={3}>
          <FeatureCard
            icon={<WifiOff className="w-6 h-6" />}
            title="Offline-First Design"
            description="Verification happens locally in milliseconds. No round-trip to server required. Syncs when connectivity returns."
            features={[
              'Full credential cache',
              'Local verification',
              'Automatic sync',
              'Conflict resolution',
            ]}
          />
          <FeatureCard
            icon={<Zap className="w-6 h-6" />}
            title="Sub-1-Second Latency"
            description="Our verification engine is optimized for high-throughput environments. QR scan to result: under 1 second."
            features={[
              'Optimized algorithms',
              'Edge processing',
              'Batch verification',
              'Queue management',
            ]}
          />
          <FeatureCard
            icon={<Shield className="w-6 h-6" />}
            title="Security-First"
            description="Cryptographically secure QR codes. Role-based access. Complete audit logging. NDPR compliant."
            features={[
              'Unforgeable credentials',
              'Encrypted data',
              'Access controls',
              'Audit trails',
            ]}
          />
        </SectionGrid>
      </Section>

      {/* BUSINESS CASE */}
      <Section id="business-case" background="secondary">
        <SectionHeader
          label="FOR INVESTORS"
          title="The Opportunity"
        />
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold text-[var(--color-black)] mb-4">Dual Market Approach</h3>
            <p className="text-[var(--color-gray-600)] mb-6">
              One codebase serves two distinct markets, maximizing development efficiency and creating multiple revenue streams.
            </p>
            <div className="space-y-3 mb-8">
              {[
                { label: 'Institutional TAM', value: '20,000+ institutions' },
                { label: 'Events TAM', value: '30,000+ events/year' },
                { label: 'Scan Latency', value: '<1 second' },
                { label: 'Status', value: 'Beta Q3 2025' },
              ].map((item, i) => (
                <div key={i} className="flex justify-between py-2 border-b border-[var(--color-gray-200)]">
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
            <h3 className="text-xl font-semibold text-[var(--color-black)] mb-4">Revenue Model</h3>
            <div className="space-y-4">
              {[
                { title: 'Credit-Based Pricing', desc: 'Pay per verification, check-in, or badge printed' },
                { title: 'Premium Features', desc: 'API access, white-label, advanced analytics' },
                { title: 'Hardware Bundles', desc: 'Optional scanning stands, thermal printers' },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-4">
                  <h4 className="font-medium text-[var(--color-black)] mb-1">{item.title}</h4>
                  <p className="text-sm text-[var(--color-gray-600)]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <CTASection
        headline="Be Among the First"
        description="Join the waitlist to get early access to Valid8 when we launch."
        primaryCTA={{ label: 'Join the Waitlist', href: '/contact' }}
        secondaryCTA={{ label: 'Request Early Access', href: '/contact' }}
      />
    </>
  );
}
