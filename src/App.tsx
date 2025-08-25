import { useState } from "react";
import styles from "./App.module.css";
import { TaskInput } from "./components/component.Input/TaskInput";
import { TaskCounter } from "./components/component.TaskCounter/TaskCount";
import { type Task } from "../types";
import { Header } from "./components/component.Header/Header";
import { ProgressTracker } from "./components/component.ProgressTracker/ProgressTracker";
import { TaskCard } from "./components/component.TaskCard/TaskCard";

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([
    // Módulos pré-preenchidos
    { id: crypto.randomUUID(), title: "Revisar estrutura HTML", category: "Fundamentos Web", completed: true },
    { id: crypto.randomUUID(), title: "Criar uma página simples", category: "Fundamentos Web", completed: true },
    { id: crypto.randomUUID(), title: "Instalar Node.js", category: "Backend Development", completed: true },
    { id: crypto.randomUUID(), title: "Criar API REST básica", category: "Backend Development", completed: true },
  ]);

  const [selected, setSelected] = useState<string | null>(null);

  function handleAddTask(title: string, category: string) {
    const newTask: Task = { id: crypto.randomUUID(), title, category, completed: false };
    setTasks((prev) => [...prev, newTask]);
  }

  function handleToggle(id: string) {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task))
    );
  }

  function handleDelete(id: string) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  const fundamentosWebTasks = tasks.filter(task => task.category === "Fundamentos Web");
  const backendDevelopmentTasks = tasks.filter(task => task.category === "Backend Development");
  const frontendFrameworkTasks = tasks.filter(task => task.category === "Frontend Framework");
  const backendAvancadoTasks = tasks.filter(task => task.category === "Backend Avançado");

  const completedModulesCount = [
    fundamentosWebTasks.length > 0 && fundamentosWebTasks.every(task => task.completed),
    backendDevelopmentTasks.length > 0 && backendDevelopmentTasks.every(task => task.completed),
    frontendFrameworkTasks.length > 0 && frontendFrameworkTasks.every(task => task.completed),
    backendAvancadoTasks.length > 0 && backendAvancadoTasks.every(task => task.completed),
  ].filter(Boolean).length;

  // Função para decidir se o título do módulo deve aparecer
  const showTitle = (tasksInModule: Task[]) => {
    return tasksInModule.every(task => task.completed);
  };

  return (
    <>
      <Header />
      <ProgressTracker total={4} concluidas={completedModulesCount} />

      <div className={styles.taskCardsContainer}>
        {fundamentosWebTasks.length > 0 && (
          <TaskCard
            title="Fundamentos Web"
            tasks={fundamentosWebTasks}
            onToggle={handleToggle}
            onDelete={handleDelete}
            selected={selected === "Fundamentos Web"}
            onSelect={() =>
              setSelected(selected === "Fundamentos Web" ? null : "Fundamentos Web")
            }
            showTitle={showTitle(fundamentosWebTasks)}
          />
        )}

        {backendDevelopmentTasks.length > 0 && (
          <TaskCard
            title="Backend Development"
            tasks={backendDevelopmentTasks}
            onToggle={handleToggle}
            onDelete={handleDelete}
            selected={selected === "Backend Development"}
            onSelect={() =>
              setSelected(selected === "Backend Development" ? null : "Backend Development")
            }
            showTitle={showTitle(backendDevelopmentTasks)}
          />
        )}

        {frontendFrameworkTasks.length > 0 && (
          <TaskCard
            title="Frontend Framework"
            tasks={frontendFrameworkTasks}
            onToggle={handleToggle}
            onDelete={handleDelete}
            selected={selected === "Frontend Framework"}
            onSelect={() =>
              setSelected(selected === "Frontend Framework" ? null : "Frontend Framework")
            }
            showTitle={showTitle(frontendFrameworkTasks)}
          />
        )}

        {backendAvancadoTasks.length > 0 && (
          <TaskCard
            title="Backend Avançado"
            tasks={backendAvancadoTasks}
            onToggle={handleToggle}
            onDelete={handleDelete}
            selected={selected === "Backend Avançado"}
            onSelect={() =>
              setSelected(selected === "Backend Avançado" ? null : "Backend Avançado")
            }
            showTitle={showTitle(backendAvancadoTasks)}
          />
        )}
      </div>

      <div className={styles.App}>
        <h1 className={styles.tituloTarefa}>📝 Suas Tarefas Personalizadas</h1>
        <p>Adicione suas próprias tarefas de estudo</p>

        <TaskInput onAddTask={handleAddTask} />

        <TaskCounter tasks={tasks} />
      </div>
    </>
  );
}
