import MeuUsuario from "../interfaces/MeuUsuario";
import Notificacao from "./Notificacao";

export default class SMS extends Notificacao {
  enviar(usuario: MeuUsuario): boolean {
    console.log(`Enviando SMS para o usuario ${usuario.telefone}...`);
    return true;
  }
}
