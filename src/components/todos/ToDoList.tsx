import { ToDo } from './ToDo';
import { ToDoItem } from './ToDosRoot';

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
    <div className="py-4 flex justify-center">
      <div className="py-4 w-2/5 rounded-sm border-[1px] border-gray-400 shadow-md shadow-gray-400">
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
    </div>
  );
};
