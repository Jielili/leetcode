/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {
    let [ans,letter,count]=[[],'',0];
    for(let i =0;i<=s.length;i++){
        if(letter!==s[i]){
            if(count>=3){
                ans.push([i-count,i-1]);
            }
            letter=s[i];
            count=1;
        }else{
            count++;
        }
    }
    // if(count>=3){
    //     ans.push([s.length-count,s.length-1])
    // }
    return ans;
};
console.log(largeGroupPositions("aaa"));