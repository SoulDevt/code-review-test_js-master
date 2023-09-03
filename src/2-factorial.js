var Test = require("./test/Test.js");

/**
 * Fonction de calcule de la factorielle d'un nombre
 * @param pNumber
 * @return Number
 */
function factorial(pNumber){
    //let n = pNumber;
    let result = 1;

    for(let i = 1; i <= pNumber; i++) {
        //console.log(`${result} * ${i}`);
        result *= i;
    }
    //console.log(result);
    return result;
}

Test.assert('factoriel 1', 2, factorial(2));
Test.assert('factoriel 1', 120, factorial(5));
Test.assert('factoriel 1', 3628800, factorial(10));