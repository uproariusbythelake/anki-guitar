function ConfigPatternDuration() {
	console.log("Configuring pattern durations");
	rhythmoverride = (patterncellsize > 1) ? (1, eval)("rhythm" + patterncellsize + "cell") : null;
	console.log("Rhythm override", "rhythm" + patterncellsize + "cell = ", rhythmoverride);
}
