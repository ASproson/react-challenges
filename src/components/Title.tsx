interface TitleProps {
  titleText: string;
}

export const Title = ({ titleText }: TitleProps) => {
  return <header>{titleText}</header>;
};
