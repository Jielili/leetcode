/**
 * Initialize your data structure here.
 */
var TimeMap = function () {
  this.map = new Map();
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
  if (!this.map.has(key)) {
    this.map.set(key, [])
  }
  this.map.get(key).push([timestamp, value])
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
  if (!this.map.has(key)) {
    return ''
  } else {
    const values = this.map.get(key);
    let left = 0,
      right = values.length - 1;
    while (left !== right) {
      const mid = Math.floor((left + right) / 2);
      if (values[mid][0] < timestamp) {
        left = mid + 1;
      } else if (values[mid][0] > timestamp) {
        right = mid - 1;
      } else {
        return values[mid][1]
      }
    }
    if(values[mid][1]>timestamp){
      return values[mid-1][1]
    }
    return values[mid][1]
  }

};

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */