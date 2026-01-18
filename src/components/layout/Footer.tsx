import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Twitter } from 'lucide-react';
import { Container } from './Container';
import { siteConfig, footerColumns, socialLinks } from '@/config/site';

export function Footer() {
  return (
    <footer className="bg-[var(--color-gray-900)] text-white">
      <Container>
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <Image
                src="/fortbridge_logo_white.png"
                alt={siteConfig.name}
                width={160}
                height={48}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-4 text-[var(--color-gray-400)] max-w-sm">
              {siteConfig.tagline}
            </p>
            <p className="mt-2 text-sm text-[var(--color-gray-500)]">
              {siteConfig.description}
            </p>

            {/* Social Links */}
            <div className="mt-6 flex gap-4">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[var(--color-gray-800)] hover:bg-[var(--color-gray-700)] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[var(--color-gray-800)] hover:bg-[var(--color-gray-700)] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[var(--color-gray-400)] hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-[var(--color-gray-800)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[var(--color-gray-500)]">
            {siteConfig.copyright}
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-[var(--color-gray-500)] flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-[var(--color-success)] rounded-full"></span>
              NDPR Compliant
            </span>
            <span className="text-xs text-[var(--color-gray-500)]">
              Based in {siteConfig.location.city}, {siteConfig.location.country}
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
