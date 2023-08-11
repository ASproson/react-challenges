import clsx from 'clsx';
import { ReactNode } from 'react';

interface ButtonProps {
  onClick: () => void;
  className?: string;
  children: ReactNode;
}

export const Button = ({ onClick, className, children }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        className ? '' : 'border-[1.5px] px-2 border-black rounded-md'
      )}
    >
      {children}
    </button>
  );
};
