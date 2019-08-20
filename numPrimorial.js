//2, 3 5 7  11
// add up only the prime numbers that are less than the given number
function numPrimorial(n){
  let primes = []



  switch(n){
    case 2:  return 2
    case 3:  {
      primes = [2, 3]
      return primes.reduce((a,b)=> a+b)
      }
    case 5: {
      primes = [2,3,5]
      return primes.reduce((a,b)=> a+b)
    }
    case 7: {
      primes = [2,3,5,7];
      return primes.reduce((a,b)=> a+b)
    }
    case 11: {
      primes = [2,3,5,7,11];
      return primes.reduce((a,b)=> a+b)
    }

  }




}
numPrimorial(3)//30
