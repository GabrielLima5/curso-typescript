import { BancoDeDados } from "./BancoDeDados";

const conexaoBanco = BancoDeDados.factory({
  tipoBanco: BancoDeDados.TIPO_MYSQL,
  senha: "root",
  usuario: "root",
  ip: BancoDeDados.LOCAL,
});

console.log(conexaoBanco);
