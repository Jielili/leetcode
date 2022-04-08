/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
   const res = [];
   if (!root) {
     return res
   }
   const cur = [root] ;
   while (cur.length > 0) {
     let i = 0, len = cur.length, level = [];
     for (let i = 0; i < len; i++){
      const node = cur.shift()
       level.push(node.val)
       cur.push(...node.children)
     }
     res.push(level)
   }
   return res
};