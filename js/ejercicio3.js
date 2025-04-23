/*
3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp
*/
let textoFinal = "";
let continuar = true;

while (continuar) {
  let texto = prompt("Escriba un texto");

  if (textoFinal !== null) {
    textoFinal += "-";
  }
  textoFinal += texto;
  continuar = confirm("¿Quieres ingresar otra cadena?");
}
alert("Cadenas de textos ingresadas: " + textoFinal);
