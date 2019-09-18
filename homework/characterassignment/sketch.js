var pupilSize = 20
var eyeSize = 70
var eyeHeight = 150
var pointX = 0;
var pointY = 0;
var faceColor = "orange";
var mouthColor = "blue";
var noseColor = "green";
var eyeColor = "white";
var pupilColor = "purple";
var eyebrowColor = "black";

function setup() {
  // put setup code here
  createCanvas(400,450);
  pointX = 250
  pointY = 250

}

function draw() {
  // put drawing code here

background(faceColor);

fill(eyeColor);//eye fill
stroke(eyeColor);//eye stroke
  ellipse(170,eyeHeight,eyeSize,eyeSize);//left eye
  ellipse(330,eyeHeight,eyeSize,eyeSize);//right eye


fill(pupilColor);//pupil fill
stroke(pupilColor);//pupil stroke
ellipse(200,eyeHeight,pupilSize,pupilSize);//left pupil
ellipse(360,eyeHeight,pupilSize,pupilSize);//right pupil


fill(noseColor);//nose fill
stroke(noseColor);//nose stroke
triangle(pointX,(pointY)-10,(pointX)-20,(pointY)+40,(pointX)+20,(pointY)+40);//nose
rect(240,150,20,120);



fill(mouthColor);//mouth fill
stroke(mouthColor);//mouth stroke
rect(170,(pointY)+70, 80, 25);//mouth
arc(170,(pointY)+69.5,50,50,0,PI);//mouth smirk


fill(faceColor);//make eyes into arcs vv
stroke(faceColor);
rect(100,104,400,30)

stroke(eyebrowColor)
line(140,104,200,124);
line(280,124,360,124);


}

function keyPressed(){
faceColor = "blue";
mouthColor = "orange";
noseColor = "fuchsia";
eyeColor = "black";
pupilColor = "lime";
eyebrowColor = "white";
//colors will invert when any key is pressed
}

function mousePressed(){
faceColor = "orange";
mouthColor = "blue";
noseColor = "green";
eyeColor = "white";
pupilColor = "purple";
eyebrowColor = "black";

}
