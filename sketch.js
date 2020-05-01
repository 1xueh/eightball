// Global Variables
let answer = '';
let number = null;
let ding;
let loc;

function setup() {
  const cnv = createCanvas(400, 400);
  cnv.position(displayWidth / 2 - 200, 150);

  ding = loadSound("assets/ding.mp3");
  ding.amp(0.25);
  ding.rate(1.5);
  
  loc = createVector(160, 200);
}

function draw() {
  background("purple");

  // Draw Background
  push();
  fill(0);
  ellipse(200, 200, 200);
  fill(225);
  ellipse(200, 200, 125);
  noStroke();
  rect(0, 0, 4, 400);
  rect(396, 0, 4, 400);
  rect(0, 0, 400, 4);
  rect(0, 396, 400, 4);
  pop();

  // Text
  textFont('Courier New');
  textSize(25);
  text('Magic Eight Ball', 85, 50);

  textFont('Dejavu Sans');
  textSize(10);
  text(answer, loc.x, loc.y);

  // Call Functions
  randomize();

  // Cut Sound Effect
  if (ding.currentTime() > 1.8) {
    ding.stop();
  }
}

// Functions
function keyPressed() {
  if (key == 's') {
    number = floor(random(8));
  }

  if (key == 's' && !ding.isPlaying()) {
    ding.play();
  }

}

function randomize() {
  if (number === null) {
    answer = "Press S to Shake";
  } else if (number === 1) {
    answer = "That is true";
    loc.x = 170;
  } else if (number === 2) {
    answer = "That is false";
    loc.x = 170;
  } else if (number === 3) {
    answer = "Try again later";
    loc.x = 165;
  } else if (number === 4) {
    answer = "It is certain";
    loc.x = 170;
  } else if (number === 5) {
    answer = "Will never happen";
    loc.x = 157;
  } else if (number === 6) {
    answer = "Signs point to yes";
    loc.x = 158;
  } else if (number === 7) {
    answer = "Outlook not so good";
    loc.x = 150;
  } else if (number == 0) {
    answer = "Cannot predict";
    loc.x = 165;
  }
}
