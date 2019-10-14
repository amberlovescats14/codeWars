// the first person goes into team 1
// the second into team 2
// the third goes into team 1..and so on

const rowWeights = (array) => {
    let teamOne = 0
    let teamTwo = 0
    array.forEach((a,i)=> {
        if(i % 2 === 0) teamOne += a;
        else teamTwo += a
    })
    return [teamOne, teamTwo]
}
rowWeights([0,1,2,3,4,5,6])