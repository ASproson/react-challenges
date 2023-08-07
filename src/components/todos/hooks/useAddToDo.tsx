import { useCallback } from 'react';
import { ToDoItem } from '../Todos';
const { v4: uuidv4 } = require('uuid');

interface useAddToDoProps {
  newToDo: string;
  setNewToDo: React.Dispatch<React.SetStateAction<string>>;
  notifySuccessfulToDoAddition: (newTask: string) => void;
  setToDos: React.Dispatch<React.SetStateAction<ToDoItem[]>>;
}

export const useAddToDo = ({
  setToDos,
  notifySuccessfulToDoAddition,
  setNewToDo,
  newToDo,
}: useAddToDoProps) => {
  return useCallback(() => {
    if (!newToDo) return;
    const newTask: ToDoItem = { id: uuidv4(), title: newToDo };
    setToDos((prev) => [...prev, newTask]);
    notifySuccessfulToDoAddition(newTask.title);
    setNewToDo('');
  }, [setToDos, notifySuccessfulToDoAddition, setNewToDo, newToDo]);
};
