import { Button } from './Button';
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
      <Button title="❌" onClick={() => deleteToDo(toDo.id)} />
      <Button title="✔" onClick={() => completeToDo(toDo.id)} />
    </div>
  );
};
