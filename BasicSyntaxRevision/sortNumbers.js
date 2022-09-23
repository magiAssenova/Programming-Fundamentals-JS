function sort(a,b,c){
    let biggest=0
    let middle=0
    let smallest=0
    if ( a>=b && a>=c){
        biggest=a
        if(b>=c){
            middle=b
            smallest=c
        }
        else if (b<c){
            smallest=b
            middle=c
        }
    }
    if ( b>=a && b>=c){
        biggest=b
        if(a>=c){
            middle=a
            smallest=c
        }
        else if (a<c){
            smallest=a
            middle=c
        }
    }
    if ( c>=a && b<=c){
        biggest=c
        if(a>=b){
            middle=a
            smallest=b
        }
        else if (a<b){
            smallest=a
            middle=b
        }
    }
    console.log(biggest)
    console.log(middle)
    console.log(smallest)
}
sort(8,5,12)