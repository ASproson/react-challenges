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
  const [todos, setTodos] = useState(todoList);
  const [newToDo, setNewToDo] = useState('');

  const handleAddTodo = (newToDo: string) => {
    const newTask = { id: uuidv4(), title: newToDo };
    setTodos((prev) => [...prev, newTask]);
    setNewToDo('');
  };

  const removeLastToDo = () => {
    setTodos(todos.slice(0, todos.length - 1));
  };

  return (
    <div className="text-center text-white">
      <div>
        <Link to={'/'}>Home</Link>
      </div>

      {todos.map((todo) => {
        return <ToDo key={todo.id} todo={todo} />;
      })}
      <input
        type="text"
        value={newToDo}
        onChange={(e) => setNewToDo(e.target.value)}
      />
      <button onClick={() => handleAddTodo(newToDo)}>Add To Do</button>
      <button onClick={() => removeLastToDo()}>Remove To Do</button>
    </div>
  );
};

interface ToDoItem {
  id: string;
  title: string;
}
export const ToDo = ({ todo }: { todo: ToDoItem }) => {
  return <div className="text-white">{todo.title}</div>;
};
