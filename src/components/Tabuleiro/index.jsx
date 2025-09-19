import Quadrado from '../Quadrado';
import styles from './style.module.css';

export default function Tabuleiro({ squares, onClick }) {
  return (
    <div className={styles.tabuleiro}>
      <div className={styles.linha}>
        <Quadrado value={squares[0]} onClick={() => onClick(0)} />
        <Quadrado value={squares[1]} onClick={() => onClick(1)} />
        <Quadrado value={squares[2]} onClick={() => onClick(2)} />
      </div>
      <div className={styles.linha}>
        <Quadrado value={squares[3]} onClick={() => onClick(3)} />
        <Quadrado value={squares[4]} onClick={() => onClick(4)} />
        <Quadrado value={squares[5]} onClick={() => onClick(5)} />
      </div>
      <div className={styles.linha}>
        <Quadrado value={squares[6]} onClick={() => onClick(6)} />
        <Quadrado value={squares[7]} onClick={() => onClick(7)} />
        <Quadrado value={squares[8]} onClick={() => onClick(8)} />
      </div>
    </div>
  );
}
