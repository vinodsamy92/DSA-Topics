// int main()
// {
//     int n;
//     cin>>n;

//     int q=2;
//     int arr[100000] = {0};
//     arr[0] = 1;
//     int len = 1;
//     int x = 0;
//     int num = 0;
//     while(q<=n)
//     {
//         x=0;
//         num =0;
//         while(x<len)
//         {
//             arr[x] = arr[x] *q;
//             arr[x] = arr[x]+num;
//             num = arr[x]/10;
//             arr[x] = arr[x]%10;
//             x++;
//         }
//         while(num!=0)
//         {
//             arr[len] = num%10;
//             num = num/10;
//             len++;
//         }
//         q++;
//     }
//     len--;
//     while(len>=0)
//     {
//         cout<<arr[len];
//         len = len-1;
//     }
// }

const findFactorialLargeInArray = (n) => {
  let q = 2
  let arr = [0]
  arr[0] = 1
  let len = 1
  let x = 0
  let num = 0

  while (q <= n) {
    x = 0
    num = 0
    while (x < len) {
      arr[x] = arr[x] * q
      arr[x] = arr[x] + num
      num = arr[x] / 10
      arr[x] = arr[x] % 10
      x++
    }
    while (num != 0) {
      arr[len] = num % 10
      num = num / 10
      len++
    }
    q++
  }
  len--
  while (len >= 0) {
    // console.log(arr[len])
    len = len - 1
  }
  return len
}

findFactorialLargeInArray(5)
