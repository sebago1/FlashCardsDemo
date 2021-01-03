window.onload = start;

var numberOfWord = 0;
var isSetLanguage = "en";
var whichLanguage = "en";
var hideOrShowVariable = "hide";

function start()
{
    document.getElementById("en").innerHTML = englishWords[0];
    document.getElementById("pl").innerHTML = "----";
    document.getElementById("pron").innerHTML = "----";
}

//  CHANGE LANGUAGE BUTTON
/*
function changeLanguage() 
{
    if (isSetLanguage == "pl") {
        isSetLanguage = "en";
        document.getElementById("en").innerHTML = "----";
        document.getElementById("pl").innerHTML = polishWords[numberOfWord];
        document.getElementById("pron").innerHTML = "----";

    }
}
*/
//  DRAW PREVIOUS BUTTON
function drawPrev() 
{
    var lengthOfTab = polishWords.length - 1;

    if (numberOfWord <= 0)
    {
        numberOfWord = lengthOfTab;

        document.getElementById("en").innerHTML = englishWords[numberOfWord];
        document.getElementById("pl").innerHTML = polishWords[numberOfWord];
        document.getElementById("pron").innerHTML = pronunciation[numberOfWord];

        hideOrShowSystem();
    }else
    {
        numberOfWord--;

        document.getElementById("en").innerHTML = englishWords[numberOfWord];
        document.getElementById("pl").innerHTML = polishWords[numberOfWord];
        document.getElementById("pron").innerHTML = pronunciation[numberOfWord];

        hideOrShowSystem();
    }
}

//  DRAW NEXT BUTTON
function drawNext() 
{
    var lengthOfTab = polishWords.length - 1;

    if (numberOfWord >= lengthOfTab)
    {
        numberOfWord = 0;

        document.getElementById("en").innerHTML = englishWords[numberOfWord];
        document.getElementById("pl").innerHTML = polishWords[numberOfWord];
        document.getElementById("pron").innerHTML = pronunciation[numberOfWord];

        hideOrShowSystem();
    }else
    {
        numberOfWord++;

        document.getElementById("en").innerHTML = englishWords[numberOfWord];
        document.getElementById("pl").innerHTML = polishWords[numberOfWord];
        document.getElementById("pron").innerHTML = pronunciation[numberOfWord];

        hideOrShowSystem();
    }
}

//  HIDE / SHOW BUTTON
function hideShow() 
{
    if (hideOrShowVariable == "show") 
    {
        if (whichLanguage == "pl") 
        {
            document.getElementById("en").innerHTML = "----";
            document.getElementById("pron").innerHTML = "----";

        }else if (whichLanguage == "en") 
        {
            document.getElementById("pl").innerHTML = "----";
            document.getElementById("pron").innerHTML = "----";
        }

        hideOrShowVariable = "hide";

    }else if (hideOrShowVariable == "hide") 
    {
        document.getElementById("en").innerHTML = englishWords[numberOfWord];
        document.getElementById("pl").innerHTML = polishWords[numberOfWord];
        document.getElementById("pron").innerHTML = pronunciation[numberOfWord];

        hideOrShowVariable = "show";
    }
}

//  KEEP HIDE OR SHOW SYSTEM
function hideOrShowSystem() 
{
    if (hideOrShowVariable == "show") 
    {
        document.getElementById("en").innerHTML = englishWords[numberOfWord];
        document.getElementById("pl").innerHTML = polishWords[numberOfWord];
        document.getElementById("pron").innerHTML = pronunciation[numberOfWord];

    }else if (hideOrShowVariable == "hide") 
    {
        if (whichLanguage == "pl") 
        {
            document.getElementById("en").innerHTML = "----";
            document.getElementById("pron").innerHTML = "----";

        }else if (whichLanguage == "en") 
        {
            document.getElementById("pl").innerHTML = "----";
            document.getElementById("pron").innerHTML = "----";
        }
    }else
    {
        alert("Something was wrong!!");
    }
}

//  SMART DATA BASE OF WORDS
var englishWords = new Array(5);
englishWords[0] = "1 Savour";
englishWords[1] = "2 Doll";
englishWords[2] = "3 Cheating";
englishWords[3] = "4 Regret";
englishWords[4] = "5 Suicide";

var polishWords = new Array(5);
polishWords[0] = "1 Smak";
polishWords[1] = "2 Lalka";
polishWords[2] = "3 Oszukiwanie";
polishWords[3] = "4 Żal";
polishWords[4] = "5 Samobójstwo";

var pronunciation = new Array(5);
pronunciation[0] = "1 Sejwe>r";
pronunciation[1] = "2 Dol";
pronunciation[2] = "3 Cziting";
pronunciation[3] = "4 >Reg>ret";
pronunciation[4] = "5 Suisaid";