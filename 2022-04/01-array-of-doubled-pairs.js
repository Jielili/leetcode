/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canReorderDoubled1 = function (arr) {
  arr.sort((a, b) => (Math.abs(b) - Math.abs(a)))
  const len = arr.length/2
  for (let i = 0; i < len; i++){
    const f = arr.indexOf(arr[i] / 2,i+1)
    if (f <= 0) {
      return false
    } else {
      arr.splice(f,1)
    }
  }
  return true
};


/// 有的时候数组查找不方便可还是得用哈希啊
var canReorderDoubled = function (arr) {
  const map = new Map()
  arr.forEach(val => {
    if (!map.has(val)) {
      map.set(val,1)
    } else {
      map.set(val,map.get(val)+1)
    }
  })
  const keys = [...map.keys()].sort((a, b) => (Math.abs(a) - Math.abs(b)))
  for (let i = 0; i < keys.length; i++){
    const r = keys[i]
    if (map.get(r) > (map.get(r * 2)||0)) {
      return false
    } else {
      map.set(r*2,map.get(r*2)-map.get(r))
    }
  }
  return true
};


console.log(canReorderDoubled([3,1,3,6]))
console.log(canReorderDoubled([2,1,2,6]))
console.log(canReorderDoubled([4, -2, 2, -4]))
console.log(canReorderDoubled([1,2,4,16,8,4]))
console.log(canReorderDoubled([0,0]))
