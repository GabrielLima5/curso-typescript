"use strict";
class Pessoa {
    constructor(nome, idade, altura) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }
    toString() {
        return `A pessoa ${this.nome} possui ${this.idade} anos e mede ${this.altura} de altura.`;
    }
}
const ronaldo = new Pessoa("Ronaldo", 32, 1.85);
console.log(ronaldo.nome);
console.log(ronaldo.toString());
