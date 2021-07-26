/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
 var isSameTree = function(p, q) {
    const pArr = [], qArr = [];
    if(p !== null) {
        pArr.push(p);
    }
    if(q !== null) {
        qArr.push(q);
    }
    while(pArr.length !== 0 && qArr.length !== 0 ) {
        const pNode = pArr.shift();
        const qNode = qArr.shift();
        if(pNode.val !== qNode.val){
            return false;
        }
        if( !(!pNode.left === !qNode.left) || !(!pNode.right === !qNode.right)){
            return false;
        }
        if(pNode.left){
            pArr.push(pNode.left)
            qArr.push(qNode.left);
        }
        if(qNode.right){
            pArr.push(pNode.right);
            qArr.push(qNode.right);
        }
    }
    if(qArr.length !== 0  || pArr.length !== 0){
        return false;
    }
    return true
};