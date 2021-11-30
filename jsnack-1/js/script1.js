// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di invitati.


//creo i miei array

let nameArr = ["Giuseppe", "Emanuele", "Fulvio", "Giando", "Daniele", "Luca" ];

let surnameArr = ["Urbano", "Legend", "Golem", "Fuoco", "Rispetto", "Fratello" ];

//creo l'array degli invitati alla festa 

let guestsArr = [];

let maxValue = 25;

//quindi creo un for che dice che per ogni nome random (variabile che creo nel ciclo), collego un cognome random (variabile che creo nel ciclo)

for (let i = 0; i <= maxValue;) {
    let numberRandName = getRandNumber (0, nameArr.length);

    let numberRandSurname = getRandNumber (0, surnameArr.length);


    //creo la varbile "invitato" sempre all'interno del ciclo

    let guest = nameArr[numberRandName] + " " + surnameArr[numberRandSurname];
    

    //controllo se questo invitato è nel mio array

    if (!guestsArr.includes(guest)) {
        guestsArr.push(guest);
        i++
    }
}

console.log(guestsArr);


//creo una funzione per unire gli elementi dell'array

function getRandNumber (min, max) {
    return Math.floor (Math.random() * (max - min)) + min;
}
