interface IEmailV2 {
  nome: string;
  email: string;
}

interface ITelefoneV2 {
  numero: string;
}

interface INotificacaoV2 {
  enviar(usuario: MeuUsuarioV2): boolean;
}

interface MeuUsuarioV2 {
  nome: string;
  email: string;
  telefone: string;
}

abstract class NotificacaoV2 implements INotificacaoV2 {
  abstract enviar(usuario: MeuUsuarioV2): boolean;
}

class EmailV2 extends NotificacaoV2 implements INotificacaoV2, IEmailV2 {
  nome: string;
  email: string;

  constructor(usuario: MeuUsuarioV2) {
    super();
    this.nome = usuario.nome;
    this.email = usuario.email;
  }

  enviar(): boolean {
    console.log(`Enviando email para o usuario ${this.email}...`);
    return true;
  }
}

class SMSV2 extends NotificacaoV2 implements INotificacaoV2, ITelefoneV2 {
  numero: string;

  constructor(usuario: MeuUsuarioV2) {
    super();
    this.numero = usuario.telefone;
  }

  enviar(): boolean {
    console.log(`Enviando SMS para o usuario ${this.numero}...`);
    return true;
  }
}

new EmailV2({
  nome: "João",
  email: "joao@hcode.com.br",
  telefone: "1190000-0000",
}).enviar();
