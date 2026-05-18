import React from 'react';
import { FormGroup } from './Group';
import { Input } from './Input';
import { Label } from './Label';
import { Textarea } from './Textarea';

type FormBaseProps = React.ComponentPropsWithoutRef<'form'>;

const FormBase = ({ children, ...rest }: FormBaseProps) => <form {...rest}>{children}</form>;

const Form = Object.assign(FormBase, {
  Group: FormGroup,
  Input: Input,
  Label: Label,
  Textarea: Textarea,
});

export { Form };
