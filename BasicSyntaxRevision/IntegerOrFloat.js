function integerOrFloat(num1,num2,num3){
let sum =num1+num2+num3
let type=""
if (Math.floor(sum)===sum){
type="Integer" }
else{
    type="Float"
}
console.log(`${sum} - ${type}` )
}
integerOrFloat(9, 100, 1.1 )