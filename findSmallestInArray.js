const array = [12, 4, 5, 6, 98, 55, 33]

const findSmallestInArray = () => {
  let min = array[0]
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i]
    }
  }
  return min
}
console.log(findSmallestInArray())
