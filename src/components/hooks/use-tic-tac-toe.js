import { useEffect, useState } from "react";
import adjudication from "../../utils/adjudication";
import { CHESS_X, CHESS_O, WIN_MESSAGE_TIE } from "../../constant/chess-constant";

const initialChessState = ["", "", "", "", "", "", "", "", ""];

const useTicTacToe = () => {
  const [currentChess, setCurrentChess] = useState(CHESS_O);
  const [chessState, setChessState] = useState(initialChessState);
  const [winner, setWinner] = useState();
  const [record, setRecord] = useState({ X: 0, O: 0 });

  useEffect(() => {
    setWinner(adjudication(chessState));
  }, [chessState]);

  useEffect(() => {
    if (winner !== undefined && winner !== WIN_MESSAGE_TIE){
      currentChess === CHESS_X
      ? setRecord((preValue) => ({ ...record, X: preValue.X + 1 }))
      : setRecord((preValue) => ({ ...record, O: preValue.O + 1 }));
    }
     
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [winner]);

  const handleClick = (index) => {
    if (chessState[index] === "" && winner === undefined) {
      const xORo = currentChess === CHESS_X ? CHESS_O : CHESS_X;
      setCurrentChess(xORo);
      setChessState((preValue) => {
        const arr = [...preValue];
        arr[index] = xORo;
        return arr;
      });
    }
  };

  const resetChess = () => {
    setCurrentChess(CHESS_O);
    setWinner(undefined);
    setChessState(initialChessState);
  };

  return {
    currentChess,
    chessState,
    winner,
    record,
    handleClick,
    resetChess,
  };
};

export default useTicTacToe;
