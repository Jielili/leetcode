/**
 * @param {number[]} A
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(A) {
    let sum = 0;
    const answer = new Array(A.length).fill(true).map((val,index)=>{
        sum*=2;
        sum+=A[index];
        return sum%5==0;
    });
    return answer;
};

console.log(prefixesDivBy5([1,1,0,0,0,1,0,0,1]))
