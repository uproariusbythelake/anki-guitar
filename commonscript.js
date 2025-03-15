InitFront();
if (document.getElementById("answer") != null) {
	InitBack();
}

function InitFront(scaledegree=0) {
(1,eval)('var testfield;');
testfield = document.getElementById("testfield");
testfield.innerHTML = "Initializing Front";

(1,eval)('var configitems;');
configitems = [ 
{key:"cardsettings",		fieldname: "cardsettingsfield", 			fieldlabel: "Card Settings", 				fieldtype: "checkbox", 	value: "false"},
{key:"startbpm", 				fieldname: "startbpmfield", 					fieldlabel: "Start BPM", 							fieldtype: "range", 		value: 85, 	step: 5, min: 10, max: 1000},
{key:"startwait", 				fieldname: "StartWait", 							fieldlabel: "Start Wait(seconds)", 	fieldtype: "range", 		value: 1, 		step: 1, min: 0, 	max: 9},
{key:"autoplay", 				fieldname: "autoplayfield", 					fieldlabel: "Autoplay", 							fieldtype: "checkbox", 	value: "false"}, 
{key:"pauseforplayback",	fieldname: "pauseforplaybackfield",	fieldlabel: "Instrument Pause",		fieldtype: "checkbox", 	value: "true"},
{key:"pausemultiple", 	fieldname: "pausemultiplefield", 		fieldlabel: "Pause Multiple", 				fieldtype: "range", 		value: 1, 	step: 1, min: 1, max: 5},
{key:"ramp", 						fieldname: "rampfield", 							fieldlabel: "BPM Ramp Enabled", 			fieldtype: "checkbox", 	value: "false"},
{key:"ramploop", 				fieldname: "ramploopfield", 					fieldlabel: "Ramp Loop", 							fieldtype: "range", 		value: 1, 		step: 1, min: 1, 	max: 9},
{key:"rampstep", 				fieldname: "rampstepfield", 					fieldlabel: "Ramp Step(bpm)", 				fieldtype: "range", 		value: 5, 		step: 5, min: 0, 	max: 100},
{key:"rampmax", 					fieldname: "rampmaxfield", 						fieldlabel: "Ramp Max(bpm)", 				fieldtype: "range", 		value: 200, 	step: 5, min: 10, max: 1000},
{key:"tabfontsize", 		fieldname: "tabfontsizefield", 			fieldlabel: "Tab Font Size", 				fieldtype: "range", 		value: 16, 	step: 2, min: 14, max: 30}, 
{key:"tabsize", 					fieldname: "tabsizefield", 						fieldlabel: "Tab Frets/Line Size", 	fieldtype: "range", 		value: 8, 		step: 8, min: 8, 	max: 128},
{key:"rhythm3cell", 		fieldname: "rhythm3cellfield",				fieldlabel: "3-Cell Rhythm", 				fieldtype: "text", 		  value: "[]"},
{key:"rhythm4cell", 		fieldname: "rhythm4cellfield",				fieldlabel: "4-Cell Rhythm", 				fieldtype: "text", 		  value: "[]"},
{key:"rhythm5cell", 		fieldname: "rhythm5cellfield",				fieldlabel: "5-Cell Rhythm", 				fieldtype: "text", 		  value: "[]"},
{key:"rhythm6cell", 		fieldname: "rhythm6cellfield",				fieldlabel: "6-Cell Rhythm", 				fieldtype: "text", 		  value: "[]"},
{key:"rhythm7cell", 		fieldname: "rhythm7cellfield",				fieldlabel: "7-Cell Rhythm", 				fieldtype: "text", 		  value: "[]"},
{key:"rhythm8cell", 		fieldname: "rhythm8cellfield",				fieldlabel: "8-Cell Rhythm", 				fieldtype: "text", 		  value: "[]"},
{key:"rhythm9cell", 		fieldname: "rhythm9cellfield",				fieldlabel: "9-Cell Rhythm", 				fieldtype: "text", 		  value: "[]"},
{key:"rhythm10cell", 		fieldname: "rhythm10cellfield",			fieldlabel: "10-Cell Rhythm", 				fieldtype: "text", 		  value: "[]"},
{key:"rhythm11cell", 		fieldname: "rhythm11cellfield",			fieldlabel: "11-Cell Rhythm", 				fieldtype: "text", 		  value: "[]"},
{key:"rhythm12cell", 		fieldname: "rhythm12cellfield",			fieldlabel: "12-Cell Rhythm", 				fieldtype: "text", 		  value: "[]"},
]; 
(1,eval)('var deckname;');
(1,eval)('var cardtype;');
(1,eval)('var notetype;');
(1,eval)('var patternid;');
(1,eval)('var deckprefix;');
(1,eval)('var configprefix;');
(1,eval)('var cardconfigprefix;');
(1,eval)('var bpmfield;');
(1,eval)('var bpmvaluefield;');
(1,eval)('var scale;');
(1,eval)('var pattern;');
(1,eval)('var patternrepeatsfield;');
(1,eval)('var patternscaledegreefield;');
(1,eval)('var patternrepeats;');
(1,eval)('var patterncellsize;');
(1,eval)('var bpm;');
(1,eval)('var beatsecs;');
(1,eval)('var notesShown;');
(1,eval)('var octavesize;');
(1,eval)('var scalekey;');
(1,eval)('var scaletype;');
(1,eval)('var neckposition;');
(1,eval)('var scalestartindex;');
(1,eval)('var scaleitem;');
(1,eval)('var scalenotes;');
(1,eval)('var patternnotes;');
(1,eval)('var patternsize;');
(1,eval)('var startwait;');
(1,eval)('var synthstarted;'); 
(1,eval)('var audioplaying;');
(1,eval)('var timeout;');
(1,eval)('var ramploopcounter;');
(1,eval)('var deckprefix;');
(1,eval)('var configprefix;');
(1,eval)('var cardconfigprefix;');
(1,eval)('var patternscaledegree;');
(1,eval)('var startingdegreefield;');
(1,eval)('var startingstringfield;');
(1,eval)('var startingfretfield;');
(1,eval)('var startingnotenamefield;');

(1,eval)('var scalelist;');
scalelist = [ 
{scalekey:"",	scaletype:"ChromaticSharps",	octavesize:7, neckposition:0, scalestartindex:6, scalestring:"E2:6:0 F2:6:1 F#2:6:2 G2:6:3 G#2:6:4 A2:5:0 A#2:5:1 B2:5:2 C3:5:3 C#3:5:4 D3:4:0 D#3:4:1 E3:4:2 F3:4:3 F#3:4:4 G3:3:0 G#3:3:1 A3:3:2 A#3:3:2 B3:2:0 C4:2:1 C#4:2:2 D4:2:3 D#4:2:4 E4:1:0 F4:1:1 F#4:1:2 G4:1:3 G#4:1:4 A4:1:5 A#4:1:6 B4:1:7 C5:1:8 C#5:1:9 D5:1:10 D#5:1:11 E5:1:12 F5:1:13 F#5:1:14 G5:1:15 G#5:1:16 A5:1:17 A#5:1:18 B5:1:19 C6:1:20 C#6:1:21 D6:1:22 D#6:1:23 E6:1:24"},
{scalekey:"",	scaletype:"ChromaticFlats",		octavesize:7, neckposition:0, scalestartindex:6, scalestring:"E2:6:0 F2:6:1 Gb2:6:2 G2:6:3 Ab2:6:4 A2:5:0 Bb2:5:1 B2:5:2 C3:5:3 Db3:5:4 D3:4:0 Eb3:4:1 E3:4:2 F3:4:3 Gb3:4:4 G3:3:0 Ab3:3:1 A3:3:2 Bb3:3:2 B3:2:0 C4:2:1 Db4:2:2 D4:2:3 Eb4:2:4 E4:1:0 F4:1:1 Gb4:1:2 G4:1:3 Ab4:1:4 A4:1:5 Bb4:1:6 B4:1:7 C5:1:8 Db5:1:9 D5:1:10 Eb5:1:11 E5:1:12 F5:1:13 Gb5:1:14 G5:1:15 Ab5:1:16 A5:1:17 Bb5:1:18 B5:1:19 C6:1:20 Db6:1:21 D6:1:22 Eb6:1:23 E6:1:24"},

{scalekey:"C",	scaletype:"Major",	octavesize:7, neckposition:0, scalestartindex:6, scalestring:"E2:6:0 F2:6:1 G2:6:3 A2:5:0 B2:5:2 C3:5:3 D3:4:0 E3:4:2 F3:4:3 G3:3:0 A3:3:2 B3:2:0 C4:2:1 D4:2:3 E4:1:0 F4:1:1 G4:1:3 A4:1:5 B4:1:7 C5:1:8 D5:1:10 E5:1:12 F5:1:13 G5:1:15 A5:1:17 B5:1:19 C6:1:20 D6:1:22 E6:1:24"},
{scalekey:"C",	scaletype:"Major",	octavesize:7, neckposition:2, scalestartindex:6, scalestring:"E2:6:0 F2:6:1 G2:6:3 A2:5:0 B2:5:2 C3:5:3 D3:5:5 E3:4:2 F3:4:3 G3:4:5 A3:3:2 B3:3:4 C4:3:5 D4:2:3 E4:2:5 F4:2:6 G4:1:3 A4:1:5 B4:1:7 C5:1:8 D5:1:10 E5:1:12 F5:1:13 G5:1:15 A5:1:17 B5:1:19 C6:1:20 D6:1:22 E6:1:24"},
{scalekey:"C",	scaletype:"Major",	octavesize:7, neckposition:5, scalestartindex:6, scalestring:"E2:6:0 F2:6:1 G2:6:3 A2:6:5 B2:6:7 C3:6:8 D3:5:5 E3:5:7 F3:5:8 G3:4:5 A3:4:7 B3:3:4 C4:3:5 D4:3:7 E4:2:5 F4:2:6 G4:2:8 A4:1:5 B4:1:7 C5:1:8 D5:1:10 E5:1:12 F5:1:13 G5:1:15 A5:1:17 B5:1:19 C6:1:20 D6:1:22 E6:1:24"},
{scalekey:"C",	scaletype:"Major",	octavesize:7, neckposition:7, scalestartindex:6, scalestring:"E2:6:0 F2:6:1 G2:6:3 A2:6:5 B2:6:7 C3:6:8 D3:6:10 E3:5:7 F3:5:8 G3:5:10 A3:4:7 B3:4:9 C4:4:10 D4:3:7 E4:3:9 F4:3:10 G4:2:8 A4:2:10 B4:1:7 C5:1:8 D5:1:10 E5:1:12 F5:1:13 G5:1:15 A5:1:17 B5:1:19 C6:1:20 D6:1:22 E6:1:24"},
{scalekey:"C",	scaletype:"Major",	octavesize:7, neckposition:9, scalestartindex:6, scalestring:"E2:6:0 F2:6:1 G2:6:3 A2:6:5 B2:6:7 C3:6:8 D3:6:10 E3:6:12 F3:5:8 G3:5:10 A3:5:12 B3:4:9 C4:4:10 D4:4:12 E4:3:9 F4:3:10 G4:3:12 A4:2:10 B4:2:12 C5:1:8 D5:1:10 E5:1:12 F5:1:13 G5:1:15 A5:1:17 B5:1:19 C6:1:20 D6:1:22 E6:1:24"},

{scalekey:"G",	scaletype:"Major",	octavesize:7, neckposition:0, scalestartindex:3, scalestring:"E2:6:0 F#2:6:2 G2:6:3 A2:5:0 B2:5:2 C3:5:3 D3:4:0 E3:4:2 F#3:4:4 G3:3:0 A3:3:2 B3:2:0 C4:2:1 D4:2:3 E4:1:0 F#4:1:2 G4:1:3 A4:1:5 B4:1:7 C5:1:8 D5:1:10 E5:1:12 F#5:1:14 G5:1:15 A5:1:17 B5:1:19 C6:1:20 D6:1:22 E6:1:24"},
{scalekey:"G",	scaletype:"Major",	octavesize:7, neckposition:2, scalestartindex:3, scalestring:"E2:6:0 F#2:6:2 G2:6:3 A2:5:0 B2:5:2 C3:5:3 D3:5:5 E3:4:2 F#3:4:4 G3:4:5 A3:3:2 B3:3:4 C4:3:5 D4:2:3 E4:2:5 F#4:2:7 G4:1:3 A4:1:5 B4:1:7 C5:1:8 D5:1:10 E5:1:12 F#5:1:14 G5:1:15 A5:1:17 B5:1:19 C6:1:20 D6:1:22 E6:1:24"},
{scalekey:"G",	scaletype:"Major",	octavesize:7, neckposition:5, scalestartindex:3, scalestring:"E2:6:0 F#2:6:2 G2:6:3 A2:6:5 B2:6:7 C3:6:8 D3:5:5 E3:5:7 F#3:5:9 G3:4:5 A3:4:7 B3:3:4 C4:3:5 D4:3:7 E4:2:5 F#4:2:7 G4:2:8 A4:1:5 B4:1:7 C5:1:8 D5:1:10 E5:1:12 F#5:1:14 G5:1:15 A5:1:17 B5:1:19 C6:1:20 D6:1:22 E6:1:24"},
{scalekey:"G",	scaletype:"Major",	octavesize:7, neckposition:7, scalestartindex:3, scalestring:"E2:6:0 F#2:6:2 G2:6:3 A2:6:5 B2:6:7 C3:6:8 D3:6:10 E3:5:7 F#3:5:9 G3:5:10 A3:4:7 B3:4:9 C4:4:10 D4:3:7 E4:3:9 F#4:3:11 G4:2:8 A4:2:10 B4:1:7 C5:1:8 D5:1:10 E5:1:12 F#5:1:14 G5:1:15 A5:1:17 B5:1:19 C6:1:20 D6:1:22 E6:1:24"},
{scalekey:"G",	scaletype:"Major",	octavesize:7, neckposition:9, scalestartindex:3, scalestring:"E2:6:0 F#2:6:2 G2:6:3 A2:6:5 B2:6:7 C3:6:8 D3:6:10 E3:6:12 F#3:5:9 G3:5:10 A3:5:12 B3:4:9 C4:4:10 D4:4:12 E4:3:9 F#4:3:11 G4:3:12 A4:2:10 B4:2:12 C5:1:8 D5:1:10 E5:1:12 F#5:1:14 G5:1:15 A5:1:17 B5:1:19 C6:1:20 D6:1:22 E6:1:24"},

{scalekey:"D",	scaletype:"Major",	octavesize:7, neckposition:0, scalestartindex:7, scalestring:"E2:6:0 F#2:6:2 G2:6:3 A2:5:0 B2:5:2 C#3:5:4 D3:4:0 E3:4:2 F#3:4:3 G3:3:0 A3:3:2 B3:2:0 C#4:2:2 D4:2:3 E4:1:0 F#4:1:2 G4:1:3 A4:1:5 B4:1:7 C#5:1:9 D5:1:10 E5:1:12 F#5:1:14 G5:1:15 A5:1:17 B5:1:19 C#6:1:21 D6:1:22 E6:1:24"},
{scalekey:"D",	scaletype:"Major",	octavesize:7, neckposition:2, scalestartindex:7, scalestring:"E2:6:0 F#2:6:2 G2:6:3 A2:5:0 B2:5:2 C#3:5:4 D3:4:0 E3:4:2 F#3:4:3 G3:3:0 A3:3:2 B3:2:0 C#4:2:2 D4:2:3 E4:1:0 F#4:1:2 G4:1:3 A4:1:5 B4:1:7 C#5:1:9 D5:1:10 E5:1:12 F#5:1:14 G5:1:15 A5:1:17 B5:1:19 C#6:1:21 D6:1:22 E6:1:24"},
{scalekey:"D",	scaletype:"Major",	octavesize:7, neckposition:5, scalestartindex:7, scalestring:"E2:6:0 F#2:6:2 G2:6:3 A2:6:5 B2:6:7 C#3:6:9 D3:5:5 E3:5:7 F#3:5:9 G3:4:5 A3:4:7 B3:3:4 C#4:3:6 D4:3:7 E4:2:5 F#4:2:7 G4:2:8 A4:1:5 B4:1:7 C#5:1:9 D5:1:10 E5:1:12 F#5:1:14 G5:1:15 A5:1:17 B5:1:19 C#6:1:21 D6:1:22 E6:1:24"},
{scalekey:"D",	scaletype:"Major",	octavesize:7, neckposition:7, scalestartindex:7, scalestring:"E2:6:0 F#2:6:2 G2:6:3 A2:6:5 B2:6:7 C#3:6:9 D3:6:10 E3:5:7 F#3:5:9 G3:5:10 A3:4:7 B3:4:9 C#4:4:11 D4:3:7 E4:3:9 F#4:3:11 G4:2:8 A4:2:10 B4:1:7 C#5:1:9 D5:1:10 E5:1:12 F#5:1:14 G5:1:15 A5:1:17 B5:1:19 C#6:1:21 D6:1:22 E6:1:24"},
{scalekey:"D",	scaletype:"Major",	octavesize:7, neckposition:9, scalestartindex:7, scalestring:"E2:6:0 F#2:6:2 G2:6:3 A2:6:5 B2:6:7 C#3:6:9 D3:6:10 E3:6:12 F#3:5:9 G3:5:10 A3:5:12 B3:4:9 C#4:4:11 D4:4:12 E4:3:9 F#4:3:11 G4:3:12 A4:2:10 B4:2:12 C#5:1:9 D5:1:10 E5:1:12 F#5:1:14 G#5:1:16 A5:1:17 B5:1:19 C#6:1:21 D6:1:22 E6:1:24"},

{scalekey:"A",	scaletype:"Major",	octavesize:7, neckposition:0, scalestartindex:4, scalestring:"E2:6:0 F#2:6:2 G#2:6:4 A2:5:0 B2:5:2 C#3:5:4 D3:4:0 E3:4:2 F#3:4:3 G#3:3:1 A3:3:2 B3:2:0 C#4:2:2 D4:2:3 E4:1:0 F#4:1:2 G#4:1:4 A4:1:5 B4:1:7 C#5:1:9 D5:1:10 E5:1:12 F#5:1:14 G#5:1:16 A5:1:17 B5:1:19 C#6:1:21 D6:1:22 E6:1:24"},
{scalekey:"A",	scaletype:"Major",	octavesize:7, neckposition:2, scalestartindex:4, scalestring:"E2:6:0 F#2:6:2 G#2:6:4 A2:5:0 B2:5:2 C#3:5:4 D3:4:0 E3:4:2 F#3:4:3 G#3:3:1 A3:3:2 B3:2:0 C#4:2:2 D4:2:3 E4:1:0 F#4:1:2 G#4:1:4 A4:1:5 B4:1:7 C#5:1:9 D5:1:10 E5:1:12 F#5:1:14 G#5:1:16 A5:1:17 B5:1:19 C#6:1:21 D6:1:22 E6:1:24"},
{scalekey:"A",	scaletype:"Major",	octavesize:7, neckposition:5, scalestartindex:4, scalestring:"E2:6:0 F#2:6:2 G#2:6:4 A2:6:5 B2:6:7 C#3:6:9 D3:5:5 E3:5:7 F#3:5:9 G#3:4:6 A3:4:7 B3:3:4 C#4:3:6 D4:3:7 E4:2:5 F#4:2:7 G#4:2:9 A4:1:5 B4:1:7 C#5:1:9 D5:1:10 E5:1:12 F#5:1:14 G#5:1:16 A5:1:17 B5:1:19 C#6:1:21 D6:1:22 E6:1:24"},
{scalekey:"A",	scaletype:"Major",	octavesize:7, neckposition:7, scalestartindex:4, scalestring:"E2:6:0 F#2:6:2 G#2:6:4 A2:6:5 B2:6:7 C#3:6:9 D3:6:10 E3:5:7 F#3:5:9 G#3:5:11 A3:4:7 B3:4:9 C#4:4:11 D4:3:7 E4:3:9 F#4:3:11 G#4:2:9 A4:2:10 B4:1:7 C#5:1:9 D5:1:10 E5:1:12 F#5:1:14 G#5:1:16 A5:1:17 B5:1:19 C#6:1:21 D6:1:22 E6:1:24"},
{scalekey:"A",	scaletype:"Major",	octavesize:7, neckposition:9, scalestartindex:4, scalestring:"E2:6:0 F#2:6:2 G#2:6:4 A2:6:5 B2:6:7 C#3:6:9 D3:6:10 E3:6:12 F#3:5:9 G#3:5:11 A3:5:12 B3:4:9 C#4:4:11 D4:4:12 E4:3:9 F#4:3:11 G#4:3:13 A4:2:10 B4:2:12 C#5:1:9 D5:1:10 E5:1:12 F#5:1:14 G#5:1:16 A5:1:17 B5:1:19 C#6:1:21 D6:1:22 E6:1:24"},

{scalekey:"E",	scaletype:"Major",	octavesize:7, neckposition:0, scalestartindex:1, scalestring:"E2:6:0 F#2:6:2 G#2:6:4 A2:5:0 B2:5:2 C#3:5:4 D#3:4:1 E3:4:2 F#3:4:3 G#3:3:1 A3:3:2 B3:2:0 C#4:2:2 D#4:2:4 E4:1:0 F#4:1:2 G#4:1:4 A4:1:5 B4:1:7 C#5:1:9 D#5:1:11 E5:1:12 F#5:1:14 G#5:1:16 A5:1:17 B5:1:19 C#6:1:21 D#6:1:23 E6:1:24"},
{scalekey:"E",	scaletype:"Major",	octavesize:7, neckposition:2, scalestartindex:1, scalestring:"E2:6:0 F#2:6:2 G#2:6:4 A2:5:0 B2:5:2 C#3:5:4 D#3:4:1 E3:4:2 F#3:4:3 G#3:3:1 A3:3:2 B3:2:0 C#4:2:2 D#4:2:4 E4:1:0 F#4:1:2 G#4:1:4 A4:1:5 B4:1:7 C#5:1:9 D#5:1:11 E5:1:12 F#5:1:14 G#5:1:16 A5:1:17 B5:1:19 C#6:1:21 D#6:1:23 E6:1:24"},
{scalekey:"E",	scaletype:"Major",	octavesize:7, neckposition:5, scalestartindex:1, scalestring:"E2:6:0 F#2:6:2 G#2:6:4 A2:6:5 B2:6:7 C#3:6:9 D#3:5:6 E3:5:7 F#3:5:9 G#3:4:6 A3:4:7 B3:3:4 C#4:3:6 D#4:3:8 E4:2:5 F#4:2:7 G#4:2:9 A4:1:5 B4:1:7 C#5:1:9 D#5:1:11 E5:1:12 F#5:1:14 G#5:1:16 A5:1:17 B5:1:19 C#6:1:21 D#6:1:23 E6:1:24"},
{scalekey:"E",	scaletype:"Major",	octavesize:7, neckposition:7, scalestartindex:1, scalestring:"E2:6:0 F#2:6:2 G#2:6:4 A2:6:5 B2:6:7 C#3:6:9 D#3:6:11 E3:5:7 F#3:5:9 G#3:5:11 A3:4:7 B3:4:9 C#4:4:11 D#4:3:8 E4:3:9 F#4:3:11 G#4:2:9 A4:2:10 B4:1:7 C#5:1:9 D#5:1:11 E5:1:12 F#5:1:14 G#5:1:16 A5:1:17 B5:1:19 C#6:1:21 D#6:1:23 E6:1:24"},
{scalekey:"E",	scaletype:"Major",	octavesize:7, neckposition:9, scalestartindex:1, scalestring:"E2:6:0 F#2:6:2 G#2:6:4 A2:6:5 B2:6:7 C#3:6:9 D#3:6:11 E3:6:12 F#3:5:9 G#3:5:11 A3:5:12 B3:4:9 C#4:4:11 D#4:4:13 E4:3:9 F#4:3:11 G#4:3:13 A4:2:10 B4:2:12 C#5:1:9 D#5:1:11 E5:1:12 F#5:1:14 G#5:1:16 A5:1:17 B5:1:19 C#6:1:21 D#6:1:23 E6:1:24"},

{scalekey:"B",	scaletype:"Major",	octavesize:7, neckposition:0, scalestartindex:5, scalestring:"E2:6:0 F#2:6:2 G#2:6:4 A#2:5:1 B2:5:2 C#3:5:4 D#3:4:1 E3:4:2 F#3:4:3 G#3:3:1 A#3:3:3 B3:2:0 C#4:2:2 D#4:2:4 E4:1:0 F#4:1:2 G#4:1:4 A#4:1:6 B4:1:7 C#5:1:9 D#5:1:11 E5:1:12 F#5:1:14 G#5:1:16 A#5:1:18 B5:1:19 C#6:1:21 D#6:1:23 E6:1:24"},
{scalekey:"B",	scaletype:"Major",	octavesize:7, neckposition:2, scalestartindex:5, scalestring:"E2:6:0 F#2:6:2 G#2:6:4 A#2:5:1 B2:5:2 C#3:5:4 D#3:4:1 E3:4:2 F#3:4:3 G#3:3:1 A#3:3:3 B3:2:0 C#4:2:2 D#4:2:4 E4:1:0 F#4:1:2 G#4:1:4 A#4:1:6 B4:1:7 C#5:1:9 D#5:1:11 E5:1:12 F#5:1:14 G#5:1:16 A#5:1:18 B5:1:19 C#6:1:21 D#6:1:23 E6:1:24"},
{scalekey:"B",	scaletype:"Major",	octavesize:7, neckposition:5, scalestartindex:5, scalestring:"E2:6:0 F#2:6:2 G#2:6:4 A#2:6:6 B2:6:7 C#3:6:9 D#3:5:6 E3:5:7 F#3:5:9 G#3:4:6 A#3:4:8 B3:3:4 C#4:3:6 D#4:3:8 E4:2:5 F#4:2:7 G#4:2:9 A#4:1:6 B4:1:7 C#5:1:9 D#5:1:11 E5:1:12 F#5:1:14 G#5:1:16 A#5:1:18 B5:1:19 C#6:1:21 D#6:1:23 E6:1:24"},
{scalekey:"B",	scaletype:"Major",	octavesize:7, neckposition:7, scalestartindex:5, scalestring:"E2:6:0 F#2:6:2 G#2:6:4 A#2:6:6 B2:6:7 C#3:6:9 D#3:6:11 E3:5:7 F#3:5:9 G#3:5:11 A#3:4:8 B3:4:9 C#4:4:11 D#4:3:8 E4:3:9 F#4:3:11 G#4:2:9 A#4:2:11 B4:1:7 C#5:1:9 D#5:1:11 E5:1:12 F#5:1:14 G#5:1:16 A#5:1:18 B5:1:19 C#6:1:21 D#6:1:23 E6:1:24"},
{scalekey:"B",	scaletype:"Major",	octavesize:7, neckposition:9, scalestartindex:5, scalestring:"E2:6:0 F#2:6:2 G#2:6:4 A#2:6:6 B2:6:7 C#3:6:9 D#3:6:11 E3:6:12 F#3:5:9 G#3:5:11 A#3:5:13 B3:4:9 C#4:4:11 D#4:4:13 E4:3:9 F#4:3:11 G#4:3:13 A#4:2:11 B4:2:12 C#5:1:9 D#5:1:11 E5:1:12 F#5:1:14 G#5:1:16 A#5:1:18 B5:1:19 C#6:1:21 D#6:1:23 E6:1:24"},

{scalekey:"F",	scaletype:"Major",	octavesize:7, neckposition:0, scalestartindex:2, scalestring:"E2:6:0 F2:6:1 G2:6:3 A2:5:0 Bb2:5:1 C3:5:3 D3:4:0 E3:4:2 F3:4:3 G3:3:0 A3:3:2 Bb3:3:3 C4:2:1 D4:2:3 E4:1:0 F4:1:1 G4:1:3 A4:1:5 Bb4:1:6 C5:1:8 D5:1:10 E5:1:12 F5:1:13 G5:1:15 A5:1:17 Bb5:1:18 C6:1:20 D6:1:22 E6:1:24"},
{scalekey:"F",	scaletype:"Major",	octavesize:7, neckposition:2, scalestartindex:2, scalestring:"E2:6:0 F2:6:1 G2:6:3 A2:5:0 Bb2:5:1 C3:5:3 D3:5:5 E3:4:2 F3:4:3 G3:4:5 A3:3:2 Bb3:3:3 C4:3:5 D4:2:3 E4:2:5 F4:2:6 G4:1:3 A4:1:5 Bb4:1:6 C5:1:8 D5:1:10 E5:1:12 F5:1:13 G5:1:15 A5:1:17 Bb5:1:18 C6:1:20 D6:1:22 E6:1:24"},
{scalekey:"F",	scaletype:"Major",	octavesize:7, neckposition:5, scalestartindex:2, scalestring:"E2:6:0 F2:6:1 G2:6:3 A2:6:5 Bb2:6:6 C3:6:8 D3:5:5 E3:5:7 F3:5:8 G3:4:5 A3:4:7 Bb3:3:3 C4:3:5 D4:3:7 E4:2:5 F4:2:6 G4:2:8 A4:1:5 Bb4:1:6 C5:1:8 D5:1:10 E5:1:12 F5:1:13 G5:1:15 A5:1:17 Bb5:1:18 C6:1:20 D6:1:22 E6:1:24"},
{scalekey:"F",	scaletype:"Major",	octavesize:7, neckposition:7, scalestartindex:2, scalestring:"E2:6:0 F2:6:1 G2:6:3 A2:6:5 Bb2:6:6 C3:6:8 D3:6:10 E3:5:7 F3:5:8 G3:5:10 A3:4:7 Bb3:4:8 C4:4:10 D4:3:7 E4:3:9 F4:3:10 G4:2:8 A4:2:10 Bb4:1:6 C5:1:8 D5:1:10 E5:1:12 F5:1:13 G5:1:15 A5:1:17 Bb5:1:18 C6:1:20 D6:1:22 E6:1:24"},
{scalekey:"F",	scaletype:"Major",	octavesize:7, neckposition:9, scalestartindex:2, scalestring:"E2:6:0 F2:6:1 G2:6:3 A2:6:5 Bb2:6:6 C3:6:8 D3:6:10 E3:6:12 F3:5:8 G3:5:10 A3:5:12 Bb3:4:8 C4:4:10 D4:4:12 E4:3:9 F4:3:10 G4:3:12 A4:2:10 Bb4:2:11 C5:1:8 D5:1:10 E5:1:12 F5:1:13 G5:1:15 A5:1:17 Bb5:1:18 C6:1:20 D6:1:22 E6:1:24"},

{scalekey:"Bb",	scaletype:"Major",	octavesize:7, neckposition:0, scalestartindex:4, scalestring:"F2:6:1 G2:6:3 A2:5:0 Bb2:5:1 C3:5:3 D3:4:0 Eb3:4:1 F3:4:3 G3:3:0 A3:3:2 Bb3:3:3 C4:2:1 D4:2:3 Eb4:2:4 F4:1:1 G4:1:3 A4:1:5 Bb4:1:6 C5:1:8 D5:1:10 Eb5:1:11 F5:1:13 G5:1:15 A5:1:17 Bb5:1:18 A5:1:17 Bb5:1:18 C6:1:20 D6:1:22 Eb6:1:23"},
{scalekey:"Bb",	scaletype:"Major",	octavesize:7, neckposition:2, scalestartindex:4, scalestring:"F2:6:1 G2:6:3 A2:5:0 Bb2:5:1 C3:5:3 D3:5:5 Eb3:4:1 F3:4:3 G3:4:5 A3:3:2 Bb3:3:3 C4:3:5 D4:2:3 Eb4:2:4 F4:2:6 G4:1:3 A4:1:5 Bb4:1:6 C5:1:8 D5:1:10 Eb5:1:11 F5:1:13 G5:1:15 A5:1:17 Bb5:1:18 A5:1:17 Bb5:1:18 C6:1:20 D6:1:22 Eb6:1:23"},
{scalekey:"Bb",	scaletype:"Major",	octavesize:7, neckposition:5, scalestartindex:4, scalestring:"F2:6:1 G2:6:3 A2:6:5 Bb2:6:6 C3:6:8 D3:5:5 Eb3:5:6 F3:5:8 G3:4:5 A3:4:7 Bb3:3:3 C4:3:5 D4:3:7 Eb4:2:4 F4:2:6 G4:2:8 A4:1:5 Bb4:1:6 C5:1:8 D5:1:10 Eb5:1:11 F5:1:13 G5:1:15 A5:1:17 Bb5:1:18 A5:1:17 Bb5:1:18 C6:1:20 D6:1:22 Eb6:1:23"},
{scalekey:"Bb",	scaletype:"Major",	octavesize:7, neckposition:7, scalestartindex:4, scalestring:"F2:6:1 G2:6:3 A2:6:5 Bb2:6:6 C3:6:8 D3:6:10 Eb3:5:6 F3:5:8 G3:5:10 A3:4:7 Bb3:4:8 C4:4:10 D4:3:7 Eb4:3:8 F4:3:10 G4:2:8 A4:2:10 Bb4:1:6 C5:1:8 D5:1:10 Eb5:1:11 F5:1:13 G5:1:15 A5:1:17 Bb5:1:18 A5:1:17 Bb5:1:18 C6:1:20 D6:1:22 Eb6:1:23"},
{scalekey:"Bb",	scaletype:"Major",	octavesize:7, neckposition:9, scalestartindex:4, scalestring:"F2:6:1 G2:6:3 A2:6:5 Bb2:6:6 C3:6:8 D3:6:10 Eb3:6:11 F3:5:8 G3:5:10 A3:5:12 Bb3:4:8 C4:4:10 D4:4:12 Eb4:3:8 F4:3:10 G4:3:12 A4:2:10 Bb4:2:11 C5:1:8 D5:1:10 Eb5:1:11 F5:1:13 G5:1:15 A5:1:17 Bb5:1:18 A5:1:17 Bb5:1:18 C6:1:20 D6:1:22 Eb6:1:23"},

{scalekey:"Eb",	scaletype:"Major",	octavesize:7, neckposition:0, scalestartindex:7, scalestring:"F2:6:1 G2:6:3 Ab2:6:4 Bb2:5:1 C3:5:3 D3:4:0 Eb3:4:1 F3:4:3 G3:3:0 Ab3:3:1 Bb3:3:3 C4:2:1 D4:2:3 Eb4:2:4 F4:1:1 G4:1:3 Ab4:1:4 Bb4:1:6 C5:1:8 D5:1:10 Eb5:1:11 F5:1:13 G5:1:15 Ab5:1:16 Bb5:1:18 C6:1:20 D6:1:22 Eb6:1:23"},
{scalekey:"Eb",	scaletype:"Major",	octavesize:7, neckposition:2, scalestartindex:7, scalestring:"F2:6:1 G2:6:3 Ab2:6:4 Bb2:5:1 C3:5:3 D3:5:5 Eb3:4:1 F3:4:3 G3:4:5 Ab3:3:1 Bb3:3:3 C4:3:5 D4:2:3 Eb4:2:4 F4:2:6 G4:1:3 Ab4:1:4 Bb4:1:6 C5:1:8 D5:1:10 Eb5:1:11 F5:1:13 G5:1:15 Ab5:1:16 Bb5:1:18 C6:1:20 D6:1:22 Eb6:1:23"},
{scalekey:"Eb",	scaletype:"Major",	octavesize:7, neckposition:5, scalestartindex:7, scalestring:"F2:6:1 G2:6:3 Ab2:6:4 Bb2:6:6 C3:6:8 D3:5:5 Eb3:5:6 F3:5:8 G3:4:5 Ab3:4:6 Bb3:3:3 C4:3:5 D4:3:7 Eb4:2:4 F4:2:6 G4:2:8 Ab4:1:4 Bb4:1:6 C5:1:8 D5:1:10 Eb5:1:11 F5:1:13 G5:1:15 Ab5:1:16 Bb5:1:18 C6:1:20 D6:1:22 Eb6:1:23"},
{scalekey:"Eb",	scaletype:"Major",	octavesize:7, neckposition:7, scalestartindex:7, scalestring:"F2:6:1 G2:6:3 Ab2:6:4 Bb2:6:6 C3:6:8 D3:6:10 Eb3:5:6 F3:5:8 G3:5:10 Ab3:4:6 Bb3:4:8 C4:4:10 D4:3:7 Eb4:3:8 F4:3:10 G4:2:8 Ab4:2:9 Bb4:1:6 C5:1:8 D5:1:10 Eb5:1:11 F5:1:13 G5:1:15 Ab5:1:16 Bb5:1:18 C6:1:20 D6:1:22 Eb6:1:23"},
{scalekey:"Eb",	scaletype:"Major",	octavesize:7, neckposition:9, scalestartindex:7, scalestring:"F2:6:1 G2:6:3 Ab2:6:4 Bb2:6:6 C3:6:8 D3:6:10 Eb3:6:11 F3:5:8 G3:5:10 Ab3:5:11 Bb3:4:8 C4:4:10 D4:4:12 Eb4:3:8 F4:3:10 G4:3:12 Ab4:2:9 Bb4:2:11 C5:1:8 D5:1:10 Eb5:1:11 F5:1:13 G5:1:15 Ab5:1:16 Bb5:1:18 C6:1:20 D6:1:22 Eb6:1:23"},

{scalekey:"Ab",	scaletype:"Major",	octavesize:7, neckposition:0, scalestartindex:3, scalestring:"F2:6:1 G2:6:3 Ab2:6:4 Bb2:5:1 C3:5:3 Db3:5:4 Eb3:4:1 F3:4:3 G3:3:0 Ab3:3:1 Bb3:3:3 C4:2:1 Db4:2:2 Eb4:2:4 F4:1:1 G4:1:3 Ab4:1:4 Bb4:1:6 C5:1:8 Db5:1:9 Eb5:1:11 F5:1:13 G5:1:15 Ab5:1:16 Bb5:1:18 C6:1:20 Db6:1:21 Eb6:1:23"},
{scalekey:"Ab",	scaletype:"Major",	octavesize:7, neckposition:2, scalestartindex:3, scalestring:"F2:6:1 G2:6:3 Ab2:6:4 Bb2:5:1 C3:5:3 Db3:5:4 Eb3:4:1 F3:4:3 G3:4:5 Ab3:3:1 Bb3:3:3 C4:3:5 Db4:2:2 Eb4:2:4 F4:2:6 G4:1:3 Ab4:1:4 Bb4:1:6 C5:1:8 Db5:1:9 Eb5:1:11 F5:1:13 G5:1:15 Ab5:1:16 Bb5:1:18 C6:1:20 Db6:1:21 Eb6:1:23"},
{scalekey:"Ab",	scaletype:"Major",	octavesize:7, neckposition:5, scalestartindex:3, scalestring:"F2:6:1 G2:6:3 Ab2:6:4 Bb2:6:6 C3:6:8 Db3:5:4 Eb3:5:6 F3:5:8 G3:4:5 Ab3:4:6 Bb3:3:3 C4:3:5 Db4:3:6 Eb4:2:4 F4:2:6 G4:2:8 Ab4:1:4 Bb4:1:6 C5:1:8 Db5:1:9 Eb5:1:11 F5:1:13 G5:1:15 Ab5:1:16 Bb5:1:18 C6:1:20 Db6:1:21 Eb6:1:23"},
{scalekey:"Ab",	scaletype:"Major",	octavesize:7, neckposition:7, scalestartindex:3, scalestring:"F2:6:1 G2:6:3 Ab2:6:4 Bb2:6:6 C3:6:8 Db3:6:9 Eb3:5:6 F3:5:8 G3:5:10 Ab3:4:6 Bb3:4:8 C4:4:10 Db4:3:6 Eb4:3:8 F4:3:10 G4:2:8 Ab4:2:9 Bb4:1:6 C5:1:8 Db5:1:9 Eb5:1:11 F5:1:13 G5:1:15 Ab5:1:16 Bb5:1:18 C6:1:20 Db6:1:21 Eb6:1:23"},
{scalekey:"Ab",	scaletype:"Major",	octavesize:7, neckposition:9, scalestartindex:3, scalestring:"F2:6:1 G2:6:3 Ab2:6:4 Bb2:6:6 C3:6:8 Db3:6:9 Eb3:6:11 F3:5:8 G3:5:10 Ab3:5:11 Bb3:4:8 C4:4:10 Db4:4:11 Eb4:3:8 F4:3:10 G4:3:12 Ab4:2:9 Bb4:2:11 C5:1:8 Db5:1:9 Eb5:1:11 F5:1:13 G5:1:15 Ab5:1:16 Bb5:1:18 C6:1:20 Db6:1:21 Eb6:1:23"},

{scalekey:"Db",	scaletype:"Major",	octavesize:7, neckposition:0, scalestartindex:6, scalestring:"F2:6:1 Gb2:6:2 Ab2:6:4 Bb2:5:1 C3:5:3 Db3:5:4 Eb3:4:1 F3:4:3 Gb3:4:4 Ab3:3:1 Bb3:3:3 C4:2:1 Db4:2:2 Eb4:2:4 F4:1:1 Gb4:1:2 Ab4:1:4 Bb4:1:6 C5:1:8 Db5:1:9 Eb5:1:11 F5:1:13 Gb5:1:14 Ab5:1:16 Bb5:1:18 C6:1:20 Db6:1:21 Eb6:1:23"},
{scalekey:"Db",	scaletype:"Major",	octavesize:7, neckposition:2, scalestartindex:6, scalestring:"F2:6:1 Gb2:6:2 Ab2:6:4 Bb2:5:1 C3:5:3 Db3:5:4 Eb3:4:1 F3:4:3 Gb3:4:4 Ab3:3:1 Bb3:3:3 C4:3:5 Db4:2:2 Eb4:2:4 F4:2:6 Gb4:1:2 Ab4:1:4 Bb4:1:6 C5:1:8 Db5:1:9 Eb5:1:11 F5:1:13 Gb5:1:14 Ab5:1:16 Bb5:1:18 C6:1:20 Db6:1:21 Eb6:1:23"},
{scalekey:"Db",	scaletype:"Major",	octavesize:7, neckposition:5, scalestartindex:6, scalestring:"F2:6:1 Gb2:6:2 Ab2:6:4 Bb2:6:6 C3:6:8 Db3:5:4 Eb3:5:6 F3:5:8 Gb3:4:4 Ab3:4:6 Bb3:3:3 C4:3:5 Db4:3:6 Eb4:2:4 F4:2:6 Gb4:2:7 Ab4:1:4 Bb4:1:6 C5:1:8 Db5:1:9 Eb5:1:11 F5:1:13 Gb5:1:14 Ab5:1:16 Bb5:1:18 C6:1:20 Db6:1:21 Eb6:1:23"},
{scalekey:"Db",	scaletype:"Major",	octavesize:7, neckposition:7, scalestartindex:6, scalestring:"F2:6:1 Gb2:6:2 Ab2:6:4 Bb2:6:6 C3:6:8 Db3:6:9 Eb3:5:6 F3:5:8 Gb3:5:9 Ab3:4:6 Bb3:4:8 C4:4:10 Db4:3:6 Eb4:3:8 F4:3:10 Gb4:2:7 Ab4:2:9 Bb4:1:6 C5:1:8 Db5:1:9 Eb5:1:11 F5:1:13 Gb5:1:14 Ab5:1:16 Bb5:1:18 C6:1:20 Db6:1:21 Eb6:1:23"},
{scalekey:"Db",	scaletype:"Major",	octavesize:7, neckposition:9, scalestartindex:6, scalestring:"F2:6:1 Gb2:6:2 Ab2:6:4 Bb2:6:6 C3:6:8 Db3:6:9 Eb3:6:11 F3:5:8 Gb3:5:9 Ab3:5:11 Bb3:4:8 C4:4:10 Db4:4:11 Eb4:3:8 F4:3:10 Gb4:3:11 Ab4:2:9 Bb4:2:11 C5:1:8 Db5:1:9 Eb5:1:11 F5:1:13 Gb5:1:14 Ab5:1:16 Bb5:1:18 C6:1:20 Db6:1:21 Eb6:1:23"},

{scalekey:"Gb",	scaletype:"Major",	octavesize:7, neckposition:1, scalestartindex:2, scalestring:"F2:6:1 Gb2:6:2 Ab2:6:4 Bb2:5:1 Cb3:5:2 Db3:5:4 Eb3:4:1 F3:4:3 Gb3:4:4 Ab3:3:1 Bb3:3:3 Cb4:2:0 Db4:2:2 Eb4:2:4 F4:1:1 Gb4:1:2 Ab4:1:4 Bb4:1:6 Cb5:1:7 Db5:1:9 Eb5:1:11 F5:1:13 Gb5:1:14 Ab5:1:16 Bb5:1:18 Cb6:1:19 Db6:1:21 Eb6:1:23"},
{scalekey:"Gb",	scaletype:"Major",	octavesize:7, neckposition:2, scalestartindex:2, scalestring:"F2:6:1 Gb2:6:2 Ab2:6:4 Bb2:5:1 Cb3:5:2 Db3:5:4 Eb3:4:1 F3:4:3 Gb3:4:4 Ab3:3:1 Bb3:3:3 Cb4:3:4 Db4:2:2 Eb4:2:4 F4:2:6 Gb4:1:2 Ab4:1:4 Bb4:1:6 Cb5:1:7 Db5:1:9 Eb5:1:11 F5:1:13 Gb5:1:14 Ab5:1:16 Bb5:1:18 Cb6:1:19 Db6:1:21 Eb6:1:23"},
{scalekey:"Gb",	scaletype:"Major",	octavesize:7, neckposition:4, scalestartindex:9, scalestring:"F2:6:1 Gb2:6:2 Ab2:6:4 Bb2:6:6 Cb3:6:7 Db3:5:4 Eb3:5:6 F3:5:8 Gb3:4:4 Ab3:4:6 Bb3:3:3 Cb4:3:4 Db4:3:6 Eb4:2:4 F4:2:6 Gb4:2:7 Ab4:1:4 Bb4:1:6 Cb5:1:7 Db5:1:9 Eb5:1:11 F5:1:13 Gb5:1:14 Ab5:1:16 Bb5:1:18 Cb6:1:19 Db6:1:21 Eb6:1:23"},
{scalekey:"Gb",	scaletype:"Major",	octavesize:7, neckposition:6, scalestartindex:9, scalestring:"F2:6:1 Gb2:6:2 Ab2:6:4 Bb2:6:6 Cb3:6:7 Db3:6:9 Eb3:5:6 F3:5:8 Gb3:5:9 Ab3:4:6 Bb3:4:8 Cb4:4:9 Db4:3:6 Eb4:3:8 F4:2:6 Gb4:2:7 Ab4:2:9 Bb4:1:6 Cb5:1:7 Db5:1:9 Eb5:1:11 F5:1:13 Gb5:1:14 Ab5:1:16 Bb5:1:18 Cb6:1:19 Db6:1:21 Eb6:1:23"},
{scalekey:"Gb",	scaletype:"Major",	octavesize:7, neckposition:8, scalestartindex:9, scalestring:"F2:6:1 Gb2:6:2 Ab2:6:4 Bb2:6:6 Cb3:6:7 Db3:6:9 Eb3:6:11 F3:5:8 Gb3:5:9 Ab3:5:11 Bb3:4:8 Cb4:4:9 Db4:4:11 Eb4:3:8 F4:3:10 Gb4:3:11 Ab4:2:9 Bb4:2:11 Cb5:1:7 Db5:1:9 Eb5:1:11 F5:1:13 Gb5:1:14 Ab5:1:16 Bb5:1:18 Cb6:1:19 Db6:1:21 Eb6:1:23"},
{scalekey:"Gb",	scaletype:"Major",	octavesize:7, neckposition:11, scalestartindex:9, scalstring:"F2:6:1 Gb2:6:2 Ab2:6:4 Bb2:6:6 Cb3:6:7 Db3:6:9 Eb3:6:11 F3:6:13 Gb3:6:14 Ab3:5:11 Bb3:5:13 Cb4:5:14 Db4:4:11 Eb4:4:13 F4:4:14 Gb4:3:11 Ab4:3:13 Bb4:3:14 Cb5:2:12 Db5:2:14 Eb5:1:11 F5:1:13 Gb5:1:14 Ab5:1:16 Bb5:1:18 Cb6:1:19 Db6:1:21 Eb6:1:23"}
]; 

testfield = document.getElementById("testfield");
testfield.innerHTML = "Declared Global Vars";
deckname = document.getElementById("decknamefield").innerHTML;
cardtype = document.getElementById("cardtypefield").innerHTML;
notetype = (document.getElementById("notetypefield") != null) ? document.getElementById("notetypefield").innerHTML.trim() : "";
patternid = document.getElementById("patternidfield").innerHTML; 
deckprefix = deckname + "/";
configprefix = deckprefix;
cardconfigprefix = deckname + "/" + patternid + "/" + cardtype + "/";
testfield.innerHTML = "Card Config Prefix " + cardconfigprefix;

patternscaledegreefield = document.getElementById("patternscaledegreefield");
patternscaledegree = (patternscaledegreefield != null) ? Number(patternscaledegreefield.innerHTML.trim()) : Number(scaledegree);
testfield = document.getElementById("testfield");
testfield.innerHTML = "Executing Front Script";

startingdegreefield = document.getElementById("startingdegreefield");
if (patternscaledegree == 0) {
	SetFieldValueByNameOrId("startingdegreefield", 1);
} 
else {
	SetFieldValueByNameOrId("startingdegreefield", patternscaledegree);
}

startingstringfield = document.getElementById("startingstringfield");
startingfretfield = document.getElementById("startingfretfield");
startingnotenamefield = document.getElementById("startingnotenamefield");

InitConfig();

testfield.innerHTML = "Config complete";

bpmfield = document.getElementById("bpmfield");
bpmvaluefield = document.getElementById("bpmvaluefield");

scalekey = (document.getElementById("scalekeyfield") != null) ? document.getElementById("scalekeyfield").innerHTML.trim() : "";
scaletype = (document.getElementById("scaletypefield") != null) ? document.getElementById("scaletypefield").innerHTML.trim() : "";
neckposition = (document.getElementById("neckposition") != null) ? document.getElementById("neckposition").innerHTML.trim() : "";
octavesize = (document.getElementById("octavesizefield") != null) ? Number(document.getElementById("octavesizefield").innerHTML.trim()) : 7;
scalenotes = GetScale(scalekey, scaletype, neckposition);

pattern = document.getElementById("patternnotesfield").innerHTML.trim().split(" ");
patternrepeatsfield = document.getElementById("patternrepeatsfield");
patternrepeats = (patternrepeatsfield.innerHTML === "true") ? true : false;
console.log("Pattern repeats ", patternrepeats);
patterncellsize = document.getElementById("patterncellsizefield").innerHTML;
if ((patterncellsize == "") || (patterncellsize == 0)) {
	patterncellsize = 1;
}

bpm = 10;
beatsecs = 60/bpm;
SetBPM(startbpm);

notesShown = false;

patternnotes = {};
for (i=0; i < pattern.length; i++) {
	if (pattern[i].includes(":")) {
		patternnotes[i] = pattern[i].split(":");
	}
	else {
		patternnotes[i][0] = pattern[i];
		patternnotes[i][1] = "4n";
	}
}

patternsize = pattern.length;

if (patternscaledegree > 0) {
	startwait = 0;
	if (patternrepeats) {
		for (j=0; j < patternsize; j += 1) {
			var newnote = Number(patternnotes[j][0]) + (patternscaledegree - 1);
			var newduration = patternnotes[j][1];
			newnotetxt =  newnote + ":" + newduration;
			pattern[j] = newnotetxt;
			patternnotes[j] = newnotetxt.split(":");
		}
	}
	else {
		if ((patternid == "") || (patternid == "0")) {
			var newnote = Number(patternnotes[0][0]) + (patternscaledegree - 1);
			var newduration = patternnotes[newnote - 1][1];
			newnotetxt =  newnote + ":" + newduration;
			pattern = [newnotetxt];
			patternnotes = [];
			patternnotes[0] = newnotetxt.split(":");
		}
	}
}
else {
		var newpatternsize = pattern.length; 
		if (patternrepeats) {
				for (i=0; i < octavesize; i += 1) {
					for (j=0; j < patternsize; j += 1) {
						var newnote = Number(patternnotes[newpatternsize - patternsize][0]) + 1;
						var newduration = patternnotes[j][1];
						newnotetxt =  newnote + ":" + newduration;
						pattern[newpatternsize] = newnotetxt;
						patternnotes[newpatternsize] = newnotetxt.split(":");
						newpatternsize += 1;
					}
				}
		} 
}
 
if (notetype != "Basic Melody") {
	ConfigPatternDuration(); 
}
	

for (i=0; i < pattern.length; i += 1) {
		var tempnotearr = getNoteWithAccidentals(i);

		// Determine note beat duration
		var beatduration = 1;
		var alphatabduration = "4";
		switch (tempnotearr[1]) {
			case "1n":		beatduration = 4; alphatabduration = "1"; break;
			case "2n":		beatduration = 2; alphatabduration = "2";  break;
			case "2n.":	beatduration = 3; alphatabduration = "2.";  break;
			case "4n":		beatduration = 1; alphatabduration = "4";  break;
			case "4n.":	beatduration = 1.5; alphatabduration = "4.";  break;
			case "4t":		beatduration = .66667; alphatabduration = "4";  break;
			case "4t.":	beatduration = 1; alphatabduration = "4.";  break;
			case "8n":		beatduration = .5; alphatabduration = "8";  break;
			case "8n.":	beatduration = .75; alphatabduration = "8.";  break;
			case "8t":		beatduration = .33334; alphatabduration = "8";  break;
			case "8t.":	beatduration = .5; alphatabduration = "8.";  break;
			case "16n":	beatduration = .25; alphatabduration = "16";  break;
			case "16n.":	beatduration = .375; alphatabduration = "16.";  break;
			case "16t":	beatduration = .16667; alphatabduration = "16";  break;
			case "16t.":	beatduration = .25; alphatabduration = "16.";  break;
			case "32n":	beatduration = .125; alphatabduration = "32";  break;
			case "32n.":	beatduration = .1875; alphatabduration = "32.";  break;
			case "32t":	beatduration = .08334; alphatabduration = "32";  break;
			case "32t.":	beatduration = .125; alphatabduration = "32.";  break;
			default:			beatduration = 1; alphatabduration = "4"; 
		}
		patternnotes[i] = [tempnotearr[4], tempnotearr[1], tempnotearr[0], tempnotearr[2], tempnotearr[3], beatduration, alphatabduration];
		console.log ("Pattern Note: ", patternnotes[i]);  
}

synthstarted = false; 
audioplaying = false;
timeout;
ramploopcounter=-1;

if (window.synth !== undefined) {
	if (synth != null) {
			synth.disconnect();
			console.log("Disconnected synth");
	}
}

if (document.getElementById("playbuttonfield") != null) {
	console.log("Checking autoplay", autoplay);
	if ((autoplay) && (document.getElementById("answer") == null)){
		console.log("Autoplaying");
		TogglePlayButton(true);
		PlayTab();
	}
}

SetFieldValueByNameOrId("startingstringfield", patternnotes[0][3]);
SetFieldValueByNameOrId("startingfretfield", patternnotes[0][4]);
SetFieldValueByNameOrId("startingnotenamefield", patternnotes[0][2]);
}

