import styles from './style.module.css';

export default function Quadrado({ value, onClick }) {
  return (
    <button className={styles.quadrado} onClick={onClick}>
      {value}
    </button>
  );
}