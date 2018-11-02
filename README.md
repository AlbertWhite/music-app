** Tone.Pattern **
** Tone.Transport **

a great example for a series of notes:

function playCMajorScale(){
var synth = new Tone.Synth().toMaster();
var myScale = ['C4','D4','E4','F4','G4','A4','B4','C5'];
var patternMenu = document.getElementById("melodicPattern");
var patternName = patternMenu.options[patternMenu.selectedIndex].value;

var pattern = new Tone.Pattern(function(time, note){
//the order of the notes passed in depends on the pattern
synth.triggerAttackRelease(note, "4n", time);
}, myScale, patternName).start(0);

var tempo = document.myForm.tempo.value;
Tone.Transport.bpm.value = tempo  
 synth.volume.value = document.myForm.volume.value;
Tone.Transport.start("+0.1");
}

https://www.guitarland.com/MusicTheoryWithToneJS/PlayMajorScale.html

First we create a synth
Then we define our C major scale
Next, we get the pattern choosen from the menu
Then we create the pattern using the above values.
(The Tone.Pattern function sets up the appropriate values in Tone.Transport and sets a start(0) value for the pattern BUT doesn't actually start the transport)
We set the tempo, and volume.
Finally we start Tone.Transport.
(The Tone.Transport.start("+0.1") value is recommended at the Tone.js web site because of a possible Chrome browser bug.)
