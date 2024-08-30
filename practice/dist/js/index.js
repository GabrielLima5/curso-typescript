"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const x = 10;
console.log(x);
// inferência
let y = 12;
// annotation
let z = 13;
// tipos de dados
const firstName = 'Gabriel';
const age = 18;
const isMan = true;
const preferedNumbers = [12, 14, 16];
const parentsName = ['Marcia', 'Edcarlos'];
const cats = [{ name: 'Brisa', color: 'White' }];
// tuplas - podemos usá-las para definir exatamente os tipos de dados que queremos dentro de arrays
const myTuple = [true, 2, [4, 5]];
// object literals -> {prop: value}
const user = {
    name: 'Gabriel',
    age: 18,
    brazilian: true
};
// any - aceita qualquer tipo de dado
let some = 12;
some = true;
some = 'hey';
// union type = permite dois ou mais tipos
let id = 12;
id = '12';
let userId = '12';
let productId = 6;
// enum = permite criar uma coleção de valores constantes
var WeekDay;
(function (WeekDay) {
    WeekDay[WeekDay["Domingo"] = 1] = "Domingo";
    WeekDay[WeekDay["Segunda"] = 2] = "Segunda";
    WeekDay[WeekDay["Ter\u00E7a"] = 3] = "Ter\u00E7a";
    WeekDay[WeekDay["Quarta"] = 4] = "Quarta";
    WeekDay[WeekDay["Quinta"] = 5] = "Quinta";
    WeekDay[WeekDay["Sexta"] = 6] = "Sexta";
    WeekDay[WeekDay["S\u00E1bado"] = 7] = "S\u00E1bado";
})(WeekDay || (WeekDay = {}));
const today = WeekDay.Quarta;
console.log(today);
// literal types = tipos que aceitam valores específicos
let activeOrPending;
activeOrPending = 'ativo';
// funções - tipagem nos parâmetros
function sum(a, b) {
    return a + b;
}
console.log(sum(12, 12));
// funções - tipagem no retorno (void indica ausência de retorno)
function sayHelloTo(name) {
    return `Olá, ${name}!`;
}
sayHelloTo('Gabriel');
// ? representa opcional (tipo definido ou undefined)
function greetings(name, greet) {
    if (greet) {
        console.log(`Olá, ${greet} ${name}.`);
    }
    else {
        console.log(`Olá ${name}.`);
    }
}
const gabriel = {
    name: 'Gabriel',
    age: 18
};
// narrowing = checagem de tipos
function doSomething(info) {
    if (typeof info === 'number') {
        console.log('Foi number');
        return;
    }
    console.log('Não foi number');
}
doSomething(5);
doSomething(true);
// generics = permitem trabalhar com diferentes tipos de dados sem perder a informação sobre esses tipos
function showItemsOnArray(arr) {
    arr.forEach(i => console.log(i));
}
showItemsOnArray([1, 2, 3]); // função que recebeu arr do tipo number
showItemsOnArray(['Oi', 'Tchau', 'Olá']); // função que recebeu arr do tipo string
showItemsOnArray([true, false, 'Oi']); // função que recebeu arr de tipos boolean e string
const returnValue = (value) => value;
const a = returnValue('a');
const n = returnValue(23);
// classes
class User {
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    getName() {
        return this.name;
    }
    getRole() {
        return this.role;
    }
    getApprovation() {
        return this.isApproved;
    }
}
const zeca = new User('Zeca', 'Programador', true);
class Airplane {
    constructor(manufacturer, autonomy, stillBeingProduced) {
        this.manufacturer = manufacturer;
        this.autonomy = autonomy;
        this.stillBeingProduced = stillBeingProduced;
    }
    showManufacturer() {
        console.log('The manufacturer is ' + this.manufacturer);
    }
}
const boeing737 = new Airplane('Boeing', 7500, true);
// herança
class SuperAirplane extends Airplane {
    constructor(manufacturer, autonomy, stillBeingProduced, modelNumber) {
        super(manufacturer, autonomy, stillBeingProduced);
        this.modelNumber = modelNumber;
    }
}
const airbus320 = new SuperAirplane('Airbus', 8000, true, 320);
airbus320.showManufacturer();
// decorators - adicionar metadados a classes, métodos, propriedades e parâmetros, afim de modificar seu comportamento
function logarMetodo(target, nomeMetodo, descriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`Método ${nomeMetodo} iniciando com os argumentos ${args}`);
        const resultado = metodoOriginal.apply(this, args);
        console.log(`Método ${nomeMetodo} concluído. Resultado: ${resultado}`);
        return resultado;
    };
    return descriptor;
}
class ExemploClasse {
    soma(a, b) {
        return a + b;
    }
}
__decorate([
    logarMetodo
], ExemploClasse.prototype, "soma", null);
const exemplo = new ExemploClasse();
const resultado = exemplo.soma(5, 3);
