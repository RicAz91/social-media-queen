class Game {
  constructor(game) {
    this.game = game;
    this.gameIsRunning = false;
    this.winningObjective = 927;

    this.click();
    this.key();
  }

  startGame() {
    this.restart();
    if (!this.gameIsRunning) {
      this.gameIsRunning = !this.gameIsRunning;
      this.loop();
    }
  }

  loop(timestamp) {
    console.log(this.likes);
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
    $counter.innerText = 0;
    $counterF.innerText = 0;
    this.clickCounter = 0;
    this.obstacles = [];
    this.createObstacles();
    this.likes = 0;
    this.followers = 0;
  }

  gameOver() {
    this.gameIsRunning = !this.gameIsRunning;
  }

  winGame() {
    this.gameIsRunning = !this.gameIsRunning;
  }

  createObstacles() {
    for (let i = 0; i < 400; i++) {
      const obstacle = new Objects(590 + i * 75, this);
      this.obstacles.push(obstacle);
    }
  }

  paint() {
    this.cleanCanvas();
    if (this.gameIsRunning) {
      this.background.paint();
      if (this.followers < 100) {
        this.queen.paint();
      } else {
        this.queen.paintC();
      }
      for (let i = 0; i < this.obstacles.length; i++) {
        this.obstacles[i].paint();
      }
      this.paparazi.paint();
    } else if (!this.gameIsRunning && this.clickCounter === this.winningObjective) {
      context.drawImage(winImg, 0, 0, 700, 500);
    } else if (!this.gameIsRunning) {
      context.drawImage(gameOverImg, 0, 0, 700, 500);
    }
    // TODO - MISSING WINNING CONDITION PAINTING
  }

  logic() {
    if (this.clickCounter === this.winningObjective) {
      this.winGame();
    }

    if (this.followers < 0) {
      console.log('gameOver');
      this.gameOver();
    }

    this.queen.logic();
    this.paparazi.logic();

    this.paparazi.pColision();

    for (let i = 0; i < this.obstacles.length; i++) {
      this.obstacles[i].oCollision();
      if (this.obstacles[i].oCollision()) {
        this.obstacles.splice(i, 1);
      }
    }
  }

  cleanCanvas = () => {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  };

  key() {
    window.addEventListener('keydown', event => {
      if (this.gameIsRunning) {
        switch (event.keyCode) {
          case 32:
            this.queen.jumpF();
            break;
        }
      }
    });
  }

  click() {
    window.addEventListener('click', event => {
      if (this.gameIsRunning) {
        this.clickCounter++;
        this.background.move();
        for (let i = 0; i < this.obstacles.length; i++) {
          this.obstacles[i].move();
        }
      }
    });
  }
}
