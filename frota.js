/*const carro1 = {
  marca: "Ford",
  modelo: "Fiesta",
};

const carro2 = {
  marca: "Fiat",
  modelo: "Uno",
};

//module.exports = carro1; //apenas 1 carro usar o module

//module.exports = {carro1, carro2} // também funciona assim para dois carros

exports.carro1 = carro1;
exports.carro2 = carro2;*/

let carros = [
  {
    marca: "Ford",
    modelo: "Fiesta",
  },
  {
    marca: "Fiat",
    modelo: "Uno",
  },
];

function fnListarCarros() {
  carros.forEach((carro) => {
    console.log(carro.marca + " - " + carro.modelo);
  });
}

function fnCadastrarCarro(carro) {
  carros.push(carro);
  console.log("Carro cadastrado com sucesso!");
}

exports.fnListarCarros = fnListarCarros;
exports.fnCadastrarCarro = fnCadastrarCarro;
