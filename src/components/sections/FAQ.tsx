'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Section, SectionHeader } from './Section';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  label?: string;
  title?: string;
  description?: string;
  items: FAQItem[];
  className?: string;
}

export function FAQSection({
  label = 'COMMON QUESTIONS',
  title = 'Frequently Asked Questions',
  description,
  items,
  className,
}: FAQSectionProps) {
  return (
    <Section background="secondary" className={className}>
      <SectionHeader label={label} title={title} description={description} />
      <div className="max-w-3xl mx-auto">
        <FAQAccordion items={items} />
      </div>
    </Section>
  );
}

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

export function FAQAccordion({ items, className }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={cn('space-y-4', className)}>
      {items.map((item, index) => (
        <FAQAccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onToggle={() => toggleItem(index)}
        />
      ))}
    </div>
  );
}

interface FAQAccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQAccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: FAQAccordionItemProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-xl border transition-all duration-200',
        isOpen
          ? 'border-[var(--color-primary)] shadow-md'
          : 'border-[var(--color-gray-200)]'
      )}
    >
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-medium text-[var(--color-black)] pr-4">
          {question}
        </span>
        <ChevronDown
          className={cn(
            'w-5 h-5 flex-shrink-0 text-[var(--color-gray-500)] transition-transform duration-200',
            isOpen && 'rotate-180 text-[var(--color-primary)]'
          )}
        />
      </button>
      <div
        className={cn(
          'overflow-hidden transition-all duration-200',
          isOpen ? 'max-h-96' : 'max-h-0'
        )}
      >
        <div className="px-6 pb-5">
          <p className="text-[var(--color-gray-600)] leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
