"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Android = void 0;
const Notificacao_1 = __importDefault(require("./Notificacao"));
class Android extends Notificacao_1.default {
    enviar(usuario) {
        console.log(`Enviando mensagem para o usuario no Android ${usuario.idAndroid} ...`);
        return true;
    }
}
exports.Android = Android;
