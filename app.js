/* Imports */

/* Get DOM Elements */

const c1 = document.getElementById('c1');
const d = document.getElementById('d');
const e = document.getElementById('e');
const f = document.getElementById('f');
const g = document.getElementById('g');
const a = document.getElementById('a');
const b = document.getElementById('b');
const c2 = document.getElementById('c2');
const cSharp = document.getElementById('c#');
const dSharp = document.getElementById('d#');
const fSharp = document.getElementById('f#');
const gSharp = document.getElementById('g#');
const aSharp = document.getElementById('a#');

/* Events */

document.onkeydown = function (play) {
    const key = play.key;
    key === 'a'
        ? new Audio('./assets/C1.flac').play()
        : key === 'h'
        ? new Audio('./assets/A.flac').play()
        : key === 'e'
        ? new Audio('./assets/DSharp.flac').play()
        : key === 't'
        ? new Audio('./assets/FSharp.flac').play()
        : key;
};

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
