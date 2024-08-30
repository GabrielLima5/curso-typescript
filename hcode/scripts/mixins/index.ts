import applyMixins from "./applyMixins";

class ProdutoFinal {
  vender(qtd: number) {
    return `Foram vendidos ${qtd} itens deste produto.`;
  }

  comprar(qtd: number) {
    return `Foram comprados ${qtd} itens deste produto.`;
  }
}

class Movel {
  sentar() {
    return "Você sentou no móvel.";
  }

  empurrar(metros: number) {
    return `O móvel foi empurrado ${metros} metros.`;
  }
}

class Sofa {
  constructor(public nome: string) {}
}

interface Sofa extends ProdutoFinal, Movel {}
applyMixins(Sofa, [ProdutoFinal, Movel]);

const produto = new Sofa("Meu sofá");
console.log(produto.vender(3));
console.log(produto.empurrar(300));
