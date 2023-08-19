import { useState } from 'react';
import { ToDoItem } from './ToDosRoot';
import { EditToDoInput } from './EditToDoInput';
import { NotEditingToDo } from './NotEditingToDo';
import { ToDoActionButtons } from './ToDoActionButtons';

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
