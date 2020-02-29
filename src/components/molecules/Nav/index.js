import React, { useEffect, useState } from 'react';
import { Flex } from 'rebass';
import Link from 'next/link';
import { createBreakpoint } from 'react-use';
import { useTransition } from 'react-spring';
import cb from 'bezier-easing';
import { Content } from '../../atoms';
import {
  Brand,
  Hamburger,
  MobileMenu,
  MobileOverlay,
  MobileWrapper,
  NavButton,
  NavItem,
  NavList,
  Wrapper,
} from './styled';

export const useBreakpoint = createBreakpoint({
  desktop: 768,
  mobile: 0,
});

const NavMenu = () => (
  <NavList>
    <Link href="#about">
      <NavItem>About Me</NavItem>
    </Link>
    <Link href="#works">
      <NavItem>Works</NavItem>
    </Link>
    <Link href="#contact">
      <NavItem>Contact Me</NavItem>
    </Link>
    <NavButton>Download Resume</NavButton>
  </NavList>
);

export const Nav = () => {
  const [active, setActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const breakpoint = useBreakpoint();
  const toggleActive = () => setActive(v => !v);

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
          <Brand>Remi Salami</Brand>

          {breakpoint === 'mobile' ? (
            <MobileWrapper>
              {transitions.map(
                ({ item, key, props: { opacity, transform } }) =>
                  item && (
                    <MobileOverlay key={key} style={{ opacity }}>
                      <MobileMenu style={{ transform }}>
                        <NavMenu />
                      </MobileMenu>
                    </MobileOverlay>
                  ),
              )}
              <Hamburger aria-label="Hamburger button" active={active} onClick={toggleActive}>
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
