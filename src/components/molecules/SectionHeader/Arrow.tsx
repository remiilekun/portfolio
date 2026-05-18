import { cn } from '@/lib/utils';

// Decorative trailing line-with-dot shown after a section heading.
export const Arrow = () => (
  <span
    className={cn(
      'relative inline-block ml-8 w-[40%]',
      "before:content-[''] before:absolute before:inline-block before:bg-primary before:h-[0.1rem] before:w-[calc(100%-1rem)] before:top-1/2 before:-translate-y-1/2",
      "after:content-[''] after:absolute after:inline-block after:rounded-full after:border-[0.2rem] after:border-primary after:h-4 after:w-4 after:right-0 after:top-1/2 after:-translate-y-1/2",
    )}
  />
);
