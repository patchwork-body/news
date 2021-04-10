import React, { memo, ReactNode } from "react";
import cn from 'classnames'

export type ButtonProps = {
  variant?: 'default' | 'primary' | 'danger'
  className?: string
  children?: ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = memo(function Button({variant = 'default', className, children, ...attrs}: ButtonProps) {
  return <button className={cn(
    {
      'bg-cultured': variant === 'default',
      'bg-canary': variant === 'primary',
      'bg-imperial-red': variant === 'danger',
    },
    className
  )} {...attrs}>{children}</button>
})
