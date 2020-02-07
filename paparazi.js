class Paparazi {
  constructor(game) {
    this.game = game;
    this.x = 0;
    this.y = 300;
    this.width = 120;
    this.height = 180;
  }

  logic() {
    let gain = 0.025;
    this.x += gain;
  }

  pColision() {
    let queenX = this.game.queen.x;
    let paparaziX = this.x + this.width;
    // TODO - Not using this yet
    let paparaziY = this.y + this.height;

    if (queenX < paparaziX - 40) {
      this.game.fxsounds.lose()
      this.game.gameOver();
    }
  }
  paint() {
    if (this.game === true) {
      context.drawImage(paparaziImage, this.x, this.y, this.width, this.height);
    } else {
      context.drawImage(paparaziImage2, this.x, this.y, this.width, this.height);
    }
  }
}

class SecondCanvasPaparazzi {
  constructor(game) {
    this.x = -30;
    this.y = 35;
  }
  move() {
    this.x += 1.38;
  }
  paint() {
    ctx.drawImage(paparaziImage, this.x, this.y, 30, 30);
  }
}
