class Objects {
  constructor(x, game) {
    this.game = game;
    this.x = x;
    this.y = Math.floor(Math.random() * 350);
    this.height = 75;
    this.width = 75;
    this.obstaclesProb = [1, 1, 2, 2,2, 3, 3, 1, 2, 1];
    this.oneRandObst = this.obstaclesProb[Math.floor(Math.random() * this.obstaclesProb.length)];
  }

  oCollision() {
    // shoud be between this and that

    let queenX = this.game.queen.x;
    let queenY = this.game.queen.y;
    let queenXplus = this.game.queen.x + this.game.queen.width;
    let queenYplus = this.game.queen.y + this.game.queen.height;

    if (
      //working
      queenXplus > this.x &&
      queenXplus > this.x + 75 &&
      queenX < this.x &&
      queenX < this.x + 75 &&
      queenY < this.y &&
      queenY < this.y + 75 &&
      queenYplus > this.y &&
      queenYplus > this.y + 75 &&
      this.oneRandObst === 1
    ) {
      this.game.likes += 100;
      $counter.innerText = this.game.likes;
      return true;
    } else if (
      queenXplus > this.x &&
      queenXplus > this.x + 75 &&
      queenX < this.x &&
      queenX < this.x + 75 &&
      queenY < this.y &&
      queenY < this.y + 75 &&
      queenYplus > this.y &&
      queenYplus > this.y + 75 &&
      this.oneRandObst === 2
    ) {
      this.game.followers -= 50;
      $counterF.innerText = this.game.followers;
      return true;
    } else if (
      queenXplus > this.x &&
      queenXplus > this.x + 75 &&
      queenX < this.x &&
      queenX < this.x + 75 &&
      queenY < this.y &&
      queenY < this.y + 75 &&
      queenYplus > this.y &&
      queenYplus > this.y + 75 &&
      this.oneRandObst === 3
    ) {
      this.game.followers += 100;
      this.game.likes += 1000;
      $counter.innerText = this.game.likes;
      $counterF.innerText = this.game.followers;
      return true;
    }
  }

  move() {
    this.x -= 10;
    return this.x;
  }

  paint() {
    if (this.oneRandObst === 1) {
      context.drawImage(likeImage, this.x, this.y, this.width, this.height);
    } else if (this.oneRandObst === 2) {
      context.drawImage(unlikeImage, this.x, this.y, 75, 75);
    } else if (this.oneRandObst === 3) {
      context.drawImage(followersImage, this.x, this.y, this.width, this.height);
    } else {
      console.log('ERROR');
    }
  }
}
