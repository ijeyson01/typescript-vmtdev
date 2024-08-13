

class MiClase {
    /*nombre: string;
    valor: number;
    testOp?: string

    constructor(nombre: string, valor: number){
        this.nombre = nombre;
        this.valor = valor;
    }*/


    constructor(
        private _nombre: string,
        private _valor: number,
        private _dataCuentas: any,
        private _testOp?: string) { };

    get nombre(): string{
        return this._nombre;
    }

    set nombre(nombre: string) {
        this._nombre = nombre;
    }
    

    get dataCuentas(){
        return this._dataCuentas['dataCuentasX']['ahorrosX']['estadoCuenta'];
    }

    // generar clases e interfaces para:
    // 1. Obtener cuantos viajes ha realizado una persona
    // -Definir cuales objetos pueden ser clases y cuales pueden ser interfaces
    // -Definir cuales pueden ser los métodos para los casos de uso 
    // 2. Obtener a la persona con más viajes
}