var questions = ["Select your pumpkin", "Select eye shape", "Select nose shape","Select mouth shape"];
var options = ["1) wide 2) round 3) tall","1) triangles 2) upside-down triangles 3) circles", "1) triangle 2) upside-down triangle 3) skeleton nostrils", "1) smile 2) surprise 3) rectangle"];
var answers = [-1,-1,-1,-1];

var buttons = [];

var currentOption = -1;//waiting for person to interact

var currentQuestion = 0;

var answerText = "";

var leafX = [];
var leafY = [];
var leafAmount = 100;
var leafImage;

function preload(){
leafImage = loadImage("https://openclipart.org/image/300px/svg_to_png/257622/1470680735.png");
}

function setup() {
  // put setup code here

  createCanvas(350,250);

  fill("black");
  stroke("black");

  buttons[0] = createButton("1");
  buttons[0].position(10,300);
  buttons[0].mousePressed(function(){
    currentOption = 0
  });//end of mousePressed

  buttons[1] = createButton("2");
  buttons[1].position(50,300);
  buttons[1].mousePressed(function(){
    currentOption = 1
  });//end of mousePressed

  buttons[2] = createButton("3");
  buttons[2].position(90,300);
  buttons[2].mousePressed(function(){
    currentOption = 2
  });//end of mousePressed

  for(var i = 0; i<leafAmount; i++){
    leafX[i] = random(0,width);
    leafY[i] = random(0,-500);
  }
}

function draw() {
  // put drawing code here
  background(255);
  noStroke();
  fill("black");
  text(questions[currentQuestion],20,60);
  text(options[currentQuestion],20,95);

  text(answerText, 20, 200);



  if(currentOption != -1){
    answers[currentQuestion] = currentOption;

    currentQuestion = currentQuestion + 1;//go to next image

  currentOption = -1;
  }//end of currentOption != -1, != means not equal


//start body
  if(answers[0]==0){
    fill("brown");
    stroke("brown");
    rect(65,135,10,50);
    fill("orange");
    stroke("orange");
    ellipse(70,200,100,65);

  }

  if(answers[0]==1){
    fill("brown");
    stroke("brown");
    rect(65,135,10,50);
    fill("orange");
    stroke("orange");
    ellipse(70,200,100,100);

  }

  if(answers[0]==2){
    fill("brown");
    stroke("brown");
    rect(65,135,10,50);
    fill("orange");
    stroke("orange");
    ellipse(70,200,65,100);

  }

//start eyes
  if(answers[1]==0){
    fill("yellow");
    stroke("yellow");
    triangle(57,182.5,50.5,195,63.5,195);
    triangle(83,182.5,76.5,195,89.5,195);
  }
  if(answers[1]==1){
    fill("yellow");
    stroke("yellow");
    triangle(50.5,182.5,57,195,63.5,182.5);
    triangle(83,195,76.5,182.5,89.5,182.5);
  }
if(answers[1]==2){
  fill("yellow");
  stroke("yellow");
  ellipse(57,188.75,15,15);
  ellipse(82,188.75,15,15);
}
//start nose
if(answers[2]==0){
  fill("yellow");
  stroke("yellow");
  triangle(70,197,64,210,76,210);
}
if(answers[2]==1){
  fill("yellow");
  stroke("yellow");
  triangle(70,210,64,200,76,200);
}
if(answers[2]==2){
  fill("yellow");
  stroke("yellow");
  ellipse(65,205,5,12);
  ellipse(73,205,5,12);
}

//start mouth

if(answers[3]==0){
  fill("yellow");
  stroke("yellow");
  arc(70,218,30,13,0,PI,CHORD);
}

if(answers[3]==1){
  fill("yellow");
  stroke("yellow");
  ellipse(70,222,13,17);
}

if(answers[3]==2){
  fill("yellow");
  stroke("yellow");
  rect(55,218,30,6.5);
}

if(currentQuestion == 4){
  for(var l = 0; l<leafAmount; l++){
  image(leafImage,leafX[l],leafY[l],20,20);

    if(leafY[l]<height-20){
      leafY[l]++;
      leafX[l] = leafX[l] + sin(radians(frameCount));
    }
  }//end forloop

  noStroke();
  fill("black");
  text("Happy Halloween!",20,60);

}//end condition


}//end draw
