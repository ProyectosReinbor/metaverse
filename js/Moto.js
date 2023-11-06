import Moto from "./reimbor/Moto.js";
export default class extends Moto {
  constructor(
    escena,
    archivos,
    segundosEntreCuadro,
  ) {
    super(
      escena,
      archivos,
      segundosEntreCuadro,
      Moto.modeloParametros(
        'fbx',
        'modelos/',
        'moto',
      ),
      Moto.animacionesParametros(
        'animaciones/moto/',
        [],
      ),
      10,
    )
  }
}