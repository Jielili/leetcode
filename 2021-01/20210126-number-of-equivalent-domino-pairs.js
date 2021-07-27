/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
    let count=0;
    for(let i=0;i<dominoes.length-1;i++){
        for(let j=i+1;j<dominoes.length;j++){
            const dominoes1=dominoes[i],dominoes2=dominoes[j];
            if((dominoes1[0]==dominoes2[0]&&dominoes1[1]==dominoes2[1])||(dominoes1[0]==dominoes2[1]&&dominoes1[1]==dominoes2[0])){
                count++;
            }
        }
    }
    return count;
};

console.log(numEquivDominoPairs([[1,2],[2,1],[3,4],[5,6]]));