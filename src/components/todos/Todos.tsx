import { useState } from 'react';
import { ToDoList } from './ToDoList';
import { ToDoInput } from './ToDoInput';
import { Link } from 'react-router-dom';
import { ToDoActions } from './ToDoActions';
import 'react-toastify/dist/ReactToastify.css';
import { useAddToDo } from './hooks/useAddToDo';
import { ToastContainer } from 'react-toastify';
import { todoList } from './lib/PLACEHOLDER_TODOS';
import { ShowCompletedToDos } from './ShowCompletedToDos';

export interface ToDoItem {
  id: string;
  title: string;
}

export const ToDos = () => {
  const [toDos, setToDos] = useState(todoList);
  const [newToDo, setNewToDo] = useState('');
  const [completedToDos, setCompletedToDos] = useState<ToDoItem[]>([]);
  const [showCompletedToDos, setShowCompletedToDos] = useState(false);

  const handleAddToDo = useAddToDo({
    newToDo,
    setToDos,
    setNewToDo,
  });

  const handleRemoveLastToDo = () => {
    setToDos(toDos.slice(0, toDos.length - 1));
  };

  const handleDeleteSpecificToDo = (id: string) => {
    const filteredToDos = toDos.filter((todo) => todo.id !== id);
    setToDos(filteredToDos);
  };

  const handleMarkToDoCompleted = (id: string) => {
    const completedToDo = toDos.filter((todo) => todo.id === id)[0];
    handleDeleteSpecificToDo(id);
    setCompletedToDos((prev) => [...prev, completedToDo]);
  };

  return (
    <div className="text-center">
      <div>
        <Link to={'/'}>Home</Link>
      </div>

      <ToDoList
        toDos={toDos}
        completeToDo={handleMarkToDoCompleted}
        deleteToDo={handleDeleteSpecificToDo}
      />

      <ToDoInput
        newToDo={newToDo}
        setNewToDo={setNewToDo}
        addToDo={handleAddToDo}
      />

      <ToDoActions
        showCompletedToDos={showCompletedToDos}
        newToDo={newToDo}
        addToDo={handleAddToDo}
        handleRemoveLastToDo={handleRemoveLastToDo}
        setShowCompletedToDos={setShowCompletedToDos}
      />

      {showCompletedToDos && (
        <ShowCompletedToDos completedToDos={completedToDos} />
      )}

      <ToastContainer
        position="bottom-center"
        autoClose={1000}
        closeOnClick
        theme="dark"
        limit={1}
      />
    </div>
  );
};
