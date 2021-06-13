import classname from 'classnames'
import { ButtonHTMLAttributes } from 'react'

export type ButtonProps = {
  className?: string
  text: string
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ text, className, ...attrs }: ButtonProps) => {
  return <button className={classname(className)} {...attrs}>{text}</button>
}
