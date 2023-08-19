import { useState } from 'react';
import { Button } from './Button';
import { ToDoItem } from './ToDosRoot';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faCheck, faPencil } from '@fortawesome/free-solid-svg-icons';

interface ToDoProps {
  toDo: ToDoItem;
  deleteToDo: (id: string) => void;
  completeToDo: (id: string) => void;
  updateToDo: (id: string, newTitle: string) => void;
}

export const ToDo = ({
  toDo,
  updateToDo,
  deleteToDo,
  completeToDo,
}: ToDoProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(toDo.title);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTitle(event.target.value);
  };

  const handleBlur = () => {
    setIsEditing(false);
    updateToDo(toDo.id, editedTitle);
  };

  return (
    <div className="flex justify-center">
      <div className="w-60 hover:italic cursor-text">
        {isEditing ? (
          // <input
          //   type="text"
          //   value={editedTitle}
          //   onChange={handleTitleChange}
          //   onBlur={() => {
          //     handleBlur();
          //     setIsEditing(false);
          //   }}
          //   className="text-center focus:border-gray-400 border-[1.5px] focus:outline-none focus:ring-0 rounded-md"
          // />
          <EditToDoInput
            editedTitle={editedTitle}
            handleTitleChange={handleTitleChange}
            handleBlur={handleBlur}
            setIsEditing={setIsEditing}
          />
        ) : (
          <div onClick={() => setIsEditing(true)}>
            <span>{editedTitle}</span>
            {!isEditing && (
              <button className="float-right">
                <FontAwesomeIcon icon={faPencil} className="text-xs pt-[6px]" />
              </button>
            )}
          </div>
        )}
      </div>
      <div className="pl-2 space-x-2">
        <Button defaultStyling={false} onClick={() => deleteToDo(toDo.id)}>
          <FontAwesomeIcon icon={faXmark} className="text-red-500 font-bold" />
        </Button>
        <Button defaultStyling={false} onClick={() => completeToDo(toDo.id)}>
          <FontAwesomeIcon
            icon={faCheck}
            className="text-emerald-500 font-bold"
          />
        </Button>
      </div>
    </div>
  );
};

interface EditToDoInputProps {
  editedTitle: string;
  handleBlur: () => void;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  handleTitleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const EditToDoInput = ({
  editedTitle,
  handleTitleChange,
  handleBlur,
  setIsEditing,
}: EditToDoInputProps) => {
  return (
    <input
      type="text"
      value={editedTitle}
      onChange={handleTitleChange}
      onBlur={() => {
        handleBlur();
        setIsEditing(false);
      }}
      className="text-center focus:border-gray-400 border-[1.5px] focus:outline-none focus:ring-0 rounded-md"
    />
  );
};
