const arr1 = [1, 5, 10, 20, 40, 80, 100]
const arr2 = [6, 7, 20, 80, 100]
const arr3 = [3, 4, 15, 20, 30, 70, 80, 120]

const test = arr1.filter((item) => arr2.indexOf(item) !== -1)
const test2 = test.filter((item) => arr3.indexOf(item) !== -1)
console.log(test2)

//other approach
// JavaScript program to print
// common elements in three arrays

// This function prints common elements in ar1
function findCommon(ar1, ar2, ar3, n1, n2, n3) {
  // Initialize starting indexes
  // for ar1[], ar2[] and ar3[]
  var i = 0,
    j = 0,
    k = 0

  // Iterate through three arrays
  // while all arrays have elements
  while (i < n1 && j < n2 && k < n3) {
    // If x = y and y = z, print any of them and move ahead
    // in all arrays
    if (ar1[i] == ar2[j] && ar2[j] == ar3[k]) {
      document.write(ar1[i] + " ")
      i++
      j++
      k++
    }

    // x < y
    else if (ar1[i] < ar2[j]) i++
    // y < z
    else if (ar2[j] < ar3[k]) j++
    // We reach here when x > y and z < y, i.e., z is smallest
    else k++
  }
}

// Driver code
var ar1 = [1, 5, 10, 20, 40, 80]
var ar2 = [6, 7, 20, 80, 100]
var ar3 = [3, 4, 15, 20, 30, 70, 80, 120]
var n1 = ar1.length
var n2 = ar2.length
var n3 = ar3.length

// document.write("Common Elements are ");
//findCommon(ar1, ar2, ar3, n1, n2, n3);
