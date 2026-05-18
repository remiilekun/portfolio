import { animated } from '@react-spring/web';
import { cn } from '@/lib/utils';

export const MobileMenu = ({ className, children, style, ref, ...rest }: any) => (
  <animated.div
    ref={ref}
    className={cn(
      'fixed top-0 right-0 overflow-hidden rounded-bl-[500px] bg-black pt-40 px-20 pb-80 origin-[100%_0%]',
      className,
    )}
    style={style}
    {...rest}
  >
    <div className="absolute inset-0 bg-[#b0aff629]" />
    {children}
  </animated.div>
);
