// creates a canvas ad
function FakeAd(){
	var c = document.createElement("canvas");
	// works in iframe. Might need to provide a slot otherwise.
	document.body.appendChild(c);
	var ctx = c.getContext("2d");
	ctx.font = "30px Helvetica";
	ctx.fillText("I'm a VPAID ad",10,50);
}