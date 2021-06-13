import { memo, ReactNode } from 'react';

export type HeadingProps = {
  children: ReactNode;
};

export const Heading = memo(function Heading({ children }: HeadingProps) {
  return <h1>{children}</h1>;
});
