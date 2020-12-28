window.onload = start;

var numberOfWord = 0;

function start()
{
    document.getElementById("en").innerHTML = englishWords[0];
    document.getElementById("pl").innerHTML = "----";
    document.getElementById("pron").innerHTML = "----";
}

//  CHANGE LANGUAGE BUTTON
function changeLanguage() 
{
    
}

//  DRAW PREVIOUS BUTTON
function drawPrev() 
{
    
}

//  DRAW NEXT BUTTON
function drawNext() 
{
    var lengthOfTab = polishWords.length - 1;

    if(numberOfWord >= lengthOfTab)
    {
        numberOfWord = 0;

        document.getElementById("en").innerHTML = englishWords[numberOfWord];
        document.getElementById("pl").innerHTML = polishWords[numberOfWord];
        document.getElementById("pron").innerHTML = pronunciation[numberOfWord];
    }else
    {
        numberOfWord++;

        document.getElementById("en").innerHTML = englishWords[numberOfWord];
        document.getElementById("pl").innerHTML = polishWords[numberOfWord];
        document.getElementById("pron").innerHTML = pronunciation[numberOfWord];
    }
}

//  HIDE / SHOW BUTTON
function hideShow() 
{
    
}

//  KEEP HIDE OR SHOW SYSTEM
function hideOrShowSystem() 
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