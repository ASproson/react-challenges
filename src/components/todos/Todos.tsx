import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

export const Todos = () => {
  const [toDos, setToDos] = useState(todoList);
  const [newToDo, setNewToDo] = useState('');
  const [completedToDos, setCompletedToDos] = useState<ToDoItem[]>([]);
  const [showCompletedToDos, setShowCompletedToDos] = useState(false);

  const handleAddToDo = (newToDo: string) => {
    if (!newToDo) return;
    const newTask = { id: uuidv4(), title: newToDo };
    setToDos((prev) => [...prev, newTask]);
    notifySuccessfulToDoAddition(newTask.title);
    setNewToDo('');
  };

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

  const notifySuccessfulToDoAddition = (newTask: string) =>
    toast(`ToDo: ${newTask} added!`);

  return (
    <div className="text-center text-white">
      <div>
        <Link to={'/'}>Home</Link>
      </div>

      {toDos.map((toDo) => {
        return (
          <ToDo
            key={toDo.id}
            toDo={toDo}
            handleDeleteSpecificToDo={handleDeleteSpecificToDo}
            handleCompletedToDo={handleCompletedToDo}
          />
        );
      })}
      <div className="flex">
        <input
          type="text"
          value={newToDo}
          className="text-black"
          onChange={(e) => setNewToDo(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleAddToDo(newToDo)}
        />
        <button className="pl-4" onClick={() => handleAddToDo(newToDo)}>
          Add To Do
        </button>
      </div>
      <button className="block" onClick={() => handleRemoveLastToDo()}>
        Remove Last ToDo
      </button>

      <button
        className="block"
        onClick={() => setShowCompletedToDos(!showCompletedToDos)}
      >
        Show Completed ToDos
      </button>

      {showCompletedToDos && (
        <div>
          <h1 className="text-white text-2xl">Completed ToDos</h1>

          {completedToDos?.map((completedToDo) => {
            return (
              <CompletedToDoList
                key={completedToDo.id}
                completedToDo={completedToDo}
              />
            );
          })}
        </div>
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

interface ToDoProps {
  toDo: ToDoItem;
  handleDeleteSpecificToDo: (id: string) => void;
  handleCompletedToDo: (id: string) => void;
}

interface ToDoItem {
  id: string;
  title: string;
}
export const ToDo = ({
  toDo,
  handleDeleteSpecificToDo,
  handleCompletedToDo,
}: ToDoProps) => {
  return (
    <div className="flex">
      <div className="text-white">{toDo.title}</div>
      <button onClick={() => handleDeleteSpecificToDo(toDo.id)}>❌</button>
      <button onClick={() => handleCompletedToDo(toDo.id)}>✔</button>
    </div>
  );
};

export const CompletedToDoList = ({ completedToDo }: any) => {
  return <div className="text-white">{completedToDo.title}</div>;
};
