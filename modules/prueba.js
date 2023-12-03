// console.log("hola");
// import { test } from "node:test";
// import assert from "node:assert";

// // for (let i = 0; i < 100000; i++) {
// //   if (i > 90000) console.log(i);
// // }

// // const data = await fetch("https://pokeapi.co/api/v2/");
// // const json = await data.json();

// // console.log(json);

// const datos = {
//   name: "Pikachu",
//   description: "Rata eléctrica",
// };

// datos["habilities"] ??= "ladillin";

// console.log(datos);

// // let prefijo = {};

// // const prefix = (word, i) => [i, word.slice(i, word.length)];

// // let word = "Roberto";

// // for (let i = 0; i < word.length; i++) prefijo[i] ??= prefix(word, i);

// // console.log(prefijo);

// const treeResult = [];

// const elements = [5, 8, 10, 3, 1, 6, 9, 7, 2, 0, 4];

// let numBase = elements[0];

// for (let i = 0; i < elements.length; i++) {
//   if (elements[i] === numBase) continue;

//   if (elements[i] > numBase) {
//     treeResult.push([numBase, elements[i]]);
//     numBase = elements[i];
//   } else {
//     treeResult.push([elements[i], numBase]);
//     numBase = elements[i];
//   }
// }

// console.log(treeResult);

// function recursiva(n) {
//   if (n <= 0) return 1;

//   return n * recursiva(n - 1);
// }

// // console.log(recursiva(5));
// // function pares(num) {
// //   for (let i = num; i < (num + 250) / 2; i++) {
// //     if (i % 2 === 0) {
// //       console.log(`${i}`);
// //     }
// //   }
// // }

// // pares(parseInt(process.argv[2]));

// const arr = [1, 1, 0, -1, -1];

// function fraccion(arr) {
//   let dividendo = arr.length;
//   let positivos = 0;
//   let negativos = 0;
//   let cero = 0;

//   arr.forEach((el) => {
//     if (el > 0) positivos++;
//     else if (el < 0) negativos++;
//     else cero++;
//   });

//   console.log(`${positivos / dividendo}`);
//   console.log(`${negativos / dividendo}`);
//   console.log(`${cero / dividendo}`);
// }

// // fraccion(arr);

// function sumar(arr) {
//   let max = 0;
//   let min = 0;
//   let numSinSumar = 1;
//   arr.sort((a, b) => a - b);
//   for (let i = 0; i < arr.length; i++) {
//     let sum = 0;
//     for (let j = 1; j <= arr.length; j++) {
//       if (j === numSinSumar) continue;
//       sum += j;
//     }

//     min = sum;
//     if (max < sum) max = sum;
//     if (min > sum) min = sum;
//     numSinSumar++;
//   }

//   // arr.forEach((num, i, array) => {
//   //   if (i !== array.length - 1) suma1 += num;
//   //   if (i !== 0) suma2 += num;
//   // });

//   console.log(max, min);
// }

// sumar([1, 2, 3, 4, 5]);

// function dateFormat(s) {
//   const format = {
//     am: [
//       "00",
//       "01",
//       "02",
//       "03",
//       "04",
//       "05",
//       "06",
//       "07",
//       "08",
//       "09",
//       "10",
//       "11",
//     ],
//     pm: [
//       "12",
//       "13",
//       "14",
//       "15",
//       "16",
//       "17",
//       "18",
//       "19",
//       "20",
//       "21",
//       "22",
//       "23",
//     ],
//   };

//   if (s === "") return s;

//   let hour = s.replace(/[:\s]/g, "/").split("/");
//   let formato = hour.pop();

//   if (formato.includes("PM")) {
//     let indice = format.pm.indexOf(hour[0]);
//     hour[0] = format.pm[indice];
//     return hour.join(":") + ":" + formato;
//   } else {
//     let vali = hour[0] === "12" ? "00" : hour[0];
//     let indice = format.am.indexOf(vali);
//     hour[0] = format.am[indice];
//     return hour.join(":") + ":" + formato;
//   }
// }

// let data = dateFormat("12:00:01PM");

// // console.log(data);

// // test.only("descripcion", (expect) => {
// //   console.log(expect);
// //   assert.deepEqual(dateFormat("07:05:45PM"), "");
// // });
// console.log("Escribe tu nombre");
// process.stdin.on("data", (data) => {
//   console.log(`Ahora estas en la matrix ${data}`);
//   process.exit();
// });
// import http from "node:http";

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });

//   res.end("okay");
// });

// server.listen(0, () => {
//   console.log(
//     `Escuchando en el puerto http://localhost:${server.address().port}`
//   );
// });

const ovejas = [
  { name: "Noa", color: "azul" },
  { name: "Euge", color: "rojo" },
  { name: "Navidad", color: "rojo" },
  { name: "Ki Na Ma", color: "rojo" },
  { name: "AAAAAaaaaa", color: "rojo" },
  { name: "Nnnnnnnn", color: "rojo" },
];

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

      default:
        break;
    }
  }

  return returnCadena;
}

console.log(codigo(letter));
