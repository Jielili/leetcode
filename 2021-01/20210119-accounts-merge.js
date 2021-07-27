/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function (accounts) {
    const parent = [];
    for (let i = 0; i < accounts.length; i++) {
        for (let j = i + 1; j < accounts.length; j++) {
            const branch1 = find(parent, i);
            const branch2 = find(parent, j);
            if (find1(accounts, i, j)) {
                if (branch1 != branch2) {
                    union(parent, branch1, branch2);
                }
            }
        }
    }
    const stableSorting = (s1, s2) => {
        for (let i = 0; i < s1.length; i++) {
            if (s1[i] == s2[i]) {
                continue;
            }
            return (s1.charCodeAt(i) - s2.charCodeAt(i));
        }
        if (s2.length > s1.length) {
            return -1;
        }
    };

    const res = new Array(parent.length).fill(0).map((item,index)=>{
        return [accounts[parent[index][0]].slice(0,1)[0]];
    });

    console.log(res);

    
    parent.forEach((arr, index) => {
        arr.forEach(accountsIndex=>{
            res[index]=res[index].concat(accounts[accountsIndex].splice(1))
            // res[index].splice(res[index].length,0,);
        })
        res[index]= res[index].splice(0,1).concat([...new Set(res[index].sort(stableSorting))]);
    })
    console.log(res);
    return res;
};

function find1(accounts, index1, index2) {
    let nodeList1 = accounts[index1];
    let nodeList2 = accounts[index2];
    for (let i = 1; i < nodeList1.length; i++) {
        for (let j = 1; j < nodeList2.length; j++) {
            if (nodeList1[i] === nodeList2[j]) {
                return true;
            }
        }
    }
    return false;
}

function find(parent, index) {
    for (let i = 0; i < parent.length; i++) {
        if (parent[i].includes(index)) {
            return i;
        }
    }
    parent.push([index]);
    return parent.length - 1;
}

function union(parent, index1, index2) {
    let small = Math.min(index1, index2);
    let large = Math.max(index1, index2);
    let arr2 = (parent.splice(large, 1))[0];
    let beforeSort = parent[small].concat(arr2);
    parent[small] = [...new Set(beforeSort)];
}

console.log(accountsMerge([
    // ["John", "johnsmith@mail.com", "john00@mail.com"],
    // ["John", "johnnybravo@mail.com"],
    // ["John", "johnsmith@mail.com", "john_newyork@mail.com"],
    // ["Mary", "mary@mail.com"]

    ["David", "David0@m.co", "David1@m.co"],
    ["David", "David3@m.co", "David4@m.co"],
    ["David", "David4@m.co", "David5@m.co"],
    ["David", "David2@m.co", "David3@m.co"],
    ["David", "David1@m.co", "David2@m.co"]

    // ["Alex", "Alex5@m.co", "Alex4@m.co", "Alex0@m.co"],
    // ["Ethan", "Ethan3@m.co", "Ethan3@m.co", "Ethan0@m.co"],
    // ["Kevin", "Kevin4@m.co", "Kevin2@m.co", "Kevin2@m.co"],
    // ["Gabe", "Gabe0@m.co", "Gabe3@m.co", "Gabe2@m.co"],
    // ["Gabe", "Gabe3@m.co", "Gabe4@m.co", "Gabe2@m.co"]

]));