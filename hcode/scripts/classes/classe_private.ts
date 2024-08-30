class Banco {
  private cofreQtd: number = 10000;

  private debitarCofre(quantidade: number): number | string {
    if (this.cofreQtd >= quantidade) {
      this.cofreQtd -= quantidade;
      return this.cofreQtd;
    } else {
      return "O cofre não possui a quantidade requisitada.";
    }
  }

  protected sacarDoCaixa(quantidade: number) {
    return this.debitarCofre(quantidade);
  }

  public sacarDoCaixaEletronico(quantidade: number) {
    return this.debitarCofre(quantidade);
  }
}

class Banco24Horas extends Banco {
  sacar(qtd: number) {
    // erro - return this.debitarCofre(10)
    return this.sacarDoCaixa(qtd);
  }
}

const nubank = new Banco();
nubank.sacarDoCaixaEletronico(10);

const banco24Horas = new Banco24Horas();
banco24Horas.sacar(500);
