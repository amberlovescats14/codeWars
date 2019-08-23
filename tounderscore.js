function toUnderscore(string) {
  let number = new RegExp(/[1-9]/g)
  let secondNumber = new RegExp(/[1-9]/)
let final = []
for(let i=0; i< string.length ; i++){
 let temp = string[i]
  if(string[i] === string[i].toUpperCase() &&
  i !== 0 && !number.test(temp) ){
    final.push('_')
    final.push(string[i].toLowerCase())
  }
  else final.push(string[i].toLowerCase())
}
let join = final.join()
join = join.replace(/,/g, '')
let last;
if(string.toString().length === 1 &&
secondNumber.test(string.toString())) last = string
else last = join
return last


}
console.log(toUnderscore('AmberJones'))