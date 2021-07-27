/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {
    const sum_a = A.reduce((acc,cur)=>acc+cur,0);
    const sum_b = B.reduce((acc,cur)=>acc+cur,0);
    const average = (sum_a+sum_b)/2;
    const diff = average-sum_a;
    for(let i = 0;i<A.length;i++){
        for(let j = 0;j<B.length;j++){
            if(B[j]-A[i]==diff){
                return [A[i],B[j]];
            }
        }
    }
};

console.log(fairCandySwap([1,2,5],[2,4]))