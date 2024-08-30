const x: number = 10
console.log(x)






// inferência
let y = 12

// annotation
let z: number = 13






// tipos de dados
const firstName: string = 'Gabriel'
const age: number = 18
const isMan: boolean = true

const preferedNumbers: number[] = [12, 14, 16]
const parentsName: string[] = ['Marcia', 'Edcarlos']
const cats: object[] = [{name: 'Brisa', color: 'White'}]






// tuplas - podemos usá-las para definir exatamente os tipos de dados que queremos dentro de arrays
const myTuple: [boolean, number, number[]] = [true, 2, [4, 5]]






// object literals -> {prop: value}
const user: { name: string, age: number, brazilian: boolean } = {
    name: 'Gabriel',
    age: 18,
    brazilian: true
}






// any - aceita qualquer tipo de dado
let some: any = 12
some = true
some = 'hey'






// union type = permite dois ou mais tipos
let id: string | number = 12
id = '12'






// type alias = permite criar um union type reutilizável
type idType = string | number
let userId: idType = '12'
let productId: idType = 6






// enum = permite criar uma coleção de valores constantes
enum WeekDay {
    Domingo = 1,
    Segunda = 2,
    Terça = 3,
    Quarta = 4,
    Quinta = 5,
    Sexta = 6,
    Sábado = 7
}

const today = WeekDay.Quarta
console.log(today)






// literal types = tipos que aceitam valores específicos
let activeOrPending: 'ativo' | 'pendente'
activeOrPending = 'ativo'






// funções - tipagem nos parâmetros
function sum(a: number, b: number){
    return a + b
}
console.log(sum(12, 12))






// funções - tipagem no retorno (void indica ausência de retorno)
function sayHelloTo(name: string): string{
    return `Olá, ${name}!`
}
sayHelloTo('Gabriel')






// ? representa opcional (tipo definido ou undefined)
function greetings(name: string, greet?: string): void{
    if (greet){
        console.log(`Olá, ${greet} ${name}.`)
    } else {
        console.log(`Olá ${name}.`)
    }
}






// interfaces = define a forma de como um objeto deve ser
interface IUser {
    name: string,
    age: number
}
const gabriel: IUser = {
    name: 'Gabriel',
    age: 18
}






// narrowing = checagem de tipos
function doSomething(info: number | boolean){
    if (typeof info === 'number'){
        console.log('Foi number')
        return;
    }

    console.log('Não foi number')
}
doSomething(5)
doSomething(true)






// generics = permitem trabalhar com diferentes tipos de dados sem perder a informação sobre esses tipos
function showItemsOnArray<T>(arr: T[]){
    arr.forEach(i => console.log(i))
}
showItemsOnArray([1, 2, 3]) // função que recebeu arr do tipo number
showItemsOnArray(['Oi', 'Tchau', 'Olá']) // função que recebeu arr do tipo string
showItemsOnArray([true, false, 'Oi']) // função que recebeu arr de tipos boolean e string

const returnValue = <Type>(value: Type): Type => value
const a = returnValue<string>('a')
const n = returnValue<number>(23)






// classes
class User{
    name: string
    role: string
    isApproved: boolean

    constructor(name: string, role: string, isApproved: boolean){
        this.name = name
        this.role = role
        this.isApproved = isApproved
    }

    getName(){
        return this.name
    }

    getRole(){
        return this.role
    }

    getApprovation(){
        return this.isApproved
    }
}
const zeca = new User('Zeca', 'Programador', true)






// interfaces em classes
interface IAirplane{
    manufacturer: string,
    autonomy: number,
    stillBeingProduced: boolean,
    showManufacturer(): void,
}

class Airplane implements IAirplane{
    manufacturer : string
    autonomy: number
    stillBeingProduced: boolean

    constructor(manufacturer: string, autonomy: number, stillBeingProduced: boolean){
        this.manufacturer = manufacturer
        this.autonomy = autonomy
        this.stillBeingProduced = stillBeingProduced
    }

    showManufacturer(): void {
        console.log('The manufacturer is ' + this.manufacturer)
    }
}
const boeing737 = new Airplane('Boeing', 7500, true)






// herança
class SuperAirplane extends Airplane{
    modelNumber

    constructor(manufacturer: string, autonomy: number, stillBeingProduced: boolean, modelNumber: number){
        super(manufacturer, autonomy, stillBeingProduced)
        this.modelNumber = modelNumber
    }
}
const airbus320 = new SuperAirplane('Airbus', 8000, true, 320)
airbus320.showManufacturer()






// decorators - adicionar metadados a classes, métodos, propriedades e parâmetros, afim de modificar seu comportamento
function logarMetodo(target: any, nomeMetodo: string, descriptor: any){
    const metodoOriginal = descriptor.value
    descriptor.value = function(...args: any[]){
        console.log(`Método ${nomeMetodo} iniciando com os argumentos ${args}`)
        
        const resultado = metodoOriginal.apply(this, args)
        console.log(`Método ${nomeMetodo} concluído. Resultado: ${resultado}`)
        return resultado
    }
    return descriptor
} 

class ExemploClasse{
    @logarMetodo
    soma(a: number, b: number): number{
        return a + b
    }
}

const exemplo = new ExemploClasse()
const resultado = exemplo.soma(5, 3)