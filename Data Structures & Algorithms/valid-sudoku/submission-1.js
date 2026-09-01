class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {const rows = new Map();
  const cols = new Map();
  const squs = new Map();

  for (let i = 0; i < 9; i++) {
    rows.set(i, new Set());
    cols.set(i, new Set());
    squs.set(i, new Set());
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const cell = board[i][j];
      if (cell === '.') continue;
      const square = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      if (
        rows.get(i).has(cell) ||
        cols.get(j).has(cell) ||
        squs.get(square).has(cell)
      )
        return false;
      rows.get(i).add(cell);
      cols.get(j).add(cell);
      squs.get(square).add(cell);
    }
  }

  return true;}
}
