class Background{
  constructor(game){
    this.x = 0
    this.y = 0
  }

runLogic(){

}
move(){
  this.x = -100
}

paint(){
  const backgroundImage = new Image()
const backgroundImageUrl = "./images/newBackgroundQ12.jpg" //direction()
backgroundImage.src = backgroundImageUrl
backgroundImage.addEventListener('load', ()=>{
context.drawImage(backgroundImage,this.x,this.y)})
}


}
