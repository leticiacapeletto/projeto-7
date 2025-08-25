import styles from "./TaskCard.module.css";
import { type Task } from "../../../types";
import TaskItem from "../component.TaskItem/TaskItem";

interface TaskCardProps {
  title: string;
  tasks: Task[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  selected: boolean;
  onSelect: () => void;
}

export function TaskCard({ title, tasks, onToggle, onDelete, selected, onSelect }: TaskCardProps) {
  const completedCount = tasks.filter(task => task.completed).length;
  const progress = tasks.length > 0 ? (completedCount / tasks.length) * 100 : 0;

  return (
    <div
      className={`${styles.card} ${selected ? styles.selected : ""}`}
      onClick={onSelect}
    >
      <h3 className={styles.title}>{title}</h3>

      {/* Barra de progresso */}
      <div className={styles.progressBar}>
        <div
          className={styles.progressFill}
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Lista de tarefas */}
      <div className={styles.taskList}>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}
