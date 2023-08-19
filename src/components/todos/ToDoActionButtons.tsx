import { Button } from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faCheck } from '@fortawesome/free-solid-svg-icons';

interface ToDoActionButtonsProps {
  id: string;
  deleteToDo: (id: string) => void;
  completeToDo: (id: string) => void;
}

export const ToDoActionButtons = ({
  deleteToDo,
  completeToDo,
  id,
}: ToDoActionButtonsProps) => {
  return (
    <div className="pl-2 space-x-2">
      <Button defaultStyling={false} onClick={() => deleteToDo(id)}>
        <FontAwesomeIcon icon={faXmark} className="text-red-500 font-bold" />
      </Button>
      <Button defaultStyling={false} onClick={() => completeToDo(id)}>
        <FontAwesomeIcon
          icon={faCheck}
          className="text-emerald-500 font-bold"
        />
      </Button>
    </div>
  );
};
