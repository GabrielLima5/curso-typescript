"use strict";
function mostrarQuantidadeTotal(valor) {
    console.log(`Total: ${valor.length}`);
    return valor;
}
console.log(mostrarQuantidadeTotal([10, 20, 30]));
console.log(mostrarQuantidadeTotal({ nome: "Gabriel", length: 1 }));
