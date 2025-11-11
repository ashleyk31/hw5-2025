var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video=this.document.querySelector("#player1");
	console.log(video);
	video.autoplay=false;
	console.log("auto play is set to "+video.autoplay);
	console.log(video);
	video.loop=false;
	console.log("auto play is set to "+video.loop);
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video=document.querySelector("#player1");
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video=document.querySelector("#player1")
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down Video");
	video=document.querySelector("#player1")
	video.playbackRate *= 0.9;
	console.log("new speed: " + video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up Video");
	video=document.querySelector("#player1")
	video.playbackRate /= 0.9;
	console.log("new speed: " + video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead Video");
	video=document.querySelector("#player1")
	video.currentTime += 10;
	console.log("Video current time is: " + video.currentTime)
});

document.querySelector("#mute").addEventListener("click", function() {
	video=document.querySelector("#player1")
	if (video.muted) {
        video.muted = false;
        this.textContent = "Mute";
        console.log("Video unmuted");
    } else {
        video.muted = true;
        this.textContent = "Unmute";
        console.log("Video muted");
    }
});

document.querySelector("#slider").addEventListener("input", function() {
	volume = document.querySelector("volume")
	let volumeValue = this.value / 100;
	video.volume = volumeValue;
	document.querySelector("#volume").textContent = (volumeValue * 100) + "%";
	console.log(document.querySelector("#volume"))

	console.log("The current value is " + video.volume)
});


document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Old School Version of the Video");
	video=document.querySelector("#player1")
	video.classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original Version of the Video");
	video=document.querySelector("#player1")
	video.classList.remove("oldSchool")
});
