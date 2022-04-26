// 883. 三维形体投影面积
/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function (grid) {
   const n = grid.length
   let xy = 0, xz = 0, yz = 0;
   for (let i = 0; i < n; i++){
     let curxz = 0, curyz = 0;
     for (let j = 0; j < n; j++){
       if (grid[i][j]) {
         xy ++
       }
       curxz = Math.max(curxz, grid[i][j])
       curyz = Math.max(curyz, grid[j][i])
     }
     xz += curxz
     yz += curyz
   }
   return xy+xz+yz
 };

 console.log(projectionArea([[1,2],[3,4]]))
 console.log(projectionArea([[2]]))
 console.log(projectionArea([[1,0],[0,2]]))