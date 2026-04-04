import type { Metadata } from 'next';
import { Mail, MapPin, Clock, Linkedin, Twitter, MessageSquare, Handshake, TrendingUp, Headphones, Newspaper, Briefcase } from 'lucide-react';
import { PageHero, Section, SectionHeader, SectionGrid } from '@/components/sections';
import { Card, Button } from '@/components/ui';
import { Input, Textarea, Select } from '@/components/forms';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Contact Us | Fortbridge Startup Studio',
  description: 'Get in touch with Fortbridge. Reach out for partnerships, investment inquiries, product support, or general questions.',
};

const contactPathways = [
  { icon: <MessageSquare className="w-6 h-6" />, title: 'General Questions', desc: 'Questions about Fortbridge or our ventures', email: 'hello@fortbridge.co' },
  { icon: <Handshake className="w-6 h-6" />, title: 'Partnership', desc: 'Founder-in-Residence program or strategic partnerships', email: 'partners@fortbridge.co', link: '/collaborate' },
  { icon: <TrendingUp className="w-6 h-6" />, title: 'Investor Relations', desc: 'Interested in investing in Fortbridge', email: 'investors@fortbridge.co', link: '/investors' },
  { icon: <Headphones className="w-6 h-6" />, title: 'Product Support', desc: 'Need help with Accurify, Bakr, or Valid8', email: 'support@fortbridge.co' },
  { icon: <Newspaper className="w-6 h-6" />, title: 'Media & Press', desc: 'Journalist or media professional', email: 'press@fortbridge.co' },
  { icon: <Briefcase className="w-6 h-6" />, title: 'Careers', desc: 'Interested in joining the team', email: 'careers@fortbridge.co' },
];

const inquiryTypes = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'partnership', label: 'Partnership' },
  { value: 'investment', label: 'Investment' },
  { value: 'product', label: 'Product Question' },
  { value: 'media', label: 'Media/Press' },
  { value: 'careers', label: 'Careers' },
  { value: 'other', label: 'Other' },
];

const hearAboutOptions = [
  { value: '', label: 'Select an option' },
  { value: 'search', label: 'Web Search' },
  { value: 'linkedin', label: 'LinkedIn' },
  { value: 'twitter', label: 'Twitter/X' },
  { value: 'referral', label: 'Referral' },
  { value: 'event', label: 'Event' },
  { value: 'media', label: 'Media Article' },
  { value: 'other', label: 'Other' },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="GET IN TOUCH"
        title="Let's Start a Conversation"
        description="Whether you're a potential partner, investor, customer, or just curious about what we're building—we'd love to hear from you."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
      />

      {/* CONTACT PATHWAYS */}
      <Section>
        <SectionHeader title="How Can We Help?" />
        <SectionGrid columns={3}>
          {contactPathways.map((pathway, i) => (
            <Card key={i} hover className="p-6">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-primary-light)] flex items-center justify-center text-[var(--color-primary)] mb-4">
                {pathway.icon}
              </div>
              <h3 className="font-semibold text-[var(--color-black)] mb-2">{pathway.title}</h3>
              <p className="text-sm text-[var(--color-gray-600)] mb-3">{pathway.desc}</p>
              <a
                href={`mailto:${pathway.email}`}
                className="text-sm text-[var(--color-primary)] hover:underline"
              >
                {pathway.email}
              </a>
              {pathway.link && (
                <Button href={pathway.link} variant="link" size="sm" className="mt-2 p-0">
                  Learn more →
                </Button>
              )}
            </Card>
          ))}
        </SectionGrid>
      </Section>

      {/* CONTACT FORM */}
      <Section background="secondary">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-heading font-semibold text-[var(--color-black)] mb-4">
              Send Us a Message
            </h2>
            <p className="text-[var(--color-gray-600)] mb-6">
              Fill out the form and we&apos;ll get back to you within 48 hours.
            </p>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  name="name"
                  label="Full Name"
                  placeholder="Your name"
                  required
                />
                <Input
                  name="email"
                  type="email"
                  label="Email Address"
                  placeholder="you@company.com"
                  required
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  name="phone"
                  type="tel"
                  label="Phone Number"
                  placeholder="+234..."
                />
                <Input
                  name="company"
                  label="Company/Organization"
                  placeholder="Your company"
                />
              </div>
              <Select
                name="inquiry_type"
                label="Inquiry Type"
                options={inquiryTypes}
                required
              />
              <Textarea
                name="message"
                label="Message"
                placeholder="How can we help you?"
                rows={5}
                required
              />
              <Select
                name="hear_about"
                label="How did you hear about us?"
                options={hearAboutOptions}
              />
              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>

          <div>
            {/* LOCATION INFO */}
            <Card className="p-8 mb-6">
              <h3 className="text-xl font-semibold text-[var(--color-black)] mb-6">
                Where to Find Us
              </h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0" />
                  <div>
                    <p className="font-medium text-[var(--color-black)]">Headquarters</p>
                    <p className="text-[var(--color-gray-600)]">Lagos, Nigeria</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Clock className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0" />
                  <div>
                    <p className="font-medium text-[var(--color-black)]">Working Hours</p>
                    <p className="text-[var(--color-gray-600)]">Monday - Friday: 9:00 AM - 6:00 PM (WAT)</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Mail className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0" />
                  <div>
                    <p className="font-medium text-[var(--color-black)]">General Email</p>
                    <a href={`mailto:${siteConfig.email}`} className="text-[var(--color-primary)] hover:underline">
                      {siteConfig.email}
                    </a>
                  </div>
                </div>
              </div>
            </Card>

            {/* SOCIAL */}
            <Card className="p-8 mb-6">
              <h3 className="text-xl font-semibold text-[var(--color-black)] mb-4">
                Follow Our Journey
              </h3>
              <div className="flex gap-4">
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-[var(--color-gray-100)] rounded-lg hover:bg-[var(--color-gray-200)] transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={siteConfig.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-[var(--color-gray-100)] rounded-lg hover:bg-[var(--color-gray-200)] transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                  <span>Twitter</span>
                </a>
              </div>
            </Card>

            {/* QUICK ANSWERS */}
            <Card className="p-8">
              <h3 className="text-xl font-semibold text-[var(--color-black)] mb-4">
                Quick Answers
              </h3>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-medium text-[var(--color-black)]">How quickly will you respond?</p>
                  <p className="text-[var(--color-gray-600)]">Within 48 hours during business days.</p>
                </div>
                <div>
                  <p className="font-medium text-[var(--color-black)]">Interested in investing?</p>
                  <p className="text-[var(--color-gray-600)]">
                    Visit our <a href="/investors" className="text-[var(--color-primary)] hover:underline">Investors page</a> first.
                  </p>
                </div>
                <div>
                  <p className="font-medium text-[var(--color-black)]">Want to build with us?</p>
                  <p className="text-[var(--color-gray-600)]">
                    Check out the <a href="/collaborate" className="text-[var(--color-primary)] hover:underline">Founder-in-Residence program</a>.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* TRUST ELEMENTS */}
      <Section>
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-[var(--color-gray-600)] mb-4">
            Your trust is our foundation. We&apos;re committed to protecting your data with enterprise-grade security and full regulatory compliance.
          </p>
          <div className="flex justify-center gap-6 text-sm text-[var(--color-gray-500)]">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[var(--color-success)] rounded-full" />
              NDPR Compliant
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[var(--color-success)] rounded-full" />
              SSL Encrypted
            </span>
          </div>
        </div>
      </Section>
    </>
  );
}
