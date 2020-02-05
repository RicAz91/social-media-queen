class Paparazi {
  constructor(game) {
    this.x = 0;
    this.y = 300;
    this.width = 120;
    this.height = 180;
  }

  logic() {
    let gain = 0.016;
    this.x += gain;
  }

  paint() {
    if (this.game === true) {
      context.drawImage(paparaziImage, this.x, this.y, this.width, this.height);
    } else {
      context.drawImage(paparaziImage2, this.x, this.y, this.width, this.height);
    }
  }
}
