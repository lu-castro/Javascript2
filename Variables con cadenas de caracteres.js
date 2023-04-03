var nombre = "Alan"; 
/* la variable string se escribe dentro de comillas simples o 
complejas siendo consistentes en su uso, utilizando la misma al principio y al final */ 


var barraInvertida = "Soy una cadena de caracteres \"con comillas  \""; 
console.log(barraInvertida);
/* Esta cadena de caracteres va a imprimir comillas dentro de las barras 
invertidas del string */

/* \`  COMILLA SIMPLE */
/* \"  COMILLA DOBLE  */
/* \\  BARRA INVERTIDA*/
/* \n  LÍNEA NUEVA */
/* \r  RETORNO DE CARRO */
/* \t  TABULACIÓN */
/* \b  RETROCESO  */
/* \f  SALTO DE PÁGINA */


var mensajeCompleto = "Estoy aprendiendo a programar";
var parteFinal = "con Javascript"; 

console.log(mensajeCompleto += parteFinal); /* Concatenar cadenas en console.log */


var miCadena = "Hola mundo";
console.log(miCadena); /* muestra el contenido de mi cadena en pantalla  */

miCadena[0] = "H"; // VERDADERO // Devuelve valor Booleano dependendiendo de el valor 
                                // de string en la posición 0


/* SUMANDO STRINGS */
var uno = "a mí";
var dos = "perro";
var tres = "le";
var cuatro = "gusta";
var cinco= "pasear";

var fraseCompleta = uno + dos + tres + cuatro + cinco; /* dará como resultado la frase completa sin espacios */

var fraseCompleta = uno + "" + dos + "" + tres + "" + cuatro + "" + cinco; /* da como resultado la frase con espacios */

console.log(fraseCompleta);