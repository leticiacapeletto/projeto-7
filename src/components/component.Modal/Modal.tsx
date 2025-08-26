import styles from "./Modal.module.css";

interface ModalProps {
  message: string;
  type: "error" | "confirm";
  onConfirm?: () => void;
  onClose: () => void;
}

export function Modal({ message, type, onConfirm, onClose }: ModalProps) {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <p>{message}</p>
        {type === "confirm" ? (
          <div className={styles.buttons}>
            <button className={styles.confirmBtn} onClick={() => { onConfirm?.(); onClose(); }}>
              Sim
            </button>
            <button className={styles.cancelBtn} onClick={onClose}>
              Não
            </button>
          </div>
        ) : (
          <button className={styles.closeBtn} onClick={onClose}>
            Fechar
          </button>
        )}
      </div>
    </div>
  );
}
