// this function returns every third number
const func = arr => {
  let everyThird = []
  arr.forEach((n, i)=> {
    if(i %3 === 0) everyThird.push(n)
  })
  return everyThird
}

let numbers = [0,1,2,3,4,5,6,7,8,9,10,11,12]
console.log(func(numbers))

// this function returns everyFourth
const func2 = arr => {
  let everyFourth = []
  arr.forEach((n, i)=> {
    if(i %4 === 0) everyFourth.push(n)
  })
  return everyFourth
}

let numbers2 = [0,1,2,3,4,5,6,7,8,9,10,11,12]
console.log(func2(numbers2))
