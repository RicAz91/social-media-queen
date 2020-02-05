let gameIsRunning = true;
const instImage = new Image();
const instImageUrl = './images/how to play.png'; //direction()
instImage.src = instImageUrl;

const gameOverImg = new Image();
const gameOverImgURL = './images/game over.png'; //direction()
gameOverImg.src = gameOverImgURL;

function paintInst() {
  instImage.addEventListener('load', () => {
    context.drawImage(instImage, 0, 0, 700, 500);
  });
}

// function gameCheck(){
//   if(gameIsRunning = false){
//     gameOver();
//   }
// }

function gameOver() {
  cleanCanvas()
  context.drawImage(gameOverImg, 0, 0, 700, 500);
  enter();
}

function startGame() {
  cleanCanvas();
  let game = new Game();
  game.loop();
}

function enter() {
  window.addEventListener('keydown', event => {
    switch (event.keyCode) {
      case 13:
        startGame();
        cleanCanvas();
        console.log('game start');
        break;
    }
  });
}

const cleanCanvas = () => {
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);
};
paintInst();

enter();
