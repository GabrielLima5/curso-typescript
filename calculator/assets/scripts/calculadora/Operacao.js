export default class Operacao {
    constructor(opts, operacao = []) {
        this.operacao = operacao;
        this.memoriaNumero = 0;
        this.memoriaOperador = "";
        this.onCalculado = opts.onCalculado;
    }
    adicionar(valor) {
        if (this.length === 3) {
            this.calcular();
        }
        this.operacao.push(valor);
        return this.length;
    }
    obterResultado() {
        let resultado = "0";
        try {
            resultado = String(eval(this.operacao.join("")));
        }
        catch (e) {
            resultado = "ERRO";
        }
        return resultado;
    }
    limpar() {
        this.operacao = [];
        this.memoriaNumero = 0;
        this.memoriaOperador = "";
    }
    desfazer() {
        this.ultimaPosicao = "0";
    }
    calcular() {
        let resultado = this.obterResultado();
        if (resultado.length > 12) {
            resultado = resultado.substr(0, 12);
        }
        this.operacao = [resultado];
        this.onCalculado(resultado);
    }
    porcentagem() {
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
    get ultimaPosicao() {
        return this.operacao.length ? this.operacao[this.operacao.length - 1] : "0";
    }
    set ultimaPosicao(valor) {
        const ultimoIndex = this.operacao.length ? this.operacao.length - 1 : 0;
        this.operacao[ultimoIndex] = valor;
    }
    get length() {
        return this.operacao.length;
    }
}
