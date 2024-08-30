"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Notificacao_1 = __importDefault(require("./Notificacao"));
class Email extends Notificacao_1.default {
    enviar(usuario) {
        console.log(`Enviando email para o usuario ${usuario.email}...`);
        return true;
    }
}
exports.default = Email;
