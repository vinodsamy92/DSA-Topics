const randomArr = [5, 7, 5, 3, 2, 6, 7, 8, 67, 5, 5]

// const reverseArrayUsingIterative = () => {
//   const reveredArray = []
//   for (let i = randomArr.length - 1; i >= 0; i--) {
//     console.log(randomArr[i])
//     reveredArray.push(randomArr[i])
//   }
//   return reveredArray
// }

const reverseArrayUsingSwap = () => {
  let n = randomArr.length
  let start = 0
  let end = n - 1
  while (start < end) {
    randomArr[start] = randomArr[end]
    start + 1
    end - 1
  }
  return randomArr
}
console.log(reverseArrayUsingSwap())
