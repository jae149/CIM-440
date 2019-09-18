
var puppyImage;
//before everything else bc used to load media b4 everything else
function preload(){
//use to load media
  puppyImage = loadImage("puppies.jpg");
}

function setup() {
  // put setup code here
  createCanvas(600,400);
}

function draw() {
  // put drawing code here

  //image(puppyImage,0,0);//(image var, x position, y position)

//dividing width and height by a number scales proportionally
  image(puppyImage,0,0,puppyImage.width/2,puppyImage.height/2);//imagevar,x position, y poition, width, height
//dont choose a random size bc image will be distorted
//image(puppyImage,0,0,100,50);//imagevar,x position, y poition, width, height

}
