let generateBoard = function(whiteQ, blackQ) {
  const board = [];
  for (let i = 0; i < 8; i++) {
    const row = [];
    for (let j = 0; j < 8; j++) {
      row.push(0);
    }
    board.push(row);
  }
  board[whiteQ[1]][whiteQ[0]] = 1;
  board[blackQ[1]][blackQ[0]] = 1;
  return board;
};

const queenThreat = function(board) {
  let queens = [];
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (board[i][j] === 1) {
        queens.push(i);
        queens.push(j);
      }
    }
  }
  let queenA = (queens[0] * 10) + queens[1];
  let queenB = (queens[2] * 10) + queens[3];

  if (queens[0] === queens[2] || queens[1] === queens[3]) {
    return true;
  }
  if (queenA % 11 === queenB % 11 || queenA % 9 === queenB % 9) {
    return true;
  }
  return false;
};

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

let whiteQueen2 = [0, 0];
let blackQueen2 = [5, 7];
let generatedBoard2 = generateBoard(whiteQueen2, blackQueen2);
console.log(generatedBoard2);
console.log(queenThreat(generatedBoard2));