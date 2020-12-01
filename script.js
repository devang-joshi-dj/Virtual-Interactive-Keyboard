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

function allAlphaUpper() {
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

function allAlphaLower() {
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

function allShiftedSymbols() {
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

function allNonShiftedSymbols() {
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

function keyUp(event) {
    var x = event.which || event.keyCode;
    if (typeof x == "number") {
        $("div.startMsg").fadeOut("fast");
        $("div.keyboard").fadeIn("slow");
    }
}

var isCapslockOn;
document.addEventListener("keydown", (e) => {
    if (e.getModifierState("CapsLock")) {
        isCapslockOn = true;
        $("div.capslock").css("color", "olive");
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

$(document).on('keyup', function(event) {
    e = event.which;
    if (e == 192) {
        $("div.blacktick").css(normLPinky);
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