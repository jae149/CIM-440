var hitX = 100;
var hitY = 100;
var threshold = 20;
var hitDistance = 0;
var changeBackground = "white";

function setup() {
  // put setup code here
  createCanvas(400,400);
}

function draw() {
  // put drawing code here
  background(changeBackground);
  ellipse(hitX,hitY,threshold*2,threshold*2);
   hitDistance = dist(mouseX,mouseY,hitX,hitY);//allows to calc dist between two point
  console.log("hitDistance" + hitDistance);
//Hover state
if(hitDistance <= threshold){
//do something, if hit distance is less than/equal to 20. 0 to 20
fill(127);
text("click me",hitX,hitY+30);
}else{
  fill(255);
}//if top statement is false, then execute code in else statement
//if(hitDistance > threshold){
//do something if hit dist is greater than (not including) 20. 21 to infinity
  //fill(255)
//}

}


function mousePressed(){
  //Click state
  if(hitDistance <= threshold){
  //do something, if hit distance is less than/equal to 20. 0 to 20
changeBackground = "blue";
  }else{
changeBackground = "white";
  }
}
