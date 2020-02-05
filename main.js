const instImage = new Image();
const instImageUrl = './images/how to play.png'; //direction()
instImage.src = instImageUrl;

// function gameCheck(){
//   if(gameIsRunning = false){
//     gameOver();
//   }
// }
function paintInst() {
  instImage.addEventListener('load', () => {
    context.drawImage(instImage, 0, 0, 700, 500);
  });
}
paintInst();

function enter() {
  window.addEventListener('keydown', event => {
    switch (event.keyCode) {
      case 13:
        let game = new Game();
        gameIsRunning = true
        console.log('game start');
        break;
    }
  });
}
enter()