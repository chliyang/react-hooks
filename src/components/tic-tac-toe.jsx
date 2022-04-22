import { useEffect, useState } from "react";
import adjudication from "../utils/adjudication";

const initialChessState = ["", "", "", "", "", "", "", "", ""];

const TicTacToe = () => {
  const [currentChess, setCurrentChess] = useState("O");
  const [chessState, setChessState] = useState(initialChessState);
  const [winner, setWinner] = useState();

  useEffect(() => {
    setWinner(adjudication(chessState));
  }, [chessState]);

  const handleClick = (index) => {
    if (chessState[index] === "" && winner === undefined) {
      const xORo = currentChess === "X" ? "O" : "X";
      setCurrentChess(xORo);
      setChessState((preValue) => {
        const arr = [...preValue];
        arr[index] = xORo;
        return arr;
      });
    }
  };

  const resetChess = () => {
    setCurrentChess("O");
    setWinner(undefined);
    setChessState(initialChessState);
  };

  const renderChessBoard = () => {
    const result = [];
    for (let i = 0; i < 9; i++) {
      result.push(
        <div onClick={() => handleClick(i)} key={i} className="square">
          {chessState[i]}
        </div>
      );
    }
    return <section className="chessboard">{result}</section>;
  };

  return (
    <main className="center">
      <section className="next_one">
        Next round: {currentChess === "X" ? "O" : "X"}
      </section>

      <section className="judgement">
        {winner === undefined ? "Playing^_^" : winner}
      </section>
      {renderChessBoard()}
      <button onClick={resetChess}>Reset</button>
    </main>
  );
};

export default TicTacToe;
