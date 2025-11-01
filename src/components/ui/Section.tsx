// ui/Section.tsx
import type { PropsWithChildren, ReactNode } from 'react';

type SectionProps = {
  id?: string;
  title: string;
  subtitle?: ReactNode;
  className?: string;
};

export function Section({ id, title, subtitle, children, className = '' }: PropsWithChildren<SectionProps>) {
  return (
    <section id={id} className={`scroll-mt-24 py-20 sm:py-24 ${className}`}>
      <div className="mb-12 text-center">
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-gradient-to-r from-transparent to-violet-600" />
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white bg-gradient-to-r from-neutral-900 to-neutral-700 bg-clip-text text-transparent">
            {title}
          </h2>
          <div className="h-px w-8 bg-gradient-to-l from-transparent to-violet-600" />
        </div>
        {subtitle ? (
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        ) : null}
      </div>
      {children}
    </section>
  );
}