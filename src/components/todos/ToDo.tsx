import { ToDoItem } from './Todos';

interface ToDoProps {
  toDo: ToDoItem;
  deleteToDo: (id: string) => void;
  completeToDo: (id: string) => void;
}

export const ToDo = ({ toDo, deleteToDo, completeToDo }: ToDoProps) => {
  return (
    <div className="flex">
      <div className="text-white">{toDo.title}</div>
      <button onClick={() => deleteToDo(toDo.id)}>❌</button>
      <button onClick={() => completeToDo(toDo.id)}>✔</button>
    </div>
  );
};
