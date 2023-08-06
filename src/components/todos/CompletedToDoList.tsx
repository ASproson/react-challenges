import { ToDoItem } from './Todos';

interface CompletedToDoListProps {
  completedToDo: ToDoItem;
}

export const CompletedToDoList = ({
  completedToDo,
}: CompletedToDoListProps) => {
  return <div className="text-white">{completedToDo.title}</div>;
};
