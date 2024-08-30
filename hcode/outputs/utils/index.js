"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debug = debug;
exports.log = log;
function debug(classe) {
    console.log("Classe criada.", classe);
}
function log(constructor) {
    return class extends constructor {
        constructor() {
            super(...arguments);
            this.created_at = new Date("2024-08-28");
        }
    };
}
