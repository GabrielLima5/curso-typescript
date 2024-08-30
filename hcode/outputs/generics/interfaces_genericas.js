"use strict";
const texto = {
    valor: "Hcode",
    realizarProcessamento(arg) {
        return arg.toUpperCase();
    },
};
console.log(texto.valor);
console.log(texto.realizarProcessamento("hcode treinamentos"));
const numero = {
    valor: 10,
    realizarProcessamento(arg) {
        return arg * arg;
    },
};
console.log(numero.valor);
console.log(numero.realizarProcessamento(10));
