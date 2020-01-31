class Queen{
  constructor(game){
    this.x = 350
    this.y = 100 // this will change with the jump
    this.gravity = 10;
    this.velocity = 0
  }

 colide(){

  }

  logic(){
    //put the logic
    this.velocity += this.gravity
    this.y += this.velocity; 
  }

  paint(){
    // load the image url
const queenImage = new Image()
const queenImageUrl = "./images/kisspng-queen-vector-graphics-portable-network-graphics-ro-mail-ru-5c7526c18229c8.2702900915511815055332.png" //direction()
queenImage.src = queenImageUrl
queenImage.addEventListener('load', ()=>{
context.drawImage(queenImage,this.x,this.y, 100,170)})
  }
}