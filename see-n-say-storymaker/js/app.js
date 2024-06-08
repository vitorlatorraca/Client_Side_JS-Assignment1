// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;

var textToSpeak = '';

var subjects = ["The dog", "A cat", "A robot", "An alien", "A wizard"];
var verbs = ["jumps", "runs", "flies", "eats", "sings"];
var adjectives = ["happy", "sad", "fast", "slow", "angry"];
var objects = ["a ball", "a sandwich", "a car", "a tree", "a book"];
var places = ["in the park", "at home", "on the moon", "under the sea", "in a castle"];

var subjectButton = document.getElementById('subjectButton');
var verbButton = document.getElementById('verbButton');
var adjectiveButton = document.getElementById('adjectiveButton');
var objectButton = document.getElementById('objectButton');
var placeButton = document.getElementById('placeButton');
var speakButton = document.getElementById('speakButton');
var randomStoryButton = document.getElementById('randomStoryButton');
var resetButton = document.getElementById('resetButton');

var story = document.getElementById('story');

/* Functions
-------------------------------------------------- */
function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function updateStory() {
    textToSpeak = `${getRandomElement(subjects)} ${getRandomElement(verbs)} ${getRandomElement(adjectives)} ${getRandomElement(objects)} ${getRandomElement(places)}.`;
    story.innerText = textToSpeak;
}

function speakNow(string) {
    var utterThis = new SpeechSynthesisUtterance(string);
    synth.speak(utterThis);
}

/* Event Listeners
-------------------------------------------------- */
subjectButton.onclick = function() {
    textToSpeak = getRandomElement(subjects);
    story.innerText = textToSpeak;
}

verbButton.onclick = function() {
    textToSpeak += ` ${getRandomElement(verbs)}`;
    story.innerText = textToSpeak;
}

adjectiveButton.onclick = function() {
    textToSpeak += ` ${getRandomElement(adjectives)}`;
    story.innerText = textToSpeak;
}

objectButton.onclick = function() {
    textToSpeak += ` ${getRandomElement(objects)}`;
    story.innerText = textToSpeak;
}

placeButton.onclick = function() {
    textToSpeak += ` ${getRandomElement(places)}.`;
    story.innerText = textToSpeak;
}

speakButton.onclick = function() {
    speakNow(textToSpeak);
}

randomStoryButton.onclick = function() {
    updateStory();
}

resetButton.onclick = function() {
    textToSpeak = '';
    story.innerText = '';
}
