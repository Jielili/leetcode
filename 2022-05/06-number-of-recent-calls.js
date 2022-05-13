var RecentCounter = function () {
  this.arr = []
  this.start = 0
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.arr.push(t)
  const min = t - 3000
  while (this.arr[this.start] < min) {
    this.start++
  }
  return this.arr.length - this.start
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */