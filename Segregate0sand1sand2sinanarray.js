// NOTE: Given an array A[] consisting 0s, 1s and 2s.
// The task is to write a function that sorts the given array.
// The functions should put all 0s first,
// then all 1s and all 2s in last.

const inputArr = [0, 1, 2, 0, 1, 2]
// Output: {
//   0, 0, 1, 1, 2, 2
// }
// const length = inputArr.length
// let count1 = 0
// let count2 = 0
// for (let i = 0; i < length; i++) {
//   if (inputArr[i] === 0) {
//     count1++
//   }
// }
// for (let j = 0; j < inputArr.length; j++) {
//   if (inputArr[j] === 1) {
//     count2++
//   }
// }

// for (let i = 0; i < count1; i++) {
//   inputArr[i] = 0
// }

// for (let j = count1; j < length; j++) {
//   inputArr[j] = 1
// }
// console.log(count2)
// // for (let k = count2; k < length; k++) {
// //   inputArr[k] = 2
// // }

// console.log("inputArray", inputArr)

function segregateArray(arr, n) {
  let i,
    count0 = 0,
    count1 = 0,
    count2 = 0
  for (let i = 0; i < n; i++) {
    switch (arr[i]) {
      case 0:
        count0++
        break
      case 1:
        count1++
        break
      case 2:
        count2++
        break
    }
  }
  i = 0
  // console.log(count0)
  while (count0 > 0) {
    // console.log(arr[i++])
    arr[i++] = 0
    count0--
  }
  while (count1 > 0) {
    arr[i++] = 1
    count1--
  }
  console.log("ivalue is", i)

  while (count2 > 0) {
    arr[i++] = 2
    count2--
  }
  console.log(arr)
}
segregateArray(inputArr, inputArr.length)
