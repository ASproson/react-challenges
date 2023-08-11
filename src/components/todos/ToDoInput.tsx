import { useState } from 'react';
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
    <div className="pt-4">
      <input
        type="text"
        value={newToDo}
        className="text-black border-2 border-gray-300 rounded-md w-72 p-1"
        placeholder={placeholder + '...'}
        onChange={(e) => setNewToDo(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && addToDo(newToDo)}
      />
    </div>
  );
};
