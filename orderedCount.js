// Make the text into an Object
// Sort the object by values
// return decending array
const orderedCount = text => {
  let arr = text.split('')
  let reduce = arr.reduce((obj, item)=> {
    if(!obj[item]) obj[item] = 0
    obj[item]++
    return obj
  },{})
  let entries = Object.entries(reduce)
  let sort = entries.sort((a,b)=> Number(a[1]) < Number(b[1]))
  return sort
}
console.log(orderedCount("abracadabra"))

//[['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]]