function rounding(number,percision){
    if (percision>15){
        percision=15
    }
    let roundedNumber=number.toFixed(percision)
    let endNum=parseFloat(roundedNumber)
    console.log(endNum)
}

rounding(1.12430594069496043423,16)