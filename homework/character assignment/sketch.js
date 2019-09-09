var pupilSize = 20
var eyeSize = 70
var eyeHeight = 150
var pointX = 0;
var pointY = 0;

function setup() {
  // put setup code here
  createCanvas(400,450);
  pointX = 250
  pointY = 250
  background(255,165,0);
}

function draw() {
  // put drawing code here
fill("white");//eye fill
stroke("white");//eye stroke
  ellipse(170,eyeHeight,eyeSize,eyeSize);//left eye
  ellipse(330,eyeHeight,eyeSize,eyeSize);//right eye


fill("purple");//pupil fill
stroke("purple");//pupil stroke
ellipse(200,eyeHeight,pupilSize,pupilSize);//left pupil
ellipse(360,eyeHeight,pupilSize,pupilSize);//right pupil


fill("green");//nose fill
stroke("green");//nose stroke
triangle(pointX,(pointY)-10,(pointX)-20,(pointY)+40,(pointX)+20,(pointY)+40);//nose
rect(240,150,20,120);



fill("blue");//mouth fill
stroke("blue");//mouth stroke
rect(170,(pointY)+70, 80, 25);//mouth
arc(170,(pointY)+69.5,50,50,0,PI);//mouth smirk


fill(255,165,0);//make eyes into arcs vv
stroke(255,165,0);
rect(100,104,400,30)

stroke("black")
line(140,104,200,124);
line(280,124,360,124);


}
