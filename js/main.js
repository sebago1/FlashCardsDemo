window.onload = start;

function start()
{
    document.getElementById("en").innerHTML = englishWords[0];
    document.getElementById("pl").innerHTML = "----";
    document.getElementById("pron").innerHTML = "----";
}

//  BUTTON DRAW PREVIOUS
function drawPrev() 
{
    
}

//  BUTTON DRAW NEXT 
function drawNext() 
{
    
}

//  BUTTON HIDE / SHOW
function hideShow() 
{
    
}

//  SMART DATA BASE OF WORDS
var englishWords = new Array(5);
englishWords[0] = "Savour";
englishWords[1] = "Doll";
englishWords[2] = "Ceating";
englishWords[3] = "Regret";
englishWords[4] = "Suicide";

var polishWords = new Array(5);
polishWords[0] = "Smak";
polishWords[1] = "Lalka";
polishWords[2] = "Oszukiwanie";
polishWords[3] = "Żal";
polishWords[4] = "Samobójstwo";

var pronunciation = new Array(5);
pronunciation[0] = "Sejwe>r";
pronunciation[1] = "Dol";
pronunciation[2] = "Cziting";
pronunciation[3] = ">Reg>ret";
pronunciation[4] = "Suisaid";