/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
var findCriticalAndPseudoCriticalEdges = function(n, edges) {
    
};

class findAndUnion{
    constructor(n){
        this.parent = new Array(n).fill(0).map((item,index)=>index);
    }

    find(index){
        if(this.parent[index]!==index){
            this.parent[index]=this.find(index);
        }
        return this.parent[index];
    }

    union(index1,index2){
        this.parent[this.find[index1]]=this.parent[index2];
    }
}