"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const applyMixins_1 = __importDefault(require("./applyMixins"));
class ProdutoFinal {
    vender(qtd) {
        return `Foram vendidos ${qtd} itens deste produto.`;
    }
    comprar(qtd) {
        return `Foram comprados ${qtd} itens deste produto.`;
    }
}
class Movel {
    sentar() {
        return "Você sentou no móvel.";
    }
    empurrar(metros) {
        return `O móvel foi empurrado ${metros} metros.`;
    }
}
class Sofa {
    constructor(nome) {
        this.nome = nome;
    }
}
(0, applyMixins_1.default)(Sofa, [ProdutoFinal, Movel]);
const produto = new Sofa("Meu sofá");
console.log(produto.vender(3));
console.log(produto.empurrar(300));
