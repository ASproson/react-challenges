interface ButtonProps {
  onClick: () => void;
  title: string;
}

export const Button = ({ onClick, title }: ButtonProps) => {
  return <button onClick={onClick}>{title}</button>;
};
