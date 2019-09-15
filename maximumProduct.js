const adjacentElementsProduct = (array) => {
  let sort = array.sort((a,b) => a - b)
  return Number(sort[sort.length-1]) * Number(sort[sort.length-2])
}
let arr = [1, 11, 7  ,-4, 8]


console.log(adjacentElementsProduct(arr))