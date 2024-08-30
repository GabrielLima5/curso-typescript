interface ISoma {
  sum: (a: number, b: number) => number;
}

const sum = (a: number, b: number) => {
  return a + b;
};

const obj: ISoma = {
  sum,
};

/////////////

interface Calculos {
  somar(a: number, b: number): number;
  subtrair(a: number, b: number): number;
  multiplicar(a: number, b: number): number;
  dividir(a: number, b: number): number;
}

let calculadora: Calculos;
calculadora = {
  dividir: (n1: number, n2: number) => n1 / n2,
  multiplicar: (n1: number, n2: number) => n1 * n2,
  subtrair: (n1: number, n2: number) => n1 - n2,
  somar: (n1: number, n2: number) => n1 + n2,
};
