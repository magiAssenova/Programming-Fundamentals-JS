function triangle (number){
    for (i=1;i<=number;i++){
        let row=""
        for (let a=1;a<=i;a++){
         row+=` ${i}`
        }
        console.log(row)

    }
}
triangle(3)