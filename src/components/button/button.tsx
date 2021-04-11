import React, { memo, ReactNode } from 'react';
import cn from 'classnames';

export type ButtonProps = {
  variant?: 'default' | 'primary' | 'danger';
  flat?: boolean;
  className?: string;
  children?: ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = memo(function Button({ variant = 'default', flat, className, children, ...attrs }: ButtonProps) {
  return (
    <button
      className={cn(
        'px-3 py-2 rounded-md border-2 border-white hover:shadow-md',
        'transition-shadow duration-300 disabled:shadow-none disabled:opacity-60',

        { 'text-eerie-black': variant !== 'danger' },

        {
          'bg-cultured': variant === 'default' && !flat,
          'bg-canary': variant === 'primary' && !flat,
          'bg-imperial-red text-white': variant === 'danger' && !flat,
        },
        className,
      )}
      {...attrs}
    >
      {children}
    </button>
  );
});
