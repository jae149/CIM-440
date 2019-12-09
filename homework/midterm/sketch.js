//background image:"Stars" by RebeccaBarray is licensed under CC BY-NC-SA 2.0 <p style="font-size: 0.9rem;font-style: italic;"><a href="https://www.flickr.com/photos/80460384@N06/7846935872">"Stars"</a><span>by <a href="https://www.flickr.com/photos/80460384@N06">RebeccaBarray</a></span> is licensed under <a href="https://creativecommons.org/licenses/by-nc-sa/2.0/?ref=ccsearch&atype=html" style="margin-right: 5px;">CC BY-NC-SA 2.0</a><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/?ref=ccsearch&atype=html" target="_blank" rel="noopener noreferrer" style="display: inline-block;white-space: none;opacity: .7;margin-top: 2px;margin-left: 3px;height: 22px !important;"><img style="height: inherit;margin-right: 3px;display: inline-block;" src="https://search.creativecommons.org/static/img/cc_icon.svg" /><img style="height: inherit;margin-right: 3px;display: inline-block;" src="https://search.creativecommons.org/static/img/cc-by_icon.svg" /><img style="height: inherit;margin-right: 3px;display: inline-block;" src="https://search.creativecommons.org/static/img/cc-nc_icon.svg" /><img style="height: inherit;margin-right: 3px;display: inline-block;" src="https://search.creativecommons.org/static/img/cc-sa_icon.svg" /></a></p>

var questions = ["Select your pumpkin", "Select eye shape", "Select nose shape","Select mouth shape"];
var options = ["1) wide 2) round 3) tall","1) triangles 2) upside-down triangles 3) circles", "1) triangle 2) upside-down triangle 3) skeleton nostrils", "1) smile 2) surprise 3) rectangle"];
var answers = [-1,-1,-1,-1];

var buttons = [];

var currentOption = -1;//waiting for person to interact

var currentQuestion = 0;

var answerText = "";

var skyImage;

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
skyImage = loadImage("starry sky.jpg");
}

function setup() {
  // put setup code here
  var cnv =  createCanvas(700,320);
  cnv.id("myCanvas");

  var container0 = createDiv();
  container0.id("container0");
  // # => designate an id, find an id that = container0
  // .html injects html or text into another html tag


  //to center our container, need to set width and margin:0 auto
  cnv.parent("#container0");

  //createCanvas(700,320);

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
  image(skyImage, 0,0,skyImage.width, skyImage.height);
  noStroke();
  fill(255);
  text(questions[currentQuestion],300,40);
  text(options[currentQuestion],300,65);

  text(answerText, 20, 200);

  text("Create Your Own Jack-O-Lantern",20,20);


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
  fill(255);
  text("Happy Halloween!",20,60);

}//end condition


}//end draw
