import { useEffect, useState } from "react";
import adjudication from "../utils/adjudication";

const initialChessState = ["", "", "", "", "", "", "", "", ""];

const TicTacToe = () => {
  const [currentChess, setCurrentChess] = useState("O");
  const [chessState, setChessState] = useState(initialChessState);
  const [winner, setWinner] = useState();
  const [record, setRecord] = useState({ X: 0, O: 0 });

  useEffect(() => {
    setWinner(adjudication(chessState));
  }, [chessState]);

  useEffect(() => {
    if (winner !== undefined)
      currentChess === "X"
        ? setRecord((preValue) => ({ ...record, X: preValue.X + 1 }))
        : setRecord((preValue) => ({ ...record, O: preValue.O + 1 }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [winner]);

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
      <section className="next">
        Next round: {currentChess === "X" ? "O" : "X"}
      </section>

      <section className="judgement">
        {winner === undefined ? "Playing^_^" : winner}
      </section>
      <section className="record">
        X wins <span id="x_wins">{record.X}</span> v.s. O wins
        <span id="o_wins">{record.O}</span>
      </section>
      {renderChessBoard()}
      <button onClick={resetChess}>Reset</button>
    </main>
  );
};

export default TicTacToe;