function GetScale(scalekey="", scaletype="", neckposition=0) {
	scalestring = (document.getElementById("scalenotesfield") != null) ? document.getElementById("scalenotesfield").innerHTML.trim() : "";
	scalestartindex = (document.getElementById("scalestartindexfield") != null) ? document.getElementById("scalestartindexfield").innerHTML.trim() : "";

	var scaleitem;
	var baseneckposition;
	if ((scalestring == null) || (scalestring == "")) {
		baseneckposition = (Number(neckposition) >= 12) ? Number(neckposition) - 12 : neckposition; 
		var scaleitem = FindScale(scalekey, scaletype, baseneckposition);
		if (scaleitem == null) {
			scaleitem = DeriveFromMajorScale(scalekey, scaletype, baseneckposition);
		}
		
		if (scaleitem != null) {
			scalestring = scaleitem.scalestring;
			scalestartindex = scaleitem.scalestartindex;
			octavesize = scaleitem.octavesize;
			
			if (neckposition >= 12) {
				let newscalestring = scalestring.replace(/([A-G][b|\#]?)(\d)(:\d:)(\d{1,2})/g, function(match, g1, g2, g3, g4) {
					let octavenum = Number(g2) + 1;
					let fretnum = Number(g4) + 12;
					return g1 + octavenum + g3 + fretnum;
				});					
				scalestring = newscalestring;
			}
		}
	}
	

	if ((scalestartindex == "") || (scalestartindex == 0)) {
		scalestartindex = 0;
	}
	else {
		scalestartindex = scalestartindex - 1;
	}
	
	scale = scalestring.split(" ");
	
	scalenotes = {};

	for (i=0; i < scale.length; i++) {
		scalenotes[i] = scale[i].split(":");
	}
	
	console.log("Using scale", scalekey, ":", scaletype, ":", neckposition, ":", scalestartindex, ":", scalestring);
	return scalenotes;
}

function FindScale(scalekey="", scaletype="", neckposition=0) {
	for (var i=0; i < scalelist.length; i++) {
		if ((scalelist[i].scalekey.toLowerCase() == scalekey.toLowerCase()) && (scalelist[i].scaletype.toLowerCase() == scaletype.toLowerCase()) && (Number(scalelist[i].neckposition) == Number(neckposition))) {
			console.log("FindScale", scalekey, scaletype, neckposition, scalelist[i]);
			return scalelist[i];
		}
	}
	console.log("FindScale", scalekey, scaletype, neckposition, null);
	return null;
}

function DeriveFromMajorScale(scalekey="", scaletype="", neckposition=0) {
	var scalekeys = ["A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab"];
	var tmpscaleitem = {scalekey:"", scaletype:"", neckposition:0, octavesize:7, scalestartindex:0, scalestring:""};
	tmpscaleitem.scalekey = scalekey;
	tmpscaleitem.scaletype = scaletype;
	tmpscaleitem.neckposition = neckposition;

	var relativemajorkey;
	var scaleindex = scalekeys.indexOf(scalekey);
	if (scaleindex != null) {
		var scaleindexoffset = 0;
		switch (scaletype.toLowerCase()) {
			case "ionian":				scaleindexoffset = 0; startoffset = 0; break;
			case "major":				scaleindexoffset = 0; startoffset = 0; break;
			case "pentatonic major":	scaleindexoffset = 0; startoffset = 0; break;
			case "major blues":			scaleindexoffset = 0; startoffset = 0; break;
			case "dorian":				scaleindexoffset = 2; startoffset = 6; break;
			case "phrygian":			scaleindexoffset = 4; startoffset = 5; break;
			case "lydian":				scaleindexoffset = 5; startoffset = 4; break;
			case "mixolydian":			scaleindexoffset = 7; startoffset = 3; break;
			case "minor":				scaleindexoffset = 9; startoffset = 2; break;
			case "pentatonic minor":	scaleindexoffset = 9; startoffset = 2; break;
			case "minor blues":			scaleindexoffset = 9; startoffset = 2; break;
			case "harmonic minor":		scaleindexoffset = 9; startoffset = 2; break;
			case "melodic minor":		scaleindexoffset = 9; startoffset = 2; break;
			case "locrian":				scaleindexoffset = 11; startoffset = 1; break;
		}
		scaleindex = ((scaleindex - scaleindexoffset) < 0) ? (scaleindex - scaleindexoffset + 12) : (scaleindex - scaleindexoffset);
		relativemajorkey = scalekeys[scaleindex];
		scaleitem = FindScale(relativemajorkey, "major", neckposition);
		tmpscaleitem.scalestartindex = ((scaleitem.scalestartindex - startoffset) <= 0) ? scaleitem.scalestartindex - startoffset + 7 : scaleitem.scalestartindex - startoffset;
		tmpscaleitem.scalestring = scaleitem.scalestring;
		
		scale = tmpscaleitem.scalestring.split(" ");	
		var notename = [""];
		for (i=1; i < 8; i++) {
			notename[i] = scale[tmpscaleitem.scalestartindex + i - 2].split(":")[0].trim().replace(/\d/, "");
		}
		
		switch (scaletype.toLowerCase()) {
			case "pentatonic major":
				regex = new RegExp("(" + notename[4] + "\\d:\\d:\\d{1,2})\\s*", "g");			
				newscalestring = tmpscaleitem.scalestring.replace(regex, "").trim();					
				tmpscaleitem.scalestring = newscalestring;
				console.log("Dropped 4th", notename[4], "for", scaletype, newscalestring);
				regex = new RegExp("(" + notename[7] + "\\d:\\d:\\d{1,2})\\s*", "g");			
				newscalestring = tmpscaleitem.scalestring.replace(regex, "").trim();					
				tmpscaleitem.scalestring = newscalestring;
				console.log("Dropped 7th", notename[7], "for", scaletype, newscalestring);
				break;
				
			case "pentatonic minor":
				regex = new RegExp("(" + notename[2] + "\\d:\\d:\\d{1,2})\\s*", "g");			
				console.log("Regular expression is", regex);
				newscalestring = tmpscaleitem.scalestring.replace(regex, "").trim();					
				tmpscaleitem.scalestring = newscalestring;
				console.log("Dropped 2nd", notename[2], "for", scaletype, newscalestring);
				regex = new RegExp("(" + notename[6] + "\\d:\\d:\\d{1,2})\\s*", "g");			
				newscalestring = tmpscaleitem.scalestring.replace(regex, "").trim();					
				tmpscaleitem.scalestring = newscalestring;
				console.log("Dropped 6th", notename[6], "for", scaletype, newscalestring);
				break;
			
			case "harmonic minor":
				regex = new RegExp("(" + notename[7] + "\\d:\\d:\\d{1,2})", "g");
				newscalestring = tmpscaleitem.scalestring.replace(regex, function(match, g1) {
					return GetNote(g1, 1);
				});					
				tmpscaleitem.scalestring = newscalestring;
				console.log("Augmented 7th", "of", notename[7], "for", scaletype, newscalestring);
				break;

			case "melodic minor":
				//6th and 7th should be augmented in pattern notes depending on ascending or descending previous pattern note
				break;
				
			case "major blues":
				regex = new RegExp("(" + notename[4] + "\\d:\\d:\\d{1,2})\\s*", "g");			
				newscalestring = tmpscaleitem.scalestring.replace(regex, "").trim();					
				tmpscaleitem.scalestring = newscalestring;
				console.log("Dropped 4th", notename[4], "for", scaletype, newscalestring);
				regex = new RegExp("(" + notename[7] + "\\d:\\d:\\d{1,2})\\s*", "g");			
				newscalestring = tmpscaleitem.scalestring.replace(regex, "").trim();					
				tmpscaleitem.scalestring = newscalestring;
				console.log("Dropped 7th", notename[7], "for", scaletype, newscalestring);

				//Add blues notes of flat 3rds
				regex = new RegExp("(" + notename[3] + "\\d:\\d:\\d{1,2})", "g");
				newscalestring = tmpscaleitem.scalestring.replace(regex, function(match, g1) {
					return GetNote(g1, -1) + " " + g1;
				});					
				tmpscaleitem.scalestring = newscalestring;
				console.log("Added flat 3rd of", notename[3], "for", scaletype, newscalestring);
				break;
				
			case "minor blues":
				regex = new RegExp("(" + notename[2] + "\\d:\\d:\\d{1,2})\\s*", "g");			
				newscalestring = tmpscaleitem.scalestring.replace(regex, "").trim();					
				tmpscaleitem.scalestring = newscalestring;
				console.log("Dropped 2nd", notename[2], "for", scaletype, newscalestring);
				regex = new RegExp("(" + notename[6] + "\\d:\\d:\\d{1,2})\\s*", "g");			
				newscalestring = tmpscaleitem.scalestring.replace(regex, "").trim();					
				tmpscaleitem.scalestring = newscalestring;
				console.log("Dropped 6th", notename[6], "for", scaletype, newscalestring);
				
				//Add blues notes of flat 5ths
				regex = new RegExp("(" + notename[5] + "\\d:\\d:\\d{1,2})", "g");
				newscalestring = tmpscaleitem.scalestring.replace(regex, function(match, g1) {
					return GetNote(g1, -1) + " " + g1;
				});					
				tmpscaleitem.scalestring = newscalestring;
				console.log("Added flat 5th of", notename[5], "for", scaletype, newscalestring);
				break;
		}
		regex = new RegExp(scalekey + "\\d:");
		scale = tmpscaleitem.scalestring.split(" ");
		for (i=0; i < scale.length; i++) {
			if (scale[i].search(regex) == 0) {				
				tmpscaleitem.scalestartindex = i + 1;
				break;
			}
		}
	}	
	console.log("DeriveScale:", scalekey, scaletype, neckposition, tmpscaleitem);
	console.log("DeriveScale: relative major is", relativemajorkey);
	return tmpscaleitem;
}

function GetNote(notestring, semitones=0) {
	newnotestring = null;
	if ((notestring != null) && (notestring != "")) {
		note = notestring.trim().split(":");
		newnotename = GetNoteName(note[0], semitones);		
		if (newnotename != null) {
			stringnum = Number(note[1]);
			fretnum = Number(note[2]);
			newstringnum = stringnum;
			newfretnum = fretnum + semitones;
			while ((newfretnum < 0) && (newstringnum < 6)) {
				newstringnum = newstringnum + 1;
				newfretnum = (newstringnum == 3) ? newfretnum + 4 : newfretnum + 5;
				
			}
			newnotestring = newnotename + ":" + newstringnum + ":" + newfretnum;
		}
	}
	console.log("Changed note", notestring, "by", semitones, "to", newnotestring);
	return newnotestring;
}
	
function GetNoteName(notename, semitones=0) {
	newnotename = null;
	if ((notename != null) && (notename != "")) {
		sharpflatscale = (semitones < 0) ? 1 : 0;
		chromaticnotes = scalelist[sharpflatscale].scalestring.trim().replace(/:\d:\d{1,2}/g, "").split(" ");
		noteindex = chromaticnotes.indexOf(notename);
		if (noteindex != null) {
			if ((noteindex + semitones > 0) && (noteindex + semitones < chromaticnotes.length)) {
				newnotename = chromaticnotes[noteindex + semitones];
			}
		}
		else {
			sharpflatscale = (sharpflatscale == 0) ? 1 : 0;
			chromaticnotes = scalelist[sharpflatscale].scalestring.trim().replace(/:\d:\d{1,2}/g, "").split(" ");
			noteindex = chromaticnotes.indexOf(notename);
			if (noteindex != null) {
				if ((noteindex + semitones > 0) && (noteindex + semitones < chromaticnotes.length)) {
					newnotename = chromaticnotes[noteindex + semitones];
				}
			}
		}		
		console.log("Changed note ", notename, "by", semitones, "semitones to ", newnotename, "using scale", chromaticnotes);		
	}
	return newnotename;
}

function InitConfig(cardscope) {
	testfield.innerHTML = "Initializing config";
	if (cardscope == null) {
		if (localStorage.getItem(cardconfigprefix + "cardsettings") != null) {
			configitems[0].value = localStorage.getItem(cardconfigprefix + "cardsettings");
		}
		else {
			localStorage.setItem(cardconfigprefix + "cardsettings", "false");
			configitems[0].value = "false";
		}

		configprefix = (configitems[0].value == "true") ? cardconfigprefix : deckprefix;
	}
	else {
		configprefix = (cardscope == true) ? cardconfigprefix : deckprefix;
	}
	console.log("Config prefix is ", configprefix);

	InitConfigItems();
	InitConfigDialog();
}

function InitConfigItems() {
	for (i=1; i < configitems.length; i++) {
		if (localStorage.getItem(configprefix + configitems[i].key) != null) { 
			var savedval = localStorage.getItem(configprefix + configitems[i].key);
			if (configitems[i].fieldtype == "range") {
				console.log("Initializing number config item from storage", configprefix + configitems[i].key, "=", savedval, "(", typeof savedval, ")"); 
				configitems[i].value = Number(savedval);
			}
			else {
				console.log("Initializing boolean config item from storage", configprefix + configitems[i].key, "=", savedval, "(", typeof savedval, ")"); 
				configitems[i].value = savedval; 
			}
		}
		else {
			localStorage.setItem(configprefix + configitems[i].key, configitems[i].value);
		}
		console.log("Config item initialized", configitems[i]);
	}
}

function InitConfigDialog() {
	var configtable = document.getElementById("configtable");
	if (configtable != null) {
		console.log("Removing config table rows");
		while (configtable.rows.length > 0) {
			configtable.deleteRow(0);
		}

		console.log("Initializing config table", configitems);
		for (i=0; i < configitems.length; i++) {
				console.log("Initializing", configitems[i]);
				var row = configtable.insertRow(i);
				var cell = row.insertCell(0);
				cell.style = 'font-family: "Arial"; font-size: 15px; text-align: left; color: black; padding: 5px 0px; margin: 0px 0px; vertical-align:top';
				cell.innerHTML = configitems[i].fieldlabel;

				cell = row.insertCell(1);
				if (configitems[i].fieldtype == "range") { 
					cell.style = 'font-family: "Courier"; font-size: 20px; text-align: right; font-weight: bold; color: blue; padding: 5px 0px; margin: 0px 0px; vertical-align:top';
					cell.innerHTML = "	<span onClick='SetConfigPreviousValue(" + '"' + configitems[i].key + '"' + ");'>&nbsp;-&nbsp;</span>"; 
					cell.innerHTML += "<span name=" + '"' + configitems[i].fieldname + '">' + configitems[i].value + "</span>";
					cell.innerHTML += "	<span onClick='SetConfigNextValue(" + '"' + configitems[i].key + '"' + ");'>+&nbsp;</span>";

					console.log("Creating field variable");
					(1, eval)('var ' + configitems[i].key + ' = ' + configitems[i].value);
					console.log("Created field variable", configitems[i].key, eval(configitems[i].key), eval ('typeof ' + configitems[i].key)); 

				}
				else if (configitems[i].fieldtype == "checkbox") {
					cell.style = 'font-family: "Courier"; font-size: 20px; text-align: right; font-weight: bold; color: blue; padding: 1px 7px; margin: 0px 0px; vertical-align:top';
					checkedstr = (configitems[i].value == "true") ? "checked" : ""; 
					cell.innerHTML = "<input type='checkbox' name=" + "'" + configitems[i].fieldname + "' " + "onchange='SetConfigNextValue(" + '"' + configitems[i].key + '");' + "'" + checkedstr + " style='width:20px; height:20px;'></input>"; 

					console.log("Creating field variable");
					(1, eval)('var ' + configitems[i].key + ' = Boolean(' + configitems[i].value + ')');
					console.log("Created field variable", configitems[i].key, eval(configitems[i].key), eval ('typeof ' + configitems[i].key));

				}
				else if (configitems[i].fieldtype == "text") { 
					cell.style = 'font-family: "Courier"; font-size: 20px; text-align: right; font-weight: bold; color: blue; padding: 1px 0px; margin: 0px 0px; vertical-align:top';
					cell.innerHTML = "<input name=" + '"' + configitems[i].fieldname + '" value="' + configitems[i].value + '" ' + 'onblur="SetConfigValue(' + "'" + configitems[i].key + "', this.value);" + '"' + "></input>";

					configitems[i].value = (configitems[i].value == "") ? "' '" : configitems[i].value;

					console.log("Creating field variable", 'var ' + configitems[i].key + ' = ' + configitems[i].value);
					(1, eval)('var ' + configitems[i].key + ' = ' + configitems[i].value);
					console.log("Created field variable", configitems[i].key, eval(configitems[i].key), eval ('typeof ' + configitems[i].key)); 

				}
				console.log("Created config item", cell); 

				var fields = document.getElementsByName(configitems[i].fieldname); 
				for (j = 0; j < fields.length; j++) {
					if (fields[j].tagName == "INPUT") {
						if (fields[j].type == "checkbox") {
							fields[j].checked = (configitems[i].value == "true");
							fields[j].value = (configitems[i].value == "true"); 
						}
						else {
							fields[j].value = configitems[i].value;
						}
						console.log ("Set input field ", fields[j]);
					}
					else {
						fields[j].innerHTML = configitems[i].value;
						console.log ("Set field ", fields[j]);
					}
				}
		}
	}
}

function SetConfigValue(key, value) { 
	if (key != null) {
		var configitem = configitems.find(function(item){return item.key === key});
		console.log("Current config value ", configitem);
		if (configitem != null) {
			if (configitem.fieldtype == "text") {
				value = (value == "") ? "'" + value + "'" : value;
				configitem.value = value;
			}
			if (configitem.fieldtype == "range") {
				if (value > configitem.max) {
					value = configitem.max;
				}
				else if (value < configitem.min) {
					value = configitem.min;
				}
				configitem.value = value;
			}
			if (configitem.fieldtype == "checkbox") {
				if (configitem.value == "true") { 
					configitem.value = "false";
				}
				else if (configitem.value == "false") { 
					configitem.value = "true";
				}
			}
		}

		if (configitem.fieldtype == "checkbox") {
			console.log("Update boolean field variable");
			(1, eval)(configitem.key + ' = Boolean(' + configitem.value + ')');
			console.log("Updated field variable", configitem.key, eval(configitem.key)); 
		}
		else {
			console.log("Update field variable", configitem.key + ' = ' + configitem.value);
			(1, eval)(configitem.key + ' = ' + configitem.value);
			console.log("Updated field variable", configitem.key, eval(configitem.key)); 
		}

		if (configitem.key == "cardsettings") {
			configprefix = (configitem.value == "true") ? cardconfigprefix : deckprefix;
			console.log("Config prefix is ", configprefix);
			localStorage.setItem(cardconfigprefix + configitem.key, configitem.value);
		}			
		else {
			localStorage.setItem(configprefix + configitem.key, configitem.value);
			console.log("Set config item ", configitem);
		}

		if ((configitem != null) && (configitem.fieldname != null)) {
			var fields = document.getElementsByName(configitem.fieldname); 
			for (i = 0; i < fields.length; i++) {
				if (fields[i].tagName == "INPUT") {
					if (fields[i].type == "checkbox") {
						fields[i].checked = (configitem.value == "true");
						fields[i].value = (configitem.value == "true"); 
					}
					else {
						fields[i].value = configitem.value;
					}
					console.log ("Set input field ", fields[i]);
				}
				else {
					fields[i].innerHTML = configitem.value;
					console.log ("Set field ", fields[i]);
				}
			}
		}

		if (configitem.key == "cardsettings") {
			console.log("Rescoping config");
			InitConfig();
		}
	}
	UpdateConfig();
}

function SetConfigNextValue(key) { 
	if (key != null) {
		var configitem = configitems.find(function(item){return item.key === key});
		console.log("Current config value ", configitem);
		if (configitem != null) {
			if (configitem.step > 0) {
				var value = Number(configitem.value) + Number(configitem.step);
				if (value > configitem.max) {
					value = configitem.max;
				}
				configitem.value = value;
			}
			if (configitem.fieldtype == "checkbox") {
				if (configitem.value == "true") { 
					configitem.value = "false";
				}
				else if (configitem.value == "false") { 
					configitem.value = "true";
				}
			}
		}

		if (configitem.fieldtype == "checkbox") {
			console.log("Update boolean field variable");
			(1, eval)(configitem.key + ' = Boolean(' + configitem.value + ')');
			console.log("Updated field variable", configitem.key, eval(configitem.key)); 
		}
		else {
			console.log("Update field variable");
			(1, eval)(configitem.key + ' = ' + configitem.value);
			console.log("Updated field variable", configitem.key, eval(configitem.key)); 
		}

		if (configitem.key == "cardsettings") {
			configprefix = (configitem.value == "true") ? cardconfigprefix : deckprefix;
			console.log("Config prefix is ", configprefix);
			localStorage.setItem(cardconfigprefix + configitem.key, configitem.value);
		}			
		else {
			localStorage.setItem(configprefix + configitem.key, configitem.value);
			console.log("Set config item ", configitem);
		}

		if ((configitem != null) && (configitem.fieldname != null)) {
			var fields = document.getElementsByName(configitem.fieldname); 
			for (i = 0; i < fields.length; i++) {
				if (fields[i].tagName == "INPUT") {
					if (fields[i].type == "checkbox") {
						fields[i].checked = (configitem.value == "true");
						fields[i].value = (configitem.value == "true"); 
					}
					else {
						fields[i].value = configitem.value;
					}
					console.log ("Set input field ", fields[i]);
				}
				else {
					fields[i].innerHTML = configitem.value;
					console.log ("Set field ", fields[i]);
				}
			}
		}

		if (configitem.key == "cardsettings") {
			console.log("Rescoping config");
			InitConfig();
		}
	}
	UpdateConfig();
}

function SetConfigPreviousValue(key) {
	if (key != null) {
		var configitem = configitems.find(function(item){return item.key === key});
		console.log("Current config value ", configitem);
		if (configitem != null) {
			if (configitem.step > 0) {
				var value = Number(configitem.value) - Number(configitem.step);
				if (value < configitem.min) {
					value = configitem.min;
				}
				configitem.value = value;
			}
			if (configitem.fieldtype == "checkbox") {
				if (configitem.value == "true") { 
					configitem.value = "false";
				}
				else if (configitem.value == "false") { 
					configitem.value = "true";
				}
			}
		}

		if (configitem.fieldtype == "checkbox") {
			console.log("Update boolean field variable");
			(1, eval)(configitem.key + ' = Boolean(' + configitem.value + ')');
			console.log("Updated field variable", configitem.key, eval(configitem.key)); 
		}
		else {
			console.log("Update field variable");
			(1, eval)(configitem.key + ' = ' + configitem.value);
			console.log("Updated field variable", configitem.key, eval(configitem.key)); 
		}

		if (configitem.key == "cardsettings") {
			configprefix = (configitem.value == "true") ? cardconfigprefix : deckprefix;
			console.log("Config prefix is ", configprefix);
			localStorage.setItem(cardconfigprefix + configitem.key, configitem.value);
		}			
		else {
			localStorage.setItem(configprefix + configitem.key, configitem.value);
			console.log("Set config item ", configitem);
		}

		if ((configitem != null) && (configitem.fieldname != null)) {
			var fields = document.getElementsByName(configitem.fieldname); 
			for (i = 0; i < fields.length; i++) {
				if (fields[i].tagName == "INPUT") {
					if (fields[i].type == "checkbox") {
						fields[i].checked = (configitem.value == "true");
						fields[i].value = (configitem.value == "true"); 
					}
					else {
						fields[i].value = configitem.value;
					}
					console.log ("Set input field ", fields[i]);
				}
				else {
					fields[i].innerHTML = configitem.value;
					console.log ("Set field ", fields[i]);
				}
			}
		}

		if (configitem.key == "cardsettings") {
			console.log("Rescoping config");
			InitConfig();
		}
	}
	UpdateConfig();
}

function SetFieldValueByNameOrId(fieldnameorid, fieldvalue) {
	if (fieldnameorid != null) {
		//Set by id
		var field = document.getElementById(fieldnameorid);
		SetFieldValue(field, fieldvalue);
		
		//Set by name
		var fieldlist = document.getElementsByName(fieldnameorid);
		if (fieldlist != null) {
			for (var i=0; i < fieldlist.length; i++) {
				SetFieldValue(fieldlist[i], fieldvalue);
			}
		}		
	}
}

function SetFieldValue(field, fieldvalue) {
	if (field != null) {
		if (field.tagName == "INPUT") {
			if (field.type == "checkbox") {
				field.checked = (fieldvalue == "true");
				field.value = (fieldvalue == "true"); 
			}
			else {
				field.value = fieldvalue;
			}
			console.log ("Set input field ", field);
		}
		else {
			field.innerHTML = fieldvalue;
			console.log ("Set field ", field);
		}
	}
}

function ConfigPatternDuration() {
	console.log("Configuring pattern durations");
	var durations = ["4n","4n.","4t","4t.","8n","8n.","8t","8t.","16n","16n.","16t","16t.","32n","32n.","32t","32t."];
	
	rhythmoverride = (patterncellsize > 2) ? (1, eval)("rhythm" + patterncellsize + "cell") : null;
	console.log("Rhythm override", "rhythm" + patterncellsize + "cell = ", rhythmoverride);
	if (rhythmoverride != null) {
		var rhythmindex = 0;
		for (var i=0; i < pattern.length; i += 1) {
			rhythmindex = (rhythmindex == patterncellsize) ? 0 : rhythmindex;
			rhythmoverride[rhythmindex] = (rhythmoverride[rhythmindex] == null) ? "" : rhythmoverride[rhythmindex].trim();
			rhythmoverride[rhythmindex] = (rhythmoverride[rhythmindex] == "*") ? durations[Math.floor(Math.random() * durations.length)] : rhythmoverride[rhythmindex];
			patternnotes[i][1] = (rhythmoverride[rhythmindex] != "") ? rhythmoverride[rhythmindex].trim() : patternnotes[i][1];
			rhythmindex += 1;
		}
	}
	console.log("Configured pattern durations", patternnotes);
}

function SetBPM (bpmvalue, step) {
	if (bpmvalue == null) {
		var tmpvalue = (bpmfield != null) ? Number(bpmfield.value) :  bpm;
		bpm = (step == null) ? tmpvalue : Number(tmpvalue) + step;
		SetFieldValueByNameOrId("bpmfield", bpm);
		SetFieldValueByNameOrId("bpmvaluefield", bpm + " BPM");
	}
	else {
		bpm = (step == null) ? Number(bpmvalue) : Number(bpmvalue) + step;
		SetFieldValueByNameOrId("bpmfield", bpm);
		SetFieldValueByNameOrId("bpmvaluefield", bpm + " BPM");
	}
	beatsecs = 60/bpm;
}

function getNoteWithAccidentals(notenum) {
	var sharpslist = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "B#", "C#", "E#", "F#"];
	var flatslist = ["C", "B", "Bb", "A", "Ab", "G", "Gb", "F", "E", "Eb", "D", "Db", "C", "Cb", "Bb", "Fb", "Eb"];
	var tempnotenum = patternnotes[notenum][0].trim().replace("#", "").replace("b", "");
	var scalenum = patternnotes[notenum][0] - 1 + scalestartindex;
	var tempnotename = scalenotes[scalenum][0];
	var tempstring = Number(scalenotes[scalenum][1]);
	var tempfret = Number(scalenotes[scalenum][2]);

	var duration = patternnotes[notenum][1].trim().replace("#", "").replace("b", "");

	var patternHasSharp = patternnotes[notenum][1].trim().endsWith("#");
	var patternHasFlat = patternnotes[notenum][1].trim().endsWith("b");

	var scalenoteHasSharp = tempnotename[1].endsWith("#");
	var scalenoteHasFlat = tempnotename[1].endsWith("b");

	if (patternHasSharp == true) {
		console.log ("Pattern has sharp");
		tempfret += 1;

		if (scalenoteHasFlat == true){
			tempnotename = tempnotename[0] + tempnotename[2];
			console.log ("Scale note is flat. New note is:", tempnotename);			
		}
		else {
			if (scalenoteHasSharp == true) {
				var index = sharpslist.indexOf(tempnotename[0] + tempnotename[1]) + 1;
				tempnotename = sharpslist[index] + tempnotename[2];
				console.log ("Scale note is sharp. New note is:", tempnotename);			
			}
			else {
				var index = sharpslist.indexOf(tempnotename[0]) + 1;
				tempnotename = sharpslist[index] + tempnotename[1];
				console.log ("Scale note is natural. New note is:", tempnotename);			
			}
		}
	}

	if (patternHasFlat == true) {
		if (tempfret > 0) {
			tempfret -= 1;
		}
		else {
			stringnum = Number(tempstring);
			if (stringnum < 6) {
				tempstring += 1;
				tempfret = 4;
				if (stringnum == 2) {
					tempfret = 3;
				}
			}
		} 

		console.log ("Pattern has flat");
		if (scalenoteHasSharp == true){
			tempnotename = tempnotename[0] + tempnotename[2];
			console.log ("Scale note is sharp. New note is:", tempnotename);
		}
		else {
			if (scalenoteHasFlat == true) {
				var index = flatslist.indexOf(tempnotename[0] + tempnotename[1]) + 1;
				tempnotename = flatslist[index] + tempnotename[2];
				console.log ("Scale note is flat. New note is:", tempnotename);
			}
			else {
				var index = flatslist.indexOf(tempnotename[0]) + 1;
				tempnotename = flatslist[index] + tempnotename[1];
				console.log ("Scale note is natural. New note is:", tempnotename);	
			}
		}
	}

	var tempnotearr = [tempnotename, duration, "" + tempstring, "" + tempfret, tempnotenum ];
	console.log("Notenum ", notenum, " Pattern Note:", patternnotes[notenum][0] + ":" + patternnotes[notenum][1], " Note Array ", tempnotearr);
	return tempnotearr;
}

