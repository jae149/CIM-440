function setup() {
  // put setup code here

  createCanvas(400,400);

  hello();
  goodbye("zeven");
  goodbye("rubi");
  goodbye("mike");
}//end setup

function draw() {
  // put drawing code here
  background(255);
  //frameRate(10);//cane be useful in slowng ddown animation, BUT slows entire interaction as well - use millis instead !

  //circleColor(xpos,ypos,r,g,b,cSize) order matters/corresponds!!
  circleColor(random(width),random(height),random(255),random(255),random(255), random(0,200));

//500 times a frame
// start(variable defined), how many times you want it to run, i++ = counter(i = i +1)
for(var i = 0; i < 500; i++){
  circleColor(random(width),random(height),random(255),random(255),random(255),random(0,200));

console.log(circleHitzone(100,100));

}//end forloop

}//end draw

function hello(){
  console.log("hello");
}//end hello

function goodbye(message){
  console.log("goodbye " + message);
}//end goodbye


function circleColor(xpos,ypos,r,g,b,cSize){
fill(r,g,b);
  ellipse(xpos,ypos,cSize,cSize);
}//end circleColor



/*function circleHitzone(distX,distY){
  var curDist = dist(mouseX,mouseY,distX,distY);
  //console.log("curDist " + curDist);
  fill("grey");
    stroke(255);
  ellipse(distX,distY,10,10);
  if(curDist < 10){
  return true;
  strokeWeight(5);
}else{
return false;
strokeWeight(1);
}*/

//return curDist;
}//end circleHitzone
