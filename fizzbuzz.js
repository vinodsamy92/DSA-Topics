const fizzBuzz = () => {
  // for (let i = 1; i < 100; i++) {
  //   if (i % 3 == 0 && i % 5 == 0) {
  //     console.log(i, "fizzBuzz")
  //   } else if (i % 3 == 0) {
  //     console.log(i, "fizz")
  //   } else if (i % 5 == 0) {
  //     console.log(i, "buzz")
  //   }
  // }

  for (let i = 1; i <= 100; i++) {
    let output = ""
    if (i % 3 == 0) output += "Fizz"
    if (i % 5 === 0) output += "Buzz"
    if (output === "") output = i
    console.log(output)
  }
}
fizzBuzz()
