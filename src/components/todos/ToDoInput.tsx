import { useState } from 'react';
import { Button } from './Button';
import { PLACEHOLDER_SUGGESTIONS } from './lib/PLACEHOLDER_SUGGESTIONS';

interface ToDoInputProps {
  newToDo: string;
  setNewToDo: (e: string) => void;
  addToDo: (e: string) => void;
}

const randomSuggestion = () => {
  return PLACEHOLDER_SUGGESTIONS[
    Math.floor(Math.random() * PLACEHOLDER_SUGGESTIONS.length)
  ];
};

export const ToDoInput = ({ newToDo, setNewToDo, addToDo }: ToDoInputProps) => {
  const [placeholder, setPlaceholder] = useState(randomSuggestion());
  const [currentToDo, setCurrentTodo] = useState(newToDo);

  if (currentToDo !== newToDo) {
    setPlaceholder(randomSuggestion());
    setCurrentTodo(newToDo);
  }

  return (
    <div className="flex">
      <input
        type="text"
        value={newToDo}
        className="text-black border-[1.5px] border-black rounded-md"
        placeholder={placeholder + '...'}
        onChange={(e) => setNewToDo(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && addToDo(newToDo)}
      />

      <Button title="Add ToDo" onClick={() => addToDo(newToDo)} />
    </div>
  );
};

// Animate placeholder text with array of suggestions?
