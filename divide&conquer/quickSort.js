const arr = [10, 16, 8, 12, 15, 6, 3, 9, 5]
const partitioning = (low, high) => {
  let pivot = arr[low]
  console.log("pivot", pivot)
  let i = low
  let j = high
  while (i < j) {
    do {
      i++
    } while (arr[i] <= pivot)
    do {
      j--
    } while (arr[j] > pivot)

    if (i < j) {
      arr[i] = arr[j]
    }
  }
  // if (i >= j) {
  //   arr[j] = arr[low]
  // }
  arr[low] = arr[j]

  console.log(arr)
  return j
}
console.log(partitioning(0, arr.length))
// const quickSort = () => {}

const quickSort = (l, h) => {
  if (l < h) {
    let j = partitioning(l, h)
    quickSort(l, j)
    quickSort(j + 1, h)
  }
  return arr
}
console.log(quickSort(0, arr.length))
