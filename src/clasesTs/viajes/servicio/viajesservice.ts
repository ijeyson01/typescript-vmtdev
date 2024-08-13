import { Util } from '../../../util/util';
import { persona, direccioOrigenPersona, datosDestino } from '../datasource/datosEjercicio';
import { Persona } from '../model/persona';


export class ViajesService {

    public viajesPersona(idPersona: number): string {
        ;
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

            let datosViaje: DestinoViaje[] | any = datosDestino.filter(viajes => viajes.person_id === idPersona);
            if (Util.estaVacio(datosViaje)) {
                return 'No hay viajes registrados';
            } else {
                personaViaje.viajes = datosViaje;
                console.log(personaViaje);
                return personaViaje.name + ' ha realizado '+ personaViaje.viajes?.length + ' viajes';
            }
        }

        

        // proceso para obtener datos del viaje

    }
}