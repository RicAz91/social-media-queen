const $canvas = document.querySelector('canvas');

const context = $canvas.getContext('2d');

class Game {
  constructor(game) {
    this.queen = new Queen(this);
    this.background = new Background(this);
    //this.objects = new Objects(this)
    this.obstacles = [];
    this.createObstacles();
    this.click();
    this.key();
  }

  createObstacles() {
    for (let i = 0; i < 100; i++) {
      const obstacle = new Objects(590 + i * 200, this);
      this.obstacles.push(obstacle);
    }
  }

  collision() {
    console.log(this.obstacles[0].x);
    // shoud be between this and that
    for (let i = 0; i < this.obstacles.length; i++) {
      let obstacleX = this.obstacles[i].x;
      let obstacleY = this.obstacles[i].y;
      let queenX = this.queen.x;
      let queenY = this.queen.y;
      if (
        obstacleX > queenX &&
        obstacleX < queenX + 120 &&
        obstacleX + 75 < queenX &&
        obstacleX + 75 > queenX + 120 &&
        obstacleY < queenY &&
        obstacleY > queenY + 170 &&
        obstacleY + 75 > queenY &&
        obstacleY + 75 < queenY + 170
      ) {
        console.log('hihih');
      }
    }
  }

  paint() {
    this.background.paint();
    this.queen.paint();
    //this.objects.paint()
    for (let i = 0; i < this.obstacles.length; i++) {
      this.obstacles[i].paint();
    }
  }

  logic() {
    this.queen.logic();
    //this.objects.logic()
  }

  loop = timestamp => {
    this.logic();
    this.paint();

    window.requestAnimationFrame(timestamp => this.loop(timestamp));
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
      this.collision();
      if (event) {
        this.background.move();
        for (let i = 0; i < this.obstacles.length; i++) {
          this.obstacles[i].move();
        }
        //this.objects.move()
        console.log('click');
      }
    });
  }
}

function resetCanvas() {
  context.clearRect(0, 0, 500, 700);
}

// const obstacles = [];

// for (let i = 0; i < 100; i++) {
//   const obstacle = new Objects(500 + i * 20);
//   obstacles.push(obstacle);
// }

// const runLogic = () => {
//   for (let obstacle of obstacles) {
//     obstacle.runLogic();
//   }
// };
