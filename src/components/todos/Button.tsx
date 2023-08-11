import clsx from 'clsx';
import { ReactNode } from 'react';

interface ButtonProps {
  onClick: () => void;
  customStyling?: string;
  children: ReactNode;
}

export const Button = ({ onClick, customStyling, children }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        customStyling
          ? `${customStyling}`
          : 'border-[1.5px] px-2 p-1 border-black rounded-md'
      )}
    >
      {children}
    </button>
  );
};
