const $canvas = document.querySelector('canvas');

const context = $canvas.getContext('2d');


function startGame(){
let game = new Game()

game.paint()
game.logic()
game.loop()


}


startGame()