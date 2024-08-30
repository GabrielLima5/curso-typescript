function somarRenda(mes1: number, mes2: number, mes3: number): number {
  return mes1 + mes2 + mes3;
}

console.log(somarRenda(1, 2, 3));

function somarRendaComRest(...meses: number[]): number {
  return meses.reduce((mes, acc) => mes + acc, 0);
}

console.log(somarRendaComRest(1, 2, 3));
