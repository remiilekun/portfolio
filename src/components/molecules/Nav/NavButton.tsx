import { cn } from '@/lib/utils';
import { Button } from '@/components/atoms';

export const NavButton = (props: React.ComponentProps<typeof Button>) => (
  <Button
    {...props}
    variant="outline"
    color="white"
    fontSize="small"
    className={cn('px-4!', props.className)}
  />
);
