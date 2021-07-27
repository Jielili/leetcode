/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
    while (stones.length > 1) {
        let heaviest = [-1, -1];
        stones.forEach((item, index) => {
            if (item > (stones[heaviest[0]] || -1)) {
                heaviest[1] = heaviest[0];
                heaviest[0] = index;
            } else if (item > (stones[heaviest[1]] || -1)) {
                heaviest[1] = index;
            }
        })
        if (stones[heaviest[0]] == stones[heaviest[1]]) {
            if(heaviest[0]>heaviest[1]){
                let p = heaviest[0];
                heaviest[0]=heaviest[1];
                heaviest[1]=p;
            }
            console.log(heaviest);
            stones.splice(heaviest[1], 1);
            stones.splice(heaviest[0], 1);
        } else {
            stones[heaviest[0]] = stones[heaviest[0]] - stones[heaviest[1]];
            stones.splice(heaviest[1], 1);
        }
        console.log([...stones]);
    }
    return stones[0] || 0;
};

console.log(lastStoneWeight([2,7,4,1,8,1]));