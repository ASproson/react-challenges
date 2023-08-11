import { CompletedToDoList } from './CompletedToDoList';
import { ToDoItem } from './Todos';

interface ShowCompletedToDosProps {
  completedToDos: ToDoItem[];
}

export const ShowCompletedToDos = ({
  completedToDos,
}: ShowCompletedToDosProps) => {
  return (
    <div>
      <h1 className="text-2xl">Completed ToDos</h1>

      {completedToDos?.map((completedToDo: ToDoItem) => {
        return (
          <CompletedToDoList
            key={completedToDo.id}
            completedToDo={completedToDo}
          />
        );
      })}
    </div>
  );
};
