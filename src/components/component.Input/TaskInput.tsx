import { useState } from "react";
import styles from "./TaskInput.module.css";

// Adicionando uma interface para a propriedade onAddTask
interface TaskInputProps {
  onAddTask: (title: string, category: string) => void;
}

// Lista das categorias disponíveis
const categories = ["Fundamentos Web", "Backend Development", "Frontend Framework", "Backend Avançado"];

export function TaskInput({ onAddTask }: TaskInputProps) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories[0]);

  function handleAddTask() {
    const trimmed = text.trim();

    if (!trimmed) return;

    
    onAddTask(trimmed, category);
    setText("");
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
      
      {/* Adicionado o select para a categoria */}
      <select 
        className={styles.selectCategory} 
        onChange={(e) => setCategory(e.target.value)} 
        value={category}
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>

      <button className={styles.addButton} onClick={handleAddTask}>Adicionar</button>
    </div>
  );
}