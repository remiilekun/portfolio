import { useLayoutEffect } from 'react';
import { Fade } from 'react-awesome-reveal';
import * as smoothScroll from '@/lib/smoothScroll';
import { NavList } from './NavList';
import { NavItem } from './NavItem';
import { NavLink } from './NavLink';
import { NavButton } from './NavButton';

export const NavMenu = () => {
  useLayoutEffect(() => {
    smoothScroll.initialize();
  }, []);

  return (
    <NavList>
      <NavItem>
        <Fade direction="down" triggerOnce>
          <NavLink href="#about" className="nl">
            About Me
          </NavLink>
        </Fade>
      </NavItem>

      <NavItem>
        <Fade direction="down" delay={100} triggerOnce>
          <NavLink href="#projects" className="nl">
            Projects
          </NavLink>
        </Fade>
      </NavItem>

      <NavItem>
        <Fade direction="down" delay={200} triggerOnce>
          <NavLink href="#contact" className="nl">
            Contact Me
          </NavLink>
        </Fade>
      </NavItem>

      <Fade direction="down" delay={300} triggerOnce>
        <NavButton
          as="a"
          target="_blank"
          rel="noopener noreferrer"
          href="https://docs.google.com/document/d/1s5h0MPp3_oIwGzO9Ix-XRmW8361XXJXqV0ImrBLTAPs/export?format=pdf"
        >
          Download Resume
        </NavButton>
      </Fade>
    </NavList>
  );
};
