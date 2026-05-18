import { cn } from '@/lib/utils';
import { Button } from '@/components/atoms';

type HamburgerProps = {
  active?: boolean;
} & React.ComponentProps<typeof Button>;

const hamLine =
  'absolute left-0 block h-[2px] w-full rounded-[9px] bg-white transition-all duration-300 origin-[left_center]';

export const Hamburger = ({ active, className, ...rest }: HamburgerProps) => (
  <Button variant="plain" className={cn('relative h-[21px] w-[30px] p-0!', className)} {...rest}>
    <span className={cn(hamLine, 'top-0', active && 'rotate-[40deg]')} />
    <span className={cn(hamLine, 'top-[10px]', active && 'w-0 opacity-0')} />
    <span className={cn(hamLine, 'top-[19px]', active && '-rotate-[40deg]')} />
  </Button>
);
