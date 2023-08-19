interface EditToDoInputProps {
  editedTitle: string;
  onBlur: () => void;
  isEditing: React.Dispatch<React.SetStateAction<boolean>>;
  changeTitle: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const EditToDoInput = ({
  editedTitle,
  onBlur,
  isEditing,
  changeTitle,
}: EditToDoInputProps) => {
  return (
    <input
      type="text"
      value={editedTitle}
      onChange={changeTitle}
      onBlur={() => {
        onBlur();
        isEditing(false);
      }}
      className="text-center focus:border-gray-400 border-[1.5px] focus:outline-none focus:ring-0 rounded-md"
    />
  );
};
