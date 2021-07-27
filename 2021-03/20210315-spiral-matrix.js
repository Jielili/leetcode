/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const [n,m] = [matrix.length,matrix[0].length];
    let [hStart,hEnd,vStart,vEnd,total,i,j,dire] = [0,m-1,0,n-1,n*m,0,0,'right'];
    const res = [];
    while(res.length<total){
        res.push(matrix[i][j]);
        if(dire==='right'){
            if(j<hEnd){
                j++;
            }else{
                vStart++;
                i++;
                dire='down';
            }
        }else if(dire==='down'){
            if(i<vEnd){
                i++;
            }else{
                hEnd--;
                j--;
                dire='left';
            }
        }else if(dire==='left'){
            if(j>hStart){
                j--;
            }else{
                vEnd--;
                i--;
                dire='up';
            }
        }else if(dire==='up'){
            if(i>vStart){
                i--;
            }else{
                hStart++;
                j++;
                dire='right';
            }
        }
    }
    return res;
};

console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]))