// Sloth image "IMG_3883" by JohnHedtke is licensed under CC BY-NC-SA 2.0 https://search.creativecommons.org/photos/217faedd-d06a-48ba-91f7-f4d4c6dafa04
// Puppy image "puppies" by www.petian.net is licensed under CC BY-NC-ND 2.0  https://search.creativecommons.org/photos/4f271583-e45d-4faf-bfc8-7291c7c1e3c3
// dinosaur "Rupenhorn Dinosaur #4" by Kristian_Laban is licensed under CC BY-NC 2.0 https://search.creativecommons.org/photos/96213ba5-e9b6-4f2f-91e4-da28b9fcad22
//frog image "Frog" by HeatherW is licensed under CC BY-NC 2.0 <p style="font-size: 0.9rem;font-style: italic;"><a href="https://www.flickr.com/photos/53942725@N00/11017741">"Frog"</a><span>by <a href="https://www.flickr.com/photos/53942725@N00">HeatherW</a></span> is licensed under <a href="https://creativecommons.org/licenses/by-nc/2.0/?ref=ccsearch&atype=html" style="margin-right: 5px;">CC BY-NC 2.0</a><a href="https://creativecommons.org/licenses/by-nc/2.0/?ref=ccsearch&atype=html" target="_blank" rel="noopener noreferrer" style="display: inline-block;white-space: none;opacity: .7;margin-top: 2px;margin-left: 3px;height: 22px !important;"><img style="height: inherit;margin-right: 3px;display: inline-block;" src="https://search.creativecommons.org/static/img/cc_icon.svg" /><img style="height: inherit;margin-right: 3px;display: inline-block;" src="https://search.creativecommons.org/static/img/cc-by_icon.svg" /><img style="height: inherit;margin-right: 3px;display: inline-block;" src="https://search.creativecommons.org/static/img/cc-nc_icon.svg" /></a></p>
//turtle image "P3250305" by kramdar is licensed under CC BY-NC-SA 2.0 <p style="font-size: 0.9rem;font-style: italic;"><a href="http://www.flickr.com/photos/94043878@N00/119410879">"P3250305"</a><span>by <a href="http://www.flickr.com/photos/94043878@N00">kramdar</a></span> is licensed under <a href="https://creativecommons.org/licenses/by-nc-sa/2.0/?ref=ccsearch&atype=html" style="margin-right: 5px;">CC BY-NC-SA 2.0</a><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/?ref=ccsearch&atype=html" target="_blank" rel="noopener noreferrer" style="display: inline-block;white-space: none;opacity: .7;margin-top: 2px;margin-left: 3px;height: 22px !important;"><img style="height: inherit;margin-right: 3px;display: inline-block;" src="https://search.creativecommons.org/static/img/cc_icon.svg" /><img style="height: inherit;margin-right: 3px;display: inline-block;" src="https://search.creativecommons.org/static/img/cc-by_icon.svg" /><img style="height: inherit;margin-right: 3px;display: inline-block;" src="https://search.creativecommons.org/static/img/cc-nc_icon.svg" /><img style="height: inherit;margin-right: 3px;display: inline-block;" src="https://search.creativecommons.org/static/img/cc-sa_icon.svg" /></a></p>


var currentImage = 0;

var imageArray = [];

var hitX = [100,200];
var hitY = [300,300];

var hitSize = 50;

function preload(){
  // load media
  imageArray[0] = loadImage("images/puppy.jpg");//variable finally given definition
  imageArray[1] = loadImage("images/dinosaur.jpg");
  imageArray[2] = loadImage("images/sloth.jpg");
  imageArray[3] = loadImage("images/frog.jpg");
  imageArray[4] = loadImage("images/turtle.jpg");
}

function setup() {
  // put setup code here
  createCanvas(400,400);

}

function draw() {
  // put drawing code here
  background(255);
console.log("currentImage" + currentImage);//shows value of current image in web developper tools
image(imageArray[currentImage],0,0,imageArray[currentImage].width/4,imageArray[currentImage].height/4);

rect(hitX[0],hitY[0],hitSize,hitSize);
rect(hitX[1],hitY[1],hitSize,hitSize);

}//end of draw loop

function mousePressed(){
  if(mouseX > hitX[0] && mouseX < hitX[0] + hitSize && mouseY > hitY[0] && mouseY < hitY[0] + hitSize){
    console.log("Button 0");
    currentImage = currentImage + 1;

    if(currentImage == 5){
      currentImage = 0;
    }//end of second condition
  }else if(mouseX > hitX[1] && mouseX < hitX[1] + hitSize && mouseY > hitY[1] && mouseY < hitY [1] + hitSize){
    console.log("Button 1");
    currentImage = currentImage - 1;

    if(currentImage == -1){
      currentImage = 4;
    }//end of condition inside else if
  }//end else if
}//end of mousePressed
