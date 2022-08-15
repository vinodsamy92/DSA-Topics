const recursiveBinarySearch = (arr, l, h, x) => {
  if (l === h) {
    if (arr[l] === x) {
      return l
    } else {
      return 0
    }
  } else {
    let midValue = Math.floor((l + h) / 2)
    if (arr[midValue] === x) {
      return midValue
    }
    if (x < arr[midValue]) {
      return recursiveBinarySearch(arr, l, midValue - 1, x)
    }
    return recursiveBinarySearch(arr, midValue + 1, h, x)
  }
}

const array = [3, 6, 8, 12, 14, 17, 25, 29, 31, 36, 42, 47, 53, 55, 77, 88]
const n = array.length
let l = 1
let h = n
const x = 88
console.log(recursiveBinarySearch(array, l, h, x))
//T(n/2)+1
//T(n)=O(log n)
