import MeuUsuario from "../interfaces/MeuUsuario";
import Notificacao from "./Notificacao";

export default class Email extends Notificacao {
  enviar(usuario: MeuUsuario): boolean {
    console.log(`Enviando email para o usuario ${usuario.email}...`);
    return true;
  }
}
