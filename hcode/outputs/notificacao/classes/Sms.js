"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Notificacao_1 = __importDefault(require("./Notificacao"));
class SMS extends Notificacao_1.default {
    enviar(usuario) {
        console.log(`Enviando SMS para o usuario ${usuario.telefone}...`);
        return true;
    }
}
exports.default = SMS;
