//  380. O(1) 时间插入、删除和获取随机元素
// remove函数，把val元素从arr中剔除的方式挺有趣： 
// 查找出val所在位置i，把栈尾元素值赋值到位置上，然后出栈
// 啧啧
var RandomizedSet = function () {
  this.map = new Map()
  this.arr = []
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.map.has(val)) {
    return false
  } else {
    this.arr.push(val)
    this.map.set(val,this.arr.length-1)
    return true
  }
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (this.map.has(val)) {
    const i = this.map.get(val)
    this.arr[i] = this.arr[this.arr.length - 1]
    this.map.set(this.arr[i], i)
    this.arr.pop()
    this.map.delete(val)
    return true
  } else {
    return false
  }
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const random = Math.floor(Math.random() * this.map.size)
  return this.arr[random]
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */