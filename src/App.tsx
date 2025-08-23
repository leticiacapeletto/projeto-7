import { useState } from 'react'
import './App.css'

function App() {
  //Mostra o que será adicionado
  const [taskInput, setTaskInput] = useState("")
  //Lista com as tarefas adicionadas
  const [tasks, setTasks] = useState<string[]>([]) 

  function handleAddTask() {
    if (taskInput.trim() === "") return
    //Coloca na lista
    setTasks([...tasks, taskInput]) 
    setTaskInput("")
  }

  return (
    <div className="App">
      <h1>Minhas Tarefas</h1>

      {}
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder="Digite uma tarefa..."
      />

      <button onClick={handleAddTask}>Adicionar</button>

      {}
      <h2>Última tarefa digitada:</h2>
      <p>{taskInput}</p>

      {}
      <h2>Lista de Tarefas</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
