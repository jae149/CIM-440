var mouthX = 80;
var mouthY = 200;

var eyeSize = 40;


function setup() {
  // put setup code here
  createCanvas(500,500);
  background(0,255,0);
}

function draw() {
  // put drawing code here

strokeWeight(1); //to prevent srtokewight 5 from affecting ellipses and rect
//left eye
//  ellipse(100,100,20,20);
  //right eye
//  ellipse(140,100,20,20);

//left eye
ellipse(100,100,eyeSize,eyeSize);
  //right eye
ellipse(140,100,eyeSize,eyeSize);

//mouth
//rect(80,200,100,30);//(x&y coordinates of upper left hand corner, width, height)
rect(mouthX,mouthY,100,30);

//mole
strokeWeight(5);//draw function runs in loop-->strokewight affects whats before it
point(30,27);//a singular pixel, unless stroke weight is bigger (x,y)

//mouth line
strokeWeight(1);
line(80,215,180,215);//(x&y of left point of line, x&y of right point of line)

//width divided by 2 will give x coordinate of center point of canvas, height/2 y coordinate of center point of createCanvas
//console.log("width " + width);
//console.log("height " + height);

triangle(width/2,height/2,(width/2)+10,(height/2)+20,(width/2)-10,(height/2)+20);//(x&y of top point,x&ys of two other points) (x,y,x,y,x,y)

arc(50,50,50,50,0,PI);//0 to pi (180)
arc(300,300,50,50,0,TWO_PI);//0-360
arc(400,400,50,50,PI + HALF_PI,0);//quarter circle

}
