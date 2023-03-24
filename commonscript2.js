var configitems = [ 
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

var deckname;
var cardtype;
var patternid;
var deckprefix;
var configprefix;
var cardconfigprefix;
var bpmfield;
var bpmvaluefield;
var scale;
var pattern;
var patternrepeatsfield;
var patternrepeats;
var patterncellsize;
var bpm;
var beatsecs;
var notesShown;
var scalestartindex;
var scalenotes;
var patternnotes;
var patternsize;
var startwait;
var synthstarted; 
var audioplaying;
var timeout;
var ramploopcounter;
var deckprefix;
var configprefix;
var cardconfigprefix;
var patternscaledegree;
var testfield;
testfield = document.getElementById("testfield");
testfield.innerHTML = "Declared Global Vars";
deckname = document.getElementById("decknamefield").innerHTML;
cardtype = document.getElementById("cardtypefield").innerHTML;
patternid = document.getElementById("patternidfield").innerHTML; 
deckprefix = deckname + "/";
configprefix = deckprefix;
cardconfigprefix = deckname + "/" + patternid + "/" + cardtype + "/";
testfield.innerHTML = "Card Config Prefix " + cardconfigprefix;

function InitFront() {
//testfield = document.getElementById("testfield");
//testfield.innerHTML = "Executing Front Script";
}


