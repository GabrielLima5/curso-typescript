import DataHora from "./DataHora.js";
import Tela from "./Tela.js";
import Operacao from "./Operacao.js";
export default class CalculadoraControle {
    constructor(tela = new Tela(), operacao = new Operacao({
        onCalculado: (resultado) => {
            this.tela.conteudo = resultado;
        },
    })) {
        this.tela = tela;
        this.operacao = operacao;
        new DataHora();
        this.eventosBotoes();
        this.eventosTeclas();
    }
    eventosTeclas() {
        window.addEventListener("keydown", (e) => {
            switch (e.key) {
                case "0":
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7":
                case "8":
                case "9":
                    this.adicionarNumero(Number(e.key));
                    break;
                case "+":
                case "-":
                case "*":
                case "/":
                    this.adicionarOperador(e.key);
                    break;
                case ".":
                case ",":
                    this.adicionarPonto();
                    break;
                case "%":
                    this.porcentagem();
                    break;
                case "Enter":
                case "=":
                    this.calcular();
                    break;
                case "Backspace":
                    this.desfazer();
                    break;
                case "z":
                    if (e.ctrlKey || e.metaKey) {
                        this.desfazer();
                    }
                    break;
                case "Escape":
                case "Delete":
                    this.limpar();
                    break;
            }
        });
    }
    eventosBotoes() {
        document.querySelectorAll("#teclado button").forEach((el) => {
            el.addEventListener("click", (e) => {
                const target = e.target;
                switch (target.id) {
                    case "zero":
                    case "um":
                    case "dois":
                    case "tres":
                    case "quatro":
                    case "cinco":
                    case "seis":
                    case "sete":
                    case "oito":
                    case "nove":
                        this.adicionarNumero(Number(target.dataset.valor));
                        break;
                    case "adicao":
                    case "subtracao":
                    case "multiplicacao":
                    case "divisao":
                        this.adicionarOperador(String(target.dataset.valor));
                        break;
                    case "ponto":
                        this.adicionarPonto();
                        break;
                    case "limpar":
                        this.limpar();
                        break;
                    case "desfazer":
                        this.desfazer();
                        break;
                    case "porcentagem":
                        this.porcentagem();
                        break;
                    case "igual":
                        this.calcular();
                        break;
                }
            });
        });
    }
    calcular() {
        this.operacao.calcular();
    }
    adicionarOperacao(valor) {
        this.operacao.adicionar(valor);
    }
    adicionarNumero(numero) {
        if (isNaN(Number(this.operacao.ultimaPosicao))) {
            this.adicionarOperacao(String(numero));
        }
        else {
            numero = Number(String(this.operacao.ultimaPosicao) + String(numero));
            this.operacao.ultimaPosicao = String(numero);
        }
        this.tela.conteudo = numero.toString();
    }
    adicionarOperador(operador) {
        if (isNaN(Number(this.operacao.ultimaPosicao))) {
            this.operacao.ultimaPosicao = operador;
        }
        else {
            if (!this.operacao.length) {
                this.adicionarOperacao("0");
            }
            this.adicionarOperacao(operador);
        }
    }
    adicionarPonto() {
        const ultimaPosicao = this.operacao.ultimaPosicao;
        if (this.verificarOperador(ultimaPosicao)) {
            this.adicionarOperacao("0.");
        }
        else if (ultimaPosicao.indexOf(".") === -1) {
            this.operacao.ultimaPosicao = `${ultimaPosicao}.`;
        }
        this.tela.conteudo = this.operacao.ultimaPosicao;
    }
    verificarOperador(valor) {
        return ["+", "-", "*", "/", "%"].includes(valor);
    }
    limpar() {
        this.operacao.limpar();
        this.tela.conteudo = "0";
    }
    desfazer() {
        this.operacao.desfazer();
        this.tela.conteudo = "0";
    }
    porcentagem() {
        this.tela.conteudo = this.operacao.porcentagem();
    }
}
