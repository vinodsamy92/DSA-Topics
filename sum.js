const sum = (arr, n) => {
  let sum = 0
  for (let i = 0; i < n; i++) {
    //n+1 times
    sum += arr[i] //n times
  }
  return sum // 1 times constant

  //Time complexity=2n+3=> O(n)
}
console.log(sum([5, 7, 8, 2, 3], 5))