function TogglePlayButton(checked) {
	audioplaying = checked;
	ramploopcounter = -1;
	playbuttonfield = document.getElementById("playbuttonfield");	
	if (playbuttonfield != null) {
		playbuttonfield.checked = checked;
	}

	playbuttonfield2 = document.getElementById("playbuttonfield2");	
	if (playbuttonfield2 != null) {
		playbuttonfield2.checked = checked;
	}
}

function SetAudioPlaying(value) {
	audioplaying = false;
	if (value) {
		audioplaying = true;
	}

	playbuttonfield = document.getElementById("playbuttonfield");	
	if (playbuttonfield != null) {
		playbuttonfield.checked = (audioplaying) ? true : false;
	}

	playbuttonfield2 = document.getElementById("playbuttonfield2");	
	if (playbuttonfield2 != null) {
		playbuttonfield2.checked = (audioplaying) ? true : false;
	}
}

function PlayTab(notenum=null, waitforstart=true) {
	if (timeout != null) {
		console.log("Removing timeout");
		window.clearTimeout(timeout);
	}

	if (synthstarted) {
		synth.disconnect();
	}

	if ((!audioplaying) && (notenum == null)) {
		return;
	}

	synth = new Tone.Synth();
	synth.toDestination();
	Tone.Transport.start();
	synthstarted = true;

	if (notenum == null) {
		ramploopcounter = ((ramp == true) && (rampstep > 0)) ? ramploopcounter + 1 : 0;
		console.log("Increasing BPM: ", ramp, rampstep, rampmax, ramploopcounter, ramploop, bpm);
		if ((ramp == true) && (rampstep > 0) && (ramploopcounter >= ramploop)) {
			ramploopcounter = 0;
			if (rampmax >= Number(bpm) + Number(rampstep)) {
				SetBPM(Number(bpm) + Number(rampstep)); 
			}
			else {
				SetBPM(Number(rampmax));
			}
		}
		console.log("BPM values: ", ramp, rampstep, rampmax, ramploopcounter, ramploop, bpm);

		var now = (waitforstart == true) ? Tone.now() + startwait : Tone.now();
		var pauseinterval = 0;
		var pausecounter = patterncellsize;
		var patternduration = 0;
		var patternoffsets = [];
		var loopend = now;
		var playtime = now;
		var timeinterval = 0;

		for (var i = 0; i < patterncellsize; i += 1) {
			patternduration += beatsecs*(patternnotes[i][5]);
		}
		console.log("Pattern duration", patternduration);

		for (var i = 0; i < pattern.length; i += 1) {
			patternoffsets[i] = (i == 0) ? 0 : patternoffsets[i - 1] + beatsecs*(patternnotes[i - 1][5]);
		}
		console.log("Pattern offsets", patternoffsets);

		for (var i = 0; i < pattern.length; i += 1) {
			if ((pauseforplayback == true) && (pausecounter == 0)){
				pauseinterval += pausemultiple*patternduration;				
				pausecounter = patterncellsize;
				console.log("Pause Interval", i, pauseinterval);
			}
			
			timeinterval = patternoffsets[i];
			console.log("Time Interval", i, timeinterval);

			if (pauseforplayback == true) {
				timeinterval += pauseinterval;
			}
			console.log("Total Time Interval", i, timeinterval);

			scalenum = patternnotes[i][0] - 1 + scalestartindex;
			playtime = now + timeinterval;
			loopend = (loopend < playtime) ? playtime : loopend;
			synth.triggerAttackRelease(patternnotes[i][2], patternnotes[i][1], playtime);

			if (pauseforplayback == true) { 
				pausecounter -= 1;
			}
		}

		console.log("Pattern scale degree, repeats, id:", patternscaledegree, "/", typeof patternscaledegree , patternrepeats, "/", typeof patternrepeats, patternid);
		if ((patternscaledegree == 0) && ((patternrepeats) || (patternid == 0))) {
			console.log("Playing reverse pattern");
			for (i = pattern.length/patterncellsize - 1; i >= 0; i = i - 1) {
					if (pauseforplayback == true) {
						pauseinterval += pausemultiple*patternduration;				
					}

					var offsetduration = 0;			
					for (var j=0; j < patterncellsize; j += 1) {
						var offsetnum = i*patterncellsize + j;
						offsetduration = (j == 0) ? 0: offsetduration + patternnotes[j - 1][5]*beatsecs;
						scalenum = patternnotes[offsetnum][0] - 1 + scalestartindex;
						//var offsetinterval = beatsecs*(2*pattern.length - (i*patterncellsize) + j);
						var offsetinterval = 2*patternduration*(pattern.length/patterncellsize) - i*patternduration + offsetduration;
						console.log("Reverse pattern play: ", i + "/" + j + " ", patternnotes[offsetnum][2], " ", patternnotes[offsetnum][1], " ", now + pauseinterval + offsetinterval);
						playtime = now + pauseinterval + offsetinterval;
						loopend = (loopend < playtime) ? playtime : loopend;
						synth.triggerAttackRelease(patternnotes[offsetnum][2], patternnotes[offsetnum][1], playtime);
					}
			}
		}
		if (pauseforplayback == true) {
			console.log("Adding pause for playback to loopend", pausemultiple*patternduration);
			loopend += pausemultiple*patternduration;
		}
		
		loopend += 4*beatsecs; 
		console.log("Loop end: ", loopend);
		timeout = window.setTimeout(PlayTab, 1000*(loopend - Tone.now()), null, loopend);
	}
	else {
			const now = Tone.now();
			SetAudioPlaying(false);
			scalenum = patternnotes[notenum][0] - 1 + scalestartindex;
			synth.triggerAttackRelease(patternnotes[notenum][2], patternnotes[notenum][1], now);
	}
	synth.sync();
}

