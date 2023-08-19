import { ToDoItem } from './ToDosRoot';

interface CompletedToDoListProps {
  completedToDo: ToDoItem;
}

export const CompletedToDoList = ({
  completedToDo,
}: CompletedToDoListProps) => {
  return <div>{completedToDo.title}</div>;
};
