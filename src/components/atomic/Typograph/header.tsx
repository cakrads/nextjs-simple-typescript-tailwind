import { ReactNode } from 'react';

interface Props {
  children?: ReactNode
}

export const H1 = ({ children }: Props) => {
  return (
    <h1 className="m-0 text-6xl leading-normal text-center">
      {children}
    </h1>
  );
};

export const H3 = ({ children }: Props) => {
  return (
    <h3 className="text-2xl mb-4">
      {children}
    </h3>
  );
};
