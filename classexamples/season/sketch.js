var seasonsSelect;
var seasonType = "";


var sunX = 0;
var sunY = 0;

var snowX = [];
var snowY = [];
var snowAmount = 100;

var leafX = [];
var leafY = [];
var leafAmount = 100;
var leafImage;

function preload(){
leafImage = loadImage("https://openclipart.org/image/300px/svg_to_png/257622/1470680735.png");
}

function setup() {
  // put setup code here
  createCanvas(400,400);
  seasonsSelect = createSelect();//dropdown
  seasonsSelect.position(10,10);
  seasonsSelect.option("");//empty option = rest state, program just started, user hasnt mde a selection yet
  seasonsSelect.option("fall");
  seasonsSelect.option("winter");
  seasonsSelect.option("spring");
  seasonsSelect.option("summer");
  seasonsSelect.changed(function(){

seasonType = seasonsSelect.value();

  });

sunX = width/2;
sunY = height*2;

//var i = 0; start variable
// i <100 set our limit
//i++ is our iterator, i++ is same as i = i+1
for(var i = 0; i<snowAmount; i++){
  snowX[i] = random(0,width);//choose a number from 0 to width-1 (399)
  snowY[i] = random(0,-500);
}//end of forloop

console.log("snowX" + snowX);
console.log("snowY" + snowY);
//var i gets destroyed after the loop is done, so you can use it again
for(var i = 0; i<leafAmount; i++){
  leafX[i] = random(0,width);
  leafY[i] = random(0,-500);
}

console.log("leafY" + leafY);
console.log("leafX" + leafX);


}//end setup

function draw() {
  // put drawing code here
  background(255);

if(seasonType == "fall"){
  console.log("fall");

for(var l = 0; l<leafAmount; l++){
image(leafImage,leafX[l],leafY[l],20,20);

  if(leafY[l]<height-20){
    leafY[l]++;
    leafX[l] = leafX[l] + sin(radians(frameCount));
  }
}//end forloop

}else if(seasonType == "winter"){
  console.log("winter");

for(var x = 0; x<snowAmount; x++){
  snowY[x]++;//same as snowY[i] = snowY[i]+1
  //snowY[x] = snowY[x] +5 //controls speed of snow
  ellipse(snowX[x],snowY[x],10,10);
//checks for snow hitting bottom of screen, loops it when it does
  if(snowY[x] > height){
//snowY[x] = 0;
snowY[x] = random(0,-500);
snowX[x] = random(0,width);
  }
}



}else if (seasonType == "spring") {
  console.log("spring");
}else if(seasonType == "summer"){
  console.log("summer");
  fill("orange");
  stroke("red");
  ellipse(sunX,sunY, width, height);

  if(sunY > height/2){
      sunY = sunY-1;
  }
}else{
  console.log("blank");
  text("Make a selection", 100,10);
}






}//end of draw
