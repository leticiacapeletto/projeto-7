import { useState, useEffect } from "react";
import styles from "./App.module.css";
import { TaskInput } from "./components/component.Input/TaskInput";
import { TaskCounter } from "./components/component.TaskCounter/TaskCount";
import { type Task } from "../types";
import { Header } from "./components/component.Header/Header";
import { ProgressTracker } from "./components/component.ProgressTracker/ProgressTracker";
import { TaskCard } from "./components/component.TaskCard/TaskCard";
import { Modal } from "./components/component.Modal/Modal";

export default function App() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem("tasks");
    return saved
      ? JSON.parse(saved)
      : [
          { id: crypto.randomUUID(), title: "Revisar estrutura HTML", category: "Fundamentos Web", completed: true },
          { id: crypto.randomUUID(), title: "Criar uma página simples", category: "Fundamentos Web", completed: true },
          { id: crypto.randomUUID(), title: "Instalar Node.js", category: "Backend Development", completed: true },
          { id: crypto.randomUUID(), title: "Criar API REST básica", category: "Backend Development", completed: true },
        ];
  });

  const [selected, setSelected] = useState<string | null>(null);
  const [modalMessage, setModalMessage] = useState("");
  const [modalType, setModalType] = useState<"error" | "confirm">("error");
  const [modalAction, setModalAction] = useState<(() => void) | null>(null);


  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Funções para abrir modais
  const openErrorModal = (msg: string) => {
    setModalMessage(msg);
    setModalType("error");
    setModalAction(null);
  };

  const openConfirmModal = (msg: string, action: () => void) => {
    setModalMessage(msg);
    setModalType("confirm");
    setModalAction(() => action);
  };

  // Adicionar tarefa
  function handleAddTask(title: string, category: string) {
    if (!title.trim()) return openErrorModal("Não é possível adicionar uma tarefa vazia!");
    if (!category.trim()) return openErrorModal("Selecione uma categoria!");
    const newTask: Task = { id: crypto.randomUUID(), title, category, completed: false };
    setTasks((prev) => [...prev, newTask]);
  }

  // Alterna concluída/não concluída
  function handleToggle(id: string) {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task))
    );
  }

  // Excluir tarefa com confirmação
  function handleDelete(id: string) {
    openConfirmModal("Tem certeza que deseja excluir esta tarefa?", () => {
      setTasks((prev) => prev.filter((task) => task.id !== id));
    });
  }

  // Editar tarefa com confirmação
  function handleEdit(id: string, novoTitulo: string) {
    if (!novoTitulo || novoTitulo.trim() === "") {
      return openErrorModal("O título da tarefa não pode ficar vazio!");
    }
    openConfirmModal("Deseja salvar as alterações nesta tarefa?", () => {
      setTasks(prev =>
        prev.map(task => (task.id === id ? { ...task, title: novoTitulo } : task))
      );
    });
  }

  const allCategories = ["Fundamentos Web", "Backend Development", "Frontend Framework", "Backend Avançado"];
  const completedModulesCount = allCategories.filter((category) => {
    const categoryTasks = tasks.filter((task) => task.category === category);
    return categoryTasks.length > 0 && categoryTasks.every((task) => task.completed);
  }).length;

  const categories = Array.from(new Set(tasks.map((task) => task.category)));

  return (
    <>
      <Header />

      <ProgressTracker
        totalTarefas={tasks.length}
        concluidasTarefas={tasks.filter((t) => t.completed).length}
        modulosConcluidos={completedModulesCount}
        etapas={allCategories}
      />

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

      {/* Modal */}
      {modalMessage && (
        <Modal
          message={modalMessage}
          type={modalType}
          onConfirm={modalAction ?? undefined}
          onClose={() => setModalMessage("")}
        />
      )}
    </>
  );
}
