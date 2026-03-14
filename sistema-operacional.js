const os = require("os");

console.log(
  "Retorna uma string que identifica a arquitetura, como arm, x64, arm",
);
console.log(os.arch());

console.log("\n==================================================\n");

console.log("Retorna informações sobre as CPUs disponíveis no seu sistema.");
console.log(os.cpus());

console.log("\n==================================================\n");

console.log(
  "Retora o número de bytes que representam a memória livre no seu sistema",
);
console.log(os.freemem());

console.log("\n==================================================\n");

const memoriaLivre = os.freemem() / (1024 * 1024 * 1024);
console.log(memoriaLivre.toFixed(2) + " GB");
console.log("\n==================================================\n");

//------------------------------------------------------------------//

console.log("Retorna a plataforma em que o Node.js foi compilado");
console.log(os.platform());

console.log("\n==================================================\n");

console.log(
  "Retorna o número de bytes que representam o total de memória disponível no sistema",
);
console.log(os.totalmem());
let totalmem = os.totalmem() / (1024 * 1024 * 1024);
console.log(totalmem.toFixed(2) + " GB");

console.log("\n==================================================\n");

console.log("Identifica o sistema operacional");
console.log(os.type());

//------------------------------------------------------------------//
console.log("\n==================================================\n");

console.log("Versão do sistema operacional");
console.log(os.version());

console.log("\n==================================================\n");

console.log(
  "Retorna um objeto contendo o username corrente, uid, gid, shell e homedir",
);
console.log(os.userInfo());

console.log("\n==================================================\n");

console.log("retorna o host name.");
console.log(os.hostname());

console.log("\n==================================================\n");

console.log(
  "Retorna o número de segundos em que o computador está rodando desde o último reinicio",
);
console.log(os.uptime());

const segundos = os.uptime();
const minutos = segundos / 60;
console.log(minutos.toFixed(2) + " minutos");
const horas = segundos / 3600;
console.log(horas.toFixed(2) + " horas");

console.log("\n==================================================\n");

//------------------------------------------------------------------//