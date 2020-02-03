class Objects{
constructor(game){
this.x = 100;
this.y = 100;
}


randomyzed(){

  
}
move(){
  this.x -= 10
}

paint(){
  // load the image url
  const likeImage = new Image()
  const likeImageUrl = "./images/like.png" //direction()
  likeImage.src = likeImageUrl
  likeImage.addEventListener('load', ()=>{
  context.drawImage(likeImage,this.x,this.y, 50,50)})
  
  const unlikeImage = new Image()
  const unlikeImageUrl = "./images/unlike.png" //direction()
  unlikeImage.src = unlikeImageUrl
  unlikeImage.addEventListener('load', ()=>{
  context.drawImage(unlikeImage,this.x,this.y, 100,100)})
  
  const folowersImage = new Image()
  const folowersImageUrl = "./images/folow.png" //direction()
  folowersImage.src = folowersImageUrl
  folowersImage.addEventListener('load', ()=>{
  context.drawImage(folowersImage,this.x,this.y, 210,210)})

}




}




