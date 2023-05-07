import React, { useEffect, useState, useLayoutEffect, useRef } from 'react';
import { Flex } from '@theme-ui/components';
import { createBreakpoint } from 'react-use';
import { useTransition } from 'react-spring';
import cb from 'bezier-easing';
import * as smoothScroll from '@/lib/smoothScroll';
import { useMultipleClickaway } from '@/hooks';
import Fade from 'react-reveal/Fade';
import { useRouter } from 'next/router';
import { Content } from '../../atoms';
import {
  Brand,
  Hamburger,
  MobileMenu,
  MobileOverlay,
  MobileWrapper,
  NavButton,
  NavItem,
  NavLink,
  NavList,
  Wrapper,
} from './styled';

export const useBreakpoint = createBreakpoint({
  desktop: 768,
  mobile: 0,
});

const NavMenu = () => {
  useLayoutEffect(() => {
    smoothScroll.initialize();
  }, []);

  return (
    <NavList>
      <NavItem>
        <Fade top>
          <NavLink href="#about" className="nl">
            About Me
          </NavLink>
        </Fade>
      </NavItem>

      <NavItem>
        <Fade top delay={100}>
          <NavLink href="#projects" className="nl">
            Projects
          </NavLink>
        </Fade>
      </NavItem>

      <NavItem>
        <Fade top delay={200}>
          <NavLink href="#contact" className="nl">
            Contact Me
          </NavLink>
        </Fade>
      </NavItem>

      <Fade top delay={300}>
        <NavButton
          as="a"
          target="_blank"
          rel="noopener noreferrer"
          href="https://docs.google.com/document/d/1JPVGTeOGftEtEoZrCpdf37zV3PFPgT0qQEHhO49SGgA/export?format=pdf"
        >
          Download Resume
        </NavButton>
      </Fade>
    </NavList>
  );
};

export const Nav = () => {
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const breakpoint = useBreakpoint();
  const { pathname, push } = useRouter();
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
  const transitions = useTransition(active, null, {
    from: { opacity: 0, transform: 'scale(0)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0)' },
    config: {
      duration: 300,
      easing: t => easing(t),
    },
  });

  return mounted ? (
    <Wrapper scrolled={scrolled}>
      <Content fluid>
        <Flex sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
          <Brand onClick={onLogoClick}>Remi Salami</Brand>

          {breakpoint === 'mobile' ? (
            <MobileWrapper>
              {transitions.map(
                ({ item, key, props: { opacity, transform } }) =>
                  item && (
                    <MobileOverlay key={key} style={{ opacity }}>
                      <MobileMenu ref={menuRef} style={{ transform }}>
                        <NavMenu />
                      </MobileMenu>
                    </MobileOverlay>
                  ),
              )}
              <Hamburger ref={hamRef} aria-label="Hamburger button" active={active} onClick={toggleActive}>
                <span />
                <span />
                <span />
              </Hamburger>
            </MobileWrapper>
          ) : (
            <NavMenu />
          )}
        </Flex>
      </Content>
    </Wrapper>
  ) : null;
};
