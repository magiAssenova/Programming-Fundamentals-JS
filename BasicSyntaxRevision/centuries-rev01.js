function centuries (count){
    let years=count*100
    let  days=Math.trunc(years*365.2422 )
    let hours=(days)*24
    let mins=60*hours
    let secs=60*mins
    console.log(`${count} centuries = ${years} years = ${days} days = ${hours} hours = ${mins} minutes`)
 
 }
 centuries(2)