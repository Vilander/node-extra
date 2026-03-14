const fs = require("fs");
const os = require("os");

const nomeHost = os.hostname();
const totalMem = (os.totalmem() / (1024 ** 3)).toFixed(2);
const SO = os.type();
const usuario = os.userInfo().username;
const cpus = os.cpus();
const qtdCPU = cpus.length;
const modeloCPU = cpus[0].model;


const nomeArquivo = `registro_${nomeHost}.txt`;

// conteúdo do arquivo
const conteudo = `
Host: ${nomeHost}
Memória Total: ${totalMem} GB
Sistema Operacional: ${SO}
Usuário: ${usuario}
Quantidade de CPU: ${qtdCPU}
Modelo CPU: ${modeloCPU}
`;

try {
  fs.writeFileSync(nomeArquivo, conteudo);
  console.log("Arquivo criado com sucesso!");
} catch (erro) {
  console.error("Erro ao criar arquivo:", erro);
}