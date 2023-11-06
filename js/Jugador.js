import Jugador from './reimbor/Jugador.js';
export default class extends Jugador {
  constructor(
    escena,
    archivos,
    segundosEntreCuadro,
    camara,
  ) {
    super(
      escena,
      archivos,
      segundosEntreCuadro,
      Jugador.modeloParametros(
        'fbx',
        'modelos/',
        'jugador',
      ),
      Jugador.animacionesParametros(
        'animaciones/jugador/',
        [
          'correrAdelante',
          'correrAtras',
          'girarDerecha',
          'girarIzquierda',
          'parado',
          'saltar',
        ],
      ),
      camara,
    );
  }
  empezar() {
    const objeto = this.componentes.obtener('modelo').objeto;
    objeto.scale.setScalar(0.01);
    this.componentes.empezar();
  }
}