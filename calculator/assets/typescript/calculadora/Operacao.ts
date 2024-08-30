interface OperacaoOpcoes {
  onCalculado: (resultado: string) => void;
}

export default class Operacao {
  private onCalculado: any;
  private memoriaNumero = 0;
  private memoriaOperador: string = "";
  constructor(opts: OperacaoOpcoes, private operacao: string[] = []) {
    this.onCalculado = opts.onCalculado;
  }

  adicionar(valor: string): number {
    if (this.length === 3) {
      this.calcular();
    }

    this.operacao.push(valor);

    return this.length;
  }

  obterResultado(): string {
    let resultado: string = "0";

    try {
      resultado = String(eval(this.operacao.join("")));
    } catch (e) {
      resultado = "ERRO";
    }
    return resultado;
  }

  limpar(): void {
    this.operacao = [];
    this.memoriaNumero = 0;
    this.memoriaOperador = "";
  }

  desfazer(): void {
    this.ultimaPosicao = "0";
  }

  calcular(): void {
    let resultado = this.obterResultado();
    if (resultado.length > 12) {
      resultado = resultado.substr(0, 12);
    }
    this.operacao = [resultado];
    this.onCalculado(resultado);
  }

  porcentagem(): string {
    if (this.length === 3) {
      switch (this.operacao[1]) {
        case "+":
        case "-":
          const porcento = (+this.operacao[0] * +this.operacao[2]) / 100;
          this.memoriaNumero = porcento;
          this.ultimaPosicao = String(porcento);
          return String(porcento);
          break;

        default:
          this.memoriaNumero = +this.ultimaPosicao / 100;
          this.ultimaPosicao = String(this.memoriaNumero);
          return String(this.memoriaNumero);
          break;
      }
    }

    return "0";
  }

  get ultimaPosicao(): string {
    return this.operacao.length ? this.operacao[this.operacao.length - 1] : "0";
  }

  set ultimaPosicao(valor: string) {
    const ultimoIndex = this.operacao.length ? this.operacao.length - 1 : 0;
    this.operacao[ultimoIndex] = valor;
  }

  get length(): number {
    return this.operacao.length;
  }
}
