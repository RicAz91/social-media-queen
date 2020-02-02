const $canvas = document.querySelector('canvas');

const context = $canvas.getContext('2d');


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
  
  this.paint()
  this.logic()
  
  

  window.requestAnimationFrame(timestamp => this.loop(timestamp));
}

key(){
  window.addEventListener('keydown', (event) => {

    switch (event.keyCode) {
      case 32:
        console.log('space');
        
       this.queen.jumpF()
       
        break;
  }})
}

click(){
  window.addEventListener("click", (event) => {
   
   
    if(event){
      this.background.move()
      console.log("click")
      
      
    }
        
       
       
        

})
}
}





function resetCanvas(){
  context.clearRect(0, 0, 500, 700);
}
