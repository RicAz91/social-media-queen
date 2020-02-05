class Background {
  constructor(game) {
    this.x = 0;
    this.y = 0;
  }

  runLogic() {}
  move() {
    this.x -= 10;
  }

  paint() {
    context.drawImage(backgroundImage, this.x, this.y);
  }
}
