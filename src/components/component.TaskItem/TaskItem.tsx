import styles from "./TaskItem.module.css";
import { type Task } from "../../../types";

type Props = {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, novoTitulo: string) => void;
};

export default function TaskItem({ task, onToggle, onDelete, onEdit }: Props) {
  return (
    <div className={styles.container}>
      <input type="checkbox" checked={task.completed} onChange={() => onToggle(task.id)} />

      <span className={task.completed ? styles.completed : ""}>{task.title}</span>

      <div className={styles.actions}>
        <button
          className={styles.buttonEditar}
          onClick={(e) => {
            e.stopPropagation();
            const novoTitulo = prompt("Editar tarefa:", task.title);
            onEdit(task.id, novoTitulo ?? "");
          }}
        >
          ✏️
        </button>

        <button
          className={styles.buttonExcluir}
          onClick={(e) => {
            e.stopPropagation();
            onDelete(task.id);
          }}
        >
          🗑️
        </button>
      </div>
    </div>
  );
}
