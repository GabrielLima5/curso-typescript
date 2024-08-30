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
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
let PrimeiraClasse = class PrimeiraClasse {
    constructor() { }
};
PrimeiraClasse = __decorate([
    utils_1.debug,
    __metadata("design:paramtypes", [])
], PrimeiraClasse);
let SegundaClasse = class SegundaClasse {
    constructor() { }
};
SegundaClasse = __decorate([
    utils_1.log,
    __metadata("design:paramtypes", [])
], SegundaClasse);
console.log(new PrimeiraClasse());
console.log(new SegundaClasse());
