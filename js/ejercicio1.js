/*
1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.
*/

do {
  let edad = parseInt(prompt("Ingrese una edad"));
  if (!isNaN(edad)) {
    if (edad >= 18) {
      alert("Puede conducir");
    } else {
      alert("No puede conducir");
    }
  }
} while (confirm("¿Desea ingresar otra edad?"));
