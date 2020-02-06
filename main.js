function paintInst() {
  instImage.addEventListener('load', () => {
    context.drawImage(instImage, 0, 0, 700, 500);
    ctx.drawImage(backgroundImage,0, 0)
  });
}
paintInst();
const game = new Game();

window.addEventListener('keydown', event => {
  switch (event.keyCode) {
    case 13:
      game.startGame();
      console.log('game start');
      break;
  }
});

