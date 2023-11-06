import Modelo from './Modelo.js';
export default class extends Modelo {
  constructor(
    escena,
    archivos,
    segundosEntreCuadro,
    modelo,
    animaciones,
    velocidad,
  ) {
    super(
      escena,
      archivos,
      segundosEntreCuadro,
      modelo,
      animaciones,
    );
    this.velocidad = velocidad;
  }
}