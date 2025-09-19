import styles from './style.module.css';

export default function Status({ message }) {
  return<div className={styles.status}>{message}</div>;
}