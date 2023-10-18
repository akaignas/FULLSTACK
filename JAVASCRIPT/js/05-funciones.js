// VAMOS A CREAR LA PRIMERA FUNCIÓN

sumar (10, 20)
function sumar (n1, n2){    // ARGUMENTO DE LA FUNCIÓN
    //CUERPO DE LA FUNCIÓN
    console.log(n1 + n2);
};

// EXPRESIÓN DE LA FUNCIÓN


let sumar2 = function (n3,n4){
    console.log(n3+n4)
}
sumar2(3,9);

// LA REALIDAD ES QUE LO ASIMILA MÁS 
// A UNA VARIABLE QUE A UNA FUNCIÓN

/////////////////////

// IIFE 
// SINTAXIS UN POCO DIFERENTE

(function(){
    console.log("esto es una función que se llama automaticamente")
})();

// ESTAS FUNCIONE SE LLAMAN SOLAS, SE LLAMAN ELLAS MISMAS
// EL FIN ES PROTEGER QUE NO SE MEZCLEN CON VARIABLES Y 
// FUNCIONES CON LAS DE OTROS ARCHIVOS


///////////////////////////

const numero1 = 20;
const numero2 = "20"

console.log(typeof(parseInt(numero2)));
console.log(typeof(numero1.toString()))


//////////////////////////

function ejerciciofuncion1 (importe, descuento){
    console.log (importe*descuento/100)
}
ejerciciofuncion1 (100, 20)

////////////

function tweet(texto){
    console.log(texto.length)
}
tweet("Este es mi texto")


function buscar (texto, palabra){
    console.log ("Buscamos la palabra en el texto, esta?:", texto.includes(palabra))
}
buscar ("Este texto contiene la palabra", "contiene")

let frutas=["pera","platano"] 
function añadirFruta(k){
    console.log()
}
//////////

function resta (n1, n2){
    console.log(n1-n2)
}
resta (50, 20)

///////////////// FUNCION QUE RETORNA VALORES 

function multiplicar(x,y){
    return x*y;
}
let resultadoMultiplicar = multiplicar (2,3)

console.log(resultadoMultiplicar);

/////// FUNCION UN POCO MÁS COMPLEJA

let totalCarrito = 0;

function agregarCarrito(x){

}

/////////////

let descuento = 0.2;
let totalAhorro = 0;

function calcularDescuento(z){
    totalAhorro+=(z*descuento)
}

calcularDescuento(100);
calcularDescuento(120);
calcularDescuento(350);

console.log(totalAhorro);


//////// mMETODOS DE PROPIEDAD
// SON FUNCIONES CON LA SINTAXIS DE METODO 
// VAMOS A CREAR UN REPRODUCTOR MUSICAL

const reproductor ={ // ES UN OBJETO DE FUNCIONES
    reproducir : function(nc){ 
        console.log(`Reproduciendo Canción con ID: ${nc}`)
    },
    
    pausar : function(){
        console.log("PAUSANDO CANCIÓN...")
    },

    crearPlaylist : function(nombre){
        console.log(`Creando Playlist: ${nombre}`)
    }
}

reproductor.reproducir(3840);
reproductor.pausar();
reproductor.crearPlaylist("Rap");

/////////////

let triplicar = function(x){

}


let carrito = [
         {
             nombre: "TV",
             precio: 750
         },
         {
             nombre: "Tablet",
             precio: 350
         },
         {
             nombre: "Movil",
             precio: 550
         },
         {
             nombre: "PC",
             precio: 1750
     }
     ];





