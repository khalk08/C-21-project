var canvas;
var music;
var box;
var surface1;
var surface2;
var surface3;
var surface4;

function preload(){
    music = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(800,600);
    //create 4 different surfaces
   surface1 = createSprite(100,580,200,20);
   surface1.shapeColor = "blue";

   surface2 = createSprite(305,580,200,20);
   surface2.shapeColor = "orange";

   surface3 = createSprite(510,580,200,20);
   surface3.shapeColor = rgb(102, 7, 54);

   surface4 = createSprite(715,580,200,20);
   surface4.shapeColor = "green";

    //create box sprite and give velocity
   box = createSprite(random(20,750));
   box.scale = 0.3
   box.shapeColor = "white";
   box.velocityX  = 3;
   box.velocityY = 3;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprites
  var edges = createEdgeSprites();
  box.bounceOff(edges);
   
  //add condition to check if box touching surface and make it box
    if(surface1.isTouching(box) && box.bounceOff(surface1)){
        box.shapeColor = "blue";
     }
     if(surface2.isTouching(box) && box.bounceOff(surface2)){
         box.shapeColor = "orange";
     }
     if(surface3.isTouching(box) && box.bounceOff(surface3)){
         box.shapeColor = rgb(102, 7, 54);
     }
     if(surface4.isTouching(box) && box.bounceOff(surface4)){
         box.shapeColor = "green";
     }

    drawSprites()
}


