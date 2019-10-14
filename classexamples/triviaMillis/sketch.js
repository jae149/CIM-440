var questions = ["Is Iceland always covered in ice?","What ocean lies east of the US?"];//questions
var options = ["1) true 2) false","1) Pacific 2) Eastern 3) Indian 4) Atlantic"];//answer options
var answers = [1,3];//correct answer choices

var buttons = [];

var currentOption = -1;//waiting for person to interact

var currentQuestion = 0;

var answerText = "";

var startTimer = false;
var prevMillis = 0;
var interval = 5000;

function setup() {
  // put setup code here
  createCanvas(400,400);

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


  buttons[3] = createButton("4");
  buttons[3].position(130,300);
  buttons[3].mousePressed(function(){
    currentOption = 3
  });//end of mousePressed


}//end setup

function draw() {
  // put drawing code here
   background(255);
   text(questions[currentQuestion],20,100);
   text(options[currentQuestion],20,150);



if(startTimer == true){
  text(answerText, 20, 200);
  if(millis()-prevMillis > interval){
    prevMillis = millis();
    startTimer = false;//after 5 seconds, will hide text and stop timer from running
    console.log("Timer ended");
  }//end of timer
}//end of startTimer == true

//if currentOption is NOT equal to -1
if(currentOption != -1){
  if(currentOption == answers[currentQuestion]){
  console.log("correct");
  answerText = "correct";
  currentQuestion = currentQuestion + 1;//if correct, go to next image

if(currentQuestion == questions.length){
  currentQuestion = 0;
}//end second condition, questions.length counts how many items are in the questions array (2 items)
//if currentQuestion == 2

}else{
  console.log("incorrect");
  answerText = "incorrect";
}//end of checking if answer correct/incorrect


//reset to inactive state
  currentOption = -1;
startTimer = true;
prevMillis = millis();

}//end of currentOption != -1, != means not equal


}//end draw
