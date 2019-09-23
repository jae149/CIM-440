var hitX = 200;
var hitY = 200;
var hitW = 100;//width
var hitH = 50;//height

function setup() {
  // put setup code here
  createCanvas(400,400);
}

function draw() {
  // put drawing code here
  background(255);
  if(mouseX > hitX && mouseX < hitX + hitW && mouseY > hitY && mouseY < hitY + hitH){
    //if all conditions are true, do something
    console.log("In here!");
    fill(255,0,0);
    ellipse(100,100,10,10);
  }else{
    //if im not inside rectangle, print "outside!"
    console.log("Outside!");
    fill(255,255,255);
  }

  rect(hitX,hitY,hitW,hitH);
}
