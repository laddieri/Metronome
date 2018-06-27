//create a synth and connect it to the master output (your speakers)
var synth = new Tone.Synth().toMaster();
var tempo = 120;

//play a middle 'C' for the duration of an 8th note

var colors = ["red", "orange", "blue", "green"]
var windowCanvasRatio =1.75;
var fr=60;
var x=0;
var xpos=0;
var ypos=0;
var vdirection=-1;
var ydirection=-1;
var moving=0;
var ballRatio=10;
var screenRatio = 4/3;
var rad;
var animating=false;
var t = 1;
function setup() {
  createCanvas(windowWidth/windowCanvasRatio, windowHeight/windowCanvasRatio);
  calculateBallSize(height);
  frameRate(fr)
  noStroke();
  ellipseMode(RADIUS);
  xpos=width/2;
  ypos=height-rad;
}
function windowResized() {
  console.log(height);
  resizeCanvas(windowWidth/windowCanvasRatio, windowHeight/windowCanvasRatio);
  calculateBallSize(height);
  xpos = width/2;
  ypos=height-rad;
}

function calculateBallSize (heightInput) {
  rad = heightInput / ballRatio;
}

function draw() {
  background(255, 204, 0);
  ellipse(xpos, ypos, rad, rad);

  if (animating){
    updateYPos(t);
    t++;
  }
}

function updateYPos(time){
  ypos = height-rad - (-tempo/3000*time*time + tempo/40*time);
  console.log(ypos);


}

// function mousePressed() {
//   animating=true;
//
//
// }


Tone.Transport.scheduleRepeat(function(time){
  synth.triggerAttackRelease("C4", "16n");
  Tone.Draw.schedule(function(){

    animating=true;
    t=0;

  }, time);
}, "4n");

function play() {
  Tone.Transport.stop();
  Tone.Transport.start();
}

function stop() {
  Tone.Transport.stop();
  animating=false;
}

function updateTempo (tempoInput) {
  tempo = tempoInput;
  Tone.Transport.bpm.value = tempo;
  updateTempoText(tempo);
}

var tempoSlider = document.getElementById('tempoSlider');
tempoSlider.addEventListener('input', function(){
  updateTempo(this.value);
});

var tempoText = document.getElementById('tempoText');
tempoText.addEventListener('input', function(){
  updateTempo(this.value);
  tempoSlider.value = this.value;
});

function updateTempoText(tempoTextInput){
  document.getElementById('tempoText').value = tempoTextInput;
}
