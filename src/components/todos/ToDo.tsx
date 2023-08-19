import { useState } from 'react';
import { Button } from './Button';
import { ToDoItem } from './ToDosRoot';
import { EditToDoInput } from './EditToDoInput';
import { NotEditingToDo } from './NotEditingToDo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
      <div className="w-60 hover:italic cursor-text">
        {isEditing ? (
          <EditToDoInput
            editedTitle={editedTitle}
            onBlur={handleBlur}
            isEditing={setIsEditing}
            changeTitle={handleTitleChange}
          />
        ) : (
          <NotEditingToDo
            setIsEditing={setIsEditing}
            isEditing={isEditing}
            currentTitle={editedTitle}
          />
        )}
      </div>
      <ToDoActionButtons
        id={toDo.id}
        deleteToDo={deleteToDo}
        completeToDo={completeToDo}
      />
    </div>
  );
};

interface ToDoActionButtonsProps {
  id: string;
  deleteToDo: (id: string) => void;
  completeToDo: (id: string) => void;
}

export const ToDoActionButtons = ({
  deleteToDo,
  completeToDo,
  id,
}: ToDoActionButtonsProps) => {
  return (
    <div className="pl-2 space-x-2">
      <Button defaultStyling={false} onClick={() => deleteToDo(id)}>
        <FontAwesomeIcon icon={faXmark} className="text-red-500 font-bold" />
      </Button>
      <Button defaultStyling={false} onClick={() => completeToDo(id)}>
        <FontAwesomeIcon
          icon={faCheck}
          className="text-emerald-500 font-bold"
        />
      </Button>
    </div>
  );
};
