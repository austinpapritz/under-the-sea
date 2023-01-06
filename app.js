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
const f5 = document.getElementById('f5');

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
const bClaw = document.getElementById('[-claw');

const ghost = document.getElementById('ghost-note-container');

/* Events */

document.onkeydown = function (play) {
    const key = play.key;
    key === 'q'
        ? new Audio('./assets/notes/q.mp3').play() && qClaw.classList.add('l-claw')
        : key === 'w'
        ? new Audio('./assets/notes/w.mp3').play() && wClaw.classList.add('l-claw')
        : key === 'e'
        ? new Audio('./assets/notes/e.mp3').play() && eClaw.classList.add('l-claw')
        : key === 'r'
        ? new Audio('./assets/notes/r.mp3').play() && rClaw.classList.add('l-claw')
        : key === 't'
        ? new Audio('./assets/notes/t.mp3').play() && tClaw.classList.add('l-claw')
        : key === 'y'
        ? new Audio('./assets/notes/y.mp3').play() && yClaw.classList.add('r-claw')
        : key === 'u'
        ? new Audio('./assets/notes/u.mp3').play() && uClaw.classList.add('r-claw')
        : key === 'i'
        ? new Audio('./assets/notes/i.mp3').play() && iClaw.classList.add('r-claw')
        : key === 'o'
        ? new Audio('./assets/notes/o.mp3').play() && oClaw.classList.add('r-claw')
        : key === 'p'
        ? new Audio('./assets/notes/p.mp3').play() && pClaw.classList.add('r-claw')
        : key === '['
        ? new Audio('./assets/notes/[.mp3').play() && bClaw.classList.add('r-claw')
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
        ? yClaw.classList.remove('r-claw')
        : key === 'u'
        ? uClaw.classList.remove('r-claw')
        : key === 'i'
        ? iClaw.classList.remove('r-claw')
        : key === 'o'
        ? oClaw.classList.remove('r-claw')
        : key === 'p'
        ? pClaw.classList.remove('r-claw')
        : key === '['
        ? bClaw.classList.remove('r-claw')
        : key;
};

//some sort of event listener for 's' key
//target the keyframe 'to' 'background-position-y' value to change to -4081px

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
document.addEventListener('keydown', (e) => {
    if (e.code === 'KeyS') {
        ghost.style.animation = 'move 30s forwards linear';
        setTimeout(function () {
            ghost.style.animation = '';
        }, 27500);
    }
});
