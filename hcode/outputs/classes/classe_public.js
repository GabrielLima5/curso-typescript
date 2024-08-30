"use strict";
class Veiculo {
    constructor(cor) {
        this.cor = cor;
    }
    tentarAbrirPorta() {
        return false;
    }
}
const carro = new Veiculo("Branco");
console.log(carro.cor);
console.log(carro.tentarAbrirPorta());
