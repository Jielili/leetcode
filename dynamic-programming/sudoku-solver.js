/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  let i = 0, j = 0;
  while (i < 9) {
    while (j < 9) {
      if (board[i][j] === '.') {
        break
      }
      j++
    }
    i++
  }
  if (i === 9) {
    return
  }
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  
};