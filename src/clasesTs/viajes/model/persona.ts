

export class Persona {
    
    constructor(
        private _id: number,
        private _name: string,
        private _age: number,
        private _phone?: string,
        private _direccion?: DireccionPersona,
        private _viajes?: DestinoViaje[]) {
    };

    set id(id: number) {
        this._id = id;
    }
    set name(name: string) {
        this._name = name;
    }
    set age(age: number) {
        this._age = age;
    }

    set phone(phone: string){
        this._phone = phone;
    }

    set direccion(direccion: DireccionPersona){
        this._direccion = direccion;
    }

    set viajes(viajes: DestinoViaje[]){
        this._viajes = viajes;
    }


    get id(): number {
        return this._id;
    }
    get name(): string {
        return this._name;
    }
    get age(): number {
        return this._age;
    }

    get phone(): string | undefined {
        return this._phone;
    }

    get direccion() : DireccionPersona | undefined{
        return this._direccion;
    }

    get viajes(): DestinoViaje[] | undefined {
        return this._viajes;
    }


}
