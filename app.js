// console.log("hola");
// import { test } from "node:test";
// import assert from "node:assert";


let a = "hnola";

console.log(a.match(/[na]/g));

const carta = "bici coche balón _playstation bici coche peluche";

function returnCarta(carta = "") {
  let obj = {};
  let regalos = carta.split(/\s/);
  for (const regalo of regalos) {
    if (regalo.includes("_")) continue;
    if (obj[regalo]) obj[regalo]++;
    else obj[regalo] = 1;
  }

  return obj;
}

console.log(returnCarta(carta));

const letter =
  "&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&";

// const query = await fetch("https://codember.dev/data/message_01.txt");

// const data = await query.text();

// const datos = data.split(/\s/);
// let obj = {};
// for (const dato of datos) {
//   if (obj[dato]) obj[dato]++;
//   else obj[dato] = 1;
// }
// console.log(obj);

// let cadena = "";

// for (const data in obj) {
//   cadena += `${data}${obj[data]}`;
// }

// let dataFinal = cadena.substring(0, cadena.length - 1);

// console.log(dataFinal);
// # incrementa
// @ Disminuye
// & Muestra
// * Multiplica

function codigo(cadena = "") {
  let returnCadena = "";
  let number = 0;
  for (const letra of cadena) {
    switch (true) {
      case letra === "#":
        number++;
        break;
      case letra === "@":
        number--;
        break;
      case letra === "&":
        returnCadena += number.toString();
        break;
      case letra === "*":
        number *= number;
        break;
    }
  }

  return returnCadena;
}

console.log(codigo(letter));
