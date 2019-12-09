function setup() {
  // put setup code here
var cnv =  createCanvas(400,400);
cnv.id("myCanvas");

var container0 = createDiv();
container0.id("container0");
// # => designate an id, find an id that = container0
// .html injects html or text into another html tag
select("#container0").html("<h1>Your sketch title here!</h1>");
// .style ("css property", "value")
select("#container0").style("width","400px");//setting width of contaier 0
select("#container0").style("margin","20px auto");//center our container, margin:0 auto; 0 refers to top and bottom spacing of our container, the auto refers to the left and right spacig of our container

//to center our container, need to set width and margin:0 auto
cnv.parent("#container0");

select('body').style("background-color","red");
//select('body').style()"background-image", "url('assets/image.jpg')";//how to make background an image
}

function draw() {
  // put drawing code here
  background(0);
}
