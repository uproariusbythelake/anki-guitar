var testfield = document.getElementById("testfield");
var deckname = document.getElementById("decknamefield").innerHTML;
var cardtype = document.getElementById("cardtypefield").innerHTML;
var patternid = document.getElementById("patternidfield").innerHTML; 

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

var deckprefix = deckname + "/";
var configprefix = deckprefix;
var cardconfigprefix = deckname + "/" + patternid + "/" + cardtype + "/";
InitConfig();

function InitConfig(cardscope) {
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

var bpmfield = document.getElementById("bpmfield");
var bpmvaluefield = document.getElementById("bpmvaluefield");
var scale = document.getElementById("scalenotesfield").innerHTML.trim().split(" ");
var pattern = document.getElementById("patternnotesfield").innerHTML.trim().split(" ");
var patternrepeatsfield = document.getElementById("patternrepeatsfield");
var patternrepeats = (patternrepeatsfield.innerHTML === "true") ? true : false;
console.log("Pattern repeats ", patternrepeats);
var patterncellsize = document.getElementById("patterncellsizefield").innerHTML;
if ((patterncellsize == "") || (patterncellsize == 0)) {
	patterncellsize = 1;
}
rhythmoverride = (patterncellsize > 1) ? (1, eval)("rhythm" + patterncellsize + "cell") : null;
console.log("Rhythm override", "rhythm" + patterncellsize + "cell = ", rhythmoverride);
ConfigPatternDuration(); 

var bpm = 10;
var beatsecs = 60/bpm;
SetBPM(startbpm);

var notesShown = false;


var scalestartindex = document.getElementById("scalestartindexfield").innerHTML;
if ((scalestartindex == "") || (scalestartindex == 0)) {
	scalestartindex = 0;
}
else {
	scalestartindex = scalestartindex - 1;
}

var scalenotes = {};
var patternnotes = {};

for (i=0; i < scale.length; i++) {
	scalenotes[i] = scale[i].split(":");
}

for (i=0; i < pattern.length; i++) {
	patternnotes[i] = pattern[i].split(":");
}

var patternsize = pattern.length;

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

var synthstarted = false; 
var audioplaying = false;
var timeout;
var ramploopcounter=-1;

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

		if ((patternscaledegree == 0) && ((patternrepeats) || (patternid == 0))) {
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

function ConfigPatternDuration() {
	console.log("Configuring pattern durations");
}
