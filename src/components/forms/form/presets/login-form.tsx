import React, { memo } from 'react';
import { Button } from 'components/button';
import { Form } from 'components/forms/form';
import { Field } from 'components/forms/field';
import { useForm } from 'react-hook-form';

export const LoginForm = memo(function LoginForm() {
  const { register } = useForm({
    mode: 'onChange',
  });

  return (
    <Form className="grid grid-flow-row gap-y-2">
      <Field label="email" type="email" {...(register('email'), { required: true })} />
      <Field label="password" type="password" {...(register('password'), { required: true })} />

      <Button type="submit" className="mt-2 uppercase font-semibold" variant="primary">
        Login
      </Button>
    </Form>
  );
});
