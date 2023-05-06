import styled from '@emotion/styled';
import { FormGroup } from './Group';
import { Input } from './Input';
import { Label } from './Label';
import { Textarea } from './Textarea';

const StyledForm = styled.form``;

const Form = Object.assign(StyledForm, {
  Group: FormGroup,
  Input: Input,
  Label: Label,
  Textarea: Textarea,
}) as typeof StyledForm & {
  Group: typeof FormGroup;
  Input: typeof Input;
  Label: typeof Label;
  Textarea: typeof Textarea;
};

export { Form };
