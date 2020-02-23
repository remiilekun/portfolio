import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { animated } from 'react-spring';
import { OutlineButton, ButtonTemplate } from '../../atoms';

export const Wrapper = styled.nav`
  left: 0;
  padding: 1.5rem 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;

  ${({ scrolled, theme }) =>
    scrolled &&
    css`
      background-color: ${theme.colors.steelGrey};
      // box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
      // box-shadow: rgba(2, 12, 27, 0.7) 0px 10px 30px -10px;
    `}
`;

export const Brand = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font.size.big};
  font-weight: 900;
  letter-spacing: 0.5px;
`;

export const NavList = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.mq.md`
  flex-direction: row;
  `}
`;

export const NavItem = styled.li`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font.size.small};
  &:not(:last-child) {
    margin-bottom: 3rem;
  }

  ${({ theme }) => theme.mq.md`
  &:not(:last-child) {
      margin-bottom: 0;
    margin-right: 2rem;
  }
  `}
`;

export const NavButton = styled(OutlineButton)`
  font-size: ${({ theme }) => theme.font.size.small};
  padding: 0.75rem 1rem;
`;

export const MobileWrapper = styled.div`
  display: flex;
`;

export const Hamburger = styled(ButtonTemplate)`
  cursor: pointer;
  height: 21px;
  padding: 0;
  position: relative;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  width: 30px;

  span {
    background: ${({ theme }) => theme.colors.white};
    border-radius: 9px;
    display: block;
    height: 2px;
    left: 0;
    opacity: 1;
    position: absolute;
    transform: rotate(0deg);
    transition: 0.3s ease-in-out;
    width: 100%;

    &:nth-child(1) {
      top: 0px;
      transform-origin: left center;
    }
    &:nth-child(2) {
      top: 10px;
      transform-origin: left center;
    }
    &:nth-child(3) {
      top: 19px;
      transform-origin: left center;
    }
  }

  ${({ active }) =>
    active &&
    css`
      span {
        &:nth-child(1) {
          transform: rotate(40deg);
        }
        &:nth-child(2) {
          width: 0%;
          opacity: 0;
        }
        &:nth-child(3) {
          transform: rotate(-40deg);
        }
      }
    `}
`;

export const MobileOverlay = styled(animated.div)`
  background-color: rgba(255, 255, 255, 0.1);
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
`;

export const MobileMenu = styled(animated.div)`
  background-color: #000;
  border-bottom-left-radius: 500px;
  overflow: hidden;
  padding: 10rem 5rem 20rem;
  position: fixed;
  right: 0;
  top: 0;
  transform-origin: 100% 0%;

  &::before {
    background-color: ${({ theme }) => theme.colors.primary}29;
    bottom: 0;
    content: '';
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }
`;
