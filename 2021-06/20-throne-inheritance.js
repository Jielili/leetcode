/**
 * @param {string} kingName
 */
var ThroneInheritance = function (kingName) {
    this.tree = { name: kingName, children: [] }
    this.death = [];
};

/** 
 * @param {string} parentName 
 * @param {string} childName
 * @return {void}
 */
ThroneInheritance.prototype.birth = function (parentName, childName) {
    const arr = [this.tree];
    while (arr.length > 0) {
        const person = arr.shift();
        if (person.name === parentName) {
            person.children.push({
                name: childName,
                children: [],
            })
            break;
        } else {
            arr.splice(arr.length, 0, ...person.children)
        }
    }
};

/** 
 * @param {string} name
 * @return {void}
 */
ThroneInheritance.prototype.death = function (name) {
    this.death.push(name);
};

/**
 * @return {string[]}
 */
ThroneInheritance.prototype.getInheritanceOrder = function () {

    const arr = [this.tree];
    const curOrder = [];
    while (arr.length>0) {
        const node = arr.shift();
        !this.death.includes(node.name) && curOrder.push(node.name);
        arr.splice(0, 0, ...node.children);
    }

    return curOrder;

};

/**
 * Your ThroneInheritance object will be instantiated and called as such:
 * var obj = new ThroneInheritance(kingName)
 * obj.birth(parentName,childName)
 * obj.death(name)
 * var param_3 = obj.getInheritanceOrder()
 */

var obj = new ThroneInheritance('king')
obj.birth('king', 'andy')
obj.birth('king', 'bob')
obj.birth('king', 'catherine')
obj.birth('andy', 'matthew')
obj.birth('bob', 'alex')
obj.birth('bob', 'asha')
console.log(obj.getInheritanceOrder());
obj.death("bob")


["ThroneInheritance", "birth", "birth", "birth", "birth", "birth", "birth", "getInheritanceOrder", "death", "getInheritanceOrder"]
[["king"], ["king", "andy"], ["king", "bob"], ["king", "catherine"], ["andy", "matthew"], ["bob", "alex"], ["bob", "asha"], [null], ["bob"], [null]]