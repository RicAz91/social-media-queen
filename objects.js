class Objects{
constructor(game){
this.x = 100;
this.y = 100;
}


randomyzed(){
  
  // const randomWithProbability = () => {
  // let rand = []
  // var notRandomNumbers = [1, 1, 1, 1, 2, 2, 3, 3 ];
  // var idx = Math.floor(Math.random() * notRandomNumbers.length);
  
  // return Number(notRandomNumbers[idx]));

  // if(rand === 1){
  //   this.paintL()
  // } else if(rand  === 2){
  //   this.paintU()
  // } else if (rand  === 3){
  //   this.paintF()
  // } else {
  //   const spyImage = new Image()
  //   const spyImageUrl = "/images/PaparaziRun (1).png" //direction()
  //   spyImage.src = spyImageUrl
  //   spyImage.addEventListener('load', ()=>{
  //   context.drawImage(spyImage,this.x,this.y, 210,210)})
  
  
  // }

  
  //randomWithProbability()



}
move(){
  this.x -= 10
}

paint(){
  // load the image url
  if(true){
    const likeImage = new Image()
    const likeImageUrl = "./images/like.png" //direction()
    likeImage.src = likeImageUrl
    likeImage.addEventListener('load', ()=>{
    context.drawImage(likeImage,this.x,this.y, 50,50)})
  }
  else if(false){
    const unlikeImage = new Image()
    const unlikeImageUrl = "./images/unlike.png" //direction()
    unlikeImage.src = unlikeImageUrl
    unlikeImage.addEventListener('load', ()=>{
    context.drawImage(unlikeImage,this.x,this.y, 100,100)})
  }
  else if(1===1){
    const folowersImage = new Image()
    const folowersImageUrl = "./images/folow.png" //direction()
    folowersImage.src = folowersImageUrl
    folowersImage.addEventListener('load', ()=>{
    context.drawImage(folowersImage,this.x,this.y, 210,210)})

  } else {
    console.log("ERROR")
  }
  
 

 
    

  
}


}





