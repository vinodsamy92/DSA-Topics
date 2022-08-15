const recursion = (n) => {
  //T(n)
  if (n > 0) {
    //1
    for (let i = 0; i < n; i++) {
      //n+1
      console.log(n) //n
    }
    recursion(n - 1) //T(n-1)
  }
}
recursion(3)
//Recurrence Relation :  T(n)=T(n-1)+2n+2
