/**
 * @param {string[][]} orders
 * @return {string[][]}
 */
var displayTable = function (orders) {
  const col1 = new Set()
  const tableFood = new Map()
  orders.forEach(([customer, table, food]) => {
    col1.add(food)
    if (!tableFood.has(table)) {
      tableFood.set(table, {})
    }
    const foods = tableFood.get(table)
    if (!foods[food]) {
      foods[food] = 0
    }
    foods[food]++
  })
  const res = new Array(tableFood.size + 1).fill(0).map(() => new Array(col1.size + 1).fill(0))
  res[0] = ['Table'].concat([...col1].sort());
  [...tableFood.entries()].sort((a, b) => Number(a[0] - b[0])).forEach((item, i) => {
    res[0].forEach((food, j) => {
      if (j === 0) {
        res[i + 1][j] = item[0] + ''
      } else {
        res[i + 1][j] = (item[1][food] || 0) + ''
      }
    })
  })

  return res;
};

console.log(displayTable([
  ["David", "3", "Ceviche"],
  ["Corina", "10", "Beef Burrito"],
  ["David", "3", "Fried Chicken"],
  ["Carla", "5", "Water"],
  ["Carla", "5", "Ceviche"],
  ["Rous", "3", "Ceviche"]
]))