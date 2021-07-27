/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
    K=String(K).split('').map(item=>Number(item));
    const res =[],aLen=A.length,kLen=K.length;
    let add=0;
    for(let i=1;i<=aLen||i<=kLen;i++){
        const sum=(A[aLen-i]||0)+(K[kLen-i]||0)+add;
        add=(sum>9)?1:0;
        res.unshift(sum%10);
    }
    add==1&&res.unshift(add);
    return res;
};

console.log(addToArrayForm([9,9,9,9,9,9,9,9,9,9],1));
