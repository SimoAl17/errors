"use strict"       //Rende javascript più precisino. Da usare con Javascript puro

let pippo = "ciao";
let pluto = 4;
let paperino = false;

let array = ["Pippo", "Pluto", "Paperino"];
console.log("🚀 ~ file: script.js ~ line 8 ~ array", array);
console.table(array);

let stud1 = {Name: "Andrea", Age: 12};
let stud2 = {Name: "Giovanni", Age: 13};
let stud3 = {Name: "Beatrice", Age: 16};
let stud4 = {Name: "Veronica", Age: 12};

const array2 = [stud1, stud2, stud3, stud4];
console.table(array2);


function checkIfIsEven(numberToCheck) {
    return numberToCheck % 2 === 0;
}

//Controllo se è pari
function check(n) {
    return n % 2 === 0;
}

let player = {Name: "Andrea", Surname: "Asioli", School: "Leopardi", Game: "Space Invaders", Age: 12, Address: "Via Piantelli 12", Score: 112}

console.log("🚀 ~ file: script.js ~ line 31 ~ player", player); //Notare che da fuori segna score 112 ma aprendo l'oggetto si aggiorna a 200
console.log("🚀 ~ file: script.js ~ line 31 ~ player", JSON.stringify(player));

player.Score = 200;

class EmptyStringError extends Error{
    constructor(message){
        super(message);
    }
}

class InvalidStringError extends Error{
    constructor(message){
        super(message);
    }
}

class PartialInvalidStringError extends Error{
    constructor(message, array){
        super(message);
        this.array = array;
    }
}

function parseStringToNumber(string) {
    if (string.length === 0) {
        throw new EmptyStringError("Stringa vuota");
    }
    let stringNumber = string;
    if (string.includes(",")) {
        stringNumber = string.replace(",", ".");
    }
    const number = parseFloat(stringNumber);
    if (isNaN(number)) {
        throw new InvalidStringError("Stringa non valida");
    }
    return number;
}

let age;
try {
    age = parseStringToNumber("13");
    console.log("Age:", age);
} catch (error) {
    if (error instanceof EmptyStringError) {
        console.log(error.message);
        age = 0;
        console.log("Age:", age);
    } else {
        console.log(error.message);
        console.log("Inserisci di nuovo");
    }
}


try {
    StringParser.parseCSVLine("false; 34 ; pippo; 567; 11,1");
} catch (error) {
    if (error instanceof EmptyStringError) {
        console.log(error.message);
    } else if (error instanceof InvalidStringError) {
        console.log(error.message);
    } else {
        console.log(error.message, error.array);
    }
}
//              12; 13; 45; 23\n 2.1; 13; 34; 21\n 3.2; 12; 4; 22\n
try {
    StringParser.parseMultilineMultiarray("12; 13; 45; 23\n 2.1; 13; 34; 21\n 3.2; 12; 4; 22\n");
} catch (error) {
    if (error instanceof EmptyStringError) {
        console.log(error.message);
    } else if (error instanceof InvalidStringError) {
        console.log(error.message);
    } else {
        console.log(error.message, error.array);
    }
}



//console.log(parseStringToNumber("2"));
//console.log(parseStringToNumber("2.1"));
//console.log(parseStringToNumber("2,1"));
//console.log(parseStringToNumber("2pippo"));
//console.log(parseStringToNumber("pippo2"));
//console.log(parseStringToNumber("pippo"));


//Funzione csvParcer