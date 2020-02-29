import React from 'react';
import styled from '@emotion/styled';
import { GithubIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from 'components/icons';

const Wrapper = styled.aside`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.steelGrey};
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 1rem 0;
  z-index: 1;

  ${({ theme }) => theme.mq.md`
  position: fixed;
    bottom: 0;
    flex-direction: column;
    left: 0;
    padding: 0 1.5rem ;
    right: unset;
    top: 0;
    width: 5rem;
`}
`;

const Item = styled.span`
  transition: all 0.3s;
  svg {
    height: 2.5rem;
    width: 2.5rem;
  }

  &:hover {
    transform: translateY(-3px);

    svg {
      path {
        fill: ${({ theme }) => theme.colors.primary};
      }
    }
  }

  &:not(:last-child) {
    margin-right: 2rem;
  }

  ${({ theme }) => theme.mq.md`
  svg {
    height: 2rem;
    width: 2rem;
  }
  

  &:not(:last-child){
    margin-right: 0;
    margin-bottom: 3rem;
  }
`}
`;

export const Socials = () => {
  return (
    <Wrapper>
      <Item>
        <a href="https://www.github.com/remiilekun" target="_blank" rel="noopener noreferrer" aria-label="Github Link">
          <GithubIcon />
        </a>
      </Item>
      <Item>
        <a
          href="https://www.linkedin.com/in/remiilekun"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Linkedin Link"
        >
          <LinkedinIcon />
        </a>
      </Item>
      <Item>
        <a href="https://twitter.com/remiilekun" target="_blank" rel="noopener noreferrer" aria-label="Twitter Link">
          <TwitterIcon />
        </a>
      </Item>
      <Item>
        <a
          href="https://www.instagram.com/remiilekun"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram Link"
        >
          <InstagramIcon />
        </a>
      </Item>
    </Wrapper>
  );
};
