// const nonSequentialArr = [0, 1, 2, 0, 1, 2]
// nonSequentialArr.sort((a, b) => a - b)
// console.log(nonSequentialArr)
//with js buildin function
const inputArray = [0, 1, 0, 1, 0, 0, 1, 1, 1, 0]
// inputArray.sort((a, b) => a - b)
// console.log(inputArray)

//without build in function
let count = 0
for (let i = 0; i < inputArray.length; i++) {
  if (inputArray[i] === 0) {
    count++
  }
}
for (let i = 0; i < count; i++) {
  inputArray[i] = 0
}
for (let j = count; j < inputArray.length; j++) {
  inputArray[j] = 1
}

console.log("inputArray", inputArray)
