/**
 *  Crear un programa que pida ingresar nombres separados por espacios y
 * devuelva un mensaje que contenga un saludo a cada persona. Ejemplo:}
 * 
 * Ingrese nombres: Ada Greta Grace
 * ¡Hola Ada!
 * ¡Hola Greta!
 * ¡Hola Grace!
 * */

let nameList = prompt("Hola! Ingresá los nombres de tus amigas separados por un espacio, porfa");

const nameArray = nameList.split(" ");

for (let i = 0; i < nameArray.length; i++) {
    alert(`¡Hola ${nameArray[i]}!`);
}

// ------------------------------------------------

//02
/**
 * Crear un programa que pida ingresar números separados por espacios y devuelva un mensaje con el menor número ingresado. Ejemplo:
 * 
 * Ingrese números: 5 7 99 34 54 2 12
 * El menor número es: 2
 */

let numberString = prompt("Hola! Ingresá números enteros separados por un espacio, porfa");

const numberArray = (numberString.split(" "));

numberArray.sort();

alert(`El menor número es: ${numberArray[0]}`);  

 // ------------------------------------------------

 // 03
 /**
  * Crear un programa que pida ingresar números separados por espacios y devuelva un mensaje con la suma de todos los números. Ejemplo:
  * Ingrese números: 5 7 10 12 24
  * La suma de todos los números es: 58
  */

let numberString = prompt("Hola! Ingresá números enteros separados por un espacio, porfa");

const numberArray = (numberString.split(" "));
console.log(numberArray);

let sum = 0

for (let i = 0; i < numberArray.length; i++) {
    sum+=parseInt(numberArray[i]);
}
alert(`El total de los valores ingresados es: ${sum}`);

// ------------------------------------------------
// 04
/**
 * Crear un programa que permite ingresar valores separados por espacios, 
 * y luego preguntar qué valor se desea averiguar si existe. 
 * El programa debe devolver un mensaje diciendo si dicho valor se encuentra dentro de los valores originales o no. 
 * Ejemplo:
 * Ingrese valores: 5 7 99 34 54 2 12
 * Ingrese valor a buscar: 54
 * El valor 54 se encuentra entre los valores originales
 */

let numberString = prompt("Hola! Ingresá números enteros separados por un espacio, porfa");

const numberArray = (numberString.split(" "));
console.log(numberArray);

let checkNumber = prompt("¿Qué valor te gustaría chequear si fue incluido en la lista original?");
checkNumber = parseInt(checkNumber);

let includesNumber = false;

for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] == checkNumber) {
        i = numberArray.length;
        includesNumber = true;
    }  
}

includesNumber ? 
    alert(`El valor ${checkNumber} se encuentra entre los valores originales`) :
    alert(`El valor ${checkNumber} NO se encuentra entre los valores originales`);

// ------------------------------------------------

// 05
/**
 * Crear un programa que permite ingresar valores separados por espacios, y luego preguntar qué valor se desea encontrar el índice. 
 * El programa debe devolver un mensaje con el índice del primer elemento que sea igual al buscado, 
 * o indicar si no se ha encontrado. Ejemplo:
 * Ingrese valores: 5 7 12 34 54 2 12
 * Ingrese valor a buscar: 12
 * El valor 12 se encuentra en el índice 6
 */

let numberString = prompt("Hola! Ingresá números enteros separados por un espacio, porfa");

const numberArray = (numberString.split(" "));
console.log(numberArray);

let checkNumber = prompt("¿Qué valor te gustaría chequear si fue incluido en la lista original?");
checkNumber = parseInt(checkNumber);

let includesNumber = false;
let indexNumber = 0;

for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] == checkNumber) {
        includesNumber = true;
        indexNumber = i;
        i = numberArray.length;
    }  
}

includesNumber ? 
    alert(`El valor ${checkNumber} se encuentra en el índice ${indexNumber}`) :
    alert(`El valor ${checkNumber} NO se encuentra entre los valores originales`);

// ------------------------------------------------

 // 06
 /**
  * Crear un programa que permita saber si Sam y Frodo están juntos. 
  * El programa debe permitir ingresar nombres separados por espacios, 
  * y mostrar con un mensaje si Sam se encuentra al lado de Frodo, ya sea antes o después. Ejemplo:
  * Ingresar nombres: Sam Frodo Legolas
  * Sam y Frodo están juntos, ¡Frodo está a salvo!
  * Ingresar nombres: Sam Orco Frodo
  * Sam y Frodo están separados, ¡Frodo está en peligro!
  */

let charactersLordOfRings = prompt("Hola! Ingresá personajes del señor de los anillos separados por un espacio, porfa");

const lordArray = (charactersLordOfRings.split(" "));
console.log(lordArray);

let frodoNextSam = false;

for (let i = 0; i < lordArray.length; i++) {
    if (
        (lordArray[i] === "Frodo" && lordArray[i+1] === "Sam") ||
        (lordArray[i] === "Sam" && lordArray[i+1] === "Frodo")
        ) {
        frodoNextSam = true;
        i = lordArray.length;
    }  
}

frodoNextSam ? 
    alert(`Sam y Frodo están juntos, ¡Frodo está a salvo!`) :
    alert(`Sam y Frodo están separados, ¡Frodo está en peligro!`);

// ------------------------------------------------

// 07
/**
 * Crear un programa que pida ingresar "manzana", "pera"y "durazno" y devuelva un mensaje 
 * con la cantidad que hay de cada una. Ejemplo:
 * Ingrese frutas: manzana manzana pera durazno pera durazno manzana
 * Hay 3 🍎, 2 🍐 y 2 🍑
 */

let fruitString = prompt("Hola! Ingresá frutas manzana, pera y durazno separadas por un espacio, porfa");

const fruitArray = (fruitString.split(" "));
console.log(fruitArray);

let manzana = 0;
let pera = 0;
let durazno = 0;

for (let i = 0; i < fruitArray.length; i++) {
    if (fruitArray[i] == "manzana") {
        manzana++
    }
    else if (fruitArray[i] == "pera") {
        pera++
    }
    else if (fruitArray[i] == "durazno") {
        durazno++
    }
}

alert(`Hay ${manzana} 🍎, ${pera} 🍐 y ${durazno} 🍑`);

 // ------------------------------------------------