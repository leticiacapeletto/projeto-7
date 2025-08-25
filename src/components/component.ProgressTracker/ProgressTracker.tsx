import styles from "./ProgressTracker.module.css";

export function ProgressTracker() {
  return (
    <div className={styles.trackerContainer}>
      <div className={styles.header}>
        <h2>📊 Progresso Geral do Curso</h2>
      </div>
      <p className={styles.percentage}>0% concluído</p>

      {/* Seção da linha do tempo/roadmap */}
      <div className={styles.roadmap}>
        <div className={styles.step}>
          <div className={`${styles.circle} ${styles.filled}`}>1</div>
          <span className={styles.label}>Fundamentos</span>
          <span className={styles.sublabel}>HTML/CSS/JS</span>
        </div>
        
        {/* Adicione a linha de progresso preenchida aqui */}
        <div className={`${styles.line} ${styles.filled}`}></div>

        <div className={styles.step}>
          <div className={styles.circle}>2</div>
          <span className={styles.label}>Backend</span>
          <span className={styles.sublabel}>Node.js</span>
        </div>
        <div className={styles.line}></div>
        <div className={styles.step}>
          <div className={styles.circle}>3</div>
          <span className={styles.label}>Frontend</span>
          <span className={styles.sublabel}>React</span>
        </div>
        <div className={styles.line}></div>
        <div className={styles.step}>
          <div className={styles.circle}>4</div>
          <span className={styles.label}>Avançado</span>
          <span className={styles.sublabel}>Nest.js</span>
        </div>
      </div>

      {/* Seção dos contadores na parte inferior */}
      <div className={styles.counters}>
        <div className={styles.counterBlock}>
          <span className={styles.counterNumber}>16</span>
          <span className={styles.counterLabel}>Total de Tarefas</span>
        </div>
        <div className={styles.counterBlock}>
          <span className={styles.counterNumber}>0</span>
          <span className={styles.counterLabel}>Concluídas</span>
        </div>
        <div className={styles.counterBlock}>
          <span className={styles.counterNumber}>0%</span>
          <span className={styles.counterLabel}>Progresso Médio</span>
        </div>
      </div>
    </div>
  );
}