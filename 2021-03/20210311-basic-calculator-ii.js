/**
 * @param {string} s
 * @return {number}
 */
var calculate1 = function (s) {
    s = s.replace(/\s/g, ``);
    while (s.indexOf(`*`) > 0 || s.indexOf(`/`) > 0) {
        let timesSignIndex = s.indexOf(`*`);
        let divisonSignIndex = s.indexOf(`/`);
        let i = -1;
        if (divisonSignIndex == -1 || (timesSignIndex > -1 && divisonSignIndex > -1 && timesSignIndex < divisonSignIndex)) {
            i = timesSignIndex;
        } else {
            i = divisonSignIndex;
        }
        let preIndex = i - 1,
            oper1 = 0,
            digits = 1;
        while (preIndex >= 0 && s[preIndex] !== '+' && s[preIndex] !== '-' && s[preIndex] !== '*' && s[preIndex] != '/') {
            oper1 += Number(s[preIndex]) * digits;
            digits *= 10;
            preIndex--;
        }
        let nextIndex = i + 1,
            oper2 = 0;
        while (nextIndex < s.length && s[nextIndex] !== '+' && s[nextIndex] !== '-' && s[nextIndex] !== '*' && s[nextIndex] != '/') {
            oper2 = oper2 * 10 + Number(s[nextIndex]);
            nextIndex++;
        }
        let res = 0;
        if (i === timesSignIndex) {
            res = oper1 * oper2;
        } else {
            res = Math.floor(oper1 / oper2);
        }
        s = s.substring(0, preIndex + 1) + String(res) + s.substring(nextIndex);
    }
    let i = 0,
        sign = 1,
        n = s.length,
        res = 0;
    while (i < n) {
        if (s[i] === `+`) {
            sign = 1;
            i++;
        } else if (s[i] === `-`) {
            sign = -1
            i++;
        } else {
            let num = 0;
            while (i < n && s[i] !== `+` && s[i] !== `-`) {
                num = num * 10 + Number(s[i]);
                i++;
            }
            res += sign * num;
        }
    }
    return res;
};


/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    s = s.replace(/\s/g, ``);
    const stack = [];
    let i = 0,
        n = s.length,
        sign = `+`;
    while (i < n) {
        if (s[i] === `+` || s[i] === `-` || s[i] === `*` || s[i] === `/`) {
            sign = s[i];
            i++;
        } else {
            let num = 0;
            while (i < n && s[i] !== '+' && s[i] !== '-' && s[i] !== '*' && s[i] !== '/') {
                num=num*10+Number(s[i]);
                i++;
            }
            if(sign===`+`){
                stack.push(num);
            }else if(sign===`-`){
                stack.push(-num);
            }else if(sign===`*`){
                let x=stack.pop();
                stack.push(x*num);
            }else if(sign===`/`){
                let x=stack.pop();
                stack.push(Number(String(x/num).split('.')[0]));
            }
        }
    }
    return stack.reduce((pre,curr)=>pre+curr,0);
}



console.log(calculate("14-3/2"))