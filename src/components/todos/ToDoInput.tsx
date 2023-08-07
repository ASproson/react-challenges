import { Button } from './Button';

interface ToDoInputProps {
  newToDo: string;
  setNewToDo: (e: string) => void;
  addToDo: (e: string) => void;
}

export const ToDoInput = ({ newToDo, setNewToDo, addToDo }: ToDoInputProps) => {
  return (
    <div className="flex">
      <input
        type="text"
        value={newToDo}
        className="text-black"
        onChange={(e) => setNewToDo(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && addToDo(newToDo)}
      />

      <Button title="Add ToDo" onClick={() => addToDo(newToDo)} />
    </div>
  );
};
