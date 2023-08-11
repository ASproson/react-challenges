import { CompletedToDoList } from './CompletedToDoList';
import { ToDoItem } from './ToDos';

interface ShowCompletedToDosProps {
  completedToDos: ToDoItem[];
}

export const ShowCompletedToDos = ({
  completedToDos,
}: ShowCompletedToDosProps) => {
  return (
    <div className="pt-4">
      <h1 className="text-2xl">Completed ToDos</h1>
      {completedToDos?.map((completedToDo: ToDoItem) => {
        return (
          <div key={completedToDo.id} className="pt-2">
            <CompletedToDoList completedToDo={completedToDo} />
          </div>
        );
      })}
    </div>
  );
};
