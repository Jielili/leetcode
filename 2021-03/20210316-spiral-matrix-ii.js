/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let [hStart,hEnd,vStart,vEnd,i,j,total,count,dire]=[0,n-1,0,n-1,0,0,n*n,0,'right'];
    const res = new Array(n).fill(0).map(()=>new Array(n).fill(0));
    while(count<total){
        count++;
        res[i][j]=count;
        if(dire==='right'){
            if(j<hEnd){
                j++;
            }else{
                dire='down';
                i++;
                vStart++;
            }
        }else if(dire==='down'){
            if(i<vEnd){
                i++;
            }else{
                dire='left';
                j--;
                hEnd--;
            }
        }else if(dire==='left'){
            if(j>hStart){
                j--;
            }else{
                dire='up';
                i--;
                vEnd--;
            }
        }else if(dire==='up'){
            if(i>vStart){
                i--;
            }else{
                dire='right';
                j++;
                hStart++;
            }
        }
    }
    return res;

};

console.log(generateMatrix(4))