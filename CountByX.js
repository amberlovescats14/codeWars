const countByX = (x, n) => {
    let result = []
    for(let i=1; i< Number.MAX_SAFE_INTEGER;i++){
        if(result.length === n ) break;
        else result.push(i*x)
    }
    return result;
}

console.log(countByX(2, 5))