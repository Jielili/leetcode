/**
 * @param {string} s
 * @return {number}
 */
var calculate1 = function (s) {
    s = s.replace(/\s/g, '').replace(/\(/g, `'('`).replace(/\)/g, `')'`).replace(/\+/g, `'+'`).replace(/\-/g, `'-'`).replace(/\'+/g, `'`).replace(/^\'/g, '').replace(/\'$/g, '');
    const arr = s.split(`'`);

    const stack = [];
    while (arr.length > 0) {
        const letter = arr.shift();
        if (letter !== `)`) {
            if (letter !== `+` && letter !== `-` && letter !== '(') {
                const last = stack[stack.length-1];
                if (last === `+` || last === `-`) {
                    const lastButOne =  stack[stack.length-2];
                    if (lastButOne !== `+` && lastButOne !== `-` && lastButOne !== '(') {
                        stack.pop();
                        stack.pop();
                        stack.push(calculateContainer.basicCalculate(Number(lastButOne || 0), last, Number(letter)));
                    }else{
                        stack.push(letter);
                    }
                }else{
                    stack.push(letter);
                }
            }else{
                stack.push(letter);
            }
        } else {
            let cal = new calculateContainer();
            let calStack = stack.splice(stack.lastIndexOf('(') + 1);
            stack.pop();
            while (calStack.length > 0) {
                cal.setOperand(calStack.shift());
            }
            // stack.push(cal.oper1 || 0);
            arr.unshift(cal.oper1 || 0)
        }
    }
    if (stack.length > 1) {
        let cal = new calculateContainer();
        while (stack.length > 0) {
            const letter = stack.shift();
            cal.setOperand(letter);
        }
        stack.push(cal.oper1);
    }

    return stack.pop();
};

class calculateContainer {
    constructor() {
        this.oper2 = null;
        this.oper1 = null;
        this.operator = null;
    }

    static basicCalculate(oper1 = 0, operator, oper2) {
        if (operator === `+`) {
            return oper1 + oper2;
        }
        if (operator === `-`) {
            return oper1 - oper2;
        }
    }
    setOperand(oper) {
        if (oper === '+' || oper === '-') {
            this.operator = oper;
        } else {
            if (!this.operator) {
                this.oper1 = Number(oper);
            } else {
                this.oper2 = Number(oper);
                this.calculate();
            }
        }
    }
    calculate() {
        if (this.operator === `+`) {
            this.oper1 = this.oper1 + this.oper2;
        }
        if (this.operator === `-`) {
            this.oper1 = this.oper1 - this.oper2;
        }
        // this.oper1 = this.basicCalculate(this.oper1, this.operator, this.oper2);
        // basicCalculate(this.oper1)
        this.operator = null;
        this.oper2 = null;
    }
}


/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    s=s.replace(/\s/g,'');
    const ops=[1];
    let res = 0,sign = 1,i=0,n=s.length;
    while(i<n){
        if(s[i]===`+`){
            sign = ops[ops.length-1];
            i++;
        }else if(s[i]===`-`){
            sign = -ops[ops.length-1];
            i++;
        }else if (s[i]===`(`){
            ops.push(sign);
            i++;
        }else if (s[i]===`)`){
            ops.pop();
            i++;
        }else{
            let num = 0;
            while(s[i]!==`+`&&s[i]!==`-`&&s[i]!==`(`&&s[i]!==`)`&&i<n){
                num = num*10 +Number(s[i]);
                i++;
            }
            res+=sign*num;
        }
    }
    return res;
}



// console.log(calculate(" 2-1 + 2 "))
// console.log(calculate(" 2-1 + 2 "))
// console.log(calculate(" 2-1 + 2 "))
console.log(calculate("2-4-(8+2-6+(8+4-(1)+8-10))"))
// console.log(calculate("2147483647"))
// console.log(calculate("-2+ 1"))




