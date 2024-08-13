import { Util } from '../../../util/util';
import { persona, direccioOrigenPersona, datosDestino } from '../datasource/datosEjercicio';
import { Persona } from '../model/persona';


export class ViajesService {
    // 1. Obtener cuantos viajes ha realizado una persona
    public viajesPersona(idPersona: number): string {

        // Comparación lógica usa "==" y compara el valor de 2 objetos de un solo tipo de dato
        // EJ: 1 == 1 => true

        // Comparación lógica estrícta "===" y compara el valor de 2 objetos y el tipo de dato

        let personaViajeAux: any = persona.find(personaViaje => personaViaje.id === idPersona);
        // proceso para obtener los datos de una personapersona
        if (Util.estaVacio(personaViajeAux)) {
            return 'La persona no está registrada';
        } else {
            let personaViaje: Persona = new Persona(
                personaViajeAux['id'],
                personaViajeAux['name'],
                personaViajeAux['age'],
                personaViajeAux['phone']
            );
            // PROCESO DE VIAJES DE LA PERSONA
            let datosViaje: DestinoViaje[] | any = datosDestino.filter(viajes => viajes.person_id === idPersona);
            if (Util.estaVacio(datosViaje)) {
                return 'No hay viajes registrados';
            } else {
                personaViaje.viajes = datosViaje;
                console.log(personaViaje);
                this.personaMasViajera();
                return personaViaje.name + ' ha realizado ' + personaViaje.viajes?.length + ' viajes';
            }
        }
    }

    // 2. Obtener a la persona con más viajes
    public personaMasViajera() {
        let datosViajePersona: any[] = persona.map(personaViaje => {
            let viajesPersona = datosDestino.filter(viajes => viajes.person_id === personaViaje.id);
            let cantidadViajes: number = viajesPersona.length;
            return { 
                'id': personaViaje.id, 
                'name': personaViaje.name, 
                'cantidadViajes': cantidadViajes }
        });
        let dataPersonaOrdenado = datosViajePersona.sort((persona1, persona2) => persona2.cantidadViajes - persona1.cantidadViajes);

        let dataResponse: any[] = [];

        for (let i = 0; i < 3; i++) {
            dataResponse.push(dataPersonaOrdenado[i]);
        }
        console.log(dataResponse);
    }
}