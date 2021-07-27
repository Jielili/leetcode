/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var maxNumEdgesToRemove = function (n, edges) {
    edges.sort((a, b) => b[0] - a[0]);
    const alice = new findAndUnion(n);
    const bob = new findAndUnion(n);
    const res = [];
    for (let i = 0; i < edges.length; i++) {
        const [type, node1, node2] = edges[i];
        const resAliceEdge = false;
        if (type == 1 || type == 3) {
            if (alice.find(node1) != alice.find(node2)) {
                alice.union(node1, node2);
            } else {
                type == 1?(res.push(i)):(resAliceEdge=true);
            }
        }
        if (type == 2 || type == 3) {
            if (bob.find(node1) != bob.find(node2)) {
                bob.union(node1, node2);
            } else {
                type == 2 || resAliceEdge ? (res.push(i)) : null;
            }
        }
    }
    if (alice.setCount > 1 || bob.setCount > 1) {
        return -1;
    }
    return res.length;
};


class findAndUnion {
    constructor(n) {
        this.parent = new Array(n + 1).fill(0).map((item, index) => index);
        this.setCount = n;
    }
    find(index) {
        if (this.parent[index] != index) {
            this.parent[index] = this.find(this.parent[index]);
        }
        return this.parent[index];
    }
    union(index1, index2) {
        this.parent[this.find(index1)] = this.find(index2);
        this.setCount--;
    }
}

console.log(
    maxNumEdgesToRemove(4, [
        [3, 2, 3],
        [1, 1, 2],
        [2, 3, 4]
    ])
);