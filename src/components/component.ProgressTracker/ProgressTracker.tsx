import styles from "./ProgressTracker.module.css";

interface ProgressTrackerProps {
  total: number;
  concluidas: number;
}

export function ProgressTracker({ total, concluidas }: ProgressTrackerProps) {
  const progresso = total > 0 ? Math.round((concluidas / total) * 100) : 0;

  const etapas = [
    { id: 1, label: "Fundamentos", sub: "HTML/CSS/JS" },
    { id: 2, label: "Backend", sub: "Node.js" },
    { id: 3, label: "Frontend", sub: "React" },
    { id: 4, label: "Avançado", sub: "Nest.js" },
  ];

  return (
    <div className={styles.trackerContainer}>
      <div className={styles.header}>
        <h2>📊 Progresso Geral do Curso</h2>
      </div>

      <p className={styles.percentage}>{progresso}% concluído</p>

      {/* Linha do tempo dinâmica */}
      <div className={styles.roadmap}>
        {/* Linha contínua de fundo */}
        <div className={`${styles.line} ${progresso > 0 ? styles.filled : ""}`}></div>

        {etapas.map((etapa, index) => (
          <div key={etapa.id} className={styles.step}>
            <div
              className={`${styles.circle} ${progresso >= ((index + 1) / etapas.length) * 100
                  ? styles.filled
                  : ""
                }`}
            >
              {etapa.id}
            </div>
            <span className={styles.label}>{etapa.label}</span>
            <span className={styles.sublabel}>{etapa.sub}</span>
          </div>
        ))}
      </div>

      <div className={styles.separador}></div>

      {/* Contadores inferiores */}
      <div className={styles.counters}>
        <div className={styles.counterBlock}>
          <span className={styles.counterNumber}>{total}</span>
          <span className={styles.counterLabel}>Total de Tarefas</span>
        </div>
        <div className={styles.counterBlock}>
          <span className={styles.counterNumber}>{concluidas}</span>
          <span className={styles.counterLabel}>Concluídas</span>
        </div>
        <div className={styles.counterBlock}>
          <span className={styles.counterNumber}>{progresso}%</span>
          <span className={styles.counterLabel}>Progresso Médio</span>
        </div>
      </div>
    </div>
  );
}
