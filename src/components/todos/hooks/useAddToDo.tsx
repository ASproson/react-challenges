import { useCallback } from 'react';
import { ToDoItem } from '../Todos';
import { toast } from 'react-toastify';

const { v4: uuidv4 } = require('uuid');

interface useAddToDoProps {
  newToDo: string;
  setNewToDo: React.Dispatch<React.SetStateAction<string>>;
  setToDos: React.Dispatch<React.SetStateAction<ToDoItem[]>>;
}

const notifySuccessfulToDoAddition = (newTask: string) =>
  toast(`ToDo: ${newTask} added!`);

export const useAddToDo = ({
  newToDo,
  setToDos,
  setNewToDo,
}: useAddToDoProps) => {
  return useCallback(() => {
    if (!newToDo) return;
    const newTask: ToDoItem = { id: uuidv4(), title: newToDo };
    setToDos((prev) => [...prev, newTask]);
    notifySuccessfulToDoAddition(newTask.title);
    setNewToDo('');
  }, [setToDos, setNewToDo, newToDo]);
};
