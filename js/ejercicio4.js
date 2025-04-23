/*
4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
*/

let suma = 0;
let continuar = true;

while (continuar) {
  let numero = prompt("Ingrese un número:");

  if (numero === null) {
    continuar = false;
  } else if (isNaN(numero)) {
    alert("Número NO válido.");
  } else {
    suma += Number(numero);
  }
}
alert("La suma total de los números es: " + suma);
