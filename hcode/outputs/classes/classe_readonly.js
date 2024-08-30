"use strict";
class Usuario {
    constructor() {
        this.id = 1;
        this.nome = "João";
        this.senha = "123456";
        this.dataCadastro = new Date("2021-01-01");
    }
}
const usuario = new Usuario();
console.log(usuario.id);
// usuario.id = 123
