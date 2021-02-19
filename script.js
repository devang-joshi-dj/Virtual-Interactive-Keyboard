// variables to store both, before-click and on-click background colors of buttons
const normLPinky = 'rgb(255, 160, 122)';
const lPinky = 'rgb(184, 83, 44)';

const normLRing = 'rgb(240, 128, 128)';
const lRing = 'rgb(180, 81, 81)';

const normLMiddle = 'rgb(119, 136, 153)';
const lMiddle = 'rgb(44, 88, 133)';

const normLIndex = 'rgb(135, 206, 250)';
const lIndex = 'rgb(49, 144, 204)';

const normRIndex = 'rgb(173, 216, 230)';
const rIndex = 'rgb(44, 119, 145)';

const normRMiddle = 'rgb(144, 238, 144)';
const rMiddle = 'rgb(60, 187, 60)';

const normRRing = 'rgb(255, 184, 194)';
const rRing = 'rgb(180, 70, 84)';

const normRPinky = 'rgb(255, 255, 155)';
const rPinky = 'rgb(192, 192, 52)';

const normCapslock = 'rgb(255, 222, 173)';
const capslock = 'rgb(194, 138, 54)';

const normSpaceAlt = 'rgb(32, 178, 170)';
const spaceAlt = 'rgb(9, 109, 104)';

const allAlphaUpper = () => {
    // function to convert all alphabets into uppercase
    document.querySelector('.q').innerHTML = 'Q';
    document.querySelector('.w').innerHTML = 'W';
    document.querySelector('.e').innerHTML = 'E';
    document.querySelector('.r').innerHTML = 'R';
    document.querySelector('.t').innerHTML = 'T';
    document.querySelector('.y').innerHTML = 'Y';
    document.querySelector('.u').innerHTML = 'U';
    document.querySelector('.i').innerHTML = 'I';
    document.querySelector('.o').innerHTML = 'O';
    document.querySelector('.p').innerHTML = 'P';
    document.querySelector('.a').innerHTML = 'A';
    document.querySelector('.s').innerHTML = 'S';
    document.querySelector('.d').innerHTML = 'D';
    document.querySelector('.f').innerHTML = 'F';
    document.querySelector('.g').innerHTML = 'G';
    document.querySelector('.h').innerHTML = 'H';
    document.querySelector('.j').innerHTML = 'J';
    document.querySelector('.k').innerHTML = 'K';
    document.querySelector('.l').innerHTML = 'L';
    document.querySelector('.z').innerHTML = 'Z';
    document.querySelector('.x').innerHTML = 'X';
    document.querySelector('.c').innerHTML = 'C';
    document.querySelector('.v').innerHTML = 'V';
    document.querySelector('.b').innerHTML = 'B';
    document.querySelector('.n').innerHTML = 'N';
    document.querySelector('.m').innerHTML = 'M';
}

const allAlphaLower = () => {
    // function to convert all alphabets into lowercase
    document.querySelector('.q').innerHTML = 'q';
    document.querySelector('.w').innerHTML = 'w';
    document.querySelector('.e').innerHTML = 'e';
    document.querySelector('.r').innerHTML = 'r';
    document.querySelector('.t').innerHTML = 't';
    document.querySelector('.y').innerHTML = 'y';
    document.querySelector('.u').innerHTML = 'u';
    document.querySelector('.i').innerHTML = 'i';
    document.querySelector('.o').innerHTML = 'o';
    document.querySelector('.p').innerHTML = 'p';
    document.querySelector('.a').innerHTML = 'a';
    document.querySelector('.s').innerHTML = 's';
    document.querySelector('.d').innerHTML = 'd';
    document.querySelector('.f').innerHTML = 'f';
    document.querySelector('.g').innerHTML = 'g';
    document.querySelector('.h').innerHTML = 'h';
    document.querySelector('.j').innerHTML = 'j';
    document.querySelector('.k').innerHTML = 'k';
    document.querySelector('.l').innerHTML = 'l';
    document.querySelector('.z').innerHTML = 'z';
    document.querySelector('.x').innerHTML = 'x';
    document.querySelector('.c').innerHTML = 'c';
    document.querySelector('.v').innerHTML = 'v';
    document.querySelector('.b').innerHTML = 'b';
    document.querySelector('.n').innerHTML = 'n';
    document.querySelector('.m').innerHTML = 'm';
}

