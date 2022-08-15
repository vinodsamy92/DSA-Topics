const Prices = [10, 8, 11, 12, 44, 18, 25]
// 1.sort the array
//2. define a low,high, x,n value
//3.

const sortedArray = Prices.sort((a, b) => a - b)
const low = 0
const high = Prices.length - 1
const length = Prices.length
console.log("Defined values are low,high and length values follow ", low, high, length)
console.log(sortedArray)
const binarySearch = (sortedArray, low, high, x) => {
  if (high < low) {
    return -1
  }
  const midValue = ~~((high + low) / 2)
  console.log("midValue", midValue)

  // if(sortedArray[])

  if (sortedArray[midValue] === x) return midValue
  if (sortedArray[midValue] < x) return binarySearch(sortedArray, midValue + 1, high, x)
  return binarySearch(sortedArray, low, midValue - 1, x)
}

const test = binarySearch(sortedArray, low, high, (x = 8))
console.log("result is ", sortedArray[test])
