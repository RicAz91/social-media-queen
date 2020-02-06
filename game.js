class Game {
  constructor(game) {
    this.game = game;
    this.gameIsRunning = false;
    this.winningObjective = 463;
    this.click();
    this.key();
    this.sound = new Audio('/sound/BoxCat_Games_-_02_-_Mt_Fox_Shop.mp3');
    this.audioOnOff = false
    
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
    this.audio()
    if (this.gameIsRunning) {
      
      window.requestAnimationFrame(timestamp => this.loop(timestamp));
    }
  }

  restart() {
    this.openFullscreen();
    this.sCanvasBackground = new ScanvasBackground(this);
    this.littleQueen = new SecondCanvasQueen(this);
    this.queen = new Queen(this);
    this.background = new Background(this);
    this.paparazi = new Paparazi(this);
    this.littlePaparazzi = new SecondCanvasPaparazzi(this);
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
    this.sCanvasBackground.paint();
    this.littleQueen.paint();
    this.littlePaparazzi.paint();

    if (this.gameIsRunning) {
      this.background.paint();
      if (this.followers < 1000) {
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
      ctx.drawImage(gameOverBar,0,0,700,75)
    } else if (!this.gameIsRunning) {
      context.drawImage(gameOverImg, 0, 0, 700, 500);
      ctx.drawImage(gameOverBar,0,0,700,75)
    }
   
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
    ctx.clearRect(0, 0, context.canvas.width, context.canvas.height);
  };



  // activateAudioOnOffKey = () => {
    
  //   document.getElementById('.sound').onclick = function() {
  //     if (this.audioOnOff === true) {
  //       this.sound.pause();
  //       this.audioOnOff = false;
  //     } else {
  //       this.sound.play();
  //       this.audioOnOff = true;
  //     }
  //   };
  // };
   

  
  audio(){
    if(!this.gameIsRunning){
      this.sound.pause()
    } else{
      this.sound.play()

    }
  }
  
   
  key() {
    window.addEventListener('keydown', event => {
      if (this.gameIsRunning) {
        switch (event.keyCode) {
          case 32:
            this.clickCounter++;
            this.littleQueen.move();
            this.littlePaparazzi.move();
            this.background.move();
            for (let i = 0; i < this.obstacles.length; i++) {
              this.obstacles[i].move();
            }
        }
      }
    });
  }

  click() {
    window.addEventListener('click', event => {
      if (this.gameIsRunning) {
        this.queen.jumpF();
      }
    });
  }
  openFullscreen() {
    var elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      /* IE/Edge */
      elem.msRequestFullscreen();
    }
  }
}
