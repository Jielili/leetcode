/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    let arr = s.split('');
    arr.forEach((val,index)=>{
        if(arr.indexOf(val)!=index){
            if(arr[index-1]<val){
                arr.splice(arr.indexOf(val),1);
            }else{
                arr.splice(index,1);
            }
        }
    })
};