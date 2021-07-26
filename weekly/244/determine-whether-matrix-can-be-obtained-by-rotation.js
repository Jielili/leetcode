/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
 var findRotation = function(mat, target) {
    const n = target.length, option =[{
        dire:'right',
        exchange: false,
        first: 0,
        second: 0,
    },{
        dire:'up',
        exchange: true,
        first: n-1,
        second: 0,
    },{
        dire:'left',
        exchange: false,
        first: n-1,
        second: n-1,
    },{
        dire:'down',
        exchange: true,
        first: 0,
        second: n-1,
    },]
    for(let m = 0; m < option.length; m++){
        let res = true;
        for(let i = 0; i < n; i++){
            for( let j = 0; j<n; j++){
                const matF = Math.abs((!option[m].exchange?i:j)-option[m].first);
                const matS = Math.abs((!option[m].exchange?j:i)-option[m].second);
                if(target[i][j] !== mat[matF][matS]){
                    res = false;
                    break;
                }
            }
            if(!res){
                break;
            }
        }
        if(res){
            return true;
        }
    }
    return false
};

console.log(findRotation([[0,0,0],[0,1,0],[1,1,1]],
    [[1,1,1],[0,1,0],[0,0,0]]))