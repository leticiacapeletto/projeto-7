import React from 'react';

import React, { useState } from 'react';

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
      <strong>Total:</strong> {total} <strong>Pendentes:</strong> {pending} | <strong>Concluídas:</strong> {completed}
    </div>
  );
};

const App: React.FC = () => {
  const [task, setTasks] = useState<{id: number; title: string; completed: boolean }[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");

const addTask = () => {
  if (newTaskTitle.trim() === "") return;

  const newTask = {
    id: tasks.length + 1,
    title: newTaskTitle,
    completed: false,
  };

  setTasks([...tasks, newTask]);
  setNewTaskTitle("");
};

const toggleTask = (id: number) => {
  setTasks(
    task.map(task =>
      task.id === id ? { ...task, completed: ! task.completed: } : task
       )
    );
};

  const removeTask = (id: number) => {
    setTasks(tasks,filter((task) => task.id !==id));
  };

  return (
    <div>
      <h1>Minhas Tarefas</h1>
      {/* Usa o contador aqui */}
      <TaskCounter tasks={tasks} />

      <input
        type="text"
        value={newTaskTitle}
        placeholder="Digite sua tarefa..."
        onChange={(e) =>
         setNewTaskTitle(e.target.value)}
        />
      <button onClick={addTask}>Adicionar</button>

      <ul>
        {tasks.map(task => (
      <li key={task.id}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
         />
        {task.title}
      </li>
      ))}
    </ul>>
   </div>
  );
};

export default App;




export default TaskCounter;
