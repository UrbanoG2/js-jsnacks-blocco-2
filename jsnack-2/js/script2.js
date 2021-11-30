// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari


const numbers = ["11", "27", "32", "44", "59", "61", "72", "88", "97", "103",];
console.log(numbers);

let sum = 0;


for (let i = 0; i < numbers.length; i++) {


    if (i % 2 != 0) {
        
        console.log(parseInt(numbers[i]) + " valore numero posizione dispari");

        sum += parseInt(numbers[i]);
        
    } 

}

console.log(sum);

