const os = require("os");

console.log(os.freemem());
let freeMemoria = os.freemem() / (1024 * 1024 * 1024);
console.log(freeMemoria.toFixed(2) + " GB");
