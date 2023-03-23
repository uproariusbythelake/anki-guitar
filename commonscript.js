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
