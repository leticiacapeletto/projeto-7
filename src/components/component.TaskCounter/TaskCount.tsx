import type { Task } from "../../../types";
import style from "./TaskCount.module.css"

interface TaskCounterProps {
  tasks: Task[];
}

export function TaskCounter({ tasks }: TaskCounterProps) {
  const total = tasks.length;
  const completed = tasks.filter(task => task.completed).length;
  const pending = total - completed;

  return (
    <div className={style.container}>
      <div className={style.block}>
        <span className={style.number}>{total}</span>
        <span className={style.label}>Total</span>
      </div>
      <div className={style.block}>
        <span className={style.number}>{completed}</span>
        <span className={style.label}>Concluídas</span>
      </div>
      <div className={style.block}>
        <span className={style.number}>{pending}</span>
        <span className={style.label}>Pendentes</span>
      </div>
    </div>
  );
}
