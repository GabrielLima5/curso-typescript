interface IEndereco {
  logradouro: string;
  numero: number;
  bairro: string;
  cidade: string;
}

let endereco: IEndereco;

endereco = {
  logradouro: "Av. Paulista",
  numero: 1000,
  bairro: "Bela Vista",
  cidade: "São Paulo",
};

// endereco = {
//   rua: "Av. Paulista",
//   num: 1000,
// };
