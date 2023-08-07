import { useState } from 'react';
import { Button } from './Button';
import { ToDoList } from './ToDoList';
import { ToDoInput } from './ToDoInput';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { useAddToDo } from './hooks/useAddToDo';
import { ToastContainer, toast } from 'react-toastify';
import { ShowCompletedToDos } from './ShowCompletedToDos';

const { v4: uuidv4 } = require('uuid');
const todoList = [
  {
    id: uuidv4(),
    title: 'Task One',
  },
  {
    id: uuidv4(),
    title: 'Task Two',
  },
];

export interface ToDoItem {
  id: string;
  title: string;
}

const notifySuccessfulToDoAddition = (newTask: string) =>
  toast(`ToDo: ${newTask} added!`);

export const Todos = () => {
  const [toDos, setToDos] = useState(todoList);
  const [newToDo, setNewToDo] = useState('');
  const [completedToDos, setCompletedToDos] = useState<ToDoItem[]>([]);
  const [showCompletedToDos, setShowCompletedToDos] = useState(false);

  const handleAddToDo = useAddToDo({
    newToDo,
    setToDos,
    setNewToDo,
    notifySuccessfulToDoAddition,
  });

  const handleRemoveLastToDo = () => {
    setToDos(toDos.slice(0, toDos.length - 1));
  };

  const handleDeleteSpecificToDo = (id: string) => {
    const filteredToDos = toDos.filter((todo) => todo.id !== id);
    setToDos(filteredToDos);
  };

  const handleCompletedToDo = (id: string) => {
    const completedToDo = toDos.filter((todo) => todo.id === id)[0];
    handleDeleteSpecificToDo(id);
    setCompletedToDos((prev) => [...prev, completedToDo]);
  };

  return (
    <div className="text-center text-white">
      <div>
        <Link to={'/'}>Home</Link>
      </div>

      <ToDoList
        toDos={toDos}
        completeToDo={handleCompletedToDo}
        deleteToDo={handleDeleteSpecificToDo}
      />

      <ToDoInput
        newToDo={newToDo}
        setNewToDo={setNewToDo}
        addToDo={handleAddToDo}
      />
      <Button title="Remove Last ToDo" onClick={() => handleRemoveLastToDo()} />

      <Button
        title="Show Completed ToDos"
        onClick={() => setShowCompletedToDos(!showCompletedToDos)}
      />

      {showCompletedToDos && (
        <ShowCompletedToDos completedToDos={completedToDos} />
      )}

      <ToastContainer
        position="top-center"
        autoClose={1000}
        closeOnClick
        theme="dark"
        limit={1}
      />
    </div>
  );
};
