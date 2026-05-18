import { animated } from '@react-spring/web';
import { cn } from '@/lib/utils';

export const MobileOverlay = ({ className, children, style, ...rest }: any) => (
  <animated.div className={cn('fixed inset-0 bg-white/10', className)} style={style} {...rest}>
    {children}
  </animated.div>
);