const allShiftedSymbols = () => {
    // function which changes all the numericals and symbols to their shifted symbols
    document.querySelector('.blacktick').innerHTML = '~';
    document.querySelector('.one').innerHTML = '!';
    document.querySelector('.two').innerHTML = '@';
    document.querySelector('.three').innerHTML = '#';
    document.querySelector('.four').innerHTML = '$';
    document.querySelector('.five').innerHTML = '%';
    document.querySelector('.six').innerHTML = '^';
    document.querySelector('.seven').innerHTML = '&';
    document.querySelector('.eight').innerHTML = '*';
    document.querySelector('.nine').innerHTML = '(';
    document.querySelector('.zero').innerHTML = ')';
    document.querySelector('.minus').innerHTML = '_';
    document.querySelector('.equalsTo').innerHTML = '+';
    document.querySelector('.openedBracket').innerHTML = '{';
    document.querySelector('.closedBracket').innerHTML = '}';
    document.querySelector('.backSlash').innerHTML = '|';
    document.querySelector('.semicolon').innerHTML = ':';
    document.querySelector('.quote').innerHTML = '"';
    document.querySelector('.comma').innerHTML = '<';
    document.querySelector('.fullstop').innerHTML = '>';
    document.querySelector('.frontSlash').innerHTML = '?';
}

const allNonShiftedSymbols = () => {
    // function which changes all the numericals and symbols to their original numericals and symbols
    document.querySelector('.blacktick').innerHTML = '`';
    document.querySelector('.one').innerHTML = '1';
    document.querySelector('.two').innerHTML = '2';
    document.querySelector('.three').innerHTML = '3';
    document.querySelector('.four').innerHTML = '4';
    document.querySelector('.five').innerHTML = '5';
    document.querySelector('.six').innerHTML = '6';
    document.querySelector('.seven').innerHTML = '7';
    document.querySelector('.eight').innerHTML = '8';
    document.querySelector('.nine').innerHTML = '9';
    document.querySelector('.zero').innerHTML = '0';
    document.querySelector('.minus').innerHTML = '-';
    document.querySelector('.equalsTo').innerHTML = '=';
    document.querySelector('.openedBracket').innerHTML = '[';
    document.querySelector('.closedBracket').innerHTML = ']';
    document.querySelector('.backSlash').innerHTML = '\\';
    document.querySelector('.semicolon').innerHTML = ';';
    document.querySelector('.quote').innerHTML = "'";
    document.querySelector('.comma').innerHTML = ',';
    document.querySelector('.fullstop').innerHTML = '.';
    document.querySelector('.frontSlash').innerHTML = '/';
}

window.onload = () => {
    document.addEventListener('keyup', (event) => {
        //function mainly responsible for recognizing the first key press and fading out start message and then fading in the main keyboard
        const x = event.which || event.keyCode;
        if (typeof x == 'number') {
            document.querySelector('div.startMsg').classList.toggle('hideToggle');
            document.querySelector('div.keyboard').classList.toggle('showToggle');
            // $('div.startMsg').fadeOut('fast');
            // $('div.keyboard').fadeIn('slow');
        }
        document.getElementById('textArea').disabled = false; // enabling textarea after the first keyup event
        document.querySelector('#textArea').focus(); //textarea will be focused automatically when any key is pressed
    }, { once: true });

    document.querySelector('i.material-icons').addEventListener("click", () => {
        // function for copying contents in textArea
        const copyText = document.getElementById("textArea");
        copyText.select();
        copyText.setSelectionRange(0, 99999)
        document.execCommand('copy');
    });

    window.addEventListener('mouseup', () => {
        document.querySelector('#textArea').focus(); //textarea will be focused automatically when even when the focus is out textarea, so textarea will never lose focus because that is what is important
    });


    document.querySelector('#themeMode').addEventListener('click', () => {
        // function which will work accordingly checking if theme-mode button is on or off which will change the theme of whole application
        document.body.classList.toggle('bodyDark');
        document.querySelector('.bgKeyboard').classList.toggle('bgKeyboardDark');
        document.querySelector('.themeMode').classList.toggle('themeModeDark');
        document.querySelector('label').classList.toggle('labelDark');
        document.querySelector('.startMsg').classList.toggle('startMsgDark');
        document.querySelector('i.material-icons').classList.toggle('material-icons-dark');
        document.querySelector('#textArea').classList.toggle('textAreaDark');
    });
}

