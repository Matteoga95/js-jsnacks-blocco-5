// Scrivi una funzione che accetti una stringa come argomento e la ritorni
// girata (es. Ciao -> oaiC)

/**
 * 
 * @param {string} testo 
 * @returns {string}
 */
function capovolgi(testo){
   return testo.split("").reverse().join("")
}

console.log(capovolgi("testo di Prova"));