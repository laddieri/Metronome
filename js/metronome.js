//create a synth and connect it to the master output (your speakers)
var synth = new Tone.Synth().toMaster();
var tempo = 120;

//play a middle 'C' for the duration of an 8th note


Tone.Transport.scheduleRepeat(function(time){
	synth.triggerAttackRelease("C4", "8n");
}, "4n");

function play() {
Tone.Transport.start();
}

function stop() {
Tone.Transport.stop();
}

console.log("hello world");
