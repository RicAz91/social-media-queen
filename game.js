class Game {
  constructor(game) {
    this.game = game;
    this.gameIsRunning = false;
    this.winningObjective = 927;
  }

  startGame() {
    this.restart();
    if (!this.gameIsRunning) {
      this.gameIsRunning = !this.gameIsRunning;
      this.loop();
    }
  }

  loop(timestamp) {
    this.logic();
    this.paint();

    if (this.gameIsRunning) {
      window.requestAnimationFrame(timestamp => this.loop(timestamp));
    }
  }

  restart() {
    this.queen = new Queen(this);
    this.background = new Background(this);
    this.paparazi = new Paparazi(this);
    this.click();
    this.key();

    this.clickCounter = 0;
    this.obstacles = [];
    this.createObstacles();

    this.likes = 0;
    this.folowers = 0;
  }

  gameOver() {
    this.gameIsRunning = !this.gameIsRunning;
  }

  //TODO - FINISH WIN CONDITION DRAWING
  winGame() {
    this.gameIsRunning = !this.gameIsRunning;
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
    let paparaziX = this.paparazi.x + this.paparazi.width;
    // TODO - Not using this yet
    let paparaziY = this.paparazi.y + this.paparazi.height;

    if (queenX < paparaziX - 40) {
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
        $counter.innerText = this.likes;
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
        $counterF.innerText = this.folowers;
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
        this.folowers += 10;
        this.likes += 1000;
        this.obstacles.splice([i], 1);
        $counter.innerText = this.likes;
        $counterF.innerText = this.folowers;
      }
    }
  }

  paint() {
    this.cleanCanvas();
    if (this.gameIsRunning) {
      this.background.paint();
      if (this.folowers < 1) {
        this.queen.paint();
      } else {
        this.queen.paintC();
      }
      for (let i = 0; i < this.obstacles.length; i++) {
        this.obstacles[i].paint();
      }
      this.paparazi.paint();
    } else if (!this.gameIsRunning) {
      context.drawImage(gameOverImg, 0, 0, 700, 500);
    }
    // TODO - MISSING WINNING CONDITION PAINTING
  }

  logic() {
    if (this.clickCounter === this.winningObjective) {
      this.winGame();
    }

    console.log(this.folowers);
    if (this.folowers < 0) {
      console.log('gameOver');
      this.gameOver();
    }

    this.queen.logic();
    this.paparazi.logic();

    this.pColision();
    this.oCollision();
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
      this.clickCounter++;
      this.background.move();
      for (let i = 0; i < this.obstacles.length; i++) {
        this.obstacles[i].move();
      }
    });
  }
}
