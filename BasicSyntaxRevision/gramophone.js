function gramofone(bandName,albumName,songName){
    let songduration= (albumName.length * bandName.length) * songName.length / 2 
   // console.log(songduration)
    let rotation=Math.ceil(songduration/2.5)
    console.log( `The plate was rotated ${rotation} times.` )
}
gramofone('Black Sabbath', 'Paranoid',

'War Pigs' )