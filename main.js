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


function gameOver() {
   
    context.drawImage(gameOverImg, 0, 0, 700, 500);
    enter()
    
    
  }

function startGame() {
  resetCanvas()
  let game = new Game();
    game.loop();
}

function enter() {
  window.addEventListener('keydown', event => {
    switch (event.keyCode) {
      case 13:
        resetCanvas()
        startGame();
        console.log('game start');
        break;
    }
  });
}

function resetCanvas() {
  context.clearRect(0, 0, 500, 700);
}
paintInst();

enter();
