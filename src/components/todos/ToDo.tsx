import { Button } from './Button';
import { ToDoItem } from './Todos';
import { faX, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIconWrapper } from './FontAwesomeIconWrapper';

interface ToDoProps {
  toDo: ToDoItem;
  deleteToDo: (id: string) => void;
  completeToDo: (id: string) => void;
}

export const ToDo = ({ toDo, deleteToDo, completeToDo }: ToDoProps) => {
  return (
    <div className="flex">
      <div className="w-60">{toDo.title}</div>
      <div className="pl-2 space-x-2">
        <Button className="x " onClick={() => deleteToDo(toDo.id)}>
          <FontAwesomeIconWrapper icon={faX} color="red" />
        </Button>
        <Button className="x " onClick={() => completeToDo(toDo.id)}>
          <FontAwesomeIconWrapper icon={faCheck} color="emerald" />
        </Button>
      </div>
    </div>
  );
};
