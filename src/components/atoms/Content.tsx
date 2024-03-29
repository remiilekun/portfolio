import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Content = styled.div<{ fluid?: boolean }>`
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 144rem;
  padding-left: 2rem;
  padding-right: 2rem;
  width: 100%;

  ${({ theme, fluid }) => theme.mq.md`
    padding-left: 12rem;
    padding-right: 12rem;

    ${fluid &&
      css`
        padding-left: 9rem;
        padding-right: 9rem;
      `}
  }
  `}
`;
