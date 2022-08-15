// NOTE:Given an array of integers,
//find the first repeating element in it.
//We need to find the element that occurs more than once and
//whose index of first occurrence is smallest.
// const repeatingArray = [10, 5, 3, 4, 3, 5, 6]
// //1. find what are repeting elements in given array
// //2.find index of first occurence is smallest
// const n = repeatingArray.length
// for (let i = 0; i < n; i++) {
//   let temp = repeatingArray[i]
//   for (let j = 0; j < n; j++) {
//     // console.log(repeatingArray[i])
//     if (temp === repeatingArray[j]) {
//       console.log("temp", temp)
//     }
//     // if(repeatingArray[i])
//   }
// }

let count = 0
const binarySearch = (array, l, h, n, x) => {
  if (l < h) {
    let midValue = Math.floor((l + h) / 2)
    if (array[midValue] === x) {
      return midValue
    }
    if (x < array[midValue]) {
      return binarySearch(array, l, midValue - 1, n, x)
    } else {
      return binarySearch(array, midValue + 1, h, n, x)
    }
  }
}
// console.log(count)
const sampleArray = [1, 1, 2, 2, 2, 2, 3]
sampleArray.sort((a, b) => a - b)
// console.log(sampleArray)
//[1,2,3,4,5,6,7,8];
const length = sampleArray.length
//console.log(binarySearch(sampleArray, 0, length - 1, length, (x = 2)))
//

const countOccurrences = (arr, n, x) => {
  const index = binarySearch(arr, 0, n - 1, n, x)
  console.log("index value of x", index)

  let count = 1
  let left = index - 1
  while (left >= 0 && arr[left] === x) {
    console.log("left side execution")
    count++
    left--
  }
  let right = index + 1
  while (right < n && arr[right] === x) {
    console.log("right side execution")
    count++
    right++
  }
  return count
}

//console.log(countOccurrences(sampleArray, sampleArray.length, (x = 2)))
// countOccurrences(sampleArray, sampleArray.length, (x = 2))

const arr5 = [1, 10, 5, 3, 4, 3, 5, 6]
const findRepeatingElementInArray = (arr) => {
  const map = new Map()
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      if (map.get(arr[i]) == 0) {
        return arr[0]
      }
      if (map.get(arr[i]) >= 0) {
        map.set(arr[i], -map.get(arr[i]))
      }
    } else {
      map.set(arr[i], i)
    }
  }
  // return map
  if (arr.length === map.size) {
    return -1
  }
  let max = []
  map.forEach((mapVal, index, orgMap) => {
    // console.log(mapVal)
    if (mapVal < 0) {
      max.push(mapVal)
    }
  })
  return arr[-Math.max(...max)]
}
console.log(findRepeatingElementInArray(arr5))
