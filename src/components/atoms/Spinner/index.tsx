import { cn } from '@/lib/utils';
import { ColorName, borderColor } from '@/lib/styles';

type SpinnerProps = {
  className?: string;
  color?: ColorName;
  size?: string;
};

export const Spinner = ({ className, color = 'white', size = '2.5rem' }: SpinnerProps) => {
  return (
    <span
      className={cn(
        'block rounded-full border-2 border-r-transparent border-t-transparent animate-spin-fast',
        borderColor[color],
        className,
      )}
      style={{ height: size, width: size }}
    />
  );
};
