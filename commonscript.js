InitFront();

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
(1,eval)('var scalestartindex;');
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

testfield = document.getElementById("testfield");
testfield.innerHTML = "Declared Global Vars";
deckname = document.getElementById("decknamefield").innerHTML;
cardtype = document.getElementById("cardtypefield").innerHTML;
patternid = document.getElementById("patternidfield").innerHTML; 
deckprefix = deckname + "/";
configprefix = deckprefix;
cardconfigprefix = deckname + "/" + patternid + "/" + cardtype + "/";
testfield.innerHTML = "Card Config Prefix " + cardconfigprefix;

patternscaledegreefield = document.getElementById("patternscaledegreefield");
patternscaledegree = (patternscaledegreefield != null) ? Number(patternscaledegreefield) : Number(scaledegree);
testfield = document.getElementById("testfield");
testfield.innerHTML = "Executing Front Script";

InitConfig();

testfield.innerHTML = "Config complete";

bpmfield = document.getElementById("bpmfield");
bpmvaluefield = document.getElementById("bpmvaluefield");
scale = document.getElementById("scalenotesfield").innerHTML.trim().split(" ");
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

scalestartindex = document.getElementById("scalestartindexfield").innerHTML;
if ((scalestartindex == "") || (scalestartindex == 0)) {
	scalestartindex = 0;
}
else {
	scalestartindex = scalestartindex - 1;
}

scalenotes = {};
patternnotes = {};

for (i=0; i < scale.length; i++) {
	scalenotes[i] = scale[i].split(":");
}

for (i=0; i < pattern.length; i++) {
	patternnotes[i] = pattern[i].split(":");
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
			patternnotes = [[newnote, newduration]];
		}
	}
}
else {
		var newpatternsize = pattern.length; 
		if (patternrepeats) {
				for (i=1; i < 8; i += 1) {
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
 
ConfigPatternDuration(); 

for (i=0; i < pattern.length; i += 1) {
		var tempnotearr = getNoteWithAccidentals(i);

		// Determine note beat duration
		var beatduration = 1;
		switch (tempnotearr[1]) {
			case "1n":		beatduration = 4; break;
			case "2n":		beatduration = 2; break;
			case "2n.":	beatduration = 3; break;
			case "4n":		beatduration = 1; break;
			case "4n.":	beatduration = 1.5; break;
			case "4t":		beatduration = .66667; break;
			case "4t.":	beatduration = 1; break;
			case "8n":		beatduration = .5; break;
			case "8n.":	beatduration = .75; break;
			case "8t":		beatduration = .33334; break;
			case "8t.":	beatduration = .5; break;
			case "16n":	beatduration = .25; break;
			case "16n.":	beatduration = .375; break;
			case "16t":	beatduration = .16667; break;
			case "16t.":	beatduration = .25; break;
			case "32n":	beatduration = .125; break;
			case "32n.":	beatduration = .1875; break;
			case "32t":	beatduration = .08334; break;
			case "32t.":	beatduration = .125; break;
			default:			beatduration = 1;
		}
		patternnotes[i] = [tempnotearr[4], tempnotearr[1], tempnotearr[0], tempnotearr[2], tempnotearr[3], beatduration];
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

console.log("Checking autoplay", autoplay);
if ((autoplay) && (document.getElementById("answer") == null)){
	console.log("Autoplaying");
	TogglePlayButton(true);
	PlayTab();
}
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

function ConfigPatternDuration() {
	console.log("Configuring pattern durations");
	var durations = ["4n","4n.","4t","4t.","8n","8n.","8t","8t.","16n","16n.","16t","16t.","32n","32n.","32t","32t."];
	
	rhythmoverride = (patterncellsize > 1) ? (1, eval)("rhythm" + patterncellsize + "cell") : null;
	console.log("Rhythm override", "rhythm" + patterncellsize + "cell = ", rhythmoverride);
	if (rhythmoverride != null) {
		var rhythmindex = 0;
		for (var i=0; i < pattern.length; i += 1) {
			rhythmindex = (rhythmindex == patterncellsize) ? 0 : rhythmindex;
			rhythmoverride[rhythmindex] = (rhythmoverride[rhythmindex] == null) ? "" : rhythmoverride[rhythmindex].trim();
			rhythmoverride[rhythmindex] = (rhythmoverride[rhythmindex] == "*")) ? durations[Math.floor(Math.random() * durations.length)] : rhythmoverride[rhythmindex];
			patternnotes[i][1] = (rhythmoverride[rhythmindex] != "") ? rhythmoverride[rhythmindex].trim() : patternnotes[i][1];
			rhythmindex += 1;
		}
	}
	console.log("Configured pattern durations", patternnotes);
}

function SetBPM (bpmvalue, step) {
	if (bpmvalue == null) {
		bpm = (step == null) ? bpmfield.value : Number(bpmfield.value) + step;
		bpmfield.value = bpm;
		bpmvaluefield.innerHTML = bpmfield.value + " BPM";
	}
	else {
		bpmfield.value = (step == null) ? bpmvalue : Number(bpmvalue) + step;
		bpm = bpmfield.value;
		bpmvaluefield.innerHTML = bpmfield.value + " BPM";
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

	var patternHasSharp = patternnotes[notenum][0].trim().endsWith("#");
	var patternHasFlat = patternnotes[notenum][0].trim().endsWith("b");

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
		loopend += 8*beatsecs; 
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
var startingstringfield = document.getElementById("startingstringfield");
var startingfretfield = document.getElementById("startingfretfield");
var startingscaledegreefield = document.getElementById("startingscaledegreefield");
startingscaledegreefield.innerHTML = (patternscaledegree > 0) ? patternscaledegree : 1;
startingstringfield.innerHTML = patternnotes[0][3];
startingfretfield.innerHTML = patternnotes[0][4];

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

if (tabtable1 != null) {
	while(tabtable1.rows.length > 0) {
  	tabtable1.deleteRow(0);
	}
	while(tabtable2.rows.length > 0) {
  	tabtable2.deleteRow(0);
	}

	for (var i = 0; i < 6; i++) {
  	    row = tabtable1.insertRow(i);
				cell = row.insertCell(0);
				cell.style.fontSize = fontsize;
				cell.innerHTML = tabstrings[i] + "|";

  	    row = tabtable2.insertRow(i);
				cell = row.insertCell(0);
				cell.style.fontSize = fontsize;
				cell.innerHTML = tabstrings[i] + "|";

	}

  for (var r = 0; r < 6; r += 1) {
		tabtable1.rows[r].cells[0].style.fontSize = fontsize;
		for (var c=1; c < pattern.length + 1; c += 1) {
			cell = tabtable1.rows[r].insertCell(c);
			cell.style.fontSize = fontsize;
			cell.innerHTML = '-';
			cell = tabtable2.rows[r].insertCell(c);
			cell.style.fontSize = fontsize;
			cell.innerHTML = '-';
		}
	}

	for (var c=1; c < pattern.length + 1; c += 1) {
		var notenum = patternnotes[c-1][0] - 1 + scalestartindex;
		var note = patternnotes[c-1][2];
		var rownum = patternnotes[c-1][3] - 1;
		var tabposfretval = patternnotes[c-1][4]; 
		tabtable1.rows[rownum].cells[c].innerHTML = tabposfretval + "<sup>" + note + "</sup><sub>"; 
		tabtable2.rows[rownum].cells[pattern.length + 1 - c].innerHTML = tabposfretval + "<sup>" + note + "</sup>";  
	}
}
}


