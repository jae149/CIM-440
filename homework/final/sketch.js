var myFont;
var sound1;
var currentScreen = 0;
var biscWave;
var nyla;
var sydney;
var nanseera;
var scott;
var dmel;
var tino;
var michael;
var maddy;
var jeyhan;
var haley;
var josh;
var anja;
var gabe;
var avery;
var arron;



function preload(){
  myFont = loadFont('PressStart2P-Regular.ttf');
  sound1 = loadSound("8BitNoAir.mp3");
  biscWave = loadImage("biscwave.png");
nyla = loadImage("nyla.png");
sydney = loadImage("sydney.png");
nanseera = loadImage("nanseera.png");
scott = loadImage("scott.png");
dmel = loadImage("dmel.png");
tino = loadImage("tino.png");
michael = loadImage("michael.png");
maddy = loadImage("maddy.png");
jeyhan = loadImage("jeyhan.png");
haley = loadImage("haley.png");
josh = loadImage("jewsh.png");
anja = loadImage("anja.png");
gabe = loadImage("gabe.png");
avery = loadImage("avery.png");
arron = loadImage("arron.png");
}

function setup() {
  // put setup code here


  var cnv = createCanvas(700,500);

  cnv.id("myCanvas");

  var container0 = createDiv();
  container0.id("container0");
  // # => designate an id, find an id that = container0
  // .html injects html or text into another html tag
  //select("#container0").html("<h1>BISCAYDENCE</h1>");
  // .style ("css property", "value")
  select("#container0").style("width","400px");//setting width of contaier 0
  select("#container0").style("margin","20px auto");//center our container, margin:0 auto; 0 refers to top and bottom spacing of our container, the auto refers to the left and right spacig of our container

  //to center our container, need to set width and margin:0 auto
  cnv.parent("#container0");
  sound1.loop();
}

