function specialnumbers(n){
    let isSpecial=false
for (let i=1;i<=n;i++){
    let currentnumber=i
    let strI=i.toString()
    let digitlength=strI.length
    let sumofDigits=0
    for ( let j=0;j<=(digitlength-1);j++){
      let currentDigit=Number(strI[j])
      sumofDigits+=currentDigit
    }
   if (sumofDigits=== 5 || sumofDigits=== 7 || sumofDigits=== 11){
        isSpecial=true;
   }
   else{
    isSpecial=false
   }
   console.log(`${currentnumber}-> ${isSpecial}`)

}
}
specialnumbers(7)
