interface ButtonProps {
  onClick: () => void;
  title: string;
}

export const Button = ({ onClick, title }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="border-[1.5px] px-2 border-black rounded-md"
    >
      {title}
    </button>
  );
};
