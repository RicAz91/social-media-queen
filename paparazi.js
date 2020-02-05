const paparaziImage = new Image();
const paparaziImageUrl = './images/PaparaziRun (1).png'; //direction()
paparaziImage.src = paparaziImageUrl;

const paparaziImage2 = new Image();
const paparaziImage2Url = './images/PaparaziRun (2).png'; //direction()
paparaziImage2.src = paparaziImage2Url;

const paparaziImage3 = new Image();
const paparaziImage3Url = './images/PaparaziRun (3).png'; //direction()
paparaziImage3.src = paparaziImage3Url;

class Paparazi {
  constructor(game) {
    this.x = 0;
    this.y = 300;
    this.width = 120
    this.height = 180
  }

  logic() {
    let gain = 0.016;
    setTimeout(() => (this.x += gain), 1000);

    console.log('move');
  }

  paint() {
    if (this.game === true) {
      context.drawImage(paparaziImage, this.x, this.y, this.width, this.height);
    } else {
      context.drawImage(paparaziImage2, this.x, this.y, this.width, this.height);
    }
  }
}

// } else {
//   context.drawImage(paparaziImage3, this.x, this.y, 150, 180);
// }
