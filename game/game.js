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
    bg = loadImage('https://itzomn.github.io/diyps/lounge.jpg');
  img1 = loadImage('https://itzomn.github.io/diyps/cat1.gif');
  img2 = loadImage('https://itzomn.github.io/diyps/cat2.png');
  img3 = loadImage('https://itzomn.github.io/diyps/cat3.png');
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

  if(gameState=="you win!"){
    levelWin();
  }

  if(gameState !== "intro"){
  text("Score: " + score, width/2, 40);

}

} // end of draw ==============================================
  
  function levelIntro(){
  text("haia! press a key to play!", width/2, height-20);

  if(keyIsPressed){
    gameState = "L1";
  }
}

function levelOne(){
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
  image(img3, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
  
} // end of level 1 ===============================

function levelTwo(){
  //background(200,0,0);
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
 // background(0,100,200);
  text("Level 3!", width/2,height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if(distToBall<ballSize/2){
    ballx=random(width);
    bally=random(height);
    score=score+1;
    ballSize=ballSize-1;
  }  
  
  if(score>=50){
    //you have won
    gameState="you win!";
    //level 4
    //gameState="L4";
  }
  
  //line(ballx, bally, mouseX, mouseY);
  //ellipse(ballx, bally, ballSize);
  image(img1, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
  
} // end of level 3 ==============================

function levelWin(){
  
  //background(200,0,0);
  text("yay! you win!", width/2,height-20);
 
  }  
