/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function (preorder) {
    let lenHistory = 0
    while (preorder.length > 1 && lenHistory !== preorder.length) {
        lenHistory = preorder.length
        preorder = preorder.replace(/\d+,#,#/g, '#');
    }
    if(preorder==='#'){
        return true;
    }else{
        return false;
    }
};

isValidSerialization("1,#")