var Test = require("./test/Test.js");
var {reverseString} = require("./1-reverseString.js");

/**
 * Fonction permettant de déterminer si la chaine passée en paramètre est un palindrome
 * @param pString
 * @return boolean
 */
function isPalindrome(pString){
    if(reverseString(pString) === pString) {
        return true;
    } 
    return false;
}

Test.assert('isPalindrome 1', true, isPalindrome('rever'));
Test.assert('isPalindrome 2', false, isPalindrome('palindrome'));
Test.assert('isPalindrome 3', true, isPalindrome('ressasser'));