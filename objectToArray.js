const f = (arr) => {
  let reduce = arr.reduce((obj, item) => {
    if(!obj[item]) obj[item] = 0;
    obj[item]++
    return obj
  },{})
  return reduce
}


f([1,2,3,4,5,5,6,1])


