import TaskItem from "../component.TaskItem/TaskItem";
import { type Task } from "../../../types";
import styles from "./TaskList.module.css";

type TaskListProps = {
  tasks: Task[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

export function TaskList({ tasks, onToggle, onDelete }: TaskListProps) {
  return (
    <div>
      
       {tasks.length === 0 && <p className={styles.paragrafoAdd}>Adicione suas tarefas personalizadas acima. Você pode arrastá-las para qualquer semana! 🎯</p>}

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
