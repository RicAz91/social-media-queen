const $canvas = document.querySelector('canvas');

const context = $canvas.getContext('2d');

let counter = document.querySelector('h1 span');
let counterF = document.querySelector('h1:nth-child(2) span');

let gameIsRunning = false;

const gameOverImg = new Image();
const gameOverImgURL = './images/game over.png'; //direction()
gameOverImg.src = gameOverImgURL;

const winImg = new Image();
const winImgURL = './images/win.png'; //direction()
winImg.src = winImgURL;

class Game {
  constructor(game) {
    this.cleanCanvas();
    this.queen = new Queen(this);
    this.background = new Background(this);
    this.paparazi = new Paparazi(this);
    //this.objects = new Objects(this)
    this.obstacles = [];
    this.createObstacles();
    this.isGameRunning();
    this.click();
    this.key();
    this.likes = 0;
    this.folowers = 0;
    this.clickCounter = 0;
    this.gameIsRunning = false;
  }

  startGame() {
    this.restart();
    if (!this.gameIsRunning) {
      this.gameIsRunning = !this.gameIsRunning;
      this.loop();
    }
  }

  isGameRunning() {
    if (this.gameIsRunning && this.clickCounter === 927) {
      this.winGame();
    } else if (this.gameIsRunning && this.folowers < 0) {
      this.gameOver();
    } else {
      this.loop();
      window.requestAnimationFrame(loop => this.isGameRunning(loop));
    }
  }

  restart() {
    this.queen = new Queen(this);
    this.background = new Background(this);
    this.paparazi = new Paparazi(this);
    counter.innerText = 0;
    counterF.innerText = 0;
    this.clickCounter = 0;
    this.obstacles = [];
    this.createObstacles();
  }
  
  gameOver() {
    window.cancelAnimationFrame(loop => this.isGameRunning(loop));
    this.gameIsRunning = false;
    context.drawImage(gameOverImg, 0, 0, 700, 500);
    //find a way in here to restart game. restart --> clean everything.
  }
  winGame() {
    window.cancelAnimationFrame(timestamp => this.isGameRunning(timestamp));
    context.drawImage(winImg, 0, 0, 700, 500);
  }

  createObstacles() {
    for (let i = 0; i < 100; i++) {
      const obstacle = new Objects(590 + i * 200, this);
      this.obstacles.push(obstacle);
    }
  }

  pColision() {
    let queenX = this.queen.x;
    let queenY = this.queen.y;
    let paparaziX = this.paparazi.x + this.paparazi.width;
    let paparaziY = this.paparazi.y + this.paparazi.height;

    if (queenX < paparaziX - 40) {
      console.log(' game over');

      this.gameOver();
    }
  }

  oCollision() {
    // shoud be between this and that
    for (let i = 0; i < this.obstacles.length; i++) {
      let obstacleX = this.obstacles[i].x;
      let obstacleY = this.obstacles[i].y;
      let queenX = this.queen.x;
      let queenY = this.queen.y;
      let queenXplus = this.queen.x + this.queen.width;
      let queenYplus = this.queen.y + this.queen.height;

      if (
        //working
        queenXplus > obstacleX &&
        queenXplus > obstacleX + 75 &&
        queenX < obstacleX &&
        queenX < obstacleX + 75 &&
        queenY < obstacleY &&
        queenY < obstacleY + 75 &&
        queenYplus > obstacleY &&
        queenYplus > obstacleY + 75 &&
        this.obstacles[i].oneRandObst == 1

        // obstacleX > queenX &&
        // obstacleX < queenX + 120 &&
        // obstacleX + 75 > queenX &&
        // obstacleX + 75 < queenX + 120 &&
        // obstacleY < queenY &&
        // obstacleY > queenY + 170 &&
        // obstacleY + 75 > queenY &&
        // obstacleY + 75 < queenY + 170
      ) {
        console.log('like');
        this.likes += 10;
        this.obstacles.splice([i], 1);
        counter.innerText = this.likes;
      } else if (
        queenXplus > obstacleX &&
        queenXplus > obstacleX + 75 &&
        queenX < obstacleX &&
        queenX < obstacleX + 75 &&
        queenY < obstacleY &&
        queenY < obstacleY + 75 &&
        queenYplus > obstacleY &&
        queenYplus > obstacleY + 75 &&
        this.obstacles[i].oneRandObst == 2
      ) {
        console.log('unlike');
        this.folowers -= 10;
        this.obstacles.splice([i], 1);
        counterF.innerText = this.folowers;
      } else if (
        queenXplus > obstacleX &&
        queenXplus > obstacleX + 75 &&
        queenX < obstacleX &&
        queenX < obstacleX + 75 &&
        queenY < obstacleY &&
        queenY < obstacleY + 75 &&
        queenYplus > obstacleY &&
        queenYplus > obstacleY + 75 &&
        this.obstacles[i].oneRandObst == 3
      ) {
        console.log('folow');
        this.folowers += 10
        this.likes += 1000;
        this.obstacles.splice([i], 1);
        counter.innerText = this.likes;
        counterF.innerText = this.folowers;
      }
    }
  }

  paint() {
    this.background.paint();

    if (this.folowers < 1) {
      this.queen.paint();
    } else {
      this.queen.paintC();
    }

    //this.objects.paint()
    for (let i = 0; i < this.obstacles.length; i++) {
      this.obstacles[i].paint();
    }

    this.paparazi.paint();
    // let a = (this.paparazi.x % 0.2).toFixed(2);
    // console.log(a);
    // if (a < 0.2) {
    //   this.paparazi.paint();
    // } else {
    //   this.paparazi.paint2();
    // }
  }

  logic() {
    this.queen.logic();
    //this.objects.logic()
    this.paparazi.logic();
    //setTimeout(() => this.paparazi.logic(), 1000);
  }

  loop() {
    this.logic();
    this.paint();
    this.pColision();
  }
  cleanCanvas = () => {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  };

  key() {
    window.addEventListener('keydown', event => {
      switch (event.keyCode) {
        case 32:
          console.log('space');
          this.queen.jumpF();
          break;
      }
    });
  }

  click() {
    window.addEventListener('click', event => {
      this.oCollision();
      this.clickCounter++;
      console.log(this.clickCounter);
      if (event) {
        this.background.move();
        for (let i = 0; i < this.obstacles.length; i++) {
          this.obstacles[i].move();
        }
        return true;

        //this.objects.move()
        console.log('click');
      }
    });
  }
}
