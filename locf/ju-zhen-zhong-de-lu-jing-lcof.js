/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  for (let _i = 0; _i < board.length; _i++) {
    for (let _j = 0; _j < board[_i].length; _j++) {
      if(dfs(board, word,_i,_j,0)) return true
    }
  }
  return false
};

const dfs = function (board, word, i, j, k) {
  if (i < 0 || i >= board.length || j < 0 || j >= board[i].length || board[i][j] != word[k]) {
    return false
  }
  if (k === word.length - 1) {
    return true
  }
  board[i][j] = '\0'
  const res = dfs(board, word, i + 1, j, k + 1) || dfs(board, word, i, j + 1, k + 1) || dfs(board, word, i - 1, j, k + 1) || dfs(board, word, i, j - 1, k + 1)
  board[i][j] = word[k]
  return res
}

console.log(exist([["a",]],
  "ab"))
