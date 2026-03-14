const os = require("os");

console.log(os.uptime());

const segundos = os.uptime();
const minutos = segundos / 60;
console.log(`Tempo ligado em minutos: ${minutos.toFixed(2)} minutos`);
const horas = segundos / 3600;
console.log(`Tempo ligado em horas: ${horas.toFixed(2)}h`);
