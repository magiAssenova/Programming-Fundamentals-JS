function englishName (year){
    let text=""+year
    let nameLenght=(text.length)
    let lastDigit=text.charAt(nameLenght-1)
   //console.log(lastDigit)
    
    switch(lastDigit){
        case "1":
            console.log("one")
            break;
        case "2":
            console.log("two")
            break;
        case "3":
            console.log("tree")
            break;
        case "4":
            console.log("four")
            break;
        case "5":
                console.log("five")
                break;
        case "6":
                    console.log("six")
                    break;
        case "7":
             console.log("seven")
                break;
        case "8":
                    console.log("eight")
                       break;
                       case "":
                        console.log("nine")
                           break;
        
        case "9":
         console.log("nine")
         break;
         case "0":
            console.log("zero")
            break;
        

    }
}
englishName(120)