// Crea un array di oggetti che rappresentano delle persone.
// Ogni persona ha un nome, un cognome e un’età.
// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.

const persone = [
    {
        "nome": "matteo",
        "cognome": "rossi",
        "età": 4
    },
    {
        "nome": "luca",
        "cognome": "verdi",
        "età": 22
    },
    {
        "nome": "giovanni",
        "cognome": "blu",
        "età": 17
    },
    {
        "nome": "andrea",
        "cognome": "neri",
        "età": 40
    }
]


// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.

// const newArray = [
//     ...persone,
//     ... ? ["puoi guidare"]
// ];

let newArray = [...persone]

persone.forEach(persona => {

});

for (let i = 0; i < persone.length; i++) {

    if (persone[i].età > 18) {

        //trovo la persona nel nuovo array e gli metto la nuova proprietà
        newArray[i].frase = "Può guidare"

    } else {
        //trovo la persona nel nuovo array e gli metto la nuova proprietà
        newArray[i].frase = "Non può guidare"

    }
}



console.log(newArray);