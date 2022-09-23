function rightPlace(word1,character,word2){
    let result=word1.replace('_',character)
    let output=result===word2?"Matched":"Not Matched";
    console.log(output)
  
}
rightPlace('Str_ng', 'i',

'String'  )
