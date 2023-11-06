import Modelo from "./Modelo.js";
import Moverse from "./personaje/Moverse.js";
import Estado from "./personaje/Estado.js";
export default class extends Modelo {
  constructor(
    escena,
    archivos,
    segundosEntreCuadro,
    modelo,
    animaciones,
  ) {
    super(
      escena,
      archivos,
      segundosEntreCuadro,
      modelo,
      animaciones,
    );
    this.componentes.agregar('estado', new Estado());
    this.componentes.agregar('moverse', new Moverse(
      this.componentes.obtener('modelo'),
      this.componentes.obtener('estado'),
      this.segundosEntreCuadro
    ));
  }
}