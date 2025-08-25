import { useState } from "react";
import styles from "./TaskInput.module.css";
interface TaskInputProps {
  onAddTask: (task: string) => void;
}

export function TaskInput({ onAddTask }: TaskInputProps) {
  const [text, setText] = useState("");

  function handleAddTask() {
    const trimmed = text.trim();

    //Validação para ver se está vazio
    if (!trimmed) return;

    //Limpar depois de salvar
    onAddTask(trimmed);
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
      <button className={styles.addButton} onClick={handleAddTask}>Adicionar</button>
    </div>
  );

  
}