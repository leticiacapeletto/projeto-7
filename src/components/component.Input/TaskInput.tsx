import { useState } from "react";
import styles from "./TaskInput.module.css";

interface TaskInputProps {
  onAddTask: (title: string, category: string) => void;
}

const categories = ["Fundamentos Web", "Backend Development", "Frontend Framework", "Backend Avançado"];

export function TaskInput({ onAddTask }: TaskInputProps) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories[0]);

  function handleAddTask() {
    // Chamamos onAddTask mesmo que esteja vazio
    onAddTask(text, category);

    // Só limpamos se não estiver vazio
    if (text.trim()) setText("");
  }

  function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      handleAddTask();
    }
  }

  return (
    <div className={styles.containerTarefa}>
      <input
        className={styles.inputTarefa}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Digite uma nova tarefa..."
      />

      <select
        className={styles.selectCategory}
        onChange={(e) => setCategory(e.target.value)}
        value={category}
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>

      <button className={styles.addButton} onClick={handleAddTask}>
        Adicionar
      </button>
    </div>
  );
}
