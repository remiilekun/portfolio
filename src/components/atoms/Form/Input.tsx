import { ThemeType } from '@/theme';
import styled from '@emotion/styled';

type InputProps = {
  textColor?: keyof ThemeType['colors'];
} & React.ComponentPropsWithoutRef<'input'>;

export const Input = styled.input<InputProps>`
  -moz-appearance: none;
  -webkit-appearance: none;
  appearence: none;
  background-color: ${({ theme }) => theme.colors.primary}29;
  border-radius: 5rem;
  border: none;
  color: ${({ theme, textColor = 'white' }) => theme.colors[textColor]};
  display: block;
  font-size: 1.6rem;
  height: 4.5rem;
  line-height: 1.2;
  margin: 0;
  outline: none;
  padding: 0.5rem 2rem;
  width: 100%;

  &:disabled {
    background-color: rgba(128, 128, 128, 0.12);
  }

  &::placeholder {
    color: ${props => props.theme.colors.white}29;
    font-size: 1.4rem;
  }
`;
