/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.arr = nums
  // this.map = new Map()
  // nums.forEach((v,i) => {
  //   if (!map.has(v)) {
  //     map.set(v,[])
  //   }
  //   map.get(v).push(i)
  // })
};

/** 
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function (target) {
  // const a = this.map.get(target)
  const a = []
  this.arr.forEach((v, i) => {
    if (v === target) {
      a.push(i)
    }
  })
  const random = Math.floor(Math.random()*a.length)
  return target[random]
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */