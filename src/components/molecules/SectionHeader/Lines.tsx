import { cn } from '@/lib/utils';

// Decorative double-line marker shown before a section heading.
export const Lines = () => (
  <span
    className={cn(
      'relative inline-flex h-8 w-16 mr-8',
      "before:content-[''] before:absolute before:bg-primary before:h-[0.2rem] before:w-16 before:-translate-y-1/2 before:left-4 before:top-[calc(50%-0.5rem)]",
      "after:content-[''] after:absolute after:bg-primary after:h-[0.2rem] after:w-16 after:-translate-y-1/2 after:top-[calc(50%+0.5rem)]",
    )}
  />
);
