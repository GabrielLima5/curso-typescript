class Domicilio {
  public cor: string;
  public endereco: object;

  constructor(cor: string, endereco: object) {
    this.cor = cor;
    this.endereco = endereco;
  }

  public tocarInterfone(): string {
    return `Interfone tocado.`;
  }
}

class Casa extends Domicilio {
  public entrarNaCasa() {
    return this.atenderInterfone("Oi, quem é?");
  }
  protected atenderInterfone(mensagem: string) {
    return mensagem;
  }
}

const casaDoHomer = new Casa("Rosa", { cidade: "Springfield" });
console.log(casaDoHomer.tocarInterfone());
// erro - console.log(casaDoHomer.atenderInterfone('Oi'))
console.log(casaDoHomer.entrarNaCasa());
