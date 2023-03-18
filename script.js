//1.Crea un array que contenga el nombre de cinco colores escritos como strings.
let colores = ['rojo', 'verde', 'negro', 'amarillo', 'naranja'];

//2. Guarda en una variable el tercer elemento del array del ejercicio anterior.
let tercerColor = colores[3];

//3. Accede desde un console.log() a la posición 0 del string de la posición 0 del array del
//ejercicio 1.
console.log(colores[0][0]);

//4. Se pide realizar un script que genere un número aleatorio entre 1 y 99. Investigue la
//función Math.random().
let numeroAleatorio = generarAleatorio(99);
function generarAleatorio(max) {
    return Math.floor(Math.random() * max);
}

//5. Rellena un array con los números del 1 al 10. Muéstralo por la consola.
let array = [];
for (i = 1; i < 11; i++) {
    array.push(i);
}
console.log(array)

//6. Rellena un array con números aleatorios (10 por ejemplo). Muéstralo por la consola.
let arrayAleatorio = [];
for (i = 0; i < 10; i++) {
    let numero = generarAleatorio(99)
    arrayAleatorio.push(numero);
}
console.log(array)

//7. Del array anterior, créale una copia (que no sea el mismo en sí). Mostrarlos por la
//consola.
let arrayCopia = Array.from(arrayAleatorio);
console.log(arrayCopia);


//8. Realiza un script que pida cadenas de texto hasta que se ingrese la palabra “cancelar”.
//Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión
//medio. Realizar la misma actividad, pero ahora almacenando los valores en un array y
//luego recorriendolo para mostrar el resultado deseado del ejercicio.

//Primera parte seria así:
let cadena = '';
let ingresado = '';
do {
    ingresado = prompt("Ingrese una palabra, ingrese cancelar para terminar el ciclo");
    cadena+= ingresado + '-';
} while (ingresado != "cancelar")
console.log(cadena);

//La segunda parte seria así (creo otras variables para que quede mas claro, pero podría usar las mismas que las de la primera parte)
let cadena2 = '';
let ingresado2 = '';
let arrayPalabras = [];
do {
    ingresado2 = prompt("Ingrese una palabra, ingrese cancelar para terminar el ciclo");
    arrayPalabras.push(ingresado2)
} while (ingresado != "cancelar")

arrayPalabras.forEach(function(palabra) {
    cadena2+= palabra;
})
console.log(cadena2);

//9. Hacer un formulario con dos campos (pesos y dólares) que al presionar un botón
//convierte de dólares a pesos. Supondremos que un dólar son trescientos pesos.
//Mostrar el resultado elemento de html.



function convertirDolares() {
    let dolares = document.getElementById("dolares").value;

    let pesos = dolares * 300;

    document.getElementById("pesos").value = pesos;
}

//10. Generar la inversa del ejercicio anterior (de pesos a dólares).

function convertirPesos() {
    let pesos = document.getElementById("pesoss").value;

    let dolares = pesos / 300;

    document.getElementById("dolars").value = dolares;
}


//11. Hacer un formulario que convierta de grados centígrados a grados Fahrenheit. Para
//ello deberá multiplicar por 9/5 y sumar 32. Tener en cuenta que 30 grados centígrados
//son 86 grados fahrenheit.


function convertirFahrenheit() {
    let centigrados = document.getElementById("centigrados").value;

    let fahrenheit = (centigrados * 9/5 + 32);

    document.getElementById("fahrenheit").value = fahrenheit;
}


//12 Hacer un formulario para solicitar el envío de una caja de cartón. En el formulario
//podremos especificar las características de la caja. Ejemplo


function agregarPedido(){
    let nombre = document.getElementById('nombre').value;
    let material = document.getElementById('material').value;
    let dimensiones = document.getElementById('dimensiones').value;
    let comentarios = document.getElementById('comentarios').value;
    alert ((nombre) + " ha pedido una caja de " + (material) + " de unas dimensiones " + (dimensiones) + ". " + (comentarios));
   
}


//13 A través de un formulario, el usuario debe introducir un número secreto que estará
//entre 0 y 5. El usuario tendrá tres intentos para acertar el número, si no lo logra, habrá perdido el
//juego. Debemos indicar en un cuadro de texto si el usuario gana, falla el número o pierde.


//14 . Dado un input y un botón, escribir nombres de personas e ir mostrando en una lista
//desordenada a medida que se agregan.

// Ejercicio 14 //

function insertarNombre(){
    event.preventDefault();

    let nombre = document.getElementById("nombree").value;
    let opcion = "<li>" + nombre + "</li>";

    let lista = document.getElementById("lista-nombre");
    lista.innerHTML += opcion;
    alert('Se ha insertado el nombre');
}



