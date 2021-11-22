/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.arr = nums
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return this.arr
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  // const res = []
  // const a = [...this.arr]
  // while (a.length > 0) {
  //   const i = Math.floor(Math.random() * a.length)
  //   res.push(a.splice(i,1))
  // }
  // return res
  const res = [...this.arr]
  const len = res.length
  for (let i = 0; i < len; i++){
    const j = Math.floor(Math.random() * (len - i)) + i;
    [res[i], res[j]] = [res[j], res[i]]
  }
  return res
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */