// Update title element based on api.title
const title = document.getElementById('title');
title.innerText = api.title;

// Buttons
const playBtn = document.getElementById('play-button');
const quitBtn = document.getElementById('quit-button');

// Bind button to function
playBtn.onclick = OnPlay;
quitBtn.onclick = OnQuit;

// For Play Button Events
async function OnPlay(){
    window.location.href = "../game-screen/index.html"
}

// For Quit Button Events
async function OnQuit(){}