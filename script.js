// variables to store both, before-click and on-click background colors of buttons
var normLPinky = { 'background-color': 'rgb(255, 160, 122)' };
var lPinky = { 'background-color': 'rgb(184, 83, 44)' };

var normLRing = { 'background-color': 'rgb(240, 128, 128)' };
var lRing = { 'background-color': 'rgb(180, 81, 81)' };

var normLMiddle = { 'background-color': 'rgb(119, 136, 153)' };
var lMiddle = { 'background-color': 'rgb(44, 88, 133)' };

var normLIndex = { 'background-color': 'rgb(135, 206, 250)' };
var lIndex = { 'background-color': 'rgb(49, 144, 204)' };

var normRIndex = { 'background-color': 'rgb(173, 216, 230)' };
var rIndex = { 'background-color': 'rgb(44, 119, 145)' };

var normRMiddle = { 'background-color': 'rgb(144, 238, 144)' };
var rMiddle = { 'background-color': 'rgb(60, 187, 60)' };

var normRRing = { 'background-color': 'rgb(255, 184, 194)' };
var rRing = { 'background-color': 'rgb(180, 70, 84)' };

var normRPinky = { 'background-color': 'rgb(255, 255, 155)' };
var rPinky = { 'background-color': 'rgb(192, 192, 52)' };

var normCapslock = { 'background-color': 'rgb(255, 222, 173)' };
var capslock = { 'background-color': 'rgb(194, 138, 54)' };

var normSpaceAlt = { 'background-color': 'rgb(32, 178, 170)' };
var spaceAlt = { 'background-color': 'rgb(9, 109, 104)' };

function allAlphaUpper() { // function to convert all alphabets into uppercase
    $(".q").text("Q");
    $(".w").text("W");
    $(".e").text("E");
    $(".r").text("R");
    $(".t").text("T");
    $(".y").text("Y");
    $(".u").text("U");
    $(".i").text("I");
    $(".o").text("O");
    $(".p").text("P");
    $(".a").text("A");
    $(".s").text("S");
    $(".d").text("D");
    $(".f").text("F");
    $(".g").text("G");
    $(".h").text("H");
    $(".j").text("J");
    $(".k").text("K");
    $(".l").text("L");
    $(".z").text("Z");
    $(".x").text("X");
    $(".c").text("C");
    $(".v").text("V");
    $(".b").text("B");
    $(".n").text("N");
    $(".m").text("M");
}

function allAlphaLower() { // function to convert all alphabets into lowercase
    $(".q").text("q");
    $(".w").text("w");
    $(".e").text("e");
    $(".r").text("r");
    $(".t").text("t");
    $(".y").text("y");
    $(".u").text("u");
    $(".i").text("i");
    $(".o").text("o");
    $(".p").text("p");
    $(".a").text("a");
    $(".s").text("s");
    $(".d").text("d");
    $(".f").text("f");
    $(".g").text("g");
    $(".h").text("h");
    $(".j").text("j");
    $(".k").text("k");
    $(".l").text("l");
    $(".z").text("z");
    $(".x").text("x");
    $(".c").text("c");
    $(".v").text("v");
    $(".b").text("b");
    $(".n").text("n");
    $(".m").text("m");
}

function allShiftedSymbols() { // function which changes all the numericals and symbols to their shifted symbols
    $(".blacktick").text("~");
    $(".one").text("!");
    $(".two").text("@");
    $(".three").text("#");
    $(".four").text("$");
    $(".five").text("%");
    $(".six").text("^");
    $(".seven").text("&");
    $(".eight").text("*");
    $(".nine").text("(");
    $(".zero").text(")");
    $(".minus").text("_");
    $(".equalsTo").text("+");
    $(".openedBracket").text("{");
    $(".closedBracket").text("}");
    $(".backSlash").text("|");
    $(".semicolon").text(":");
    $(".quote").text('"');
    $(".comma").text("<");
    $(".fullstop").text(">");
    $(".frontSlash").text("?");
}

function allNonShiftedSymbols() { // function which changes all the numericals and symbols to their original numericals and symbols
    $(".blacktick").text("`");
    $(".one").text("1");
    $(".two").text("2");
    $(".three").text("3");
    $(".four").text("4");
    $(".five").text("5");
    $(".six").text("6");
    $(".seven").text("7");
    $(".eight").text("8");
    $(".nine").text("9");
    $(".zero").text("0");
    $(".minus").text("-");
    $(".equalsTo").text("=");
    $(".openedBracket").text("[");
    $(".closedBracket").text("]");
    $(".backSlash").text("\\");
    $(".semicolon").text(";");
    $(".quote").text("'");
    $(".comma").text(",");
    $(".fullstop").text(".");
    $(".frontSlash").text("/");
}

