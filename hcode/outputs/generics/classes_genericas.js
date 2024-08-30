"use strict";
class CadastroBasico {
    criar(dados) {
        console.log("Criando novo registro.");
        return dados;
    }
    selecionar(id) {
        console.log("Dados do registro de ID", id);
        return {};
    }
    editar(id, dadosAtualizacao) {
        console.log("Editando dados do ID", id);
        return dadosAtualizacao;
    }
    excluir(id) {
        console.log("Excluindo dados do ID", id);
        return true;
    }
}
class UsuarioModelo extends CadastroBasico {
}
const novoUsuario = new CadastroBasico();
novoUsuario.criar({
    id: 1,
    nome: "Gabriel",
    email: "gabriel@hcode.com.br",
    senha: "123456",
    created_at: new Date("2015-06-01"),
    updated_at: new Date("2021-01-01"),
});
class CategoriaModelo extends CadastroBasico {
}
const novaCategoria = new CadastroBasico();
novaCategoria.criar({
    id: 1,
    nome: "JavaScript",
    created_at: new Date(),
    updated_at: new Date(),
});