function draw() {
  background("MidnightBlue");

  if(currentScreen == 0){
    //all the code for the first screen
    textFont(myFont);
    textSize(36);
    fill("black");
    rect((width/4)-15,(height/4)-15,(width/2)+30,(height/2)+30);
    fill("Teal");
    rect(width/4,height/4,width/2,height/2);//how make rects diff colors?
    fill("black");
    rect((width/4)-15, 390, (width/2)+30, (height/2)+20);
    triangle((width/4)-15, 390, (width/4)-15, 700, (width/4)-305, 700);
    triangle(((width-(width/4)))+15, 390, (width-(width/4))+15, 700, (width-(width/4))+320, 700);
  fill("black");
  textSize(30);
    text("BISCAYDENCE", (width/4)+10, (height/4)+40);//how make font smaller
    textSize(16);
  text("click ENTER to start", (width/4)+15, (height/4)+240);//^^
image(biscWave, (width/2)-90, (height/2)-50);
fill("grey");
rect((width/4)+15, 420, 20, 40);
fill("red");
ellipse((width/4)+25, 410, 40, 40);
fill("white");
ellipse((width/2)+20,420, 30, 20);
fill("red");
ellipse((width/2)+120,420, 30, 20);
fill("blue");
ellipse((width/2)+70,450,30,20);
  }
  if(currentScreen == 1){
    //code for second screen
    background("Teal");
image(nyla,60,180, nyla.width*1.5,nyla.height*1.5);
fill("black");
textSize(50);
text("STATS",(width/2)-120,70);
textSize(35);
text("NYLA",105,160);
textSize(13)
text("< to go left",30,50);
text("> to go right",510,50);
textSize(25);
text("R&B",(width/2)+10, (height/2)-50);
text("POP",(width/2)+10,height/2);
text("ROCK",(width/2)+10,(height/2)+50);
text("FUNK",(width/2)+10,(height/2)+100);
text("SOUL",(width/2)+10,(height/2)+150);
text("FOLK",(width/2)+10,(height/2)+200);
rect((width/2)+125,(height/2)-77,200,25);
rect((width/2)+125,(height/2)-27,200,25);
rect((width/2)+125,(height/2)+23,200,25);
rect((width/2)+125,(height/2)+73,200,25);
rect((width/2)+125,(height/2)+123,200,25);
rect((width/2)+125,(height/2)+173,200,25);
fill("MidnightBlue");
rect((width/2)+125,(height/2)-77,150,25);
rect((width/2)+125,(height/2)-27,10,25);
rect((width/2)+125,(height/2)+23,10,25);
rect((width/2)+125,(height/2)+73,50,25);
rect((width/2)+125,(height/2)+123,190,25);
rect((width/2)+125,(height/2)+173,100,25);

  }
if (currentScreen == 2){
  background("Teal");
  image(sydney,60,180, sydney.width*1.5,sydney.height*1.5);
  fill("black");
  textSize(50);
  text("STATS",(width/2)-120,70);
  textSize(35);
  text("'SQUID'",65,160);
  textSize(13)
  text("< to go left",30,50);
  text("> to go right",510,50);
  textSize(25);
  text("R&B",(width/2)+10, (height/2)-50);
  text("POP",(width/2)+10,height/2);
  text("ROCK",(width/2)+10,(height/2)+50);
  text("FUNK",(width/2)+10,(height/2)+100);
  text("SOUL",(width/2)+10,(height/2)+150);
  text("FOLK",(width/2)+10,(height/2)+200);
  rect((width/2)+125,(height/2)-77,200,25);
  rect((width/2)+125,(height/2)-27,200,25);
  rect((width/2)+125,(height/2)+23,200,25);
  rect((width/2)+125,(height/2)+73,200,25);
  rect((width/2)+125,(height/2)+123,200,25);
  rect((width/2)+125,(height/2)+173,200,25);
  fill("MidnightBlue");
  rect((width/2)+125,(height/2)-77,50,25);
  rect((width/2)+125,(height/2)-27,75,25);
  rect((width/2)+125,(height/2)+23,10,25);
  rect((width/2)+125,(height/2)+73,5,25);
  rect((width/2)+125,(height/2)+123,150,25);
  rect((width/2)+125,(height/2)+173,175,25);
}
if (currentScreen == 3){
  background("Teal");
  image(nanseera,60,180, nanseera.width*1.5,nanseera.height*1.5);
  fill("black");
  textSize(50);
  text("STATS",(width/2)-120,70);
  textSize(35);
  text("NANSEERA",55,160);
  textSize(13)
  text("< to go left",30,50);
  text("> to go right",510,50);
  textSize(25);
  text("R&B",(width/2)+10, (height/2)-50);
  text("POP",(width/2)+10,height/2);
  text("ROCK",(width/2)+10,(height/2)+50);
  text("FUNK",(width/2)+10,(height/2)+100);
  text("SOUL",(width/2)+10,(height/2)+150);
  text("FOLK",(width/2)+10,(height/2)+200);
  rect((width/2)+125,(height/2)-77,200,25);
  rect((width/2)+125,(height/2)-27,200,25);
  rect((width/2)+125,(height/2)+23,200,25);
  rect((width/2)+125,(height/2)+73,200,25);
  rect((width/2)+125,(height/2)+123,200,25);
  rect((width/2)+125,(height/2)+173,200,25);
  fill("MidnightBlue");
  rect((width/2)+125,(height/2)-77,20,25);
  rect((width/2)+125,(height/2)-27,30,25);
  rect((width/2)+125,(height/2)+23,75,25);
  rect((width/2)+125,(height/2)+73,10,25);
  rect((width/2)+125,(height/2)+123,150,25);
  rect((width/2)+125,(height/2)+173,195,25);
}
if (currentScreen == 4){
  background("Teal");
  image(scott,60,180, scott.width*1.5,scott.height*1.5);
  fill("black");
  textSize(50);
  text("STATS",(width/2)-120,70);
  textSize(35);
  text("SCOOT",75,160);
  textSize(13)
  text("< to go left",30,50);
  text("> to go right",510,50);
  textSize(25);
  text("R&B",(width/2)+10, (height/2)-50);
  text("POP",(width/2)+10,height/2);
  text("ROCK",(width/2)+10,(height/2)+50);
  text("FUNK",(width/2)+10,(height/2)+100);
  text("SOUL",(width/2)+10,(height/2)+150);
  text("FOLK",(width/2)+10,(height/2)+200);
  rect((width/2)+125,(height/2)-77,200,25);
  rect((width/2)+125,(height/2)-27,200,25);
  rect((width/2)+125,(height/2)+23,200,25);
  rect((width/2)+125,(height/2)+73,200,25);
  rect((width/2)+125,(height/2)+123,200,25);
  rect((width/2)+125,(height/2)+173,200,25);
  fill("MidnightBlue");
  rect((width/2)+125,(height/2)-77,100,25);
  rect((width/2)+125,(height/2)-27,50,25);
  rect((width/2)+125,(height/2)+23,10,25);
  rect((width/2)+125,(height/2)+73,30,25);
  rect((width/2)+125,(height/2)+123,30,25);
  rect((width/2)+125,(height/2)+173,15,25);
}
if (currentScreen == 5){
  background("Teal");
  image(dmel,60,180, dmel.width*1.5,dmel.height*1.5);
  fill("black");
  textSize(50);
  text("STATS",(width/2)-120,70);
  textSize(35);
  text("D.MEL",85,160);
  textSize(13)
  text("< to go left",30,50);
  text("> to go right",510,50);
  textSize(25);
  text("R&B",(width/2)+10, (height/2)-50);
  text("POP",(width/2)+10,height/2);
  text("ROCK",(width/2)+10,(height/2)+50);
  text("FUNK",(width/2)+10,(height/2)+100);
  text("SOUL",(width/2)+10,(height/2)+150);
  text("FOLK",(width/2)+10,(height/2)+200);
  rect((width/2)+125,(height/2)-77,200,25);
  rect((width/2)+125,(height/2)-27,200,25);
  rect((width/2)+125,(height/2)+23,200,25);
  rect((width/2)+125,(height/2)+73,200,25);
  rect((width/2)+125,(height/2)+123,200,25);
  rect((width/2)+125,(height/2)+173,200,25);
  fill("MidnightBlue");
  rect((width/2)+125,(height/2)-77,190,25);
  rect((width/2)+125,(height/2)-27,40,25);
  rect((width/2)+125,(height/2)+23,20,25);
  rect((width/2)+125,(height/2)+73,15,25);
  rect((width/2)+125,(height/2)+123,150,25);
  rect((width/2)+125,(height/2)+173,5,25);
}
if (currentScreen == 6){
  background("Teal");
  image(tino,60,180, tino.width*1.5,tino.height*1.5);
  fill("black");
  textSize(50);
  text("STATS",(width/2)-120,70);
  textSize(35);
  text("TINO",105,160);
  textSize(13)
  text("< to go left",30,50);
  text("> to go right",510,50);
  textSize(25);
  text("R&B",(width/2)+10, (height/2)-50);
  text("POP",(width/2)+10,height/2);
  text("ROCK",(width/2)+10,(height/2)+50);
  text("FUNK",(width/2)+10,(height/2)+100);
  text("SOUL",(width/2)+10,(height/2)+150);
  text("FOLK",(width/2)+10,(height/2)+200);
  rect((width/2)+125,(height/2)-77,200,25);
  rect((width/2)+125,(height/2)-27,200,25);
  rect((width/2)+125,(height/2)+23,200,25);
  rect((width/2)+125,(height/2)+73,200,25);
  rect((width/2)+125,(height/2)+123,200,25);
  rect((width/2)+125,(height/2)+173,200,25);
  fill("MidnightBlue");
  rect((width/2)+125,(height/2)-77,65,25);
  rect((width/2)+125,(height/2)-27,80,25);
  rect((width/2)+125,(height/2)+23,125,25);
  rect((width/2)+125,(height/2)+73,150,25);
  rect((width/2)+125,(height/2)+123,20,25);
  rect((width/2)+125,(height/2)+173,25,25);
}
if (currentScreen == 7){
  background("Teal");
  image(michael,60,180, michael.width*1.5,michael.height*1.5);
  fill("black");
  textSize(50);
  text("STATS",(width/2)-120,70);
  textSize(35);
  text("MIK",105,160);
  textSize(13)
  text("< to go left",30,50);
  text("> to go right",510,50);
  textSize(25);
  text("R&B",(width/2)+10, (height/2)-50);
  text("POP",(width/2)+10,height/2);
  text("ROCK",(width/2)+10,(height/2)+50);
  text("FUNK",(width/2)+10,(height/2)+100);
  text("SOUL",(width/2)+10,(height/2)+150);
  text("FOLK",(width/2)+10,(height/2)+200);
  rect((width/2)+125,(height/2)-77,200,25);
  rect((width/2)+125,(height/2)-27,200,25);
  rect((width/2)+125,(height/2)+23,200,25);
  rect((width/2)+125,(height/2)+73,200,25);
  rect((width/2)+125,(height/2)+123,200,25);
  rect((width/2)+125,(height/2)+173,200,25);
  fill("MidnightBlue");
  rect((width/2)+125,(height/2)-77,15,25);
  rect((width/2)+125,(height/2)-27,190,25);
  rect((width/2)+125,(height/2)+23,5,25);
  rect((width/2)+125,(height/2)+73,5,25);
  rect((width/2)+125,(height/2)+123,20,25);
  rect((width/2)+125,(height/2)+173,25,25);
}
if (currentScreen == 8){
  background("Teal");
  image(maddy,60,180, maddy.width*1.5,maddy.height*1.5);
  fill("black");
  textSize(50);
  text("STATS",(width/2)-120,70);
  textSize(35);
  text("MADDY",105,160);
  textSize(13)
  text("< to go left",30,50);
  text("> to go right",510,50);
  textSize(25);
  text("R&B",(width/2)+10, (height/2)-50);
  text("POP",(width/2)+10,height/2);
  text("ROCK",(width/2)+10,(height/2)+50);
  text("FUNK",(width/2)+10,(height/2)+100);
  text("SOUL",(width/2)+10,(height/2)+150);
  text("FOLK",(width/2)+10,(height/2)+200);
  rect((width/2)+125,(height/2)-77,200,25);
  rect((width/2)+125,(height/2)-27,200,25);
  rect((width/2)+125,(height/2)+23,200,25);
  rect((width/2)+125,(height/2)+73,200,25);
  rect((width/2)+125,(height/2)+123,200,25);
  rect((width/2)+125,(height/2)+173,200,25);
  fill("MidnightBlue");
  rect((width/2)+125,(height/2)-77,195,25);
  rect((width/2)+125,(height/2)-27,80,25);
  rect((width/2)+125,(height/2)+23,5,25);
  rect((width/2)+125,(height/2)+73,50,25);
  rect((width/2)+125,(height/2)+123,120,25);
  rect((width/2)+125,(height/2)+173,25,25);
}
if (currentScreen == 9){
  background("Teal");
  image(jeyhan,60,180, jeyhan.width*1.5,jeyhan.height*1.5);
  fill("black");
  textSize(50);
  text("STATS",(width/2)-120,70);
  textSize(35);
  text("JEYHAN",105,160);
  textSize(13)
  text("< to go left",30,50);
  text("> to go right",510,50);
  textSize(25);
  text("R&B",(width/2)+10, (height/2)-50);
  text("POP",(width/2)+10,height/2);
  text("ROCK",(width/2)+10,(height/2)+50);
  text("FUNK",(width/2)+10,(height/2)+100);
  text("SOUL",(width/2)+10,(height/2)+150);
  text("FOLK",(width/2)+10,(height/2)+200);
  rect((width/2)+125,(height/2)-77,200,25);
  rect((width/2)+125,(height/2)-27,200,25);
  rect((width/2)+125,(height/2)+23,200,25);
  rect((width/2)+125,(height/2)+73,200,25);
  rect((width/2)+125,(height/2)+123,200,25);
  rect((width/2)+125,(height/2)+173,200,25);
  fill("MidnightBlue");
  rect((width/2)+125,(height/2)-77,165,25);
  rect((width/2)+125,(height/2)-27,190,25);
  rect((width/2)+125,(height/2)+23,15,25);
  rect((width/2)+125,(height/2)+73,10,25);
  rect((width/2)+125,(height/2)+123,50,25);
  rect((width/2)+125,(height/2)+173,15,25);
}
if (currentScreen == 10){
  background("Teal");
  image(haley,60,180, haley.width*1.5,haley.height*1.5);
  fill("black");
  textSize(50);
  text("STATS",(width/2)-120,70);
  textSize(35);
  text("HALEY",105,160);
  textSize(13)
  text("< to go left",30,50);
  text("> to go right",510,50);
  textSize(25);
  text("R&B",(width/2)+10, (height/2)-50);
  text("POP",(width/2)+10,height/2);
  text("ROCK",(width/2)+10,(height/2)+50);
  text("FUNK",(width/2)+10,(height/2)+100);
  text("SOUL",(width/2)+10,(height/2)+150);
  text("FOLK",(width/2)+10,(height/2)+200);
  rect((width/2)+125,(height/2)-77,200,25);
  rect((width/2)+125,(height/2)-27,200,25);
  rect((width/2)+125,(height/2)+23,200,25);
  rect((width/2)+125,(height/2)+73,200,25);
  rect((width/2)+125,(height/2)+123,200,25);
  rect((width/2)+125,(height/2)+173,200,25);
  fill("MidnightBlue");
  rect((width/2)+125,(height/2)-77,165,25);
  rect((width/2)+125,(height/2)-27,190,25);
  rect((width/2)+125,(height/2)+23,100,25);
  rect((width/2)+125,(height/2)+73,150,25);
  rect((width/2)+125,(height/2)+123,70,25);
  rect((width/2)+125,(height/2)+173,25,25);
}
if (currentScreen == 11){
  background("Teal");
  image(josh,60,180, josh.width*1.5,josh.height*1.5);
  fill("black");
  textSize(50);
  text("STATS",(width/2)-120,70);
  textSize(25);
  text("'The Commander'",3,160);
  textSize(13)
  text("< to go left",30,50);
  text("> to go right",510,50);
  textSize(25);
  text("R&B",(width/2)+10, (height/2)-50);
  text("POP",(width/2)+10,height/2);
  text("ROCK",(width/2)+10,(height/2)+50);
  text("FUNK",(width/2)+10,(height/2)+100);
  text("SOUL",(width/2)+10,(height/2)+150);
  text("FOLK",(width/2)+10,(height/2)+200);
  rect((width/2)+125,(height/2)-77,200,25);
  rect((width/2)+125,(height/2)-27,200,25);
  rect((width/2)+125,(height/2)+23,200,25);
  rect((width/2)+125,(height/2)+73,200,25);
  rect((width/2)+125,(height/2)+123,200,25);
  rect((width/2)+125,(height/2)+173,200,25);
  fill("MidnightBlue");
  rect((width/2)+125,(height/2)-77,15,25);
  rect((width/2)+125,(height/2)-27,120,25);
  rect((width/2)+125,(height/2)+23,50,25);
  rect((width/2)+125,(height/2)+73,150,25);
  rect((width/2)+125,(height/2)+123,120,25);
  rect((width/2)+125,(height/2)+173,150,25);
}
if (currentScreen == 12){
  background("Teal");
  image(anja,60,180, anja.width*1.5,anja.height*1.5);
  fill("black");
  textSize(50);
  text("STATS",(width/2)-120,70);
  textSize(35);
  text("ANJA",105,160);
  textSize(13)
  text("< to go left",30,50);
  text("> to go right",510,50);
  textSize(25);
  text("R&B",(width/2)+10, (height/2)-50);
  text("POP",(width/2)+10,height/2);
  text("ROCK",(width/2)+10,(height/2)+50);
  text("FUNK",(width/2)+10,(height/2)+100);
  text("SOUL",(width/2)+10,(height/2)+150);
  text("FOLK",(width/2)+10,(height/2)+200);
  rect((width/2)+125,(height/2)-77,200,25);
  rect((width/2)+125,(height/2)-27,200,25);
  rect((width/2)+125,(height/2)+23,200,25);
  rect((width/2)+125,(height/2)+73,200,25);
  rect((width/2)+125,(height/2)+123,200,25);
  rect((width/2)+125,(height/2)+173,200,25);
  fill("MidnightBlue");
  rect((width/2)+125,(height/2)-77,35,25);
  rect((width/2)+125,(height/2)-27,200,25);
  rect((width/2)+125,(height/2)+23,45,25);
  rect((width/2)+125,(height/2)+73,5,25);
  rect((width/2)+125,(height/2)+123,5,25);
  rect((width/2)+125,(height/2)+173,25,25);
}
if (currentScreen == 13){
  background("Teal");
  image(gabe,60,180, gabe.width*1.5,gabe.height*1.5);
  fill("black");
  textSize(50);
  text("STATS",(width/2)-120,70);
  textSize(35);
  text("GABE",105,160);
  textSize(13)
  text("< to go left",30,50);
  text("> to go right",510,50);
  textSize(25);
  text("R&B",(width/2)+10, (height/2)-50);
  text("POP",(width/2)+10,height/2);
  text("ROCK",(width/2)+10,(height/2)+50);
  text("FUNK",(width/2)+10,(height/2)+100);
  text("SOUL",(width/2)+10,(height/2)+150);
  text("FOLK",(width/2)+10,(height/2)+200);
  rect((width/2)+125,(height/2)-77,200,25);
  rect((width/2)+125,(height/2)-27,200,25);
  rect((width/2)+125,(height/2)+23,200,25);
  rect((width/2)+125,(height/2)+73,200,25);
  rect((width/2)+125,(height/2)+123,200,25);
  rect((width/2)+125,(height/2)+173,200,25);
  fill("MidnightBlue");
  rect((width/2)+125,(height/2)-77,165,25);
  rect((width/2)+125,(height/2)-27,150,25);
  rect((width/2)+125,(height/2)+23,25,25);
  rect((width/2)+125,(height/2)+73,100,25);
  rect((width/2)+125,(height/2)+123,120,25);
  rect((width/2)+125,(height/2)+173,25,25);
}
if (currentScreen == 14){
  background("Teal");
  image(avery,60,180, avery.width*1.5,avery.height*1.5);
  fill("black");
  textSize(50);
  text("STATS",(width/2)-120,70);
  textSize(35);
  text("AVERY",105,160);
  textSize(13)
  text("< to go left",30,50);
  text("> to go right",510,50);
  textSize(25);
  text("R&B",(width/2)+10, (height/2)-50);
  text("POP",(width/2)+10,height/2);
  text("ROCK",(width/2)+10,(height/2)+50);
  text("FUNK",(width/2)+10,(height/2)+100);
  text("SOUL",(width/2)+10,(height/2)+150);
  text("FOLK",(width/2)+10,(height/2)+200);
  rect((width/2)+125,(height/2)-77,200,25);
  rect((width/2)+125,(height/2)-27,200,25);
  rect((width/2)+125,(height/2)+23,200,25);
  rect((width/2)+125,(height/2)+73,200,25);
  rect((width/2)+125,(height/2)+123,200,25);
  rect((width/2)+125,(height/2)+173,200,25);
  fill("MidnightBlue");
  rect((width/2)+125,(height/2)-77,65,25);
  rect((width/2)+125,(height/2)-27,190,25);
  rect((width/2)+125,(height/2)+23,25,25);
  rect((width/2)+125,(height/2)+73,15,25);
  rect((width/2)+125,(height/2)+123,20,25);
  rect((width/2)+125,(height/2)+173,125,25);
}
if (currentScreen == 15){
  background("Teal");
  image(arron,60,180, arron.width*1.5,arron.height*1.5);
  fill("black");
  textSize(50);
  text("STATS",(width/2)-120,70);
  textSize(35);
  text("'SPIDEY'",35,160);
  textSize(13)
  text("< to go left",30,50);
  text("> to go right",510,50);
  textSize(25);
  text("R&B",(width/2)+10, (height/2)-50);
  text("POP",(width/2)+10,height/2);
  text("ROCK",(width/2)+10,(height/2)+50);
  text("FUNK",(width/2)+10,(height/2)+100);
  text("SOUL",(width/2)+10,(height/2)+150);
  text("FOLK",(width/2)+10,(height/2)+200);
  rect((width/2)+125,(height/2)-77,200,25);
  rect((width/2)+125,(height/2)-27,200,25);
  rect((width/2)+125,(height/2)+23,200,25);
  rect((width/2)+125,(height/2)+73,200,25);
  rect((width/2)+125,(height/2)+123,200,25);
  rect((width/2)+125,(height/2)+173,200,25);
  fill("MidnightBlue");
  rect((width/2)+125,(height/2)-77,200,25);
  rect((width/2)+125,(height/2)-27,80,25);
  rect((width/2)+125,(height/2)+23,25,25);
  rect((width/2)+125,(height/2)+73,50,25);
  rect((width/2)+125,(height/2)+123,120,25);
  rect((width/2)+125,(height/2)+173,50,25);
}
if (currentScreen == 16){
  currentScreen = 1
}

}

function keyPressed(){
if (keyCode === ENTER){
  currentScreen = 1;
}
if (currentScreen > 0){
  if(keyCode === RIGHT_ARROW){
    currentScreen = currentScreen+1;
    //HOW PREVENT FROM GOING BACK TO START SCREEN? stay greter than 0
  }
  if(keyCode===LEFT_ARROW){
    currentScreen=currentScreen-1;

  }//end if keycode left arrow
}//end if currentScreen
}//end keyPressed
