import { useState } from 'react';
import Tabuleiro from './components/Tabuleiro';
import Status from './components/Status';
import Reiniciar from './components/Reiniciar';
import './App.css';

export default function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) return;
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  function Reset() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `Vencedor: "${winner}"`;
  } else if (squares.every(Boolean)) {
    status = 'Empate!';
  } else {
    status = `Vez de: "${xIsNext ? 'X' : 'O'}"`;
  }

  return (
    <>
      <Status message={status} />
      <Tabuleiro squares={squares} onClick={handleClick} />
      <Reiniciar onReset={Reset} />
    </>
  );
}

