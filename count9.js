// return the number of 9's used to count out 1 to n
const func = n => {
    let count = 0
    for(let i = 1; i<= n; i++){
        count += countNumberOf9s(i)
    }
    return count
}

function countNumberOf9s(n){
    let counter = 0
    if(n % 10 == 9) counter++
    if(n < 10) return counter;
    return counter + countNumberOf9s(Math.floor(n / 10))
}

console.log(func(1000))

// 983246992084749

// 98324699208474 = 153 9s

//                x
// 98324699208474(0) = 153 * (x + 1) 9s = 153 9s

// 98324699208474(1) = 153 * (x + 1) 9s = 153 * 2 = 306 9s



// const count9sEfficiently = n => {

// }


