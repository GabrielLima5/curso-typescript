let resultado: unknown;

resultado = {
  sucesso: true,
};

resultado = "Deu tudo certo!";
resultado = 200;

console.log("===============");

const info: any = 150;
const infoDesconhecida: unknown = 250;

const primeiroNumero: number = info;
// const segundoNumero: number = infoDesconhecida;

// . A diferença entre any e unknown é que any permite que você faça qualquer coisa com uma variável sem verificar o tipo, enquanto unknown exige que você verifique o tipo antes de usá-la, tornando-o mais seguro.
