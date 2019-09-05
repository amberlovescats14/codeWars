//recognize what the ref is saying

function scoreboard(string) {
  let score = [];
  let split = string.split(' ');
  split.forEach(s => {
    switch(s.toLowerCase()){
      case "one":  return score.push(1);
      case "two":  return score.push(2);
      case "three":  return score.push(3);
      case "four":  return score.push(4);
      case "five":  return score.push(5);
      case "six":  return score.push(6);
      case "seven":  return score.push(7);
      case "eight":  return score.push(8);
      case "nine":  return score.push(9);
      case "nil":  return score.push(0);
      default: return

    }
  })
  return score
}
scoreboard("The score is four nil") //, [4,0]

