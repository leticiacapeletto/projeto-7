import { useState } from "react";
import styles from "./App.module.css";
import { TaskInput } from "./components/component.Input/TaskInput";
import { TaskList } from "./components/component.TaskList/TaskList"; // <-- novo
import { type Task } from "../types";

function App() {
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
    <div className={styles.App}>
      <h1 className={styles.tituloTarefa}>📝 Suas Tarefas Personalizadas</h1>
      <p>Adicione suas próprias tarefas de estudo</p>

      <TaskInput onAddTask={handleAddTask} />

      <h2>Lista de Tarefas</h2>
      <div>
         {tasks.length === 0 && <p className={styles.paragrafoAdd}>Adicione suas tarefas personalizadas acima. Você pode arrastá-las para qualquer semana! 🎯</p>}


        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
