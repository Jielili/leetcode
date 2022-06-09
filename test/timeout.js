function test() {
  let timer = setTimeout(() => {
    console.log('3000')
  }, 3000)
  setTimeout(() => {
    // clearTimeout(timer)
    timer = setTimeout(() => {
      console.log('1000')
    })
  },1000)
}

test()