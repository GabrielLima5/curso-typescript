"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mostrarMensagem_1 = __importDefault(require("./mostrarMensagem"));
console.log((0, mostrarMensagem_1.default)("Hcode"));
console.log((0, mostrarMensagem_1.default)(100));
console.log((0, mostrarMensagem_1.default)({ url: "https://hcode.com.br" }));
const show = (codigo) => {
    return new Date();
};
