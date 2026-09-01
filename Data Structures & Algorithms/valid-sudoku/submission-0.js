class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {for (let i = 0; i < 9; i++) {
    const rows = new Set();
    for (let j = 0; j < 9; j++)
      if (rows.has(board[i][j])) return false;
      else if (board[i][j] !== '.') rows.add(board[i][j]);
  }

  for (let i = 0; i < 9; i++) {
    const columns = new Set();
    for (let j = 0; j < 9; j++)
      if (columns.has(board[j][i])) return false;
      else if (board[j][i] !== '.') columns.add(board[j][i]);
  }

  for (let i = 0; i < 3; i++)
    for (let j = 0; j < 3; j++) {
      const squareTemp = new Set();
      for (let k = 0; k < 3; k++)
        for (let l = 0; l < 3; l++)
          if (squareTemp.has(board[i * 3 + k][j * 3 + l])) return false;
          else if (board[i * 3 + k][j * 3 + l] !== '.')
            squareTemp.add(board[i * 3 + k][j * 3 + l]);
    }

  return true;}
}
