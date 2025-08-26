import styles from "./ProgressTracker.module.css";

interface ProgressTrackerProps {
  totalTarefas: number;
  concluidasTarefas: number;
  modulosConcluidos: number;
  totalModulos?: number; 
  etapas: string[]; 
}

export function ProgressTracker({
  totalTarefas,
  concluidasTarefas,
  modulosConcluidos,
  totalModulos,
  etapas,
}: ProgressTrackerProps) {
  
  const total = totalModulos ?? etapas.length;

  // % para a BARRA de módulos
  const progressoModulos = total > 0 ? (modulosConcluidos / total) * 100 : 0;

  // % para o COUNTER de tarefas
  const progressoTarefas =
    totalTarefas > 0 ? Math.round((concluidasTarefas / totalTarefas) * 100) : 0;

  return (
    <div className={styles.trackerContainer}>
      <div className={styles.header}>
        <h2>📊 Progresso Geral do Curso</h2>
      </div>

      {/* Texto do topo reflete progresso por módulos */}
      <p className={styles.percentage}>{Math.round(progressoModulos)}% concluído</p>

      <div className={styles.roadmap}>
        {/* Linha de fundo fixa */}
        <div className={styles.line}></div>

        {/* Barra colorida preenchendo (por módulos) */}
        <div
          className={styles.lineFill}
          style={{ width: `${progressoModulos}%` }}
        ></div>

        {/* Círculos dinâmicos com base nas categorias */}
        {etapas.map((etapa, index) => (
          <div key={index} className={styles.step}>
            <div
              className={`${styles.circle} ${
                index < modulosConcluidos ? styles.filled : ""
              }`}
            >
              {index + 1}
            </div>
            <span className={styles.label}>{etapa}</span>
          </div>
        ))}
      </div>

      <div className={styles.separador}></div>

      {/* Counters de TAREFAS */}
      <div className={styles.counters}>
        <div className={styles.counterBlock}>
          <span className={styles.counterNumber}>{totalTarefas}</span>
          <span className={styles.counterLabel}>Total de Tarefas</span>
        </div>
        <div className={styles.counterBlock}>
          <span className={styles.counterNumber}>{concluidasTarefas}</span>
          <span className={styles.counterLabel}>Concluídas</span>
        </div>
        <div className={styles.counterBlock}>
          <span className={styles.counterNumber}>{progressoTarefas}%</span>
          <span className={styles.counterLabel}>Progresso das Tarefas</span>
        </div>
      </div>
    </div>
  );
}
