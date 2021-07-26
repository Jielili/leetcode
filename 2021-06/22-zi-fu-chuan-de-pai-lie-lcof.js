/**
 * @param {string} s
 * @return {string[]}
 */
 var permutation = function(s) {
    const res = [],len = s.length;
    if(len===1){
        res.push(s);
    }else {
        for(let i = 0;i<len;i++){
            if(s.slice(0,i).indexOf(s[i])){
                continue;
            }
            const child = permutation(s.slice(0,i)+s.slice(i+1))
            res.splice(res.length-1,0,...child.map(item=>s[i]+item))
        }
    }
    return res;
};

console.log(permutation('aab'))