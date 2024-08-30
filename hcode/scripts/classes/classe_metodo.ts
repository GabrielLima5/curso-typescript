class Professor {
  nome: string;
  idade: number;
  materia: string;

  constructor(nome: string, idade: number, materia: string) {
    this.nome = nome;
    this.idade = idade;
    this.materia = materia;
  }

  seApresentar(): string {
    return `Meu nome é ${this.nome}, tenho ${this.idade} anos de idade e vou lecionar ${this.materia}.`;
  }

  dizerMédia(...notas: number[]): string {
    const media =
      notas.reduce((notaAnterior, notaAtual) => notaAnterior + notaAtual) /
      notas.length;
    return `A média de suas notas foi ${media}`;
  }
}

const glaucio = new Professor("Glaucio Daniel", 45, "Database");
console.log(glaucio.seApresentar());
console.log(glaucio.dizerMédia(10, 3, 8, 7));
