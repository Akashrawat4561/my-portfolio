// ui/Button.tsx
import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

export function Button({ variant = 'primary', className = '', children, ...rest }: PropsWithChildren<ButtonProps>) {
  const base = 'inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  const variants: Record<Variant, string> = {
    primary: 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:from-violet-500 hover:to-indigo-500 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus-visible:ring-violet-600',
    secondary: 'bg-white text-neutral-800 border border-neutral-300 hover:border-neutral-400 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 focus-visible:ring-neutral-400 dark:bg-neutral-800 dark:text-white dark:border-neutral-700',
    ghost: 'text-neutral-600 hover:text-neutral-800 hover:bg-neutral-100 focus-visible:ring-neutral-400 dark:text-neutral-400 dark:hover:text-white dark:hover:bg-neutral-800',
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </button>
  );
}