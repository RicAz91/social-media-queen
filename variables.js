const $canvas = document.querySelector('canvas');
const context = $canvas.getContext('2d');

let $counter = document.querySelector('h1 span');
let $counterF = document.querySelector('h1:nth-child(2) span');

const gameOverImg = new Image();
const gameOverImgURL = './images/game over.png'; //direction()
gameOverImg.src = gameOverImgURL;

const winImg = new Image();
const winImgURL = './images/win.png'; //direction()
winImg.src = winImgURL;

const backgroundImage = new Image();
const backgroundImageUrl = './images/newBackgroundQ12.jpg'; //direction()
backgroundImage.src = backgroundImageUrl;

const paparaziImage = new Image();
const paparaziImageUrl = './images/PaparaziRun (1).png'; //direction()
paparaziImage.src = paparaziImageUrl;

const paparaziImage2 = new Image();
const paparaziImage2Url = './images/PaparaziRun (2).png'; //direction()
paparaziImage2.src = paparaziImage2Url;

const paparaziImage3 = new Image();
const paparaziImage3Url = './images/PaparaziRun (3).png'; //direction()
paparaziImage3.src = paparaziImage3Url;

const instImage = new Image();
const instImageUrl = './images/how to play.png'; //direction()
instImage.src = instImageUrl;

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