// variable to keep checking if capslock on or off and if it is either of them then certain capslocked or non-capslocked keys will be shown on the window
let isCapslockOn;
document.addEventListener('keydown', (e) => {
    // function to check over alphabets when capslock is either on or off
    if (e.getModifierState('CapsLock')) {
        isCapslockOn = true;
        document.querySelector('div.capslock').style.color = 'rgb(120, 120, 25)'; // CAPSLOCK text color
        allAlphaUpper();
        if (e.getModifierState('Shift')) {
            allAlphaLower();
        }
    } else {
        isCapslockOn = false;
        document.querySelector('div.capslock').style.color = 'black'; // CAPSLOCK text color
        allAlphaLower();
        if (e.getModifierState('Shift')) {
            allAlphaUpper();
        }
    }
});

document.addEventListener('keydown', (event) => {
    // Events which will happen if a specific key is pressed Up
    // Events refers to highlight of specific key when that specific key is pressed on keyboard
    const e = event.which;
    switch (e) {
        case 192:
            document.querySelector('div.blacktick').style.backgroundColor = lPinky;
            break;
        case 49:
            document.querySelector('div.one').style.backgroundColor = lPinky;
            break;
        case 50:
            document.querySelector('div.two').style.backgroundColor = lRing;
            break;
        case 51:
            document.querySelector('div.three').style.backgroundColor = lMiddle;
            break;
        case 52:
            document.querySelector('div.four').style.backgroundColor = lIndex;
            break;
        case 53:
            document.querySelector('div.five').style.backgroundColor = lIndex;
            break;
        case 54:
            document.querySelector('div.six').style.backgroundColor = rIndex;
            break;
        case 55:
            document.querySelector('div.seven').style.backgroundColor = rIndex;
            break;
        case 56:
            document.querySelector('div.eight').style.backgroundColor = rMiddle;
            break;
        case 57:
            document.querySelector('div.nine').style.backgroundColor = rRing;
            break;
        case 48:
            document.querySelector('div.zero').style.backgroundColor = rPinky;
            break;
        case 189 || 173:
            document.querySelector('div.minus').style.backgroundColor = rPinky;
            break;
        case 187 || 61:
            document.querySelector('div.equalsTo').style.backgroundColor = rPinky;
            break;
        case 8:
            document.querySelector('div.backspace').style.backgroundColor = rPinky;
            break;
        case 9:
            event.preventDefault();
            document.getElementById('textArea').value += '    ';
            document.querySelector('div.tab').style.backgroundColor = lPinky;
            break;
        case 81:
            document.querySelector('div.q').style.backgroundColor = lPinky;
            break;
        case 87:
            document.querySelector('div.w').style.backgroundColor = lRing;
            break;
        case 69:
            document.querySelector('div.e').style.backgroundColor = lMiddle;
            break;
        case 82:
            document.querySelector('div.r').style.backgroundColor = lIndex;
            break;
        case 84:
            document.querySelector('div.t').style.backgroundColor = lIndex;
            break;
        case 89:
            document.querySelector('div.y').style.backgroundColor = rIndex;
            break;
        case 85:
            document.querySelector('div.u').style.backgroundColor = rIndex;
            break;
        case 73:
            document.querySelector('div.i').style.backgroundColor = rMiddle;
            break;
        case 79:
            document.querySelector('div.o').style.backgroundColor = rRing;
            break;
        case 80:
            document.querySelector('div.p').style.backgroundColor = rPinky;
            break;
        case 219:
            document.querySelector('div.openedBracket').style.backgroundColor = rPinky;
            break;
        case 221:
            document.querySelector('div.closedBracket').style.backgroundColor = rPinky;
            break;
        case 220:
            document.querySelector('div.backSlash').style.backgroundColor = rPinky;
            break;
        case 20:
            document.querySelector('div.capslock').style.backgroundColor = capslock;
            break;
        case 65:
            document.querySelector('div.a').style.backgroundColor = lPinky;
            break;
        case 83:
            document.querySelector('div.s').style.backgroundColor = lRing;
            break;
        case 68:
            document.querySelector('div.d').style.backgroundColor = lMiddle;
            break;
        case 70:
            document.querySelector('div.f').style.backgroundColor = lIndex;
            break;
        case 71:
            document.querySelector('div.g').style.backgroundColor = lIndex;
            break;
        case 72:
            document.querySelector('div.h').style.backgroundColor = rIndex;
            break;
        case 74:
            document.querySelector('div.j').style.backgroundColor = rIndex;
            break;
        case 75:
            document.querySelector('div.k').style.backgroundColor = rMiddle;
            break;
        case 76:
            document.querySelector('div.l').style.backgroundColor = rRing;
            break;
        case 186:
            document.querySelector('div.semicolon').style.backgroundColor = rPinky;
            break;
        case 222:
            document.querySelector('div.quote').style.backgroundColor = rPinky;
            break;
        case 13:
            document.querySelector('div.enter').style.backgroundColor = rPinky;
            break;
        case 16:
            document.querySelector('div.lShift').style.backgroundColor = lPinky;
            document.querySelector('div.rShift').style.backgroundColor = rPinky;
            allShiftedSymbols();
            isCapslockOn ? allAlphaLower() : allAlphaUpper();
            break;
        case 90:
            document.querySelector('div.z').style.backgroundColor = lPinky;
            break;
        case 88:
            document.querySelector('div.x').style.backgroundColor = lRing;
            break;
        case 67:
            document.querySelector('div.c').style.backgroundColor = lMiddle;
            break;
        case 86:
            document.querySelector('div.v').style.backgroundColor = lIndex;
            break;
        case 66:
            document.querySelector('div.b').style.backgroundColor = lIndex;
            break;
        case 78:
            document.querySelector('div.n').style.backgroundColor = rIndex;
            break;
        case 77:
            document.querySelector('div.m').style.backgroundColor = rIndex;
            break;
        case 188:
            document.querySelector('div.comma').style.backgroundColor = rMiddle;
            break;
        case 190:
            document.querySelector('div.fullstop').style.backgroundColor = rRing;
            break;
        case 191:
            document.querySelector('div.frontSlash').style.backgroundColor = rPinky;
            break;
        case 17:
            document.querySelector('div.lCtrl').style.backgroundColor = lPinky;
            document.querySelector('div.rCtrl').style.backgroundColor = rPinky;
            break;
        case 91:
            document.querySelector('div.win').style.backgroundColor = lPinky;
            break;
        case 18:
            event.preventDefault();
            document.querySelector('div.lAlt').style.backgroundColor = spaceAlt;
            document.querySelector('div.rAlt').style.backgroundColor = spaceAlt;
            break;
        case 32:
            document.querySelector('div.space').style.backgroundColor = spaceAlt;
            break;
        default:
            break;
    }
});

