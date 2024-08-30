import MeuUsuario from "../interfaces/MeuUsuario";
import Notificacao from "./Notificacao";

export class Android extends Notificacao {
  enviar(usuario: MeuUsuario): boolean {
    console.log(
      `Enviando mensagem para o usuario no Android ${usuario.idAndroid} ...`
    );

    return true;
  }
}
