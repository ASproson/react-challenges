import { Button } from './Button';

interface ToDoActionsProps {
  newToDo: string;
  showCompletedToDos: boolean;
  addToDo: (e: string) => void;
  handleRemoveLastToDo: () => void;
  setShowCompletedToDos: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ToDoActions = ({
  newToDo,
  addToDo,
  showCompletedToDos,
  handleRemoveLastToDo,
  setShowCompletedToDos,
}: ToDoActionsProps) => {
  return (
    <div className="flex justify-center space-x-2 pt-4">
      <Button
        onClick={() => addToDo(newToDo)}
        customStyling="bg-blue-400 px-2 p-1 rounded-md text-gray-200"
      >
        Add ToDo
      </Button>
      <Button
        customStyling="rounded-md bg-red-400 px-2 p-1 text-gray-200"
        onClick={() => handleRemoveLastToDo()}
      >
        Remove Last ToDo
      </Button>

      <Button
        customStyling="rounded-md bg-emerald-400 px-2 p-1 text-gray-200"
        onClick={() => setShowCompletedToDos(!showCompletedToDos)}
      >
        Show Completed ToDos
      </Button>
    </div>
  );
};
