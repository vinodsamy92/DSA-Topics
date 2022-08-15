const swapTwoNumbers = () => {
  // 1. Using Temp Variable
  // a = 10
  // b = 20
  // let temp
  // temp = a
  // a = b
  // b = temp
  // console.log(a, b)
  // 2. Using Destructure feature ES2015 JS
  // let a = 90
  // let b = 100
  // ;[a, b] = [b, a]
  // console.log(a, b)

  // 3. Addition and difference

  let a = 30
  let b = 40

  a = a + b
  //70
  b = a - b
  //30

  a = a - b
  //40;
  console.log(a, b)
}

swapTwoNumbers()
