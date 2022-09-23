function studentinfo(name,age,grade){
    grade=Number(grade)
    console.log(`Name:${name}, Age:${age}, Grade:${(grade.toFixed(2))}`)
}
studentinfo ('John','14','5.556')