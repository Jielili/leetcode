var findRedundantConnection = function (edges) {
    const nodesCount = edges.length;
    // let parent = new Array(nodesCount + 1).fill(0).map((val, index) => index);
    let parent = [0,1,2,3,4,5];
    for (let i = 0; i < edges.length; i++) {
        // if(find(parent,edges[i][0])!=find(parent,edges[i][1])){
        // }
        union(parent,edges[i][0],edges[i][1]);

        // else{
        //     return edges[i];
        // }
    }
    console.log(parent);
    return [0];
};

function find(parent,index){
    if(parent[index]!=index){
        parent[index]=find(parent,parent[index]);
    }
    return parent[index];
}
function union(parent,index1,index2){
    parent[find(parent,index1)]=parent[index2];
}

console.log(findRedundantConnection([[1,5],[2,3],[2,4],[4,5]]));