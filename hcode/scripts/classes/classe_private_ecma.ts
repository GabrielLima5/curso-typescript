class Documento {
  private valor: string = "123456789-X"; // TS
  #numero: number = 35; // ECMAScript

  mostrarNumero(): number {
    return this.#numero;
  }
}

class CNPJ extends Documento {
  // private valor: string = "2569874565632";
  #numero: number = 50;

  mostrarNumero(): number {
    return this.#numero;
  }
}

const rg = new Documento();
console.log(rg.mostrarNumero());

const cnpj = new CNPJ();
console.log(cnpj.mostrarNumero());

// console.log("RG: " + rg.valor); ---> passou na execução
// console.log("RG: ", rg.#numero); ---> não passou na execução
