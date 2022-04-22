import {
  CHESS_O,
  CHESS_X,
  WIN_MESSAGE_X,
  WIN_MESSAGE_O,
  WIN_MESSAGE_TIE,
} from "../constant/chess-constant";

const adjudication = (currentChessState) => {
  const chessMatrix = getChessMatrix(currentChessState);
  if (judgeRow(chessMatrix)) return judgeRow(chessMatrix);
  if (judgeColumn(chessMatrix)) return judgeColumn(chessMatrix);
  if (judgeDiagonal1(chessMatrix)) return judgeDiagonal1(chessMatrix);
  if (judgeDiagonal2(chessMatrix)) return judgeDiagonal2(chessMatrix);
  if (judgeTie(chessMatrix)) return judgeTie(currentChessState);
};

const getChessMatrix = (currentChessState) => {
  let chessMatrix = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (currentChessState[i * 3 + j] !== "") {
        chessMatrix[i][j] = currentChessState[i * 3 + j];
      }
    }
  }
  return chessMatrix;
};

const judgeRow = (currentChessMatrix) => {
  for (let i = 0; i < 3; i++) {
    if (
      currentChessMatrix[i][0] === currentChessMatrix[i][1] &&
      currentChessMatrix[i][1] === currentChessMatrix[i][2] &&
      currentChessMatrix[i][0] !== 0
    ) {
      if (currentChessMatrix[i][0] === CHESS_X) return WIN_MESSAGE_X;
      if (currentChessMatrix[i][0] === CHESS_O) return WIN_MESSAGE_O;
    }
  }
};

const judgeColumn = (currentChessMatrix) => {
  for (let i = 0; i < 3; i++) {
    if (
      currentChessMatrix[0][i] === currentChessMatrix[1][i] &&
      currentChessMatrix[1][i] === currentChessMatrix[2][i] &&
      currentChessMatrix[0][i] !== 0
    ) {
      if (currentChessMatrix[0][i] === CHESS_X) return WIN_MESSAGE_X;
      if (currentChessMatrix[0][i] === CHESS_O) return WIN_MESSAGE_O;
    }
  }
};

const judgeDiagonal1 = (currentChessMatrix) => {
  if (
    currentChessMatrix[0][0] === currentChessMatrix[1][1] &&
    currentChessMatrix[1][1] === currentChessMatrix[2][2] &&
    currentChessMatrix[0][0] !== 0
  ) {
    if (currentChessMatrix[0][0] === CHESS_X) return WIN_MESSAGE_X;
    if (currentChessMatrix[0][0] === CHESS_O) return WIN_MESSAGE_O;
  }
};

const judgeDiagonal2 = (currentChessMatrix) => {
  if (
    currentChessMatrix[0][2] === currentChessMatrix[1][1] &&
    currentChessMatrix[2][0] === currentChessMatrix[1][1] &&
    currentChessMatrix[0][2] !== 0
  ) {
    if (currentChessMatrix[0][2] === CHESS_X) return WIN_MESSAGE_X;
    if (currentChessMatrix[0][2] === CHESS_O) return WIN_MESSAGE_O;
  }
};

const judgeTie = (currentChessMatrix) => {
  if (!currentChessMatrix.includes("")) return WIN_MESSAGE_TIE;
};

export default adjudication;
