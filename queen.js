const queenImage = new Image();
const queenImageUrl = './images/QJump (1).png'; //direction()
queenImage.src = queenImageUrl;

const queenImage2 = new Image();
const queenImage2Url = './images/QJump (2).png';
queenImage2.src = queenImage2Url;

const queenImage3 = new Image();
const queenImage3Url = './images/QWalk (1).png';
queenImage3.src = queenImage3Url;

const queenImageC1 = new Image();
const queenImageC1Url = './images/Qwith crown.png';
queenImageC1.src = queenImageC1Url;

const queenImageC2 = new Image();
const queenImageC2Url = './images/Qwith crown2.png';
queenImageC2.src = queenImageC2Url;

const dqueenImage = new Image();
const dqueenImageUrl = './images/QDead.png';
dqueenImage.src = dqueenImageUrl;

class Queen {
  constructor(game) {
    this.x = 250;
    this.y = 100; // this will change with the jump
    this.width = 120
    this.height = 170
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
    if (this.y < 150) {
      context.drawImage(queenImage2, this.x, this.y, this.width, this.height);
    } else if (this.y < 250) {
      context.drawImage(queenImage3, this.x, this.y, this.width, this.height);
    } else {
      context.drawImage(queenImage2, this.x, this.y, this.width, this.height);
    }
  }
  paintC(){
    if (this.y < 250) {
      context.drawImage(queenImageC1, this.x, this.y, this.width, 170);
    } else {
      context.drawImage(queenImageC2, this.x, this.y, this.width, 170);
    }
  }
  paintd(){
    context.drawImage(dqueenImage, this.x, this.y, 170, 170);

  }
}
