import clsx from 'clsx';
import { ReactNode } from 'react';

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
  customStyling?: string;
  defaultStyling?: boolean;
}

export const Button = ({
  onClick,
  defaultStyling,
  customStyling,
  children,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        defaultStyling && 'border-[1.5px] px-2 p-1 border-black rounded-md',
        customStyling && `${customStyling}`
      )}
    >
      {children}
    </button>
  );
};
