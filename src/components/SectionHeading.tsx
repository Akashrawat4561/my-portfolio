import type { PropsWithChildren } from 'react';

export function SectionHeading({ children }: PropsWithChildren) {
  return (
    <h2 className="mb-6 text-2xl font-semibold tracking-tight text-white">{children}</h2>
  );
}


