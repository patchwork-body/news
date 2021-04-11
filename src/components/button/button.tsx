import React, { memo, ReactNode } from 'react';
import cn from 'classnames';

export type ButtonProps = {
  variant?: 'default' | 'primary' | 'danger';
  className?: string;
  children?: ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = memo(function Button({ variant = 'default', className, children, ...attrs }: ButtonProps) {
  return (
    <button
      className={cn(
        'px-3 py-2 rounded-md hover:shadow-md transition-shadow duration-300',
        'disabled:shadow-none disabled:opacity-60',

        {
          'bg-cultured': variant === 'default',
          'bg-canary': variant === 'primary',
          'bg-imperial-red text-white': variant === 'danger',
        },

        className,
      )}
      {...attrs}
    >
      {children}
    </button>
  );
});
