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
const d5 = document.getElementById('d5');
const e5 = document.getElementById('e5');

const qClaw = document.getElementById('q-claw');
const wClaw = document.getElementById('w-claw');
const eClaw = document.getElementById('e-claw');
const rClaw = document.getElementById('r-claw');
const tClaw = document.getElementById('t-claw');
const yClaw = document.getElementById('y-claw');
const uClaw = document.getElementById('u-claw');
const iClaw = document.getElementById('i-claw');
const oClaw = document.getElementById('o-claw');
const pClaw = document.getElementById('p-claw');

/* Events */

document.onkeydown = function (play) {
    const key = play.key;
    key === 'q'
        ? new Audio('./assets/C1.flac').play() && qClaw.classList.add('l-claw')
        : key === 'w'
        ? new Audio('./assets/A.flac').play() && wClaw.classList.add('l-claw')
        : key === 'e'
        ? new Audio('./assets/A.flac').play() && eClaw.classList.add('l-claw')
        : key === 'r'
        ? new Audio('./assets/A.flac').play() && rClaw.classList.add('l-claw')
        : key === 't'
        ? new Audio('./assets/A.flac').play() && tClaw.classList.add('l-claw')
        : key === 'y'
        ? new Audio('./assets/A.flac').play() && yClaw.classList.add('l-claw')
        : key === 'u'
        ? new Audio('./assets/A.flac').play() && uClaw.classList.add('l-claw')
        : key === 'i'
        ? new Audio('./assets/A.flac').play() && iClaw.classList.add('l-claw')
        : key === 'o'
        ? new Audio('./assets/A.flac').play() && oClaw.classList.add('l-claw')
        : key === 'p'
        ? new Audio('./assets/A.flac').play() && pClaw.classList.add('l-claw')
        : key;
};

document.onkeyup = function (play) {
    const key = play.key;
    key === 'q'
        ? qClaw.classList.remove('l-claw')
        : key === 'w'
        ? wClaw.classList.remove('l-claw')
        : key === 'e'
        ? eClaw.classList.remove('l-claw')
        : key === 'r'
        ? rClaw.classList.remove('l-claw')
        : key === 't'
        ? tClaw.classList.remove('l-claw')
        : key === 'y'
        ? yClaw.classList.remove('l-claw')
        : key === 'u'
        ? uClaw.classList.remove('l-claw')
        : key === 'i'
        ? iClaw.classList.remove('l-claw')
        : key === 'o'
        ? oClaw.classList.remove('l-claw')
        : key === 'p'
        ? pClaw.classList.remove('l-claw')
        : key;
};

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
