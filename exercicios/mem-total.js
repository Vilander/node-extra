const os = require("os");

console.log(os.totalmem());
let totalmem = os.totalmem() / (1024 * 1024 * 1024);
console.log(totalmem.toFixed(2) + " GB");
