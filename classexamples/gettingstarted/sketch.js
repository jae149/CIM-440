function setup() {
  // put setup code here
  //setup runs once
  createCanvas(500,500);
  //sets the size of the canvas
background("green");
//sets the color of the background
background(0);//black
background(255);//white
background(200);//light grey, closer to white
//grayscale is 0-255
background(255,0,0);//full red
background(0,255,0); //full green
background(0,0,255); //full blue
//(Red,Green,Blue)
background(127,255,0);
background("#ffffff");//hexidecimal white


fill(0,255,0);//adjusts inner color of shape
stroke("red");//adjusts outline color of shape
//setting fill and stroke effects every shape written in after it,
//unless new fill&stroke written
ellipse(50,50,100,100);//4 parameters: x&y locations, width and height



}

function draw() {
  // put drawing code here
  //draw runs infinitely (sequencially in a loop)
}