function keyUp(event) { //function mainly responsible for recognizing the first key press and fading out start message and then fading in the main keyboard
    var x = event.which || event.keyCode;
    if (typeof x == "number") {
        $("div.startMsg").fadeOut("fast");
        $("div.keyboard").fadeIn("slow");
    }
}

// checking if capslock on or off and if it is either of them then certain capslocked or non-capslocked keys will be shown on the window
var isCapslockOn;
document.addEventListener("keydown", (e) => {
    if (e.getModifierState("CapsLock")) {
        isCapslockOn = true;
        $("div.capslock").css("color", "rgb(120, 120, 25)"); // CAPSLOCK text color
        allAlphaUpper();
        if (e.getModifierState("Shift")) {
            allAlphaLower();
        }
    } else {
        isCapslockOn = false;
        $("div.capslock").css("color", "black");
        allAlphaLower();
        if (e.getModifierState("Shift")) {
            allAlphaUpper();
        }
    }
})

// Events which will happen if a specific key is pressed Up
// Events refers to highlight of specific key when that specific key is pressed on keyboard
$(document).on('keydown', function(event) {
    e = event.which;
    if (e == 192) {
        $("div.blacktick").css(lPinky);
    } else
    if (e == 49) {
        $("div.one").css(lPinky);
    } else
    if (e == 50) {
        $("div.two").css(lRing);
    } else
    if (e == 51) {
        $("div.three").css(lMiddle);
    } else
    if (e == 52) {
        $("div.four").css(lIndex);
    } else
    if (e == 53) {
        $("div.five").css(lIndex);
    } else
    if (e == 54) {
        $("div.six").css(rIndex);
    } else
    if (e == 55) {
        $("div.seven").css(rIndex);
    } else
    if (e == 56) {
        $("div.eight").css(rMiddle);
    } else
    if (e == 57) {
        $("div.nine").css(rRing);
    } else
    if (e == 48) {
        $("div.zero").css(rPinky);
    } else
    if (e == 189 || e == 173) {
        $("div.minus").css(rPinky);
    } else
    if (e == 187 || e == 61) {
        $("div.equalsTo").css(rPinky);
    } else
    if (e == 8) {
        $("div.backspace").css(rPinky);
    } else
    if (e == 9) {
        $("div.tab").css(lPinky);
    } else
    if (e == 81) {
        $("div.q").css(lPinky);
    } else
    if (e == 87) {
        $("div.w").css(lRing);
    } else
    if (e == 69) {
        $("div.e").css(lMiddle);
    } else
    if (e == 82) {
        $("div.r").css(lIndex);
    } else
    if (e == 84) {
        $("div.t").css(lIndex);
    } else
    if (e == 89) {
        $("div.y").css(rIndex);
    } else
    if (e == 85) {
        $("div.u").css(rIndex);
    } else
    if (e == 73) {
        $("div.i").css(rMiddle);
    } else
    if (e == 79) {
        $("div.o").css(rRing);
    } else
    if (e == 80) {
        $("div.p").css(rPinky);
    } else
    if (e == 219) {
        $("div.openedBracket").css(rPinky);
    } else
    if (e == 221) {
        $("div.closedBracket").css(rPinky);
    } else
    if (e == 220) {
        $("div.backSlash").css(rPinky);
    } else
    if (e == 20) {
        $("div.capslock").css(capslock);
    } else
    if (e == 65) {
        $("div.a").css(lPinky);
    } else
    if (e == 83) {
        $("div.s").css(lRing);
    } else
    if (e == 68) {
        $("div.d").css(lMiddle);
    } else
    if (e == 70) {
        $("div.f").css(lIndex);
    } else
    if (e == 71) {
        $("div.g").css(lIndex);
    } else
    if (e == 72) {
        $("div.h").css(rIndex);
    } else
    if (e == 74) {
        $("div.j").css(rIndex);
    } else
    if (e == 75) {
        $("div.k").css(rMiddle);
    } else
    if (e == 76) {
        $("div.l").css(rRing);
    } else
    if (e == 186) {
        $("div.semicolon").css(rPinky);
    } else
    if (e == 222) {
        $("div.quote").css(rPinky);
    } else
    if (e == 13) {
        $("div.enter").css(rPinky);
    } else
    if (e == 16) {
        $("div.lShift").css(lPinky);
        $("div.rShift").css(rPinky);
        allShiftedSymbols();
        if (isCapslockOn == true) {
            allAlphaLower();
        } else {
            allAlphaUpper();
        }
    } else
    if (e == 90) {
        $("div.z").css(lPinky);
    } else
    if (e == 88) {
        $("div.x").css(lRing);
    } else
    if (e == 67) {
        $("div.c").css(lMiddle);
    } else
    if (e == 86) {
        $("div.v").css(lIndex);
    } else
    if (e == 66) {
        $("div.b").css(lIndex);
    } else
    if (e == 78) {
        $("div.n").css(rIndex);
    } else
    if (e == 77) {
        $("div.m").css(rIndex);
    } else
    if (e == 188) {
        $("div.comma").css(rMiddle);
    } else
    if (e == 190) {
        $("div.fullstop").css(rRing);
    } else
    if (e == 191) {
        $("div.frontSlash").css(rPinky);
    } else
    if (e == 17) {
        $("div.lCtrl").css(lPinky);
        $("div.rCtrl").css(rPinky);
    } else
    if (e == 91) {
        $("div.win").css(lPinky);
    } else
    if (e == 18) {
        $("div.lAlt").css(spaceAlt);
        $("div.rAlt").css(spaceAlt);
    } else
    if (e == 32) {
        $("div.space").css(spaceAlt);
    }
});

