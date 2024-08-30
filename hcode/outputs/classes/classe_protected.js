"use strict";
class Domicilio {
    constructor(cor, endereco) {
        this.cor = cor;
        this.endereco = endereco;
    }
    tocarInterfone() {
        return `Interfone tocado.`;
    }
}
class Casa extends Domicilio {
    entrarNaCasa() {
        return this.atenderInterfone("Oi, quem é?");
    }
    atenderInterfone(mensagem) {
        return mensagem;
    }
}
const casaDoHomer = new Casa("Rosa", { cidade: "Springfield" });
console.log(casaDoHomer.tocarInterfone());
// erro - console.log(casaDoHomer.atenderInterfone('Oi'))
console.log(casaDoHomer.entrarNaCasa());
