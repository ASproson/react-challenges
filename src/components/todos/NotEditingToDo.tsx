import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface NotEditingToDoProps {
  isEditing: boolean;
  currentTitle: string;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NotEditingToDo = ({
  isEditing,
  currentTitle,
  setIsEditing,
}: NotEditingToDoProps) => {
  return (
    <div onClick={() => setIsEditing(true)}>
      <span>{currentTitle}</span>
      {!isEditing && (
        <button className="float-right">
          <FontAwesomeIcon icon={faPencil} className="text-xs pt-[6px]" />
        </button>
      )}
    </div>
  );
};
