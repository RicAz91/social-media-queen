const winSound = new Audio();
const winSoundUrl = '/sound/Win sound.wav';
winSound.src = winSoundUrl;

const likeSound = new Audio();
const likeSoundUrl = '/sound/341695__projectsu012__coins-1.wav';
likeSound.src = likeSoundUrl;

const loseSound = new Audio();
const loseSoundUrl = '/sound/270334__littlerobotsoundfactory__jingle-lose-01.wav';
loseSound.src = loseSoundUrl;

const unlikeSound = new Audio();
const unlikeSoundUrl = '/sound/220174__gameaudio__spacey-loose.wav';
unlikeSound.src = unlikeSoundUrl;

class Sounds {
  constructor(game){

  }
like(){
  likeSound.play()
}
unlike(){
  unlikeSound.play()
}

win(){
  winSound.play()
}

lose(){
  loseSound.play()
}

}