function ShowNotes() {
	if (!notesShown) {
		notesShown = true;
		var patterntable = document.getElementById("patterntable");
		if (patterntable != null) {
			patterntable.rows[0].deleteCell(0);
			var patternnum = 0;
				for (var rownum = 0; rownum < (pattern.length / 7); rownum += 1) {
				patterntable.insertRow(rownum);
					for (var i=0; i < 7; i += 1) {
					if (patternnum < pattern.length) {
							patternnum += 1;
							patterntable.rows[rownum].insertCell(i);
							patterntable.rows[rownum].cells[i].innerHTML = "<button style='font-family: arial; font-size: 25px; font-weight: bold; color: blue; border:none; padding: 4px 4px; margin: 0px 0px;' onclick='PlayTab(" + (patternnum - 1) + ")'>" + patternnum + "</button>";
					}
				}
			}
		}
	}
}

function UpdateConfig() {
	ConfigPatternDuration(); 

	if (window.DisplayTab) {
		DisplayTab();
	}
	if (window.SetBPM) {
		SetBPM(startbpm);	
		console.log("Set BPM", bpm);	
	}
}

function DisplaySettings() {
  var settingsdialog = document.getElementById("settingsdialogfield");
	settingsdialog.showModal();
	console.log("Display Settings Popup");
}

