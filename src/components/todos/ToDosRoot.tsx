import { useState } from 'react';
import { Title } from '../Title';
import { ToDoList } from './ToDoList';
import { ToDoInput } from './ToDoInput';
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

export const ToDosRoot = () => {
  const [toDos, setToDos] = useState(todoList);
  const [newToDo, setNewToDo] = useState('');
  const [completedToDos, setCompletedToDos] = useState<ToDoItem[]>([]);
  const [showCompletedToDos, setShowCompletedToDos] = useState(false);

  const handleAddToDo = useAddToDo({
    newToDo,
    setToDos,
    setNewToDo,
  });

  const handleUpdateToDoTitle = (id: string, newTitle: string) => {
    setToDos((prev) =>
      prev.map((toDo) => (toDo.id === id ? { ...toDo, title: newTitle } : toDo))
    );
  };

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
    <>
      <Title titleText="ToDo List" />
      <div className="text-center">
        <ToDoList
          toDos={toDos}
          completeToDo={handleMarkToDoCompleted}
          deleteToDo={handleDeleteSpecificToDo}
          updateToDo={handleUpdateToDoTitle}
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
    </>
  );
};
