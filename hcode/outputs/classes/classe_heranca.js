"use strict";
class Cadastro {
    constructor(nome, nascimento) {
        this.nome = nome;
        this.nascimento = nascimento;
    }
}
class Cliente extends Cadastro {
    constructor(nome, nascimento, email, empresa) {
        super(nome, nascimento);
        this.email = email;
        this.empresa = empresa;
    }
}
const clienteJoao = new Cliente("João", new Date("2000-01-01"), "joao@hcode.com.br", "Hcode");
console.log(clienteJoao);