function SaveSettings() {
  var settingsdialog = document.getElementById("settingsdialogfield");
	settingsdialog.close();
	console.log("Saved Settings");
}

function InitBack() {
var patterntable = document.getElementById("patternnotestable");

var patternnum = 0;
	for (var rownum = 0; rownum < (pattern.length / 7); rownum += 1) {
	  patterntable.insertRow(rownum);
		for (var i=0; i < 7; i += 1) {
		  if (patternnum < pattern.length) {
				patternnum += 1;
				patterntable.rows[rownum].insertCell(i);
 			  patterntable.rows[rownum].cells[i].innerHTML = "<button style='font-family: arial; font-size: 18px; font-weight: bold; color: blue; border:none; padding: 4px 4px; margin: 0px 0px;' onclick='PlayTab(" + (patternnum - 1) + ")'>" + patternnotes[patternnum - 1][2] + "<sup>" + patternnotes[patternnum - 1][0] + "</sup></button>";
		  }
  	}
  }
console.log("Notes Shown");
DisplayTab();
}

function DisplayTab() {
var fontsize = tabfontsize + "px";
console.log("Display Tab");

var tabtable1 = document.getElementById("scaletab1");
var tabtable2 = document.getElementById("scaletab2");
var tabstrings = ["E", "B", "G", "D", "A", "E"];
var alphanotes = ":4";


if (tabtable1 != null) {
	while(tabtable1.rows.length > 0) {
		tabtable1.deleteRow(0);
	}
	while((tabtable2 != null) && (tabtable2.rows.length > 0)) {
  	tabtable2.deleteRow(0);
	}

	for (var i = 0; i < 6; i++) {
  	    row = tabtable1.insertRow(i);
				cell = row.insertCell(0);
				cell.style.fontSize = fontsize;
				cell.innerHTML = tabstrings[i] + "|";
		if (tabtable2 != null) {
		   if ((patternscaledegree == 0) && ((patternrepeats) || (patternid == 0))) {
			row = tabtable2.insertRow(i);
				cell = row.insertCell(0);
				cell.style.fontSize = fontsize;
				cell.innerHTML = tabstrings[i] + "|";
		   }
		}

	}

  for (var r = 0; r < 6; r += 1) {
		tabtable1.rows[r].cells[0].style.fontSize = fontsize;
		for (var c=1; c < pattern.length + 1; c += 1) {
			cell = tabtable1.rows[r].insertCell(c);
			cell.style.fontSize = fontsize;
			cell.innerHTML = '-';
			if (tabtable2 != null) {
				if ((patternscaledegree == 0) && ((patternrepeats) || (patternid == 0))) {
					cell = tabtable2.rows[r].insertCell(c);
					cell.style.fontSize = fontsize;
					cell.innerHTML = '-';
				}
			}
		}
	}

	for (var c=1; c < pattern.length + 1; c += 1) {
		var notenum = patternnotes[c-1][0] - 1 + scalestartindex;
		var noteduration = patternnotes[c-1][1];
		var note = patternnotes[c-1][2];
		var rownum = patternnotes[c-1][3] - 1;
		var tabposfretval = patternnotes[c-1][4]; 
		tabtable1.rows[rownum].cells[c].innerHTML = tabposfretval + "<sup>" + note + "</sup><sub>"; 
		alphanotes += " " + tabposfretval + "." + patternnotes[c-1][3] + "." + patternnotes[c-1][6];
		alphanotes += (c % patterncellsize === 0) ? " | " : "";
		if (tabtable2 != null) {
		   if ((patternscaledegree == 0) && ((patternrepeats) || (patternid == 0))) {		
			tabtable2.rows[rownum].cells[pattern.length + 1 - c].innerHTML = tabposfretval + "<sup>" + note + "</sup>";  
		   }
		}
	}
	DisplayAlphaTab(alphanotes);
}

function DisplayAlphaTab(alphanotes) {
	console.log("Alphatab tablature notes: " + alphanotes);
	var alphatabfield = document.getElementById('alphaTab');
	console.log("Alphatab innerHTML default: " + alphatabfield.innerHTML);
	alphatabfield.innerHTML += alphanotes;
	console.log("Alphatab innerHTML" + alphatabfield.innerHTML);
	var alphatabsettings = {
				scale: 0.8,
				ks: scalekey,
				staves: {
			   id: 'tab',
			   additionalSettings: {
				   rhythm: true,
				   rhythmHeight: 50
				}
				},
	//			player: {
	//      enablePlayer: true,
	//      soundFont: 'SGM-v2.01-HQ-v3.0.sf2',
	//			 scrollElement: alphatabfield
	//			}		
		};
	console.log("Alphatab Settings: ", alphatabsettings);
	
	var alphatabapi = new alphaTab.AlphaTabApi(alphatabfield, alphatabsettings);
	alphatabapi.scoreLoaded.on( (score) => {
			console.log("Score loaded");
	});
	alphatabapi.playerReady.on(()=>{
			console.log("Player ready");
			alphatabapi.play();
	});
}
}