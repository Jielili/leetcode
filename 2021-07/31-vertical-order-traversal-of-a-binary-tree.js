/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalTraversal = function (root) {
    const res = [];
    if (!root) {
        return res;
    }
    const map = new Map();
    root.corr = [0, 0]
    map.set(0, [[0, root.val]])
    const cur = [root];
    while (cur.length > 0) {
        const len = cur.length;
        for (let i = 0; i < len; i++) {
            const node = cur.shift();
            // console.log(node.corr)
            const [corr1, corr2] = node.corr;
            if (node.left) {
                node.left.corr = [corr1 + 1, corr2 - 1]
                if (!map.has(corr2 - 1)) {
                    map.set(corr2 - 1, [])
                }
                map.get(corr2 - 1).push([corr1 + 1, node.left.val])
                cur.push(node.left)
            }
            if (node.right) {
                node.right.corr = [corr1 + 1, corr2 + 1]
                if (!map.has(corr2 + 1)) {
                    map.set(corr2 + 1, [])
                }
                map.get(corr2 + 1).push([corr1 + 1, node.right.val])
                cur.push(node.right)
            }
        }
    }

    [...map.keys()].sort((a, b) => a - b).forEach(item => {
        const arr = [];
        map.get(item).sort((a,b)=>{
            if(a[0]!=b[0]){
                return a[0]-b[0]
            }
            return a[1]-b[1]
        })
        map.get(item).forEach(yuan => {
            arr.push(yuan[1])
        })
        res.push(arr)
    })

    return res;

};

console.log(verticalTraversal({
    val:3,
    left:null,
    right:null
}))
