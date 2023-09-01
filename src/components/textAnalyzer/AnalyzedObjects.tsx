interface AnalyzedObjectsProps {
  analyzedData: {
    title: string;
    data: number;
  }[];
}

export const AnalyzedObjects = ({ analyzedData }: AnalyzedObjectsProps) => {
  return (
    <>
      {analyzedData.map((obj) => {
        return (
          <div key={obj.title}>
            <span>{obj.title}: </span>
            <span>{obj.data}</span>
          </div>
        );
      })}
    </>
  );
};
