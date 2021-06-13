import React, { memo, ReactNode } from 'react';

export type FormProps = {
  className?: string;
  children?: ReactNode;
} & React.FormHTMLAttributes<HTMLFormElement>;

export const Form = memo(function Form({ className, children, ...attrs }: FormProps) {
  return (
    <form className={className} {...attrs}>
      {children}
    </form>
  );
});
