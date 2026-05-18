import Link from 'next/link';
import { cn } from '@/lib/utils';

export const NavLink = ({ className, children, ...rest }: React.ComponentProps<typeof Link>) => (
  <Link
    className={cn(
      'inline-block text-small text-white no-underline select-none transition-all duration-300',
      'hover:-translate-y-[3px] hover:text-primary',
      className,
    )}
    {...rest}
  >
    {children}
  </Link>
);
