import { useState } from "react";
const { v4: uuidv4 } = require("uuid");

const todoList = [
  {
    id: uuidv4(),
    title: "Task One",
  },
  {
    id: uuidv4(),
    title: "Task Two",
  },
];

export const Todos = () => {
  const [todos, setTodos] = useState(todoList);

  const handleAddTodo = () => {
    const newToDo = { id: uuidv4(), title: `Task Three` };
    setTodos((prev) => [...prev, newToDo]);
  };

  const removeLastToDo = () => {
    setTodos(todos.slice(0, todos.length - 1));
  };

  return (
    <div className="text-center text-white">
      {todos.map((todo) => {
        return <ToDo key={todo.id} todo={todo} />;
      })}
      <button onClick={() => handleAddTodo()}>Add To Do</button>
      <button onClick={() => removeLastToDo()}>Remove To Do</button>
    </div>
  );
};

export const ToDo = ({ todo }: any) => {
  return <div className="text-white">{todo.title}</div>;
};
