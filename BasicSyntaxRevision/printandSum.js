function printAndSuma(min,max){
let print=""
let sum=0
for (a=min;a<=max;a++){
    print+=` ${a}`
    sum+=a
}
console.log(print)
console.log(`Sum: ${sum}`)
}
printAndSuma(1,3)