import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from './Button';
import { ToDoItem } from './Todos';
import { faX, faCheck } from '@fortawesome/free-solid-svg-icons';

interface ToDoProps {
  toDo: ToDoItem;
  deleteToDo: (id: string) => void;
  completeToDo: (id: string) => void;
}

<FontAwesomeIcon icon={faX} />;

export const ToDo = ({ toDo, deleteToDo, completeToDo }: ToDoProps) => {
  return (
    <div className="flex">
      <div>{toDo.title}</div>
      <Button onClick={() => deleteToDo(toDo.id)}>
        <FontAwesomeIcon icon={faX} className="text-red-500" />
      </Button>
      <Button onClick={() => completeToDo(toDo.id)}>
        <FontAwesomeIcon icon={faCheck} className="text-emerald-500" />
      </Button>
    </div>
  );
};
