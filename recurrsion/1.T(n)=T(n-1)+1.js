const recursion = (n) => {
  if (n > 0) {
    console.log(n)
    recursion(n - 1)
  }
}
recursion(3)
//n+1 times call
//n times executing
