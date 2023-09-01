interface AnalyzedObjectsProps {
  analyzedData: {
    title: string;
    data: number;
  }[];
}

export const AnalyzedObjects = ({ analyzedData }: AnalyzedObjectsProps) => {
  return (
    <>
      {analyzedData.map(({ title, data }) => {
        return (
          <div key={title}>
            <span>{title}: </span>
            <span>{data}</span>
          </div>
        );
      })}
    </>
  );
};
