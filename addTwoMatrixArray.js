const addTwoMatrixArray = (arr1, arr2, n) => {
  let c = []
  let sum = 0
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // console.log(arr1[(i, j)])
      // c += arr1[(i, j)]
      c[(i, j)] = arr1[(i, j)] + arr2[(i, j)]
    }
  }
  for (let k = 0; k < n; k++) {
    sum += c[k]
  }
  return sum
}

const arr1 = [3, 5, 4, 34, 67]
const arr2 = [4, 5, 6, 32, 43]
let n = arr1.length

console.log(addTwoMatrixArray(arr1, arr2, n))
