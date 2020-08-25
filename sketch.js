// Global Variables
let answer = '';
let number = null;
let ding;
let loc;

function setup() {
  const cnv = createCanvas(400, 400);
  cnv.position(displayWidth / 2 - 200, 150);
  
  textAlign(CENTER);

  ding = loadSound("assets/ding.mp3");
  ding.amp(0.25);
  ding.rate(1.5);
  
  loc = createVector(width / 2, height / 2);
}

function draw() {
  background("purple");

  // Draw Background
  drawEightball();

  // Text
  textFont('Courier New');
  textSize(25);
  text('Magic Eight Ball', width / 2, 50);

  textFont('Dejavu Sans');
  textSize(10);
  text(answer, loc.x, loc.y);

  // Call Functions
  randomize();

  // Cut Sound Effect
  if (ding.currentTime() > 1.2) {
    ding.stop();
  }
}

// Functions
function keyPressed() {
  if (key == 's') {
    number = floor(random(8));
  }

  if (key == 's') {
    ding.play();
  }
}

function drawEightball() {
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
}

function randomize() {
  if (number === null) {
    answer = "Press S to Shake";
  } else if (number === 1) {
    answer = "That is true";
  } else if (number === 2) {
    answer = "That is false";
  } else if (number === 3) {
    answer = "Try again later";
  } else if (number === 4) {
    answer = "It is certain";
  } else if (number === 5) {
    answer = "Will never happen";
  } else if (number === 6) {
    answer = "Signs point to yes";
  } else if (number === 7) {
    answer = "Outlook not so good";
  } else if (number == 0) {
    answer = "Cannot predict";
  }
}
