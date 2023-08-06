import { Button } from './Button';

interface ToDoInputProps {
  newToDo: string;
  setNewToDo: (e: string) => void;
  handleAddToDo: (e: string) => void;
}

export const ToDoInput = ({
  newToDo,
  setNewToDo,
  handleAddToDo,
}: ToDoInputProps) => {
  return (
    <div className="flex">
      <input
        type="text"
        value={newToDo}
        className="text-black"
        onChange={(e) => setNewToDo(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleAddToDo(newToDo)}
      />

      <Button title="Add ToDo" onClick={() => handleAddToDo(newToDo)} />
    </div>
  );
};
