namespace Autenticacao {
  interface IUsuario {
    email: string;
    senha: string;
  }

  interface ICadastro extends IUsuario {
    nome: string;
    dataNascimento: Date;
  }

  export class LoginRegistro {
    login(usuario: IUsuario) {
      return usuario;
    }

    registro(novoUsuario: ICadastro) {
      return novoUsuario;
    }
  }

  export class Recuperacao {
    recuperarSenha() {
      return "Enviando email para recuperação de senha.";
    }

    recuperarUsuario() {
      return "Enviando email para recuperação de usuário";
    }
  }
}
