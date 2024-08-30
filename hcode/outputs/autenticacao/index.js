"use strict";
var Autenticacao;
(function (Autenticacao) {
    class LoginRegistro {
        login(usuario) {
            return usuario;
        }
        registro(novoUsuario) {
            return novoUsuario;
        }
    }
    Autenticacao.LoginRegistro = LoginRegistro;
    class Recuperacao {
        recuperarSenha() {
            return "Enviando email para recuperação de senha.";
        }
        recuperarUsuario() {
            return "Enviando email para recuperação de usuário";
        }
    }
    Autenticacao.Recuperacao = Recuperacao;
})(Autenticacao || (Autenticacao = {}));
