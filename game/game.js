//  de game
var ballx=300;
var bally=300;
var ballSize=40;
var score=0;
var gameState="intro";
var img;

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
    bg = loadImage('https://itzomn.github.io/game/start.jpg');
    bg1 = loadImage('https://itzomn.github.io/diyps2/lounge.jpg');
    bg2 = loadImage('https://itzomn.github.io/game/cute.jpg');
    bg3 = loadImage('https://itzomn.github.io/game/space.jpg');
    bg4 = loadImage('https://itzomn.github.io/game/stars.jpg');
    bg5 = loadImage('https://itzomn.github.io/game/wawa.jpg');
    bg6 = loadImage('https://itzomn.github.io/game/hearts.jpg');
    bg7 = loadImage('https://itzomn.github.io/game/yay.jpg');
 //=================================================================
  img1 = loadImage('https://itzomn.github.io/diyps2/cat1.gif');
  img2 = loadImage('https://itzomn.github.io/game/cat-pop.gif');
  img3 = loadImage('https://itzomn.github.io/game/cutie-cute.gif');
  img4 = loadImage('https://itzomn.github.io/game/cat-twerk.gif');
  img5 = loadImage('https://itzomn.github.io/game/wawa.gif');
  img6 = loadImage('https://itzomn.github.io/game/jumps.gif');
}

function setup() {
createCanvas(600,600);
textAlign(CENTER);
textSize(20);
background(bg);
} // end of setup
 
  function draw() {
  background(bg);

  if(gameState=="intro"){
    levelIntro();
  }

  if(gameState=="L1"){
    levelOne();
  }

  if(gameState=="L2"){
    levelTwo();
  }

  if(gameState=="L3"){
    levelThree();
  }
  
  if(gameState=="L4"){
  levelFour();
}

if(gameState=="L5"){
  levelFive();
}

if(gameState=="L6"){
  levelSix();
}
  if(gameState=="you win!"){
    levelWin();
  }

  if(gameState !== "intro"){
  text("Score: " + score, width/2, 40);

}

} // end of draw ==============================================
  
  function levelIntro(){
  background(bg);
  text("haia! press any key to play!", width/2, height/2);

  if(keyIsPressed){
    gameState = "L1";
  }
}

function levelOne(){
  background(bg1);
  text("Level 1", width/2,height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if(distToBall<ballSize/2){
    ballx=random(width);
    bally=random(height);
    score=score+1;
  }  
  
  if(score>=5){
   gameState="L2";
  }
  
  //ellipse(ballx, bally, ballSize);
  line(ballx, bally, mouseX, mouseY);
  image(img1, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
  
} // end of level 1 ===============================

function levelTwo(){
  background(bg2);
  text("Level 2!", width/2,height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if(distToBall<ballSize/2){
    ballx=random(width);
    bally=random(height);
    score=score+1;
  }  
  
  if(score>=10){
    gameState="L3";
  }
  
  //line(ballx, bally, mouseX, mouseY);
  //ellipse(ballx, bally, ballSize);
  image(img2, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
  
} // end of level 2 ==============================

function levelThree(){
  background(bg3);
  fill(255); // white text
  text("Level 3!", width/2,height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if(distToBall<ballSize/2){
    ballx=random(width);
    bally=random(height);
    score=score+1;
  }  
  
  if(score>=15){
    gameState="L4";
  }
  
  //line(ballx, bally, mouseX, mouseY);
  //ellipse(ballx, bally, ballSize);
  image(img3, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
  
} // end of level 3 ==============================

function levelFour(){
  background(bg4);
  text("Level 4!", width/2,height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if(distToBall<ballSize/2){
    ballx=random(width);
    bally=random(height);
    score=score+1;
  }  
  
  if(score>=20){
    gameState="L5";
  }
  
  //line(ballx, bally, mouseX, mouseY);
  //ellipse(ballx, bally, ballSize);
  image(img4, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
  
} // end of level 4 ==============================

function levelFive(){
  background(bg5);
  fill(0); // white text
  text("Level 5!", width/2,height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if(distToBall<ballSize/2){
    ballx=random(width);
    bally=random(height);
    score=score+1;
  }  
  
  if(score>=25){
    gameState="L6";
  }
  
  //line(ballx, bally, mouseX, mouseY);
  //ellipse(ballx, bally, ballSize);
  image(img5, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
  
} // end of level 5 ==============================

function levelSix(){
  background(bg6);
  text("Level 6!", width/2,height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if(distToBall<ballSize/2){
    ballx=random(width);
    bally=random(height);
    score=score+1;
    ballSize=ballSize-1;
  }  
  
  if(score>=30){
    //you have won
    gameState="you win!";
    //level 6
    //gameState="L6";
  }
  
  //line(ballx, bally, mouseX, mouseY);
  //ellipse(ballx, bally, ballSize);
  image(img6, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
  
} // end of level 6 ==============================

function levelWin(){
  
   background(bg7);
  text("yay! you win! press r to replay!", width/2,height/2);
 
  }  // level reset
  
  function resetLevel(){
  ballx = random(width);
  bally = random(height);
  ballSize = 40;
}
function keyPressed(){
  if(key == "r"){
    resetLevel();
    score = 0;
    gameState = "L1";
  }
}
