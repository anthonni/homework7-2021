var video = document.querySelector("#player1");
//loads the video
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	document.querySelector("#volume").innerHTML = "100%";
});
//play the video
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
});

//pause the video
document.querySelector("#pause").addEventListener("click", function() {
	//console.log("Play Video");
	video.pause();
});

//each click will make the video play 5% slower
document.querySelector("#slower").addEventListener("click", function() {
	//console.log("Play Video");
	//video.pause();
	video.playbackRate = video.playbackRate * 0.95;
	console.log(video.playbackRate);
});

//speed up
document.querySelector("#faster").addEventListener("click", function() {
	//console.log("Play Video");
	//video.pause();
	video.playbackRate = video.playbackRate / 0.95;
	console.log(video.playbackRate);
});

//skip ahead
document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime += 15;
	if(video.currentTime >= video.duration){
		video.currentTime = 0;
		video.load();
		video.play();
	}
	console.log(video.currentTime);
});

//mute
document.querySelector("#mute").addEventListener("click", function() {
	//this means that the video is muted
	if(video.muted == true){
		video.muted = false;
		document.getElementById("mute").innerHTML = "Mute";
	}
	else{
		video.muted = true;
		document.getElementById("mute").innerHTML = "Unmute";
	}
});

//volume 
document.querySelector("#slider").addEventListener("change", function() {
	//console.log("Play Video");
	//video.pause();
	console.log("In slider");
	console.log(this.value);
	video.volume = this.value/100;
	document.querySelector("#volume").innerHTML = this.value + "%";
});

document.querySelector("#vintage").addEventListener("click",function(){
	video.classList.add("oldSchool");
});
document.querySelector("#orig").addEventListener("click",function(){
	video.classList.remove("oldSchool");
});
