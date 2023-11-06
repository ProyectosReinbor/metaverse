import Personaje from "./Personaje.js";
import CamaraTerceraPersona from './jugador/CamaraTerceraPersona.js';
import ReproductorAnimaciones from './jugador/ReproductorAnimaciones.js';
import Teclado from './jugador/Teclado.js';
export default class extends Personaje {
  constructor(
    escena,
    archivos,
    segundosEntreCuadro,
    modelo,
    animaciones,
    camara,
  ) {
    super(
      escena,
      archivos,
      segundosEntreCuadro,
      modelo,
      animaciones,
    );
    this.camara = camara;
    this.componentes.agregar(
      'teclado',
      new Teclado(
        this.componentes.obtener('estado')
      ),
    );
    this.componentes.agregar(
      'reproductorAnimaciones',
      new ReproductorAnimaciones(
        this.componentes.obtener('estado'),
        this.componentes.obtener('animaciones'),
      ),
    );
    this.componentes.agregar(
      'camaraTerceraPersona',
      new CamaraTerceraPersona(
        this.camara,
        this.componentes.obtener('modelo'),
      ),
    );
  }
}