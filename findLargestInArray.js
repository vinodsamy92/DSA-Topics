const array = [12, 4, 5, 6, 98, 55, 33]

const findLargestInArray = () => {
  let max = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i]
    }
  }
  return max
}
console.log(findLargestInArray())
