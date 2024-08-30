"use strict";
/// <reference path="./index.ts" />
const novoRegistro = new Autenticacao.LoginRegistro();
novoRegistro.registro({
    nome: "Djalma",
    email: "dj@hcode.com.br",
    senha: "djalmaroot",
    dataNascimento: new Date("1995-02-20"),
});
console.log(resultado);
