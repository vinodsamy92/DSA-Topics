const recursion = (n) => {
  if (n > 0) {
    for (let i = 1; i <= n; i = i * 2) {
      console.log(n)
    }
    recursion(n - 1)
  }
}
recursion(3)
