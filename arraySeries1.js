function minSum(arr) {
  let total = 0
  arr = [...arr].sort((a,b)=> a - b)
  let half = arr.length-1
  for(let i=0; i<arr.length/2; i++){
    total += arr[i] * arr[half]
    half--
  }
  return total
}
minSum([12,6,10,26,3,24]) //==> return (342)
// 26*3 + 24*6 + 12*10 = 342