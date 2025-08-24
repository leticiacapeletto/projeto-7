import styles from "./TaskItem.module.css";
import { type Task } from "../../../types";

type props = {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

export default function TaskItem({ task, onToggle, onDelete }: props) {
  return (
    <>
      <div className={styles.container}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <span>{task.title}</span>
        <span>({task.category})</span>

        <button onClick={() => onDelete(task.id)}>Excluir</button>
      </div>
    </>
  );
}
