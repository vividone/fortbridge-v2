import type { Metadata } from 'next';
import { ArrowRight, Package, Calculator, Factory, Truck, BarChart3, CheckCircle2 } from 'lucide-react';
import { PageHero, Section, SectionHeader, SectionGrid, FAQSection, CTASection } from '@/components/sections';
import { Button, Badge, Card, FeatureCard } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Bakr | Bakery Management Software - Inventory, Costing & Production',
  description: 'Bakr is the operating system for modern bakeries. Smart inventory, real-time recipe costing, and production tracking to eliminate profit leaks.',
};

const faqs = [
  {
    question: 'Is Bakr only for bread bakeries?',
    answer: 'No! Bakr works for any bakery or confectionery—bread, cakes, pastries, doughnuts, meat pies, and more. If you\'re producing food items from recipes and managing ingredients, Bakr can help.',
  },
  {
    question: 'I\'m not tech-savvy. Is Bakr hard to use?',
    answer: 'We\'ve designed Bakr to be simple enough that anyone can use it. If you can use WhatsApp, you can use Bakr. Plus, we provide onboarding support to get you started.',
  },
  {
    question: 'How long does it take to set up?',
    answer: 'Basic setup takes about 30 minutes—enter your ingredients, set up your recipes, and you\'re ready to go. We can also help migrate any existing data you have.',
  },
  {
    question: 'Can I use Bakr on my phone?',
    answer: 'Yes! Bakr is fully mobile-responsive and works on any smartphone. A dedicated mobile app is on our roadmap.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Absolutely. Bakr is built on the same secure infrastructure as our other Fortbridge ventures. Your business data is encrypted, backed up, and never shared.',
  },
];

