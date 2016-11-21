/*
* VPAID events that a VPAID ad can dispatch.
*/
const VPAIDEvent = {
	AdLoaded: "AdLoaded",
	AdStarted: "AdStarted",
	AdStopped: "AdStopped",
	AdLinearChange: "AdLinearChange",
	AdExpandedChange: "AdExpandedChange",
	AdRemainingTimeChange: "AdRemainingTimeChange",
	AdVolumeChange: "AdVolumeChange",
	AdImpression: "AdImpression",
	AdVideoStart: "AdVideoStart",
	AdVideoFirstQuartile: "AdVideoFirstQuartile",
    AdVideoMidpoint: "AdVideoMidpoint",
    AdVideoThirdQuartile: "AdVideoThirdQuartile",
    AdVideoComplete: "AdVideoComplete",
    AdClickThru: "AdClickThru",
    AdUserAcceptInvitation: "AdUserAcceptInvitation",
    AdUserMinimize: "AdUserMinimize",
    AdUserClose: "AdUserClose",
    AdPaused: "AdPaused",
    AdPlaying: "AdPlaying",
    AdLog: "AdLog",
    AdError: "AdError"
};

function ExampleVPAID(mouseEnabled){
	// timer for deciding when the ad should end
	this.timer;
	// the ad duration
	this.adDuration;
	// track how much time is left
	this.timeRemaining;
	// the width of the ad area
	this.initWidth;
	// the height of the ad area
	this.initHeight;
	// the view mode passed into initAd() or resizeAd()
	this.viewMode;
	// the fake ad used for this test
	this.fakeAd;
	// whether or not this ad is linear. default to false
	// change this if testing a linear ad
	this.isLinearAd = false;
	// VPAID version of this ad
	this.VPAID_VERSION = "2.0";
	// let the FakeAd handle mouse events
	this.mouseEnabled = false;
}	

/**
* VPAID function. Returns the VPAID object.
*/
ExampleVPAID.prototype.getVPAID = function(){
	return this;
}

/**
* VPAID function.
*/ 
ExampleVPAID.prototype.adLinear = function(){
 	return this.isLinearAd;
}

/**
* VPAID function.
*/
ExampleVPAID.prototype.adExpanded = function(){
	return false;
}

/**
* VPAID function. Returns the amount of time left in the ad
*/
ExampleVPAID.prototype.adRemainingTime = function(){
	return this.timeRemaining;
} 

/**
* VPAID function.
*/ 
ExampleVPAID.prototype.adVolume = function(){
	return -1;
}

/**
* VPAID FUNCTION
*/
ExampleVPAID.prototype.setAdVolume = function(value){

}

ExampleVPAID.prototype.handshakeVersion = function(playerVPAIDVersion){
	console.log("The player supports " + playerVPAIDVersion +
				" and the ad supports" +
				this.VPAID_VERSION
				);
	return this.VPAID_VERSION;
}

ExampleVPAID.prototype.initAd = function(width, height, viewMode, bitRate, creativeData, envVars){
	this.resizeAd(width, height, viewMode);
	this.loadAd();
}

ExampleVPAID.prototype.loadAd = function(){
	console.log("adLoaded");
	// dispatch a custom AdLoaded event
}

ExampleVPAID.prototype.startAd = function(){
	console.log("Beginning the display of the example VPAID ad");
	this.fakeAd = new FakeAd();
}

ExampleVPAID.prototype.stopAd = function(){
	console.log("Stopping the display of the VPAID ad");
}

ExampleVPAID.prototype.resizeAd = function(width, height, viewMode){
	console.log("Calling resizeAd with width=" + width + " height=" + height + " viewMode=" + viewMode);
	this.initWidth = width;
	this.initHeight = height;
	this.viewMode = viewMode;
}