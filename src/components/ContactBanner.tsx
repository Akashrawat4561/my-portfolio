import { ArrowRight } from 'lucide-react';

export function ContactBanner() {
  return (
    <div className="mt-10 rounded-lg border border-neutral-800 bg-neutral-900/40 p-6 text-center">
      <p className="text-sm text-neutral-300">Open to internships and freelance opportunities.</p>
      <a
        href="mailto:Rawatakash1612@gmail.com"
        className="mt-3 inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-200"
      >
        Let’s collaborate <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  );
}


