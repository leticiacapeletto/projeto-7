import TaskItem from "../component.TaskItem/TaskItem";
import { type Task } from "../../../types";

type TaskListProps = {
  tasks: Task[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, novoTitulo: string) => void; 
};

export function TaskList({ tasks, onToggle, onDelete, onEdit }: TaskListProps) {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit} 
        />
      ))}
    </div>
  );
}
