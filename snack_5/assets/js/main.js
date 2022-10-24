// Scrivi una funzione che accetti tre argomenti:
// un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo
// quanto il numero di elementi dell’array).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione
// compresa tra “a” e “b”

const arrayRandom = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 44, 55, 66, 22, 11, 44, 77, 55, 33];

/**
 * 
 * @param {array} array1 
 * @param {Number} num1 
 * @param {Number} num2 
 */
function getMiddleArray(array1, num1, num2) {

    const result = [];

    for (let i = 0; i < array1.length; i++){
        if (i>=num1 && i<= num2){
            result.push(array1[i]);
        }
    }

    return result;
}

console.log(getMiddleArray(arrayRandom,5,10));