import React from 'react';

type Task = {
  id: number;
  title: string;
  completed: boolean;
};

interface TaskCounterProps {
  tasks: Task[];
}

const TaskCounter: React.FC<TaskCounterProps> = ({ tasks }) => {
  const total = tasks.length;
  const completed = tasks.filter(task => task.completed).length;
  const pending = total - completed;

  return (
    <div style={{ marginBottom: '1rem' }}>
      <strong>Total:</strong> {total} | <strong>Pendentes:</strong> {pending} | <strong>Concluídas:</strong> {completed}
    </div>
  );
};

export default TaskCounter;

