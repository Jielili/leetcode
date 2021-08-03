/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
 var kWeakestRows = function(mat, k) {
     const res = [];
     mat.forEach((item,index)=>{
         const sum = item.reduce((acc,cur)=>acc+cur,0)
         res.push([index,sum])
     })
     mat.sort((a,b)=>{
         if(a[1]!=b[1]){
             return a[1]-b[1]
         }
         return a[0]-b[0]
     })

     return mat.map(item=>item[1])
};