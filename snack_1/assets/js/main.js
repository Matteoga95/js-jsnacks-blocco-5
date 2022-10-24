// Crea un array di 10 oggetti che rappresentano una zucchina, indicando
// per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.




// Crea un array di 10 oggetti che rappresentano una zucchina

const zucchine = [
    {
        "variety": "romanesca",
        "peso": 0.4,
        "lunghezza": 15
    },
    {
        "variety": "fiorentina",
        "peso": 0.2,
        "lunghezza": 4
    },
    {
        "variety": "tonda",
        "peso": 1.6,
        "lunghezza": 25
    },
    {
        "variety": "napoletana",
        "peso": 1,
        "lunghezza": 18
    },
    {
        "variety": "romanesca",
        "peso": 0.6,
        "lunghezza": 16
    },
    {
        "variety": "romanesca",
        "peso": 0.2,
        "lunghezza": 10
    },
    {
        "variety": "trombetta",
        "peso": 1.6,
        "lunghezza": 30
    },
    {
        "variety": "trombetta",
        "peso": 0.4,
        "lunghezza": 18
    },
    {
        "variety": "tonda",
        "peso": 0.1,
        "lunghezza": 4
    },
    {
        "variety": "napoletana",
        "peso": 0.9,
        "lunghezza": 20
    }

]

// Calcola quanto pesano tutte le zucchine.
let pesoTot=0
zucchine.forEach(zucchina => {
    pesoTot+=zucchina.peso;
   
});

console.log(pesoTot);