document.addEventListener('keyup', (event) => {
    // Events which will happen if a specific key is pressed Up
    // Events refers to de-emphasize/normal-state of specific key when that specific key is pressed up on keyboard
    const e = event.which;
    switch (e) {
        case 192:
            document.querySelector('div.blacktick').style.backgroundColor = normLPinky;
            break;
        case 49:
            document.querySelector('div.one').style.backgroundColor = normLPinky;
            break;
        case 50:
            document.querySelector('div.two').style.backgroundColor = normLRing;
            break;
        case 51:
            document.querySelector('div.three').style.backgroundColor = normLMiddle;
            break;
        case 52:
            document.querySelector('div.four').style.backgroundColor = normLIndex;
            break;
        case 53:
            document.querySelector('div.five').style.backgroundColor = normLIndex;
            break;
        case 54:
            document.querySelector('div.six').style.backgroundColor = normRIndex;
            break;
        case 55:
            document.querySelector('div.seven').style.backgroundColor = normRIndex;
            break;
        case 56:
            document.querySelector('div.eight').style.backgroundColor = normRMiddle;
            break;
        case 57:
            document.querySelector('div.nine').style.backgroundColor = normRRing;
            break;
        case 48:
            document.querySelector('div.zero').style.backgroundColor = normRPinky;
            break;
        case 189 || 173:
            document.querySelector('div.minus').style.backgroundColor = normRPinky;
            break;
        case 187 || 61:
            document.querySelector('div.equalsTo').style.backgroundColor = normRPinky;
            break;
        case 8:
            document.querySelector('div.backspace').style.backgroundColor = normRPinky;
            break;
        case 9:
            document.querySelector('div.tab').style.backgroundColor = normLPinky;
            break;
        case 81:
            document.querySelector('div.q').style.backgroundColor = normLPinky;
            break;
        case 87:
            document.querySelector('div.w').style.backgroundColor = normLRing;
            break;
        case 69:
            document.querySelector('div.e').style.backgroundColor = normLMiddle;
            break;
        case 82:
            document.querySelector('div.r').style.backgroundColor = normLIndex;
            break;
        case 84:
            document.querySelector('div.t').style.backgroundColor = normLIndex;
            break;
        case 89:
            document.querySelector('div.y').style.backgroundColor = normRIndex;
            break;
        case 85:
            document.querySelector('div.u').style.backgroundColor = normRIndex;
            break;
        case 73:
            document.querySelector('div.i').style.backgroundColor = normRMiddle;
            break;
        case 79:
            document.querySelector('div.o').style.backgroundColor = normRRing;
            break;
        case 80:
            document.querySelector('div.p').style.backgroundColor = normRPinky;
            break;
        case 219:
            document.querySelector('div.openedBracket').style.backgroundColor = normRPinky;
            break;
        case 221:
            document.querySelector('div.closedBracket').style.backgroundColor = normRPinky;
            break;
        case 220:
            document.querySelector('div.backSlash').style.backgroundColor = normRPinky;
            break;
        case 20:
            document.querySelector('div.capslock').style.backgroundColor = normCapslock;
            break;
        case 65:
            document.querySelector('div.a').style.backgroundColor = normLPinky;
            break;
        case 83:
            document.querySelector('div.s').style.backgroundColor = normLRing;
            break;
        case 68:
            document.querySelector('div.d').style.backgroundColor = normLMiddle;
            break;
        case 70:
            document.querySelector('div.f').style.backgroundColor = normLIndex;
            break;
        case 71:
            document.querySelector('div.g').style.backgroundColor = normLIndex;
            break;
        case 72:
            document.querySelector('div.h').style.backgroundColor = normRIndex;
            break;
        case 74:
            document.querySelector('div.j').style.backgroundColor = normRIndex;
            break;
        case 75:
            document.querySelector('div.k').style.backgroundColor = normRMiddle;
            break;
        case 76:
            document.querySelector('div.l').style.backgroundColor = normRRing;
            break;
        case 186:
            document.querySelector('div.semicolon').style.backgroundColor = normRPinky;
            break;
        case 222:
            document.querySelector('div.quote').style.backgroundColor = normRPinky;
            break;
        case 13:
            document.querySelector('div.enter').style.backgroundColor = normRPinky;
            break;
        case 16:
            document.querySelector('div.lShift').style.backgroundColor = normLPinky;
            document.querySelector('div.rShift').style.backgroundColor = normRPinky;
            allNonShiftedSymbols();
            isCapslockOn ? allAlphaUpper() : allAlphaLower();
            break;
        case 90:
            document.querySelector('div.z').style.backgroundColor = normLPinky;
            break;
        case 88:
            document.querySelector('div.x').style.backgroundColor = normLRing;
            break;
        case 67:
            document.querySelector('div.c').style.backgroundColor = normLMiddle;
            break;
        case 86:
            document.querySelector('div.v').style.backgroundColor = normLIndex;
            break;
        case 66:
            document.querySelector('div.b').style.backgroundColor = normLIndex;
            break;
        case 78:
            document.querySelector('div.n').style.backgroundColor = normRIndex;
            break;
        case 77:
            document.querySelector('div.m').style.backgroundColor = normRIndex;
            break;
        case 188:
            document.querySelector('div.comma').style.backgroundColor = normRMiddle;
            break;
        case 190:
            document.querySelector('div.fullstop').style.backgroundColor = normRRing;
            break;
        case 191:
            document.querySelector('div.frontSlash').style.backgroundColor = normRPinky;
            break;
        case 17:
            document.querySelector('div.lCtrl').style.backgroundColor = normLPinky;
            document.querySelector('div.rCtrl').style.backgroundColor = normRPinky;
            break;
        case 91:
            document.querySelector('div.win').style.backgroundColor = normLPinky;
            break;
        case 18:
            document.querySelector('div.lAlt').style.backgroundColor = normSpaceAlt;
            document.querySelector('div.rAlt').style.backgroundColor = normSpaceAlt;
            break;
        case 32:
            document.querySelector('div.space').style.backgroundColor = normSpaceAlt;
            break;
        default:
            break;
    }
});

