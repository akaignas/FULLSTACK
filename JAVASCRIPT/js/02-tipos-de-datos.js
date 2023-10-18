

const producto1 = "Juego de mesa EL PUEBLO DUERME";
const producto2 = String("DOOBLE");
const producto3 = new String ("UNO"); 

console.log ("PRODUCTO:",producto1);
console.log ("PRODUCTO2 CON STRING:",producto2);
console.log ("PRODUCTO3 CON NEW STRING",producto3);

console.log ("PRODUCTO:",typeof producto1);
console.log ("PRODUCTO2 CON STRING:",typeof producto2);
console.log ("PRODUCTO3 CON NEW STRING",typeof producto3);

// EJERCICIO

let numero100;
let numero200;

numero100 = 100;
numero200 = "200"

console.log ("tipo dato n100:", typeof numero100);
console.log ("tipo de numero 200:", typeof numero200)

// ME DICE LA LONGITUD DE LA VARIABLE
console.log("METODO LENGHT:",producto1.length);

// INDEXOF PARA BUSCAR SI UNA PALABRA EXISTE EN UNA CADENA 
// DE TEXTO Y ME DA LA POSICIÓN
console.log("METODO INDEXOF:",producto1.indexOf("DUERME"));

// EJERCICIO CREAR 3 VARIABLES, EJERCICIO STRING 1, 2 Y 3.
// ASIGNAR VALORES CON LAS TRES FORMAS QUE HEMOS VISTO

const ejstring1 = "ejercicio string 1:";
const ejstring2 = "ejercicio string 2:";
const ejstring3 = "ejercicio string 3:";

console.log("string1",ejstring1.length);
console.log("string2",ejstring2.indexOf("ejercicio"));
console.log("string3",ejstring3.includes("string"));


// ********** NUMBER
// TODOS LOS NUMEROS EN JAVASCRIPT SON TRATADOS POR IGUAL 
// DA IGUAL QUE SEAN ENTEROS, DECIMALES, NEGATIVOS, FRACCIONES

let numero1 = 100;
let numero2 = 200.25;
let numero3 = "200"; //TIPO STRING
let numero4 = 2/3;

console.log("NUMERO 1:", numero1)
console.log("NUMERO 2:", numero2)
console.log("NUMERO 3:", numero3)
console.log("NUMERO 4:", numero4)

// OPERACIONES MATEMÁTICAS 

console.log("NUMERO 1 - NUMERO 2:", numero1- numero2)
console.log("NUMERO 1 + NUMERO 2:", numero1+ numero2)
console.log("NUMERO 1 * NUMERO 2:", numero1* numero2)
console.log("NUMERO 1 / NUMERO 2:", numero1/ numero2)

// MÉTODOS PARA LOS NUMEROS (MATH)

// EN CONSOLA PODEMOS PONER WINDOW Y BUSCAMOS Math

// TODAS ESAS FUNCIONES PERTENECES AL METODO Math

// ALGUNAS DE LAS MAS UTILIZADAS 

// Math.random();ME MUESTRA UN RESULTADO ALEATORIO ENTRE 0-1

// !!!!!!!!!!!!!!!!!!
// EJERCICIO
// CREAR UNA VARIABLE QUE SE LLAME RESULTADO Y QUE ALMACENE
// UN NUMERO ALEATORIO ENTRE 0-1 Y MOSTRARLA POR PANTALLA

let resultado = Math.random();
console.log("resultado ejercicio math random:",resultado);

resultado = Math.round(Math.random()*30);
console.log("numero aleatorio entre 0 y 30 redondeado",resultado)

// CREAR UNA VARIABLE QUE SE LLAME DIAMETRO Y OTRA QUE SE LLAME AREA
// IMPLEMENTAR LA OPERACION MATEMATICA QUE ME CALCULA EL AREA EN FUNCION 
// DEL DIAMETRO Y MOSTRARLO POR PANTALLA

let diametro = 20;
let radio = diametro / 2;
let area = Math.PI * Math.pow(radio, 2);

// EL ORDEN DE LAS MATEMATICAS ES EXACTAMENTE IGUAL QUE LAS REGLAS MATEMATICAS
// () EL PARENTESIS ES PRIORITARIO, DESPUES * y / y POR ULTIMO + y -

// let resultadoOrden = 20 + 30 * 2;
// console.log("MOSTRAR EL ORDEN DE LAS OPERACIONES",resultadoOrden)

// let resultadoOrden = (20 + 30) * 2;
// console.log("MOSTRAR EL ORDEN DE LAS OPERACIONES",resultadoOrden)

// EJERCICIO PROMOCIÓN 40% DE DESCUENTO

let descuento = 40;
let prenda1 = 120;
let prenda2 = 85;
let prenda3 = 24;
let importe = prenda1+prenda2+prenda3
let ahorro = importe*descuento/100
let total = importe-ahorro

console.log("importe sin descuento", importe);
console.log("descuento total del carrito", ahorro);
console.log("total con descuento incluido", total);


// INCREMENTOS Y DECREMENTOS

let meGusta=0;
meGusta++; //INCREMENTA EN 1 EL VALOR DE meGusta

// meGusta=meGusta+1;

console.log("valor del me gusta",meGusta++)
console.log("valor del me gusta",meGusta++)

//////////////////////

let nombre = "Ignacio Alonso"
let email = "alonsonavarroignacio@gmail.com"

console.log(`ESTE ES EL NOMBRE: ${nombre}`)



























