import React, { useEffect, useState, useLayoutEffect, useRef } from 'react';
import { Flex } from 'rebass';
import Link from 'next/link';
import { createBreakpoint } from 'react-use';
import { useTransition } from 'react-spring';
import cb from 'bezier-easing';
import * as smoothScroll from 'lib/smoothScroll';
import { useMultipleClickaway } from 'hooks';
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
        <Link href="#about" passHref>
          <NavLink className="nl">About Me</NavLink>
        </Link>
      </NavItem>

      <NavItem>
        <Link href="#works" passHref>
          <NavLink className="nl">Works</NavLink>
        </Link>
      </NavItem>

      <NavItem>
        <Link href="#contact" passHref>
          <NavLink className="nl">Contact Me</NavLink>
        </Link>
      </NavItem>

      <NavButton>Download Resume</NavButton>
    </NavList>
  );
};

export const Nav = () => {
  const [active, setActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const breakpoint = useBreakpoint();
  const toggleActive = () => setActive(v => !v);
  const hamRef = useRef(null);
  const menuRef = useRef(null);

  const [isOutside] = useMultipleClickaway([hamRef, menuRef]);

  useEffect(() => {
    if (isOutside) {
      setActive(false);
    }
    // eslint-disable-next-line
  }, [isOutside, active]);

  const scrollToTop = () => {
    if (window !== undefined) {
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
      const noHashURL = window.location.href.replace(/#.*$/, '');
      window.history.replaceState('', document.title, noHashURL);
    }
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
    from: { opacity: 0, transform: 'scale(0) ' },
    enter: { opacity: 1, transform: 'scale(1) ' },
    leave: { opacity: 0, transform: 'scale(0)' },
    config: {
      duration: 300,
      easing: t => easing(t),
    },
  });

  return (
    <Wrapper scrolled={scrolled}>
      <Content fluid>
        <Flex justifyContent="space-between" alignItems="center">
          <Brand onClick={scrollToTop}>Remi Salami</Brand>

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
  );
};
