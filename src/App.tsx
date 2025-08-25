import { useState } from "react";
import styles from "./App.module.css";
import { TaskInput } from "./components/component.Input/TaskInput";
import { TaskList } from "./components/component.TaskList/TaskList";
import { TaskCounter } from "./components/component.TaskCounter/TaskCount";
import { type Task } from "../types";
import { Header } from "./components/component.Header/Header";
import { ProgressTracker } from "./components/component.ProgressTracker/ProgressTracker";

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(title: string) {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      category: "Geral",
      completed: false,
    };
    setTasks((prev) => [...prev, newTask]);
  }

  function handleToggle(id: string) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function handleDelete(id: string) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  return (
    <>
      {/* Aqui usamos o COMPONENTE Header */}
      <Header />
      <ProgressTracker />
      
      <div className={styles.App}>
        <h1 className={styles.tituloTarefa}>📝 Suas Tarefas Personalizadas</h1>
        <p>Adicione suas próprias tarefas de estudo</p>

        <TaskInput onAddTask={handleAddTask} />
        <TaskList tasks={tasks} onToggle={handleToggle} onDelete={handleDelete} />
        <div className={styles.separador}></div>
        <TaskCounter tasks={tasks} />
      </div>
    </>
  );
}