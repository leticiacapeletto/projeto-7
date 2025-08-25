import type { Task } from "../../../types";

interface TaskCounterProps {
  tasks: Task[];
}

export function TaskCounter({ tasks }: TaskCounterProps) {
  const total = tasks.length;
  const completed = tasks.filter(task => task.completed).length;
  const pending = total - completed;

  return (
    <div style={{ marginBottom: "1rem" }}>
      <strong>Total:</strong> {total} | <strong>Pendentes:</strong> {pending} | <strong>Concluídas:</strong> {completed}
    </div>
  );
}
