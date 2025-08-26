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
    { id: crypto.randomUUID(), title: "Revisar estrutura HTML", category: "Fundamentos Web", completed: true },
    { id: crypto.randomUUID(), title: "Criar uma página simples", category: "Fundamentos Web", completed: true },
    { id: crypto.randomUUID(), title: "Instalar Node.js", category: "Backend Development", completed: true },
    { id: crypto.randomUUID(), title: "Criar API REST básica", category: "Backend Development", completed: true },
  ]);

  const [selected, setSelected] = useState<string | null>(null);

  //  Adiciona tarefa
  function handleAddTask(title: string, category: string) {
    const newTask: Task = { id: crypto.randomUUID(), title, category, completed: false };
    setTasks((prev) => [...prev, newTask]);
  }

  // Alterna concluída/não concluída
  function handleToggle(id: string) {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task))
    );
  }

  // Excluir
  function handleDelete(id: string) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  //  Editar
  function handleEdit(id: string, novoTitulo: string) {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, title: novoTitulo } : task))
    );
  }

  //  Pega todas as categorias únicas
  const categories = Array.from(new Set(tasks.map((task) => task.category)));

  // Conta quantos módulos (categorias) estão concluídos
  const completedModulesCount = categories.filter((category) => {
    const categoryTasks = tasks.filter((task) => task.category === category);
    return categoryTasks.length > 0 && categoryTasks.every((task) => task.completed);
  }).length;

  return (
    <>
      <Header />

      <ProgressTracker
        totalTarefas={tasks.length}
        concluidasTarefas={tasks.filter(t => t.completed).length}
        modulosConcluidos={completedModulesCount}
        etapas={categories}
      />


      {/* Cards de tarefas dinâmicos */}
      <div className={styles.taskCardsContainer}>
        {categories.map((category) => {
          const categoryTasks = tasks.filter((task) => task.category === category);
          return (
            <TaskCard
              key={category}
              title={category}
              tasks={categoryTasks}
              onToggle={handleToggle}
              onDelete={handleDelete}
              onEdit={handleEdit}
              selected={selected === category}
              onSelect={() => setSelected(selected === category ? null : category)}
            />
          );
        })}
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
