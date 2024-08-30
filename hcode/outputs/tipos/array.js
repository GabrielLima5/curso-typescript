"use strict";
const filmesCategorias = [
    "Comédia",
    "Drama",
    "Romance",
    "Aventura",
];
// filmesCategorias.push("Teste")
// filmesCategorias.push(1)
const filmesAnos = [];
for (let ano = 2000; ano <= new Date().getFullYear(); ano++) {
    filmesAnos.push(ano);
}
console.log(filmesCategorias);
console.log(filmesAnos);