// Events which will happen if a specific key is pressed Up
// Events refers to de-emphasize/normal-state of specific key when that specific key is pressed up  on keyboard
$(document).on('keyup', function(event) {
    e = event.which;
    if (e == 192) {
        $(".blacktick").css(normLPinky);
    } else
    if (e == 49) {
        $("div.one").css(normLPinky);
    } else
    if (e == 50) {
        $("div.two").css(normLRing);
    } else
    if (e == 51) {
        $("div.three").css(normLMiddle);
    } else
    if (e == 52) {
        $("div.four").css(normLIndex);
    } else
    if (e == 53) {
        $("div.five").css(normLIndex);
    } else
    if (e == 54) {
        $("div.six").css(normRIndex);
    } else
    if (e == 55) {
        $("div.seven").css(normRIndex);
    } else
    if (e == 56) {
        $("div.eight").css(normRMiddle);
    } else
    if (e == 57) {
        $("div.nine").css(normRRing);
    } else
    if (e == 48) {
        $("div.zero").css(normRPinky);
    } else
    if (e == 189 || e == 173) {
        $("div.minus").css(normRPinky);
    } else
    if (e == 187 || e == 61) {
        $("div.equalsTo").css(normRPinky);
    } else
    if (e == 8) {
        $("div.backspace").css(normRPinky);
    } else
    if (e == 9) {
        $("div.tab").css(normLPinky);
    } else
    if (e == 81) {
        $("div.q").css(normLPinky);
    } else
    if (e == 87) {
        $("div.w").css(normLRing);
    } else
    if (e == 69) {
        $("div.e").css(normLMiddle);
    } else
    if (e == 82) {
        $("div.r").css(normLIndex);
    } else
    if (e == 84) {
        $("div.t").css(normLIndex);
    } else
    if (e == 89) {
        $("div.y").css(normRIndex);
    } else
    if (e == 85) {
        $("div.u").css(normRIndex);
    } else
    if (e == 73) {
        $("div.i").css(normRMiddle);
    } else
    if (e == 79) {
        $("div.o").css(normRRing);
    } else
    if (e == 80) {
        $("div.p").css(normRPinky);
    } else
    if (e == 219) {
        $("div.openedBracket").css(normRPinky);
    } else
    if (e == 221) {
        $("div.closedBracket").css(normRPinky);
    } else
    if (e == 220) {
        $("div.backSlash").css(normRPinky);
    } else
    if (e == 20) {
        $("div.capslock").css(normCapslock);
    } else
    if (e == 65) {
        $("div.a").css(normLPinky);
    } else
    if (e == 83) {
        $("div.s").css(normLRing);
    } else
    if (e == 68) {
        $("div.d").css(normLMiddle);
    } else
    if (e == 70) {
        $("div.f").css(normLIndex);
    } else
    if (e == 71) {
        $("div.g").css(normLIndex);
    } else
    if (e == 72) {
        $("div.h").css(normRIndex);
    } else
    if (e == 74) {
        $("div.j").css(normRIndex);
    } else
    if (e == 75) {
        $("div.k").css(normRMiddle);
    } else
    if (e == 76) {
        $("div.l").css(normRRing);
    } else
    if (e == 186) {
        $("div.semicolon").css(normRPinky);
    } else
    if (e == 222) {
        $("div.quote").css(normRPinky);
    } else
    if (e == 13) {
        $("div.enter").css(normRPinky);
    } else
    if (e == 16) {
        $("div.lShift").css(normLPinky);
        $("div.rShift").css(normRPinky);
        allNonShiftedSymbols();
        if (isCapslockOn == true) {
            allAlphaLower();
            allAlphaUpper();
        } else {
            allAlphaLower();
        }
    } else
    if (e == 90) {
        $("div.z").css(normLPinky);
    } else
    if (e == 88) {
        $("div.x").css(normLRing);
    } else
    if (e == 67) {
        $("div.c").css(normLMiddle);
    } else
    if (e == 86) {
        $("div.v").css(normLIndex);
    } else
    if (e == 66) {
        $("div.b").css(normLIndex);
    } else
    if (e == 78) {
        $("div.n").css(normRIndex);
    } else
    if (e == 77) {
        $("div.m").css(normRIndex);
    } else
    if (e == 188) {
        $("div.comma").css(normRMiddle);
    } else
    if (e == 190) {
        $("div.fullstop").css(normRRing);
    } else
    if (e == 191) {
        $("div.frontSlash").css(normRPinky);
    } else
    if (e == 17) {
        $("div.lCtrl").css(normLPinky);
        $("div.rCtrl").css(normRPinky);
    } else
    if (e == 91) {
        $("div.win").css(normLPinky);
    } else
    if (e == 18) {
        $("div.lAlt").css(normSpaceAlt);
        $("div.rAlt").css(normSpaceAlt);
    } else
    if (e == 32) {
        $("div.space").css(normSpaceAlt);
    }
});

