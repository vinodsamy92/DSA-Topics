const array = [4, -3, -2, 2, 3, 1, -2, -3, 4, 2, -6, -3, -1, 3, 1, 2]

const findMaximumSubArray = () => {
  let max_so_far = array[0]
  let max_end_here = 0
  let start = 0
  let search = 0
  let end = 0
  for (let i = 0; i < array.length; i++) {
    max_end_here = max_end_here + array[i]
    if (max_so_far < max_end_here) {
      max_so_far = max_end_here
      start = search
      end = i
    }
    if (max_end_here < 0) {
      max_end_here = 0
      search = i + 1
    }
  }
  return start
}

console.log(findMaximumSubArray())
