let gameIsRunning = true;
const instImage = new Image();
const instImageUrl = './images/how to play.png'; //direction()
instImage.src = instImageUrl;

function paintInst() {
  instImage.addEventListener('load', () => {
    context.drawImage(instImage, 0, 0, 700, 500);
  });
}

function startGame() {
  let game = new Game();
  game.loop();
}

function enter() {
  window.addEventListener('keydown', event => {
    switch (event.keyCode) {
      case 13:
        startGame();
        console.log('game start');
        break;
    }
  });
}
paintInst();
enter();
