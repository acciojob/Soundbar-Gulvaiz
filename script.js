//your JS code here. If required.
let buttons = document.querySelectorAll(".buttons")
let currentSound;

buttons.forEach(() => {
	  bttn.addEventListener("click", () => {
		  const sound = bttn.getAttribute("data-sound")
		  playSound(sound)
	  })
})

let stop = document.querySelector(".stop")

stop.addEventListener("click", stop())

function playSound(sound) {
	 stop()
	currentSound = new Audio(`${sound}.mp3`)
	currentSound.play()
}

function stop(sound){
   if(currentSound){
    currentSound.pause()
	currentSound.currentTime = 0
   }
}