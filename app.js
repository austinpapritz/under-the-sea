/* Imports */

/* Get DOM Elements */

const c4 = document.getElementById('c4');
const d4 = document.getElementById('d4');
const e4 = document.getElementById('e4');
const f = document.getElementById('f');
const g = document.getElementById('g');
const a = document.getElementById('a');
const b = document.getElementById('b');
const c5 = document.getElementById('c5');

/* Events */

document.onkeydown = function (play) {
    const key = play.key;
    key === 'a'
        ? new Audio('./assets/C1.flac').play()
        : key === 'h'
        ? new Audio('./assets/A.flac').play()
        : key;
};

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
