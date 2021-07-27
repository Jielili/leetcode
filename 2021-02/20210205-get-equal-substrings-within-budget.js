/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function(s, t, maxCost) {
    let [left,right,diff,max,len,type]=[0,-1,0,0,0,'single']
    const sLength = s.length
    const diffArr = new Array(sLength).fill(0).map((item,i)=>Math.abs(s.charCodeAt(i)-t.charCodeAt(i)))
    while(right<sLength-1){
        right++
        diff+=diffArr[right]
        if(type=='double'){
            diff-=diffArr[left]
            left++
        }else{
            len++
        }

        if(diff<=maxCost){
            max = Math.max(max,len)
            type = 'single'
        }else{
            type = 'double'
        }

    }

    return max
};


console.log(equalSubstring("abcd","acde",0))
