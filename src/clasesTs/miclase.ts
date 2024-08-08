

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
}