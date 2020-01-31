class Game{
  constructor(game){
this.queen = new Queen(this)
this.background = new Background(this)
  }

paint(){
  this.background.paint()
  this.queen.paint()
  

}

logic(){
  this.queen.logic()
}
  
loop = (timestamp) => {
  this.queen.logic()
  this.queen.paint()
  window.requestAnimationFrame(timestamp => this.loop(timestamp));
}


}