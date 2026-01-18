'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Container } from './Container';
import { Button } from '@/components/ui/Button';
import { navigation, siteConfig } from '@/config/site';
import type { NavItem } from '@/types';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      )}
    >
      <Container>
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/fortbridge_logo_default.png"
              alt={siteConfig.name}
              width={140}
              height={40}
              className="h-8 md:h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <NavItemComponent
                key={item.label}
                item={item}
                openDropdown={openDropdown}
                onToggleDropdown={toggleDropdown}
              />
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button href="/contact" size="sm">
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 text-[var(--color-black)] hover:text-[var(--color-primary)] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        openDropdown={openDropdown}
        onToggleDropdown={toggleDropdown}
      />
    </header>
  );
}

interface NavItemComponentProps {
  item: NavItem;
  openDropdown: string | null;
  onToggleDropdown: (label: string) => void;
}

function NavItemComponent({
  item,
  openDropdown,
  onToggleDropdown,
}: NavItemComponentProps) {
  const hasChildren = item.children && item.children.length > 0;
  const isOpen = openDropdown === item.label;

  if (hasChildren) {
    return (
      <div className="relative">
        <button
          type="button"
          onClick={() => onToggleDropdown(item.label)}
          className={cn(
            'flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors',
            'text-[var(--color-gray-700)] hover:text-[var(--color-primary)] hover:bg-[var(--color-gray-50)]'
          )}
        >
          {item.label}
          <ChevronDown
            className={cn(
              'h-4 w-4 transition-transform duration-200',
              isOpen && 'rotate-180'
            )}
          />
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-[var(--color-gray-100)] py-2 z-50">
            {item.children?.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className="block px-4 py-3 hover:bg-[var(--color-gray-50)] transition-colors"
                onClick={() => onToggleDropdown(item.label)}
              >
                <span className="block text-sm font-medium text-[var(--color-black)]">
                  {child.label}
                </span>
                {child.description && (
                  <span className="block text-xs text-[var(--color-gray-500)] mt-0.5">
                    {child.description}
                  </span>
                )}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      href={item.href}
      className={cn(
        'px-4 py-2 text-sm font-medium rounded-lg transition-colors',
        'text-[var(--color-gray-700)] hover:text-[var(--color-primary)] hover:bg-[var(--color-gray-50)]'
      )}
    >
      {item.label}
    </Link>
  );
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  openDropdown: string | null;
  onToggleDropdown: (label: string) => void;
}

function MobileMenu({
  isOpen,
  onClose,
  openDropdown,
  onToggleDropdown,
}: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="lg:hidden fixed inset-0 top-16 bg-white z-40 overflow-y-auto">
      <Container className="py-6">
        <div className="flex flex-col gap-2">
          {navigation.map((item) => (
            <MobileNavItem
              key={item.label}
              item={item}
              onClose={onClose}
              openDropdown={openDropdown}
              onToggleDropdown={onToggleDropdown}
            />
          ))}
        </div>

        <div className="mt-8 pt-8 border-t border-[var(--color-gray-100)]">
          <Button href="/contact" className="w-full" onClick={onClose}>
            Get in Touch
          </Button>
        </div>
      </Container>
    </div>
  );
}

interface MobileNavItemProps {
  item: NavItem;
  onClose: () => void;
  openDropdown: string | null;
  onToggleDropdown: (label: string) => void;
}

function MobileNavItem({
  item,
  onClose,
  openDropdown,
  onToggleDropdown,
}: MobileNavItemProps) {
  const hasChildren = item.children && item.children.length > 0;
  const isOpen = openDropdown === item.label;

  if (hasChildren) {
    return (
      <div>
        <button
          type="button"
          onClick={() => onToggleDropdown(item.label)}
          className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-[var(--color-black)] hover:bg-[var(--color-gray-50)] rounded-lg"
        >
          {item.label}
          <ChevronDown
            className={cn(
              'h-5 w-5 transition-transform duration-200',
              isOpen && 'rotate-180'
            )}
          />
        </button>

        {isOpen && (
          <div className="pl-4 mt-1 space-y-1">
            {item.children?.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className="block px-4 py-2 text-sm text-[var(--color-gray-600)] hover:text-[var(--color-primary)] hover:bg-[var(--color-gray-50)] rounded-lg"
                onClick={onClose}
              >
                {child.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      href={item.href}
      className="block px-4 py-3 text-base font-medium text-[var(--color-black)] hover:bg-[var(--color-gray-50)] rounded-lg"
      onClick={onClose}
    >
      {item.label}
    </Link>
  );
}
