import { useState } from 'react';
import { Button } from './Button';
import { ToDoItem } from './ToDos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FontAwesomeIconWrapper } from './FontAwesomeIconWrapper';
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
          <input
            type="text"
            value={editedTitle}
            onChange={handleTitleChange}
            onBlur={() => {
              handleBlur();
              setIsEditing(false);
            }}
            className="text-center"
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
        <Button customStyling="x " onClick={() => deleteToDo(toDo.id)}>
          <FontAwesomeIconWrapper icon={faXmark} color="red" />
        </Button>
        <Button customStyling="x " onClick={() => completeToDo(toDo.id)}>
          <FontAwesomeIconWrapper icon={faCheck} color="emerald" />
        </Button>
      </div>
    </div>
  );
};
