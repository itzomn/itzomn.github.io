function setup() {
  let canvas = createCanvas(700, 550);
  background(191, 13, 13);
}



function draw() {
 
  
  //head
 fill(237, 232, 228);
 strokeWeight(0);
 ellipse (340, 250, 400, 360);
 
   // Lback hair
fill(69, 47, 28);
beginShape();
vertex(166, 344);
vertex(102, 450);
vertex(134, 450);
vertex(120, 533);
vertex(146, 509);
vertex(148, 550);
vertex(280, 550);
vertex(280, 422);
vertex(248, 411);
vertex(216, 391);
vertex(191, 369);
endShape(CLOSE);

 // Rback hair
fill(69, 47, 28);
beginShape();
vertex(400, 422);
vertex(400, 550);
vertex(526, 550);
vertex(529, 506);
vertex(557, 532);
vertex(540, 443);
vertex(576, 449);
vertex(513, 329);
vertex(480, 375);
vertex(456, 395);
vertex(428, 411);
endShape(CLOSE);

   //dyed strip3
 fill(148, 9, 9)
 beginShape();
 vertex(121, 532);
 vertex(171, 319);
 vertex(179, 356);
 vertex(208, 386);
 vertex(197, 445);
 vertex(217, 496);
 vertex(181, 475);
 vertex(186, 550);
 vertex(146, 550);
 vertex(144, 510);
 endShape(CLOSE);
 
  //eye l
  fill(79, 74, 70);
 strokeWeight(0);
 ellipse (250, 280, 70, 120);
 
  //eye lt
  fill(255, 255, 255);
 strokeWeight(0);
 ellipse (250, 280, 20, 90);
  
  //eye r
   fill(79, 74, 70);
 strokeWeight(0);
 ellipse (430, 280, 70, 120);
 
 //eye rt
   fill(255, 255, 255);
 strokeWeight(0);
 ellipse (430, 280, 20, 90);
 
 //eyelids
 fill(237, 232, 228)
 quad (310, 295, 160, 250, 200, 200, 310, 220);
 quad (367, 295, 530, 250, 500, 200, 390, 220);
 
  //bangs
 fill(99, 67, 41)
 beginShape();
vertex(400, 235);
vertex(192, 254);
vertex(184, 400);
vertex(224, 448);
vertex(183, 428);
vertex(202, 474);
vertex(119, 412);
vertex(119, 369);
vertex(80, 380);
vertex(123, 282);
vertex(72, 294);
vertex(127, 213);
vertex(159, 113);
vertex(276, 52);
vertex(345, 64);
vertex(405, 52);
vertex(520, 112);
vertex(548, 205);
vertex(606, 288);
vertex(564, 288);
vertex(608, 391);
vertex(562, 375);
vertex(562, 420);
vertex(480, 475);
vertex(502, 416);
vertex(462, 442);
vertex(487, 402);
vertex(488, 274);
vertex(459, 236);
vertex(439, 177);
endShape(CLOSE);
 
 //racoon stripes
 fill(227, 204, 134)
 triangle(259, 84, 227, 109, 240, 117);
 quad(205, 128, 224, 138, 212, 158, 181, 144);
 quad(170, 167, 201, 182, 190, 200, 162, 192);
 quad(154, 219, 182, 228, 173, 256, 145, 245);
 quad(142, 279, 170, 288, 166, 318, 140, 312);
 quad(137, 336, 163, 345, 162, 376, 144, 371, 136, 345);
 triangle(150, 400, 160, 402, 160, 427);
 quad(239, 434, 279, 434, 279, 449, 239, 449);
 quad(239, 468, 279, 468, 279, 482, 239, 482);
 quad(239, 499, 279, 499, 279, 516, 239, 516);
 quad(239, 533, 279, 533, 279, 550, 239, 550);
 quad(471, 383, 486, 383, 486, 367, 479, 376);
 quad(475, 393, 487, 393, 487, 404, 472, 403);
 triangle(454, 419, 476, 413, 460, 413);
 
 //dyed strip1
 fill(148, 9, 9)
 beginShape();
 vertex(360, 237);
 vertex(238, 248);
 vertex(273, 169);
 vertex(347, 135);
 vertex(404, 164);
 endShape(CLOSE);
 
  //dyed strip2
 fill(148, 9, 9)
 beginShape();
 vertex(439, 176);
 vertex(458, 237);
 vertex(485, 289);
 vertex(503, 414);
 vertex(478, 475);
 vertex(542, 384);
 vertex(531, 257);
 vertex(470, 141);
 endShape(CLOSE);

 
 //eyeliner
 fill(0, 0, 0)
 triangle (310, 295, 180, 270, 160, 250);
 triangle (370, 295, 500, 270, 520, 250);
 
 //lashesL
 fill(0, 0, 0)
 triangle(260, 280, 240, 275, 255, 250);
 triangle(200, 320, 205, 325, 180, 330);
 triangle(220, 330, 225, 335, 205, 345);
 
 //lashesR
 triangle(420, 280, 440, 275, 425, 250);
 triangle(480, 320, 475, 325, 500, 330);
 triangle(460, 330, 455, 335, 475, 345);
 
  //mole
  fill(0, 0, 0);
 strokeWeight(0);
 ellipse (195, 340, 4, 4);
 ellipse (430, 368, 4, 4);
 
 
}
