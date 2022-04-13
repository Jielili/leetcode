// 队列的最大值 队列的最大值
// 维护一个双端队列
var MaxQueue = function () {
  this.arr = []
  this.max = []
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function () {
  return this.max[0] || -1
};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function (value) {
  this.arr.push(value)
  // if (value >= (this.max[this.max.length - 1]||Number.MIN_VALUE)) {
  //   this.max.push(value)
  // }
  // 维护max队列，使队首是最大值
  while (value >= this.max[this.max.length - 1]) {
    this.max.pop()
  }
  this.max.push(value)
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function () {
  const a = this.arr.shift()
  if (a === this.max[0]) {
    this.max.shift()
  }
  return a || -1
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */