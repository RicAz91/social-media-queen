class Queen {
  constructor(game) {
    this.x = 250;
    this.y = 100; // this will change with the jump
    this.gravity = 0.1;
    this.velocity = 0;
    this.jumpForce = -5;
    this.conter = 0;
  }

  logic() {
    //put the logic
    this.velocity += this.gravity;
    this.y += this.velocity;

    if (this.y > 300) {
      this.y = 300;
      this.velocity = 0;
    } else if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }
  }

  jumpF() {
    this.velocity += this.jumpForce;
  }

  paint() {
    // load the image url
    const queenImage = new Image();
    const queenImageUrl = './images/QJump (1).png'; //direction()
    queenImage.src = queenImageUrl;
    queenImage.addEventListener('load', () => {
      context.drawImage(queenImage, this.x, this.y, 120, 170);
    });
  }
}
