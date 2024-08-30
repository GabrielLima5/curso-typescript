"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Android_1 = require("./classes/Android");
const Email_1 = __importDefault(require("./classes/Email"));
const SMS_1 = __importDefault(require("./classes/SMS"));
new Email_1.default().enviar({
    nome: "João",
    email: "joao@hcode.com.br",
    telefone: "1190000-0000",
});
new SMS_1.default().enviar({
    nome: "Joao",
    email: "joao@hcode.com.br",
    telefone: "11912344321",
});
new Android_1.Android().enviar({
    nome: "Joao",
    email: "joao@hcode.com.br",
    telefone: "11912344321",
    idAndroid: "sdfgsdgdf",
});
