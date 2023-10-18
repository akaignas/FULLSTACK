"use strict"


let nombreProductoo= "bombilla";
let precioProducto = 3;
let disponible = true;

let producto={
    nombre: "bombilla",
    precio: 3,
    disponible: true
}

// CREAR PROPIEDADES A UN PRODUCTO

producto.categoria = "joyería"

console.log("AÑADIR CATEGORÍA a producto:", producto)

// COMO BORRAR UNA PROPIEDAD DE UN OBJETO, con DELETE

delete producto.disponible;

console.log("BORRAMOS DISPONIBLE a PRODUCTO:",producto);

// COMO MODIFICAR UNA PROPIEDAD DE UN OBJETO

producto.precioProducto = 5

// EJERCICIO: ALMACENAR EN UNA VARIABLE nombreProducto 
// EL VALOR DE LA PROPIEDAD nombreProducto DEL OBJETO producto

//PUEDES LLAMAR IGUAL LA VARIABLE Y LA PROPIEDAD, NO PASA NADA 
// PUES SON DOS COSAS TOTALMENTE DISTINTAS

let nombreProducto = producto.nombreProducto;

//  DESTRUCTURING
// NOS CREA DIRECTAMENTE LA VARIABLE CON EL MISMO NOMBRE QUE LA PROPIEDAD

let {precio,categoria} = producto


// // EJERCICIO
// CREAR UN OBJETO QUE SE LLAME PLAYA 
// CON LAS SIGUIENTES PROPIEDADES:
// - nombre
// - ubicacion
// - recomendable (boolean)
// - temperaturaAgua (numero)

let playa={
    nombrePlaya: "Manzanares",
    ubicacion:"Madrid",
    recomendable: true,
    temperaturaAgua: 10,
}

let{nombrePlaya,ubicacion,recomendable,temperaturaAgua} = playa;

console.log(`En la playa ${nombrePlaya} que esta ubicada en ${ubicacion} 
el agua está a ${temperaturaAgua} y te la recomiendo: ${recomendable}`);

/////////////////////////////

let medidas={
    peso: 5,
    alto: 6,
    ancho: 8.5,
    profundidad: 20,
}

Object.seal(medidas);

medidas.profundidad = 1;

console.log("MOSTRAMOS COMO SE PUEDE MODIFICAR CON SEAL",medidas)

////////////////////////////////

// EJERCICIO

// PASO 1:CREAR 3 VARIABLES

// PASO 1: 
// VARIABLEA = "varA"
// VARIABLEB = "varB"
// VARIABLEC = "varC"

let variableA = "valor varA";
let variableB = "valor varB";
let variableC = "valor varC";

// PASO 2: CREAR UN OBJETO VACÍO 

let ejercicio6 = {};

// PASO 3: VAMOS A CREAR PROPIEDADES A ESE OBJETO A PARTIR DE LAS VARIABLES

ejercicio6.variableA=variableA;
ejercicio6.variableB=variableB;
ejercicio6.variableC=variableC;

// PASO 4: MOSTRAR POR PANTALLA EL OBJETO

console.log(ejercicio6)

















