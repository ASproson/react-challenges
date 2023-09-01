interface AnalyzedInputProps {
  analyzedData: {
    title: string;
    length: number;
  }[];
}

export const AnalyzedInput = ({ analyzedData }: AnalyzedInputProps) => {
  return (
    <>
      {analyzedData.map(({ title, length }) => {
        return (
          <div key={title}>
            <span>{title}: </span>
            <span>{length}</span>
          </div>
        );
      })}
    </>
  );
};