$(window).blur(function() { // function to bring all keys to their normal color in the case when window's focus is lost due to any case and if any key is prevented from keydown at that moment when focus was lost, so this function can resolve the problem and won't let happen that mess in frontend
    $(".blacktick").css(normLPinky);
    $("div.one").css(normLPinky);
    $("div.two").css(normLRing);
    $("div.three").css(normLMiddle);
    $("div.four").css(normLIndex);
    $("div.five").css(normLIndex);
    $("div.six").css(normRIndex);
    $("div.seven").css(normRIndex);
    $("div.eight").css(normRMiddle);
    $("div.nine").css(normRRing);
    $("div.zero").css(normRPinky);
    $("div.minus").css(normRPinky);
    $("div.equalsTo").css(normRPinky);
    $("div.backspace").css(normRPinky);
    $("div.tab").css(normLPinky);
    $("div.q").css(normLPinky);
    $("div.w").css(normLRing);
    $("div.e").css(normLMiddle);
    $("div.r").css(normLIndex);
    $("div.t").css(normLIndex);
    $("div.y").css(normRIndex);
    $("div.u").css(normRIndex);
    $("div.i").css(normRMiddle);
    $("div.o").css(normRRing);
    $("div.p").css(normRPinky);
    $("div.openedBracket").css(normRPinky);
    $("div.closedBracket").css(normRPinky);
    $("div.backSlash").css(normRPinky);
    $("div.capslock").css(normCapslock);
    $("div.a").css(normLPinky);
    $("div.s").css(normLRing);
    $("div.d").css(normLMiddle);
    $("div.f").css(normLIndex);
    $("div.g").css(normLIndex);
    $("div.h").css(normRIndex);
    $("div.j").css(normRIndex);
    $("div.k").css(normRMiddle);
    $("div.l").css(normRRing);
    $("div.semicolon").css(normRPinky);
    $("div.quote").css(normRPinky);
    $("div.enter").css(normRPinky);
    $("div.lShift").css(normLPinky);
    $("div.rShift").css(normRPinky);
    $("div.z").css(normLPinky);
    $("div.x").css(normLRing);
    $("div.c").css(normLMiddle);
    $("div.v").css(normLIndex);
    $("div.b").css(normLIndex);
    $("div.n").css(normRIndex);
    $("div.m").css(normRIndex);
    $("div.comma").css(normRMiddle);
    $("div.fullstop").css(normRRing);
    $("div.frontSlash").css(normRPinky);
    $("div.lCtrl").css(normLPinky);
    $("div.rCtrl").css(normRPinky);
    $("div.win").css(normLPinky);
    $("div.lAlt").css(normSpaceAlt);
    $("div.rAlt").css(normSpaceAlt);
    $("div.space").css(normSpaceAlt);
})

// theme Mode Light/Dark
function themeMode() { // function which will work accordingly checking if theme-mode button is on or off
    if (document.getElementById("themeMode").checked == true) {
        $("body").css({
            "background-color": "#121212",
            "transition": "0.4s"
        });
        $(".main").css({
            "background-color": "rgb(169, 169, 169)",
            "transition": "0.4s"
        });
        $(".startMsg").css({
            "color": "white",
            "transition": "0.4s"
        });
    } else { // if theme-mode button is off then the following actions will take place
        $("body").css({
            "background-color": "white",
            "transition": "0.4s"
        });
        $(".main").css({
            "background-color": "rgb(255, 228, 196)",
            "transition": "0.4s"
        });
        $(".startMsg").css({
            "color": "black",
            "transition": "0.4s"
        });
    }
}