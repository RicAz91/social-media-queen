class Background{
  constructor(game){
    this.x = 0
    this.y = 0
  }

runLogic(){

}

paint(){
  const backgroundImage = new Image()
const backgroundImageUrl = "./images/129150167-princess-background-mermaid-rainbow-magic-stars-pink-unicorn-pattern-fantasy-galaxy-fairytale-graphi.jpg" //direction()
backgroundImage.src = backgroundImageUrl
backgroundImage.addEventListener('load', ()=>{
context.drawImage(backgroundImage,this.x,this.y, 700,500)})
}


}
