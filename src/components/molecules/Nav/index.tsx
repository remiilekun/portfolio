'use client';
import { useEffect, useState, useRef, useMemo } from 'react';
import { createBreakpoint } from 'react-use';
import { useTransition } from '@react-spring/web';
import cb from 'bezier-easing';
import { useMultipleClickaway } from '@/hooks';
import { usePathname, useRouter } from 'next/navigation';
import { Content } from '@/components/atoms';
import { Wrapper } from './Wrapper';
import { Brand } from './Brand';
import { MobileWrapper } from './MobileWrapper';
import { Hamburger } from './Hamburger';
import { MobileOverlay } from './MobileOverlay';
import { MobileMenu } from './MobileMenu';
import { NavMenu } from './NavMenu';

export const useBreakpoint = createBreakpoint({
  desktop: 768,
  mobile: 0,
});

export const Nav = () => {
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const breakpoint = useBreakpoint();
  const pathname = usePathname();
  const { push } = useRouter();
  const toggleActive = () => setActive(v => !v);
  const hamRef = useRef(null);
  const menuRef = useRef(null);

  const [isOutside] = useMultipleClickaway([hamRef, menuRef]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOutside) {
      setActive(false);
    }
  }, [isOutside, active]);

  const scrollToTop = () => {
    if (window !== undefined) {
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
      const noHashURL = window.location.href.replace(/#.*$/, '');
      window.history.replaceState('', document.title, noHashURL);
    }
  };

  const goToHome = () => {
    push('/');
  };

  const onLogoClick = () => {
    return pathname === '/' ? scrollToTop() : goToHome();
  };

  useEffect(() => {
    const onScroll = () => {
      const offset = window.pageYOffset;
      setScrolled(offset > 10);
    };

    onScroll();
    document.addEventListener('scroll', onScroll);
    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, []);

  const easing = cb(0.53, -0.19, 0.39, 1.29);
  const transitions = useTransition(active, {
    from: { opacity: 0, transform: 'scale(0)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0)' },
    config: {
      duration: 300,
      easing: t => easing(t),
    },
  });

  const renderMenu = useMemo(() => {
    if (!mounted) return null;
    if (breakpoint === 'mobile')
      return (
        <MobileWrapper>
          {transitions(
            (style, item) =>
              item && (
                <MobileOverlay style={{ opacity: style.opacity }}>
                  <MobileMenu ref={menuRef} style={{ transform: style.transform }}>
                    <NavMenu />
                  </MobileMenu>
                </MobileOverlay>
              ),
          )}
          <Hamburger ref={hamRef} aria-label="Hamburger button" active={active} onClick={toggleActive} />
        </MobileWrapper>
      );
    return <NavMenu />;
  }, [active, breakpoint, mounted, transitions]);

  return (
    <Wrapper scrolled={scrolled}>
      <Content fluid>
        <div className="flex items-center justify-between">
          <Brand onClick={onLogoClick}>Remi Salami</Brand>
          {renderMenu}
        </div>
      </Content>
    </Wrapper>
  );
};
