import { useState } from 'react';
import { Button } from './Button';
import { ToDoItem } from './ToDos';
import { FontAwesomeIconWrapper } from './FontAwesomeIconWrapper';
import { faXmark, faCheck } from '@fortawesome/free-solid-svg-icons';

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
      <div className="w-60">
        {isEditing ? (
          <input
            type="text"
            value={editedTitle}
            onChange={handleTitleChange}
            onBlur={handleBlur}
            className="text-center"
          />
        ) : (
          <div onClick={() => setIsEditing(true)}>{editedTitle}</div>
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
