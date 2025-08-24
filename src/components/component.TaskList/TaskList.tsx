import TaskItem from "../component.TaskItem/TaskItem";
import { type Task } from "../../../types";

type TaskListProps = {
  tasks: Task[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

export function TaskList({ tasks, onToggle, onDelete }: TaskListProps) {
  return (
    <div>
      <h2>Lista de Tarefas</h2>

      {tasks.length === 0 && <p>Nenhuma tarefa adicionada ainda.</p>}

      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
