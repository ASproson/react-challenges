interface AnalyzedObjectsProps {
  analyzedData: {
    title: string;
    length: number;
  }[];
}

export const AnalyzedObjects = ({ analyzedData }: AnalyzedObjectsProps) => {
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
