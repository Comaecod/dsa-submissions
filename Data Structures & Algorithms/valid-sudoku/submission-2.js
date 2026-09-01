class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {const rows = {};
  const cols = {};
  const squs = {};

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const cell = board[i][j];
      if (cell === '.') continue;
      const square = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      const row = `${i}-${cell}`;
      const col = `${j}-${cell}`;
      const squ = `${square}-${cell}`;
      if (rows[row] || cols[col] || squs[squ]) return false;
      rows[row] = true;
      cols[col] = true;
      squs[squ] = true;
    }
  }

  return true;}
}
