import Objeto from './Objeto.js';
import Modelo from './modelo/Modelo.js';
import Animaciones from './modelo/Animaciones.js';
export default class extends Objeto {
  constructor(
    escena,
    archivos,
    segundosEntreCuadro,
    modelo,
    animaciones,
  ) {
    super();
    this.escena = escena;
    this.archivos = archivos;
    this.segundosEntreCuadro = segundosEntreCuadro;
    this.componentes.agregar('modelo', new Modelo(
      this.escena,
      this.archivos,
      modelo.tipo,
      modelo.ruta,
      modelo.nombreArchivo,
    ));
    if (animaciones !== false) {
      this.componentes.agregar('animaciones', new Animaciones(
        this.archivos,
        this.componentes.obtener('modelo'),
        this.segundosEntreCuadro,
        animaciones.ruta,
        animaciones.nombreArchivos,
      ));
    }
  }
  static modeloParametros(
    tipo,
    ruta,
    nombreArchivo,
  ) {
    return {
      tipo,
      ruta,
      nombreArchivo,
    };
  }
  static animacionesParametros(
    ruta,
    nombreArchivos,
  ) {
    return {
      ruta,
      nombreArchivos,
    };
  };
}