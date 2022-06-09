/**
 * @param {number[][]} nums
 * @return {number[]}
 */
 var intersection = function(nums) {
  const map = new Map()
  nums.forEach(arr=>{
      arr.forEach(v=>{
          if(!map.has(v)){
              map.set(v,0)
          }
          map.set(v,map.get(v)+1)
      })
  })
  const res = []
  map.forEach((value,key) => {
     if (value === nums.length) {
      res.push(key)
    }
  })
   res.sort((a,b)=>a-b)
   return res
 };

 console.log(intersection([[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]))
 console.log(intersection([[1,2,3],[4,5,6]]))
 console.log(intersection([[7,34,45,10,12,27,13],[27,21,45,10,12,13]]))