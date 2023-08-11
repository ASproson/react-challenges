import { ToDo } from './ToDo';
import { ToDoItem } from './ToDos';

interface ToDoListProps {
  toDos: ToDoItem[];
  deleteToDo: (id: string) => void;
  completeToDo: (id: string) => void;
}

export const ToDoList = ({
  toDos,
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
            deleteToDo={deleteToDo}
            completeToDo={completeToDo}
          />
        );
      })}
    </div>
  );
};
