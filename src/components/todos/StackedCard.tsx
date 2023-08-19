interface StackedCardProps {
  margin: number;
}

export const StackedCard = ({ margin }: StackedCardProps) => {
  return (
    <div
      className={`mx-${margin} border-b-[1px] border-l-[1px] border-r-[1px] border-gray-400 bg-white h-2 rounded-sm`}
    ></div>
  );
};