export default function BakrPage() {
  return (
    <>
      {/* HERO */}
      <PageHero
        label="VERTICAL SAAS / FOOD & BEVERAGE"
        title="The Operating System for Modern Bakeries"
        description="Bakr brings data-driven efficiency to an industry running on intuition and paper. Master your margins. Eliminate the leaks."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Ventures', href: '/ventures' },
          { label: 'Bakr' },
        ]}
      />

      {/* STATUS & CTAS */}
      <Section spacing="sm" background="default">
        <div className="flex flex-wrap items-center justify-center gap-4 -mt-4">
          <Badge variant="success" size="lg" dot>MVP Live</Badge>
          <Button
            href="https://thebakrapp.xyz"
            external
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            Visit Bakr
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
          title="The Bakery Business Is Bleeding—And Most Owners Can't See It"
          description="Baking is one of the most unforgiving businesses. Margins are razor-thin, ingredients are perishable, and success is literally determined by the gram."
        />
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 mb-8">
            <h3 className="text-xl font-semibold text-[var(--color-black)] mb-6 text-center">
              Up to <span className="text-[var(--color-error)]">20%</span> of Profits Disappear to &ldquo;Invisible Leaks&rdquo;
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { type: 'Ingredient Wastage', desc: 'Over-portioning, spillage, expired stock', loss: '5-8%' },
                { type: 'Production Spoilage', desc: 'Burns, failed batches, quality rejects', loss: '3-5%' },
                { type: 'Unrecorded Sales', desc: 'Cash transactions that "disappear"', loss: '3-5%' },
                { type: 'Theft', desc: 'Ingredient or product theft by staff', loss: '2-4%' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-[var(--color-gray-50)] rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-error-light)] flex items-center justify-center text-[var(--color-error)] font-bold text-sm flex-shrink-0">
                    {item.loss}
                  </div>
                  <div>
                    <h4 className="font-medium text-[var(--color-black)]">{item.type}</h4>
                    <p className="text-sm text-[var(--color-gray-600)]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="text-center text-[var(--color-gray-600)]">
            In a <strong>15% margin business</strong>, a 20% leak doesn&apos;t just hurt—it can be fatal.
          </p>
        </div>
      </Section>

      {/* THE SOLUTION */}
      <Section>
        <SectionHeader
          label="THE BAKR PLATFORM"
          title="Data-Driven Efficiency for Every Gram, Every Batch, Every Naira"
          description="Bakr isn't generic inventory software with a bakery skin. It's purpose-built for the unique workflows of bakeries and confectioneries."
        />
        <SectionGrid columns={3}>
          <FeatureCard
            icon={<Package className="w-6 h-6" />}
            title="Smart Inventory"
            description="Real-time tracking that automatically updates as you produce. No more manual stock counts."
            features={[
              'Auto-deduction per batch',
              'Reorder alerts',
              'Expiry tracking',
              'Supplier management',
            ]}
          />
          <FeatureCard
            icon={<Calculator className="w-6 h-6" />}
            title="Real-Time Recipe Costing"
            description="See exactly what each product costs to make—right now, with current ingredient prices."
            features={[
              'Dynamic cost calculation',
              'Profit-per-item view',
              'Price change alerts',
              'What-if scenarios',
            ]}
          />
          <FeatureCard
            icon={<Factory className="w-6 h-6" />}
            title="Production Tracking"
            description="Log production runs with full traceability. Track outputs, record spoilage, identify patterns."
            features={[
              'Batch logging',
              'Burn & spoil tracking',
              'Yield analysis',
              'Shift performance',
            ]}
          />
        </SectionGrid>
        <SectionGrid columns={2} className="mt-8">
          <FeatureCard
            icon={<Truck className="w-6 h-6" />}
            title="Distribution & Sales"
            description="Complete visibility into sales, deliveries, and outstanding debts."
            features={[
              'Customer management',
              'Delivery logging',
              'Debt tracking',
              'Payment recording',
            ]}
          />
          <FeatureCard
            icon={<BarChart3 className="w-6 h-6" />}
            title="Reporting & Insights"
            description="All your operational data flows into clear, actionable reports."
            features={[
              'Daily summaries',
              'Profitability analysis',
              'Waste reports',
              'Debt aging',
            ]}
          />
        </SectionGrid>
      </Section>

      {/* A DAY WITH BAKR */}
      <Section background="gradient">
        <SectionHeader title="A Day With Bakr" />
        <div className="max-w-4xl mx-auto space-y-4">
          {[
            { time: '5:00 AM', title: 'Plan', action: 'Check inventory levels, review production schedule', feature: 'Inventory dashboard + reorder alerts' },
            { time: '5:30 AM - 12:00 PM', title: 'Track', action: 'Log batches as they come out. Record any spoilage.', feature: 'Batch logging + auto-deduction' },
            { time: '12:00 PM - 4:00 PM', title: 'Distribute', action: 'Record deliveries. Log payments received.', feature: 'Distribution + debt tracking' },
            { time: '6:00 PM', title: 'Review', action: 'Check daily summary. Review margins.', feature: 'Daily reports + profitability' },
            { time: 'Sunday', title: 'Analyze', action: 'Review weekly trends. Adjust pricing.', feature: 'Waste reports + recipe costing' },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-xl p-4 flex items-center gap-4">
              <div className="text-sm font-medium text-[var(--color-gray-500)] w-32 flex-shrink-0">
                {item.time}
              </div>
              <div className="w-10 h-10 rounded-full bg-[var(--color-bakr-light)] flex items-center justify-center text-[var(--color-bakr)] font-bold">
                {i + 1}
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-[var(--color-black)]">{item.title}</h4>
                <p className="text-sm text-[var(--color-gray-600)]">{item.action}</p>
              </div>
              <Badge variant="bakr" size="sm">{item.feature}</Badge>
            </div>
          ))}
        </div>
      </Section>

      {/* WHO IT'S FOR */}
      <Section>
        <SectionHeader
          label="BUILT FOR"
          title="Designed for Bakeries That Want to Grow"
        />
        <SectionGrid columns={4}>
          {[
            { title: 'Urban Bakery', desc: 'Retail bakeries with daily foot traffic' },
            { title: 'Wholesale Producer', desc: 'B2B distribution to supermarkets, hotels' },
            { title: 'Growing Confectionery', desc: 'Custom cakes and premium products' },
            { title: 'Multi-Location Chain', desc: 'Multiple production sites or outlets' },
          ].map((item, i) => (
            <Card key={i} hover className="text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-bakr-light)] mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🥖</span>
              </div>
              <h3 className="font-semibold text-[var(--color-black)] mb-2">{item.title}</h3>
              <p className="text-sm text-[var(--color-gray-600)]">{item.desc}</p>
            </Card>
          ))}
        </SectionGrid>
      </Section>

      {/* BUSINESS CASE */}
      <Section id="business-case" background="secondary">
        <SectionHeader
          label="FOR INVESTORS"
          title="The Vertical SaaS Opportunity in Food & Beverage"
        />
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold text-[var(--color-black)] mb-4">Why Vertical Wins</h3>
            <div className="space-y-4 mb-8">
              {[
                'Higher willingness to pay (the tool "gets" their business)',
                'Lower churn (switching costs increase with specialization)',
                'Word-of-mouth within tight industry networks',
                'Expansion to adjacent verticals (F&B broadly)',
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[var(--color-bakr)] flex-shrink-0" />
                  <span className="text-[var(--color-gray-600)]">{item}</span>
                </div>
              ))}
            </div>
            <Button href="/investors" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Request Investor Deck
            </Button>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[var(--color-black)] mb-4">Market Context</h3>
            <p className="text-[var(--color-gray-600)] mb-6">
              The Nigerian bakery industry is large, growing, and almost entirely undigitized.
            </p>
            <div className="space-y-3">
              {[
                { label: 'Bread Consumption', value: 'Top in Africa' },
                { label: 'Industry Fragmentation', value: 'Thousands of independents' },
                { label: 'Rising Costs', value: 'Efficiency is critical' },
                { label: 'Digital Adoption', value: 'No dominant player' },
              ].map((item, i) => (
                <div key={i} className="flex justify-between py-2 border-b border-[var(--color-gray-200)]">
                  <span className="text-[var(--color-gray-600)]">{item.label}</span>
                  <span className="font-semibold text-[var(--color-black)]">{item.value}</span>
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
        headline="Ready to Stop the Leaks?"
        description="Join the bakeries taking control of their margins with Bakr."
        primaryCTA={{ label: 'Start Free Trial', href: 'https://thebakrapp.xyz', external: true }}
        secondaryCTA={{ label: 'Request a Demo', href: '/contact' }}
      >
        <p className="text-sm text-[var(--color-gray-500)] mt-4">
          ✓ Free 14-day trial · ✓ No credit card required · ✓ Setup in 30 minutes
        </p>
      </CTASection>
    </>
  );
}
