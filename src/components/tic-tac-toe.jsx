import { useState } from "react";

const initialChessState = ["", "", "", "", "", "", "", "", ""];

const TicTacToe = () => {
  const [currentChess, setCurrentChess] = useState("O");
  const [chessState, setChessState] = useState(initialChessState);

  const handleClick = (index) => {
    if (chessState[index] === "") {
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
      <section className="judgement">Playing^_^</section>
      {renderChessBoard()}
      <button onClick={resetChess}>Reset</button>
    </main>
  );
};

export default TicTacToe;
