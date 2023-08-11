import { ToDoItem } from './ToDos';

interface CompletedToDoListProps {
  completedToDo: ToDoItem;
}

export const CompletedToDoList = ({
  completedToDo,
}: CompletedToDoListProps) => {
  return <div>{completedToDo.title}</div>;
};
