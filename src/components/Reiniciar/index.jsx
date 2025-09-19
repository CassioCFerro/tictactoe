import styles from './style.module.css';

export default function Reiniciar({ onReset }) {
  return (
    <button className={styles.botao} onClick={onReset}>
      <i className="bi bi-arrow-clockwise"></i> Reiniciar
    </button>
  );
}