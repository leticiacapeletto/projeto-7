import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <h1>🚀 Roadmap de Estudos</h1>
      <p>Acompanhe seu progresso nos 4 módulos de desenvolvimento.</p>
    </header>
  );
}