class Background {
  constructor(game) {
    this.x = 0;
    this.y = 0;
  }

  runLogic() {}
  move() {
    this.x -= 20;
  }

  paint() {
    context.drawImage(backgroundImage, this.x, this.y);
  }
}


class ScanvasBackground {
  constructor(game) {
  this.x = 0;
  this.y = 0;

}
paint() {
  ctx.drawImage(backgroundImage,0, 0,700,75);
  }
}