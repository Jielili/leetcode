/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
    if (!root) {
        return [];
    }
    const result = [];
    const upperNodeArr = [root];
    let [dire_left, node] = [true, null];
    while (upperNodeArr.length > 0) {
        const nodeValList = [];
        let len = upperNodeArr.length;
        for (let i = 0; i < len; i++) {
            node = upperNodeArr.shift();
            node.left && upperNodeArr.push(node.left);
            node.right && upperNodeArr.push(node.right);
            if (dire_left) {
                nodeValList.push(node.val);
            } else {
                nodeValList.unshift(node.val);

            }
        }
        result.push(nodeValList);
        dire_left = !dire_left;
    }
    return result;
};


zigzagLevelOrder({
    val: 3,
    left: {
        val: 9,
        left: {
            val: 4,
            left: null,
            right: null
        },
        right: {
            val: 12,
            left: null,
            right: null
        }
    },
    right: {
        val: 20,
        left: {
            val: 15,
            left: null,
            right: null
        },
        right: {
            val: 7,
            left: null,
            right: null
        }
    }
})