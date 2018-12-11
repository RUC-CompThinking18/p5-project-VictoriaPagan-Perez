/* The code that I am writing is a soundboard site. I wanted to make
a site that worked with sounds since I find sound to be one of the more interactive
methods of showing feedback.

There were many things that hung me up with this project, but I did find my way
through it with a lot of help. The first thing that really confused me was the
way that the program reads the canvas. I am still haveing issues with finding out
why the x and y canvas isn't necessarily woring as predicted. Another big difference
that I wasn't prepared for is the difference in format of the code as the curly
brackets really caused some confusion when nesting the codes inside of eachother.
Another thing that I found odd was the coding for the sounds in the soundboard.
One more thing that I found to be challenging was finding a color for the
background that would not only compliment the subject matter, but would also allow
for a nice pop of color. I tried maybe five to six different colors. Since I knew
that I wanted to have a soundboard that had some pop of color,
I found that the color that I chose would fit best.

The reason why I chose to do a soundboard is because of the fact that it allows the
user to become a part of the interface with a simple click. This also gives an almost
instant gratification to the user. There is an immediate and audible reaction to their
click. It also reminds me of the Speak and Spell that I had as a child. That is
yet another reason for the fun pop of color, since the Speak and Spell also had many
fun colors. For me, this project also reminded me of the early days of AOL and the internet.
I remember being so surprised when I heard noises coming out of my  computer when I
pressed something. It was always one of those things that I found to be incredibly nostalgic
to me. Which is why I also chose a car and a bell for the sounds that were chosen, as I always had a
strong connecions to my childhood and hearing the churchbells outside as well as the sounds of horns during
car rides. */
var carImage ;
var bellImage ;
var instructions = 'Hello and welcome to the soundboard experience! Please, Click a picture!';
var car ;
var bell ;

function preload(){
  carImage = loadImage('car image.jpg');//The loadImage is used in this to load the different images that I want to use as the buttons.
  bellImage = loadImage('bell image.jpg');
  soundFormats( 'wav');//The sound formats are to allow the program the types of sound files that I am using, which all happen to be wav formats.
  car = loadSound('car sound.wav');//The loadSound then allows the program to upload the specific sound I ask for. The name of the file is in quotations since I have a space in the file name.
  bell = loadSound('bell sound.wav');
}

function setup() {
  createCanvas(556, 500);
    background(102, 178, 155)//This allowed me to change the background color to the color assigned to this RGB scale.
    image(carImage, 0, 0); //I wanted to start off with the car image, which is why I told it to place it at the position (0,0)
    image(bellImage, 300, 0);//I then moved the second picture to 300 to the the right.
    fill(20); //This refers to the text, which I wanted to have a fill of 2o,a text size of 17, and I wanted all of text to be in italics, to add texture to the words.
    textSize(17);
    textStyle(ITALIC);

  }

function draw() {
    text(instructions, 0, 275);//These two instances of code tell the program to make the sound only if the mouse lies in between the parameters of the mouseX and mouseY parameters.
    if (mouseIsPressed) {
      if (mouseX < 254 && mouseY < 198){
        car.setVolume(0.5);
        car.play();}
      }

      print(mouseIsPressed);//The parameters above are for making the car horn sound.
    if (mouseIsPressed) {
        if (mouseX > 254 && mouseY < 198){
          bell.setVolume(0.5);
          bell.play();}
        }
      print(mouseIsPressed);// The paramaters above are for making the church bell sound.
    }
