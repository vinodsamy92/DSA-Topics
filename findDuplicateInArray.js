// Given an array of n elements that contains elements from 0 to n-1,
//with any of these numbers appearing any number of times.
//Find these repeating numbers in O(n) and using only constant memory space.

// Example:

// Input : n = 7 and array[] = {1, 2, 3, 6, 3, 6, 1}
// Output: 1, 3, 6

// Explanation: The numbers 1 , 3 and 6 appears more
// than once in the array.

// Input : n = 5 and array[] = {1, 2, 3, 4 ,3}
// Output: 3

// Explanation: The number 3 appears more than once
// in the array.

//****************************************************** */

const findRepetingArrayElement = (arr, input, n) => {
  // const sortedArray = arr.sort((a, b) => a - b)
  // console.log(sortedArray)

  // for (let i = 0; i < input; i++) {
  //   console.log(sortedArray[i])
  // }

  // let i
  // document.write("The repeating elements are:" + "<br>")
  for (let i = 0; i < n; i++) {
    var abs_value = Math.abs(arr[i])
    // console.log(arr[abs_value])
    if (arr[abs_value] >= 0) {
      // console.log(abs_value)
      arr[abs_value] = -arr[abs_value]
      // console.log(abs_value)
    } else console.log(abs_value + " ")
  }
}
const array = [1, 2, 3, 6, 3, 6, 1, 6]
const inputValue = 7
const n = array.length

// findRepetingArrayElement(array, inputValue, n)

let numRay = [0, 4, 3, 2, 7, 8, 2, 3, 1, 2]
let arr_size = numRay.length

// count the frequency
for (let i = 0; i < arr_size; i++) {
  numRay[numRay[i] % arr_size] = numRay[numRay[i] % arr_size] + arr_size
}
console.log("The repeating elements are : " + "</br>")
for (let i = 0; i < arr_size; i++) {
  if (numRay[i] >= arr_size * 2) {
    console.log(i + " " + "</br>")
  }
}
