/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode[]} trees
 * @return {TreeNode}
 */
var canMerge = function (trees) {
    const leafValue = [];
    const leafNode = [];
    trees.forEach(root => {
        leafNode.push([root.left, root.right])
        leafValue.push([root.left?.val, root.right?.val])
    })

    var inorderTraversal = function (root) {
        const res = [];
        const stk = [];
        while (root || stk.length) {
            while (root) {
                stk.push(root);
                root = root.left;
            }
            root = stk.pop();
            res.push(root.val);
            root = root.right;
        }
        return res;
    };


    while (trees.length > 1) {
        let ava = false
        for (let i = 0; i < trees.length;) {
            let find = false;
            for (let j = 0; j < trees.length; j++) {
                if(j===i){
                    continue;
                }
                const index = leafValue[j].indexOf(trees[i].val)
                const m = leafValue[j]
                const n = leafNode[j]
                if (index >= 0) {
                    find = true;
                    ava = true;
                    const node = trees.splice(i, 1)[0]
                    n[index].left = node.left;
                    n[index].right = node.right;
                    m.splice(index,1,...leafValue.splice(i, 1)[0])
                    n.splice(index,1,...leafNode.splice(i, 1)[0])
                    break;
                }
            }
            if (!find) {
                i++
            }
        }
        if (!ava) {
            break;
        }
    }

    if (trees.length === 1) {
        const x = inorderTraversal(trees[0])
        console.log(x)
        for (let i = 0; i < x.length - 1; i++) {
            if (x[i] > x[i + 1]) {
                return []
            }
        }
        return trees[0]
    } else {
        return []
    }

};

console.log(canMerge(
//     [
//     {
//         val: 10,
//         left: {
//             val: 9,
//             left: null,
//             right: null
//         },
//         right: null
//     },
//     {
//         val: 9,
//         left: {
//             val: 8,
//             left: null,
//             right: null
//         },
//         right: null
//     },
//     {
//         val: 8,
//         left: {
//             val: 7,
//             left: null,
//             right: null
//         },
//         right: null
//     }

// ]
[
    {
        val: 1,
        right: {
            val: 3,
            left: null,
            right: null
        },
        left: null
    },
    {
        val: 3,
        left: {
            val: 1,
            left: null,
            right: null
        },
        right: null
    },
    {
        val: 4,
        left: {
            val: 2,
            left: null,
            right: null
        },
        right: null
    }

]
))