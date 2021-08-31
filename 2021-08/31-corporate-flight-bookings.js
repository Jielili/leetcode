/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings1 = function (bookings, n) {
  const arr = new Array(n + 1).fill(0)
  bookings.forEach(([from, to, seats]) => {
    for (let i = from; i <= to; i++){
      arr[i] += seats;
    }
  })
  return arr.splice(1)
};

var corpFlightBookings = function (bookings, n) {
  // const arr = new Array(n + 1).fill(0)
  // bookings.forEach(([from, to, seats]) => {
  //   for (let i = from; i <= to; i++){
  //     arr[i] += seats;
  //   }
  // })
  // return arr.splice(1)
  const arr = new Array(n + 1).fill(0)
  bookings.sort((a, b) => {
    if (a[0] < b[0]) {
      return -1
    }
    if (a[0] > b[0]) {
      return 1
    }
    if (a[1] < b[1]) {
      return -1
    } else {
      return 1
    }
  })

  for (let i = bookings.length - 1; i > 0;){
    const [from1, to1, seats1] = bookings[i - 1]
    const [from2, to2, seats2] = bookings[i]
    if (to1 < from2) {
      i--
      continue
    }
    bookings.splice(i,1)
    bookings.splice(i,1)
    if (to1 < to2) {
      
    }
  }

};