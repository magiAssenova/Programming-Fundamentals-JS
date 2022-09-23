function inverseText(initialText){
    let textlenght=Number(initialText.length)
   let inverse=""
   for (let i=(textlenght-1);i>=0;i--){
    let current=initialText.charAt(i)
     inverse+=current}
console.log(inverse)}

   

inverseText("helo")