//Approach:

// 1. sort the given Array
// 2. find the mid value
// 3. check the condtion if median value is greater or lesser than x value
// 4. return the index of found value

const binarySearch = (array, low, high, n, x) => {
  if (high >= low) {
    //const midVal = Math.floor(n / 2)
    const midVal = ~~((high + low) / 2)
    console.log("low", low)
    console.log("MidValue", midVal)

    if (array[midVal] === x) return midVal

    if (array[midVal] > x) {
      console.log("entered")
      //left side array lower value compare to  given x value
      return binarySearch(array, low, mid - 1, n, x)
    }
    //right  side array higer value compare to  given x value

    return binarySearch(array, midVal + 1, high, n, x)
  }

  return -1
}

const sampleArray = [3, 5, 8, 7, 2, 4, 1, 6]
sampleArray.sort((a, b) => a - b)
// console.log(sampleArray)
//[1,2,3,4,5,6,7,8];
const n = sampleArray.length
console.log(binarySearch(sampleArray, 0, n - 1, n, (x = 8)))
