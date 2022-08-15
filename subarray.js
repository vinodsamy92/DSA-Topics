const nums = [1, 2, -2, 1, 2]

function getSubarrayMaximumVal() {
  let max = 0
  let result = []
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      console.log(`${nums[i]} and ${nums[j]}`)
      if (max < nums[i] + nums[j] && nums[i] !== nums[j]) {
        max = nums[i] + nums[j]
        console.log("max", max)
        //   result.push(i, j)
      }
    }
  }
  // console.log(result)
  console.log(max)
}
console.log(getSubarrayMaximumVal())
