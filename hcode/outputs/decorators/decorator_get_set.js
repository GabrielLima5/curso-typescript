"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function decoratorGetSet(permitirEnumerable) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = permitirEnumerable;
    };
}
class Login {
    constructor(_usuario, _senha) {
        this._usuario = _usuario;
        this._senha = _senha;
    }
    get usuario() {
        return this._usuario;
    }
    get senha() {
        return this._senha;
    }
}
__decorate([
    decoratorGetSet(true),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], Login.prototype, "usuario", null);
__decorate([
    decoratorGetSet(false),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], Login.prototype, "senha", null);
const login = new Login("anthony@hcode.com.br", "203040");
for (let chave in login) {
    console.log("chave", chave);
}
