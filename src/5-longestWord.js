var Test = require("./test/Test.js");

/**
 * Fonction permettant d'identifier et de renvoyer le premier mot le plus long d'une chaine de caractère
 * @param pString
 * @return string
 */
function longestWord(pString){
    let longestWord = "";
    let longestWordLength = 0;
    const splitWord = pString.split(' ');
    for(word in splitWord) { 
        if(splitWord[word].length > longestWordLength) {
            longestWordLength = splitWord[word].length;
            longestWord = splitWord[word];
        }
    }
    return longestWord;
}

Test.assert('longestWord 1', 'javascript', longestWord('Hello world javascript'));
Test.assert('longestWord 2', 'quatre', longestWord('un deux trois quatre cinq six'));
Test.assert('longestWord 3', 'feuille', longestWord('pierre feuille ciseaux'));