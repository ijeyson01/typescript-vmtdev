import { ViajesService } from './clasesTs/viajes/servicio/viajesservice';
import './style.css'
//import './funcionesymetodos/funciones_metodos'
//import './funcionesymetodos/procesosarray'

var viajes = new ViajesService();

document.querySelector<HTMLDivElement>('#app')!.innerHTML = JSON.stringify(viajes.datosPersonaDireccion(5));
