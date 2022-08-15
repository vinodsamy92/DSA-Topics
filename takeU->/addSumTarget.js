const array = [2, 6, 5, 8, 11]
const target = 13

const addSumTarget = (array, target) => {
  let newHash = new Map()
  let result = []
  for (let i = 0; i < array.length; i++) {
    if (newHash.has(target - array[i])) {
      result[0] = i
      result[1] = newHash.get(target - array[i])
      return result
    }
    newHash.set(array[i], i)
  }
  return result
}

console.log(addSumTarget(array, target))
