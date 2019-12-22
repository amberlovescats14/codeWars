const getMiddle = (s) => {
    let middleIndex
    let result = ''
    if(s.length % 2 === 0){
        middleIndex = s.length/2
        result += s.charAt(middleIndex-1)
        result += s.charAt(middleIndex)
    } else {
        middleIndex = (s.length+1) /2
        result += s.charAt(middleIndex-1)
    }
    return result 
}

console.log(getMiddle("hadam"))