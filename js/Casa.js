import Modelo from "./reimbor/Modelo.js";
export default class extends Modelo {
  constructor(
    escena,
    archivos,
    segundosEntreCuadro,
  ) {
    super(
      escena,
      archivos,
      segundosEntreCuadro,
      Modelo.modeloParametros(
        'gltf',
        'modelos/casa/',
        'scene'
      ),
      false,
    );
  }
}