// Select all buttons with class 'btn'
let buttons = document.querySelectorAll(".btn");
let currentSound;

// Add event listeners to each button
buttons.forEach(bttn => {
    bttn.addEventListener("click", () => {
        const sound = bttn.getAttribute("data-sound");
        playSound(sound);
    });
});

// Select the stop button
let stopButton = document.querySelector(".stop");

// Add event listener to the stop button
stopButton.addEventListener("click", stop);

// Function to play the sound
function playSound(sound) {
    stop(); // Stop any currently playing sound
    // Create a new audio object and play the sound
    currentSound = new Audio(`./sounds/${sound}.mp3`);
    currentSound.play();
}

// Function to stop the sound
function stop() {
    if (currentSound) {
        currentSound.pause();
        currentSound.currentTime = 0;
    }
}
