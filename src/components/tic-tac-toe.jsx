import useTicTacToe from "./hooks/use-tic-tac-toe";
import { CHESS_X, CHESS_O } from "../constant/chess-constant";

const TicTacToe = () => {
  const { currentChess, chessState, winner, record, handleClick, resetChess } =
    useTicTacToe();

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
        Next round: {currentChess === CHESS_X ? CHESS_O : CHESS_X}
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
