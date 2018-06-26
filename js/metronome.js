//create a synth and connect it to the master output (your speakers)
var synth = new Tone.Synth().toMaster();
var tempo = 120;

//play a middle 'C' for the duration of an 8th note

var colors = ["red", "orange", "blue", "green"]
var x=0;
var tempoTextVar = document.getElementById("tempoText")
var xpos=0;
var ypos=0;
var vdirection=-1;
var ydirection=-1;
var rad=40;
var moving=0;
var animating=false;
var t = 0;
function setup() {
  createCanvas(640, 380);
  ellipseMode(RADIUS);
  xpos=width/2;
  ypos=height-rad;
}

function draw() {
  background(100);
  ellipse(xpos, ypos, rad, rad);

  // ypos--;
  // ypos = ypos-(ypos*moving);

  if (animating){
    if (ypos < height-(350-tempo) || ypos > height-rad){
      ydirection=ydirection*-1;
    }


      ypos=ypos+ydirection*20;
    if (ypos > height-rad){
      animating=false;
    }

  }
}

// function mousePressed() {
//   animating=true;
//
//
// }


Tone.Transport.scheduleRepeat(function(time){
  synth.triggerAttackRelease("C4", "8n");
  Tone.Draw.schedule(function(){
    //do drawing or DOM manipulation here
    // document.getElementById('flashBox').style.backgroundColor = colors[x];
    // x++;
    // if (x==colors.length){
    //   x=0;
    // }

    animating=true;
    ;

  }, time);
}, "4n");

function play() {
  Tone.Transport.stop();
  Tone.Transport.start();
}

function stop() {
  Tone.Transport.stop();
}

function setTempo(mtempo){
  if(tempo>210){
    alert("Tempo must be less than 210");
  }
  Tone.Transport.bpm.value = mtempo;
  updateTempoText(tempo);
  document.getElementById("tempo").value = mtempo;
  tempo=mtempo;
}

function updateTempoText(tempoTextInput){
  document.getElementById('tempoText').value = tempoTextInput;
}
