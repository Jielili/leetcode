/**
 * @param {string[]} board
 * @return {boolean}
 */
var validTicTacToe = function (board) {
  let XCount = 0, OCount = 0;
  board.forEach(item => {
    for (let i = 0; i < 3; i++){
      if (item[i] === 'X') {
        XCount++
      } else if (item[i] === 'O') {
        OCount++
      }
    }
  })

  if (OCount + 1 === XCount) {
    const OTest = board[0]==='OOO' || board[1]==='OOO' ||board[2]==='OOO' || (board[0][0]==='O'&&board[1][1]==='O'&&board[2][2]==='O') ||(board[0][2]==='O'&&board[1][1]==='O'&&board[2][0]==='O')||(board[0][0]==='O'&&board[1][0]==='O'&&board[2][0]==='O')||(board[0][1]==='O'&&board[1][1]==='O'&&board[2][1]==='O')||(board[0][2]==='O'&&board[1][2]==='O'&&board[2][2]==='O')
    // const XTest = board[0]==='XXX' || board[1]==='XXX' ||board[2]==='XXX' || (board[0][0]==='X'&&board[1][1]==='X'&&board[2][2]==='X') ||(board[0][2]==='X'&&board[1][1]==='X'&&board[2][0]==='X')||(board[0][0]==='X'&&board[1][0]==='X'&&board[2][0]==='X')||(board[0][1]==='X'&&board[1][1]==='X'&&board[2][1]==='X')||(board[0][2]==='X'&&board[1][2]==='X'&&board[2][2]==='X')
    if (OTest) {
      return false
    } else {
      return true
    }
  } else if (OCount === XCount) {
    // const OTest = board[0]==='OOO' || board[1]==='OOO' ||board[2]==='OOO' || (board[0][0]==='O'&&board[1][1]==='O'&&board[2][2]==='O') ||(board[0][2]==='O'&&board[1][1]==='O'&&board[2][0]==='O')||(board[0][0]==='O'&&board[1][0]==='O'&&board[2][0]==='O')||(board[0][1]==='O'&&board[1][1]==='O'&&board[2][1]==='O')||(board[0][2]==='O'&&board[1][2]==='O'&&board[2][2]==='O')
    const XTest = board[0] === 'XXX' || board[1] === 'XXX' || board[2] === 'XXX' || (board[0][0] === 'X' && board[1][1] === 'X' && board[2][2] === 'X') || (board[0][2] === 'X' && board[1][1] === 'X' && board[2][0] === 'X') || (board[0][0] === 'X' && board[1][0] === 'X' && board[2][0] === 'X') || (board[0][1] === 'X' && board[1][1] === 'X' && board[2][1] === 'X') || (board[0][2] === 'X' && board[1][2] === 'X' && board[2][2] === 'X')
    if (XTest) {
      return false
    } else {
      return true
    }
  } else {
    return false
  }
};

console.log(validTicTacToe(["XXX","XOO","OO "]))
console.log(validTicTacToe(["XOX", " X ", "   "]))
console.log(validTicTacToe(["XXX","   ","OOO"]))
console.log(validTicTacToe(["XOX","O O","XOX"]))