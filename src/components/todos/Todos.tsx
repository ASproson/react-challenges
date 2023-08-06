import { useState } from 'react';
import { Link } from 'react-router-dom';
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

  const handleAddTodo = (newToDo: string) => {
    if (!newToDo) return;
    const newTask = { id: uuidv4(), title: newToDo };
    setToDos((prev) => [...prev, newTask]);
    setNewToDo('');
  };

  const handleRemoveLastToDo = () => {
    setToDos(toDos.slice(0, toDos.length - 1));
  };

  const handleDeleteSpecificToDo = (id: string) => {
    const filteredToDos = toDos.filter((todo) => todo.id !== id);
    setToDos(filteredToDos);
  };

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
          />
        );
      })}
      <input
        type="text"
        value={newToDo}
        onChange={(e) => setNewToDo(e.target.value)}
      />
      <button onClick={() => handleAddTodo(newToDo)}>Add To Do</button>
      <button onClick={() => handleRemoveLastToDo()}>Remove To Do</button>
    </div>
  );
};

interface ToDoProps {
  toDo: ToDoItem;
  handleDeleteSpecificToDo: (id: string) => void;
}

interface ToDoItem {
  id: string;
  title: string;
}
export const ToDo = ({ toDo, handleDeleteSpecificToDo }: ToDoProps) => {
  return (
    <div className="flex">
      <div className="text-white">{toDo.title}</div>
      <button onClick={() => handleDeleteSpecificToDo(toDo.id)}>❌</button>
    </div>
  );
};

// React toast
