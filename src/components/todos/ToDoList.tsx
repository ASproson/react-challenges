import { ToDo } from './ToDo';
import { ToDoItem } from './ToDos';

interface ToDoListProps {
  toDos: ToDoItem[];
  deleteToDo: (id: string) => void;
  completeToDo: (id: string) => void;
  updateToDo: (id: string, newTitle: string) => void;
}

export const ToDoList = ({
  toDos,
  updateToDo,
  deleteToDo,
  completeToDo,
}: ToDoListProps) => {
  return (
    <div className="pt-4">
      {toDos.map((toDo: ToDoItem) => {
        return (
          <ToDo
            key={toDo.id}
            toDo={toDo}
            updateToDo={updateToDo}
            deleteToDo={deleteToDo}
            completeToDo={completeToDo}
          />
        );
      })}
    </div>
  );
};
