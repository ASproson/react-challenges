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
      <div className="w-2/5">
        <div className="py-4 rounded-sm border-[1px] border-gray-400 shadow-md shadow-gray-400 relative">
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
        <div className="mx-2 border-b-[1px] border-l-[1px] border-r-[1px] border-gray-400 bg-white h-2 rounded-sm"></div>
        <div className="mx-4 border-b-[1px] border-l-[1px] border-r-[1px] border-gray-400 bg-white h-2 rounded-sm"></div>
      </div>
    </div>
  );
};
