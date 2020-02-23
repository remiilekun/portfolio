import React, { useEffect, useState } from 'react';
import { Flex } from 'rebass';
import { createBreakpoint } from 'react-use';
import { useTransition } from 'react-spring';
import cb from 'bezier-easing';
import { Content } from '../../atoms';
import {
  Wrapper,
  Brand,
  NavList,
  NavItem,
  NavButton,
  MobileMenu,
  Hamburger,
  MobileWrapper,
  MobileOverlay,
} from './styled';

export const useBreakpoint = createBreakpoint({
  desktop: 768,
  mobile: 0,
});

export const Nav = () => {
  const [active, setActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const breakpoint = useBreakpoint();
  const toggleActive = () => setActive(v => !v);

  useEffect(() => {
    const onScroll = () => {
      const offset = window.pageYOffset;
      setScrolled(offset > 60);
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
          <Brand>Casper.RS</Brand>

          {breakpoint === 'mobile' ? (
            <MobileWrapper>
              {transitions.map(
                ({ item, key, props: { opacity, transform } }) =>
                  item && (
                    <MobileOverlay key={key} style={{ opacity }}>
                      <MobileMenu style={{ transform }}>
                        <NavList>
                          <NavItem>About Me</NavItem>
                          <NavItem>Casper’s Work</NavItem>
                          <NavItem>Contact Me</NavItem>
                          <NavButton color="white">Download Resume</NavButton>
                        </NavList>
                      </MobileMenu>
                    </MobileOverlay>
                  ),
              )}

              <Hamburger active={active} onClick={toggleActive}>
                <span />
                <span />
                <span />
              </Hamburger>
            </MobileWrapper>
          ) : (
            <NavList>
              <NavItem>About Me</NavItem>
              <NavItem>Casper’s Work</NavItem>
              <NavItem>Contact Me</NavItem>
              <NavButton color="white">Download Resume</NavButton>
            </NavList>
          )}
        </Flex>
      </Content>
    </Wrapper>
  );
};
