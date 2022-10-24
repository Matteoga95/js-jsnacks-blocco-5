// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.


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

// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
const zucchineLight = zucchine.filter(zucchina => zucchina.lunghezza < 15);

const zucchineHeavy = zucchine.filter(zucchina => zucchina.lunghezza >= 15);

// Infine stampa separatamente quanto pesano i due gruppi di zucchine.

let pesoZucchineLight=0
zucchineLight.forEach(zucchina => {
    pesoZucchineLight+=zucchina.peso;
});



let pesoZucchineHeavy=0
zucchineHeavy.forEach(zucchina => {
    pesoZucchineHeavy+=zucchina.peso;
});
console.log(pesoZucchineLight);
console.log( pesoZucchineHeavy);



