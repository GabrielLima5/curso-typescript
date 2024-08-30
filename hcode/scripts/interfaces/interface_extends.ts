interface IUsuario {
  nome: string;
  email: string;
  senha: string;
  id: number;
}

interface IPessoa extends IUsuario {
  idade: number;
}

const gabriel: IPessoa = {
  nome: "Gabriel",
  email: "gabriel@email.com",
  senha: "123456",
  id: 1,
  idade: 18,
};
