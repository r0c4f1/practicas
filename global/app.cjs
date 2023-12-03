// const os = require("node:os");

// console.log("Info del sistema");
// console.log("---------------------------------------");

// console.log(`Arquitetura del sistema ${os.arch()}`);
// console.log(`sistema operativo ${os.release()}`);
// console.log(`CPUs ${os.cpus()}`);
// console.log(`Plataforma ${os.platform()}`);
// console.log(`memoria libre ${os.freemem() / 1024 / 1024}`);
// console.log(`memoria ${os.totalmem() / 1024 / 1024}`);
// console.log(`Uptime ${os.uptime / 60 / 60}`);

console.log("Ingrese los km recorridos");
let result = 0;

process.stdin.on("data", (data) => {
  console.log("Ingrese el combustible gastado");
  process.stdin.on("data", (data2) => {
    result = parseInt(data) / parseFloat(data2);

    console.log(`El consumo por km es de ${result}`);
    process.exit();
  });
});
