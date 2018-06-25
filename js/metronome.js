//create a synth and connect it to the master output (your speakers)
var synth = new Tone.Synth().toMaster();
var tempo = 120;

//play a middle 'C' for the duration of an 8th note

var colors = ["red", "orange", "blue", "green"]
var x=0;
var tempoTextVar = document.getElementById("tempoText")

Tone.Transport.scheduleRepeat(function(time){
	synth.triggerAttackRelease("C4", "8n");
	Tone.Draw.schedule(function(){
	//do drawing or DOM manipulation here
	document.getElementById('flashBox').style.backgroundColor = colors[x];
	x++;
	if (x==colors.length){
		x=0;
	}

}, time);
}, "4n");

function play() {
	Tone.Transport.stop();
	Tone.Transport.start();
}

function stop() {
Tone.Transport.stop();
}

function setTempo(tempo){
	if(tempo>210){
		alert("Tempo must be less than 210");
	}
	Tone.Transport.bpm.value = tempo;
	updateTempoText(tempo);
	document.getElementById("tempo").value = tempo;
}

function updateTempoText(tempoTextInput){
	document.getElementById('tempoText').value = tempoTextInput;
}
