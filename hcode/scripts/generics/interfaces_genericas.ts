interface IProcessamento<TipoInterface> {
  valor: TipoInterface;
  realizarProcessamento(arg: TipoInterface): TipoInterface;
}

const texto: IProcessamento<string> = {
  valor: "Hcode",
  realizarProcessamento(arg: string): string {
    return arg.toUpperCase();
  },
};

console.log(texto.valor);
console.log(texto.realizarProcessamento("hcode treinamentos"));

const numero: IProcessamento<number> = {
  valor: 10,
  realizarProcessamento(arg: number) {
    return arg * arg;
  },
};

console.log(numero.valor);
console.log(numero.realizarProcessamento(10));
