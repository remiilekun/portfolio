import styled from '@emotion/styled';
import { Box } from 'rebass';

export const FormGroup = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;
