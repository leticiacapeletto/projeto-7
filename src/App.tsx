import { useState } from "react";
import "./App.css";
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
    <div className="App">
      <h1>Minhas Tarefas</h1>

      <TaskInput onAddTask={handleAddTask} />

      {/* Aqui usamos o TaskList */}
      <TaskList
        tasks={tasks}
        onToggle={handleToggle}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
