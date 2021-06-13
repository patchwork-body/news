import React, { memo } from 'react';
import cn from 'classnames';

export type FieldProps = {
  label: string;
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Field = memo(function Field({ label, className, ...attrs }: FieldProps) {
  return (
    <label className="relative">
      <span className={cn('absolute focus:top-0 focus:left-1 text-sm text-eerie-black text-opacity-50', className)}>
        {label}
      </span>

      <input
        className={cn(
          'outline-none focus:shadow-md hover:shadow-sm transition-shadow duration-300',
          'text-242424 bg-cultured px-4 pt-4 pb-3 rounded-md',
        )}
        {...attrs}
      />
    </label>
  );
});
