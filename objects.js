const unlikeImage = new Image();
const unlikeImageUrl = './images/unlike.png'; //direction()
unlikeImage.src = unlikeImageUrl;

const likeImage = new Image();
const likeImageUrl = './images/like.png'; //direction()
likeImage.src = likeImageUrl;

const folowersImage = new Image();
const folowersImageUrl = './images/folow.png'; //direction()
folowersImage.src = folowersImageUrl;

class Objects {
  constructor(x, game) {
    this.x = x;
    this.y = Math.floor(Math.random() * 400);
    this.obstaclesProb = [1, 1, 2, 3, 3, 1, 2, 1];
    this.oneRandObst = this.obstaclesProb[Math.floor(Math.random() * this.obstaclesProb.length)];
  }

  logic() {
    // randomyzed(){
    //   var notRandomNumbers = [1, 1, 1, 1, 2, 2, 3, 3 ];
    //   var idx = Math.floor(Math.random() * notRandomNumbers.length);
    //   return Number(notRandomNumbers[idx]);
    //   // if(rand === 1){
    //   //   this.paintL()
    //   // } else if(rand  === 2){
    //   //   this.paintU()
    //   // } else if (rand  === 3){
    //   //   this.paintF()
    //   // } else {
    //   //   const spyImage = new Image()
    //   //   const spyImageUrl = "/images/PaparaziRun (1).png" //direction()
    //   //   spyImage.src = spyImageUrl
    //   //   spyImage.addEventListener('load', ()=>{
    //   //   context.drawImage(spyImage,this.x,this.y, 210,210)})
    //   // }
    //   //randomWithProbability()
    // }
    // // randomObjectArr(){
    // //   for (i=0; i < 100; i++ ){
    // //     this.obstacles.push(this.randomyzed())
    // //   }
    //}


    // check if the type is X put grvity 
  }
  move() {
    this.x -= 10;
    return this.x;
    console.log(this.x);
  }

  paint() {
    // load the image url

    if (this.oneRandObst === 1) {
      context.drawImage(likeImage, this.x, this.y, 75, 75);
    } else if (this.oneRandObst === 2) {
      context.drawImage(unlikeImage, this.x, this.y, 75, 75);
    } else if (this.oneRandObst === 3) {
      context.drawImage(folowersImage, this.x, this.y, 75, 75);
    } else {
      console.log('ERROR');
    }
  }
}
