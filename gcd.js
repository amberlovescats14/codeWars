const gcd = ( num=1, a,b, arr=[]) => {
    let end = a > b ? b : a
    if(num === end ) return Math.max(...arr)
    if(a /num === parseInt(a/num))
        if(b/num === parseInt(b/num)) arr.push(num)
    num++
    return gcd(num++, a, b, arr)
}
console.log(gcd(1,50,20))