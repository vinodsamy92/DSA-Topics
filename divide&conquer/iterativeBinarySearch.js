const binarySearch = (arr, n, x) => {
  let low = 1
  let high = n

  while (low <= high) {
    let midValue = Math.floor((low + high) / 2)
    console.log("midvalue", midValue)
    console.log("arr[midVal]", arr[midValue])
    if (arr[midValue] === x) {
      console.log("arr[midVal]1", arr[midValue])

      console.log("is it true")
      console.log(low, high)
      return midValue
    }
    if (arr[midValue] < x) {
      console.log("arr[midVal]1", arr[midValue])

      low = midValue + 1
    } else {
      high = midValue - 1
    }
  }
  return 0
}
const array = [3, 6, 8, 12, 14, 17, 25, 29, 31, 36, 42, 47, 53, 55, 62]
const n = array.length
const x = 42
console.log(binarySearch(array, n, x))
