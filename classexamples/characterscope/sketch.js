//these variable are available thru entire program
var pointX = 0;
var pointY = 0;
var faceColor = "Blue";

var colorButton;

function setup() {
  // put setup code here
  createCanvas(500,500);
  pointX = width/2;
  pointY = height/2;

  console.log("pointX " + pointX + " pointY " + pointY);

var message = "Hello";//scope of this variable only available in setup function
console.log(message);
//console.log(drawMessage);//drawMessage not defined bc variable only in scope of draw function

colorButton = createButton("Click to turn purple");//function thats part of p5.dom library, it generates an html button
colorButton.position(20,20);
colorButton.mousePressed(function(){
faceColor = "purple";
});//when  pr4ess mouse to click on button, face will turn purple

}

function draw() {
  // put drawing code here

//use and if statement to change backg4round colorButton
//what is going to be our condition?
background(255);//background must be before the conditional to change background
if(mouseX <= width/2){

background("red");
faceColor = "black";
}

if(mouseX > width/2){

background("black");
faceColor = "red";
}

//console.log(message); //message not defined bc variable only in scope of setup
var drawMessage = "This message is in the draw loop";
console.log(drawMessage);

  //pointX = 100;
  //pointY = 100;
  pointX = mouseX;
  pointY = mouseY;
fill(faceColor); //a]make face whatever faceColor is (ex: blue)
  rect(pointX -100 ,pointY -100,200,200);
  fill(255);//keep eyes and nose and mouth white
  ellipse(pointX, pointY, 10,10);
  ellipse(pointX + 20, pointY -20, 30,30);
  ellipse(pointX - 20, pointY -20, 30,30);

  // arc(x,y,width,height,start,end)
  arc(pointX,pointY + 10,50,50,0,PI);

  //ellipse(point2, point2, 10,10);

}//end of draw



function mousePressed(){
//detects when mouse has been clicked
//faceColor = "red";//when press mouse, face changes from blue(original facecolor) to red
}

function mouseReleased(){
//faceColor = "Blue";
//face turns blue when mouse is released
}



function keyPressed(){
//faceColor = "white";
//face becomes white when any key is pressed

//conditional; if condition is true, do whats inside curly braces
// ==means one side equals the other

console.log("key"+ key);
console.log("keyCode" + keyCode);

if(key == "w"){
//what you want to happen goes inside curly braces
  faceColor = "white";
}
//conditional:
if(key=="r"){

faceColor = "red";

}

}//end of keyPressed






//end of document
