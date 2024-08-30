class Permissao {
  constructor(private _nome: string, private _nivel: number) {}

  get nome() {
    return this._nome.toUpperCase();
  }

  set nome(valor) {
    if (valor.length < 5) {
      throw new Error("O nome da permissão deve ter no mínimo 5 letras.");
    }
    this._nome = valor;
  }
}

const permissao = new Permissao("Administrador", 1);
console.log(permissao.nome);
