// Sloth image "IMG_3883" by JohnHedtke is licensed under CC BY-NC-SA 2.0 https://search.creativecommons.org/photos/217faedd-d06a-48ba-91f7-f4d4c6dafa04
// Puppy image "puppies" by www.petian.net is licensed under CC BY-NC-ND 2.0  https://search.creativecommons.org/photos/4f271583-e45d-4faf-bfc8-7291c7c1e3c3
// dinosaur "Rupenhorn Dinosaur #4" by Kristian_Laban is licensed under CC BY-NC 2.0 https://search.creativecommons.org/photos/96213ba5-e9b6-4f2f-91e4-da28b9fcad22
//frog image "Frog" by HeatherW is licensed under CC BY-NC 2.0 <p style="font-size: 0.9rem;font-style: italic;"><a href="https://www.flickr.com/photos/53942725@N00/11017741">"Frog"</a><span>by <a href="https://www.flickr.com/photos/53942725@N00">HeatherW</a></span> is licensed under <a href="https://creativecommons.org/licenses/by-nc/2.0/?ref=ccsearch&atype=html" style="margin-right: 5px;">CC BY-NC 2.0</a><a href="https://creativecommons.org/licenses/by-nc/2.0/?ref=ccsearch&atype=html" target="_blank" rel="noopener noreferrer" style="display: inline-block;white-space: none;opacity: .7;margin-top: 2px;margin-left: 3px;height: 22px !important;"><img style="height: inherit;margin-right: 3px;display: inline-block;" src="https://search.creativecommons.org/static/img/cc_icon.svg" /><img style="height: inherit;margin-right: 3px;display: inline-block;" src="https://search.creativecommons.org/static/img/cc-by_icon.svg" /><img style="height: inherit;margin-right: 3px;display: inline-block;" src="https://search.creativecommons.org/static/img/cc-nc_icon.svg" /></a></p>
//turtle image "P3250305" by kramdar is licensed under CC BY-NC-SA 2.0 <p style="font-size: 0.9rem;font-style: italic;"><a href="http://www.flickr.com/photos/94043878@N00/119410879">"P3250305"</a><span>by <a href="http://www.flickr.com/photos/94043878@N00">kramdar</a></span> is licensed under <a href="https://creativecommons.org/licenses/by-nc-sa/2.0/?ref=ccsearch&atype=html" style="margin-right: 5px;">CC BY-NC-SA 2.0</a><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/?ref=ccsearch&atype=html" target="_blank" rel="noopener noreferrer" style="display: inline-block;white-space: none;opacity: .7;margin-top: 2px;margin-left: 3px;height: 22px !important;"><img style="height: inherit;margin-right: 3px;display: inline-block;" src="https://search.creativecommons.org/static/img/cc_icon.svg" /><img style="height: inherit;margin-right: 3px;display: inline-block;" src="https://search.creativecommons.org/static/img/cc-by_icon.svg" /><img style="height: inherit;margin-right: 3px;display: inline-block;" src="https://search.creativecommons.org/static/img/cc-nc_icon.svg" /><img style="height: inherit;margin-right: 3px;display: inline-block;" src="https://search.creativecommons.org/static/img/cc-sa_icon.svg" /></a></p>


var puppy, dinosaur, sloth, frog, turtle;//variables undefined
var pButton, dButton, sButton, fButton, tButton;

var currentImage = 0;
var currentAnimal;//currentAnimal undefined

var imageArray = [];

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

  pButton = createButton("Puppy");
  pButton.mousePressed(function(){
    currentImage = 0;
  });

  dButton = createButton("Dinosaur");
  dButton.mousePressed(function(){
    currentImage = 1;
  });

  sButton = createButton("Sloth");
  sButton.mousePressed(function(){
    currentImage = 2;

    currentAnimal = puppy
  });

fButton = createButton("Frog");
fButton.mousePressed(function(){
  currentImage = 3;

});

tButton = createButton("Turtle");
tButton.mousePressed(function(){
  currentImage = 4;

});

}

function draw() {
  // put drawing code here
  background(255);
console.log("currentImage" + currentImage);//shows value of current image in web developper tools
image(imageArray[currentImage],0,0,imageArray[currentImage].width/4,imageArray[currentImage].height/4);

}
