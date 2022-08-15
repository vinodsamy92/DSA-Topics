//Two dimentinal array
// const matrix = [
//   [2, 3],
//   [4, 0],
// ]

// let n = matrix.length
// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < n; j++) {
//     console.log(matrix[i][j])
//   }
// }
// step1.find a relationship between i and j

const calculateDiagonals = (arr) => {
  const n = arr.length
  let diagonal1 = 0
  let diagonal2 = 0
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) {
        diagonal1 += arr[i][j]
      }
      if (i + j == n - 1) {
        diagonal2 += arr[i][j]
      }
    }
  }
  return Math.abs(diagonal1 - diagonal2)
}
const matrix = [
  [2, 3],
  [4, 0],
]
console.log(calculateDiagonals(matrix))
