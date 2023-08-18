interface TitleProps {
  titleText: string;
}

export const Title = ({ titleText }: TitleProps) => {
  return <header className="App text-3xl font-bold">{titleText}</header>;
};
