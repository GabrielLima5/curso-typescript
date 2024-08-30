interface IProduto {
  nome: string;
  preco: number;
  descricao?: string;
  dataValidade: Date;
}

const produtoDados: IProduto = {
  nome: "Notebook",
  preco: 2800,
  // descricao: "Muito legal",
  dataValidade: new Date(2024, 11, 1),
};