window.addEventListener('blur', () => {
    // function to bring all keys to their normal color in the case when window's focus is lost due to any case and if any key is prevented from keydown at that moment when focus was lost, so this function can resolve the problem and won't let happen that mess in frontend
    document.querySelector('div.blacktick').style.backgroundColor = normLPinky;
    document.querySelector('div.one').style.backgroundColor = normLPinky;
    document.querySelector('div.two').style.backgroundColor = normLRing;
    document.querySelector('div.three').style.backgroundColor = normLMiddle;
    document.querySelector('div.four').style.backgroundColor = normLIndex;
    document.querySelector('div.five').style.backgroundColor = normLIndex;
    document.querySelector('div.six').style.backgroundColor = normRIndex;
    document.querySelector('div.seven').style.backgroundColor = normRIndex;
    document.querySelector('div.eight').style.backgroundColor = normRMiddle;
    document.querySelector('div.nine').style.backgroundColor = normRRing;
    document.querySelector('div.zero').style.backgroundColor = normRPinky;
    document.querySelector('div.minus').style.backgroundColor = normRPinky;
    document.querySelector('div.equalsTo').style.backgroundColor = normRPinky;
    document.querySelector('div.backspace').style.backgroundColor = normRPinky;
    document.querySelector('div.tab').style.backgroundColor = normLPinky;
    document.querySelector('div.q').style.backgroundColor = normLPinky;
    document.querySelector('div.w').style.backgroundColor = normLRing;
    document.querySelector('div.e').style.backgroundColor = normLMiddle;
    document.querySelector('div.r').style.backgroundColor = normLIndex;
    document.querySelector('div.t').style.backgroundColor = normLIndex;
    document.querySelector('div.y').style.backgroundColor = normRIndex;
    document.querySelector('div.u').style.backgroundColor = normRIndex;
    document.querySelector('div.i').style.backgroundColor = normRMiddle;
    document.querySelector('div.o').style.backgroundColor = normRRing;
    document.querySelector('div.p').style.backgroundColor = normRPinky;
    document.querySelector('div.openedBracket').style.backgroundColor = normRPinky;
    document.querySelector('div.closedBracket').style.backgroundColor = normRPinky;
    document.querySelector('div.backSlash').style.backgroundColor = normRPinky;
    document.querySelector('div.capslock').style.backgroundColor = normCapslock;
    document.querySelector('div.a').style.backgroundColor = normLPinky;
    document.querySelector('div.s').style.backgroundColor = normLRing;
    document.querySelector('div.d').style.backgroundColor = normLMiddle;
    document.querySelector('div.f').style.backgroundColor = normLIndex;
    document.querySelector('div.g').style.backgroundColor = normLIndex;
    document.querySelector('div.h').style.backgroundColor = normRIndex;
    document.querySelector('div.j').style.backgroundColor = normRIndex;
    document.querySelector('div.k').style.backgroundColor = normRMiddle;
    document.querySelector('div.l').style.backgroundColor = normRRing;
    document.querySelector('div.semicolon').style.backgroundColor = normRPinky;
    document.querySelector('div.quote').style.backgroundColor = normRPinky;
    document.querySelector('div.enter').style.backgroundColor = normRPinky;
    document.querySelector('div.lShift').style.backgroundColor = normLPinky;
    document.querySelector('div.rShift').style.backgroundColor = normRPinky;
    document.querySelector('div.z').style.backgroundColor = normLPinky;
    document.querySelector('div.x').style.backgroundColor = normLRing;
    document.querySelector('div.c').style.backgroundColor = normLMiddle;
    document.querySelector('div.v').style.backgroundColor = normLIndex;
    document.querySelector('div.b').style.backgroundColor = normLIndex;
    document.querySelector('div.n').style.backgroundColor = normRIndex;
    document.querySelector('div.m').style.backgroundColor = normRIndex;
    document.querySelector('div.comma').style.backgroundColor = normRMiddle;
    document.querySelector('div.fullstop').style.backgroundColor = normRRing;
    document.querySelector('div.frontSlash').style.backgroundColor = normRPinky;
    document.querySelector('div.lCtrl').style.backgroundColor = normLPinky;
    document.querySelector('div.rCtrl').style.backgroundColor = normRPinky;
    document.querySelector('div.win').style.backgroundColor = normLPinky;
    document.querySelector('div.lAlt').style.backgroundColor = normSpaceAlt;
    document.querySelector('div.rAlt').style.backgroundColor = normSpaceAlt;
    document.querySelector('div.space').style.backgroundColor = normSpaceAlt;
});
