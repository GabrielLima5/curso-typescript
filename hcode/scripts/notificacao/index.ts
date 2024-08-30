import { Android } from "./classes/Android";
import Email from "./classes/Email";
import SMS from "./classes/SMS";

new Email().enviar({
  nome: "João",
  email: "joao@hcode.com.br",
  telefone: "1190000-0000",
});

new SMS().enviar({
  nome: "Joao",
  email: "joao@hcode.com.br",
  telefone: "11912344321",
});

new Android().enviar({
  nome: "Joao",
  email: "joao@hcode.com.br",
  telefone: "11912344321",
  idAndroid: "sdfgsdgdf",
});
