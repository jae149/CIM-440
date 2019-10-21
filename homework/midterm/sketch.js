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

var pumpkinX;
var pumpkinY;
var pumpkinWidth1;
var pumpkinHeight1;
var pumpkinWidth2;
var pumpkinHeight2;
var pumpkinWidth3;
var pumpkinHeight3;

function preload(){
leafImage = loadImage("https://openclipart.org/image/300px/svg_to_png/257622/1470680735.png");
}

function setup() {
  // put setup code here

  createCanvas(700,320);

  fill("black");
  stroke("black");

  buttons[0] = createButton("1");
  buttons[0].position(300,320);
  buttons[0].mousePressed(function(){
    currentOption = 0
  });//end of mousePressed

  buttons[1] = createButton("2");
  buttons[1].position(width/2,320);
  buttons[1].mousePressed(function(){
    currentOption = 1
  });//end of mousePressed

  buttons[2] = createButton("3");
  buttons[2].position(400,320);
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

  var pumpkinX = width/2;
  var pumpkinY = (height/2)+55;
  var pumpkinWidth1 = 100;
  var pumpkinHeight1 = 65;
  var pumpkinWidth2 = 100;
  var pumpkinHeight2 = 100;
  var pumpkinWidth3 = 65;
  var pumpkinHeight3 = 100;

  background(255);
  noStroke();
  fill("black");
  text(questions[currentQuestion],300,40);
  text(options[currentQuestion],300,65);

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
    rect((width/2)-10,80,10*2,50);
    fill("orange");
    stroke("orange");
    ellipse(pumpkinX,pumpkinY,pumpkinWidth1*3,pumpkinHeight1*3);

  }

  if(answers[0]==1){
    fill("brown");
    stroke("brown");
    rect((width/2)-10,80,10*2,50);
    fill("orange");
    stroke("orange");
    ellipse(pumpkinX,pumpkinY,pumpkinWidth2*2,pumpkinHeight2*2);

  }

  if(answers[0]==2){
    fill("brown");
    stroke("brown");
    rect((width/2)-10,80,10*2,50);
    fill("orange");
    stroke("orange");
    ellipse(pumpkinX,pumpkinY,pumpkinWidth3*2,pumpkinHeight3*2);

  }

//start eyes
  if(answers[1]==0){
    fill("yellow");
    stroke("yellow");
    triangle(57+258,182.5-10,50.5+243,195+10,63.5+273,195+10);
    triangle(83+300,182.5-10,76.5+285,195+10,89.5+315,195+10);
  }
  if(answers[1]==1){
    fill("yellow");
    stroke("yellow");
    triangle(50.5+253,182.5-10,57+263,195+5,63.5+273,182.5-10);
    triangle(83+298,195+5,76.5+288,182.5-10,89.5+308,182.5-10);
  }
if(answers[1]==2){
  fill("yellow");
  stroke("yellow");
  ellipse(57+315,188.75,15*2,15*2);
  ellipse(82+245,188.75,15*2,15*2);
}
//start nose
if(answers[2]==0){
  fill("yellow");
  stroke("yellow");
  triangle((width/2),210,(width/2)-17,235,(width/2)+17,235);
}
if(answers[2]==1){
  fill("yellow");
  stroke("yellow");
  triangle(width/2,237,(width/2)-17,210,(width/2)+17,210);
}
if(answers[2]==2){
  fill("yellow");
  stroke("yellow");
  ellipse((width/2)+6,205+17,5*1.5,12*1.5);
  ellipse((width/2)-6,205+17,5*1.5,12*1.5);
}

//start mouth

if(answers[3]==0){
  fill("yellow");
  stroke("yellow");
  arc(width/2,218+40,30*2,13*2,0,PI,CHORD);
}

if(answers[3]==1){
  fill("yellow");
  stroke("yellow");
  ellipse(width/2,222+50,13*2,17*2);
}

if(answers[3]==2){
  fill("yellow");
  stroke("yellow");
  rect((width/2)-22.5,218+30,30*1.5,6.5*2);
}

if(currentQuestion == 4){
  for(var l = 0; l<leafAmount; l++){
  image(leafImage,leafX[l],leafY[l],40,40);

    if(leafY[l]<height-35){
      leafY[l]++;
      leafX[l] = leafX[l] + sin(radians(frameCount));
    }
  }//end forloop

  noStroke();
  fill("black");
  text("Happy Halloween!",20,60);

}//end condition


}//end draw
