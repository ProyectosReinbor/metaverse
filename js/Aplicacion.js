import Aplicacion from "./reimbor/Aplicacion.js";
import Jugador from "./Jugador.js";
import Luces from './reimbor/Luces.js';
import Casa from './Casa.js';
import Cubo from "./reimbor/Cubo.js";
import Cargando from "./aplicacion/cargando.js";
export default class extends Aplicacion {
  constructor() {
    super();
    this.componentes.agregar(
      'luces',
      new Luces(this.escena),
    );
    this.componentes.agregar(
      'jugador',
      new Jugador(
        this.escena,
        this.archivos,
        this.controlCuadros.segundosEntreCuadro,
        this.camara
      ),
    );
    this.componentes.agregar(
      'casa',
      new Casa(
        this.escena,
        this.archivos,
        this.controlCuadros.segundosEntreCuadro,
      ),
    );
    this.componentes.agregar(
      'peronajeCubo',
      new Cubo(
        this.escena,
        Cubo.parametrosGeometria(1, 2, 1,),
        Cubo.parametrosPosicion(0, 1, 0,),
      ),
    );
    this.cargando = new Cargando();
  }
  async cargar() {
    this.cargando.cargar(this.componentes.coleccion.length);
    await this.componentes.cargar(
      () => this.cargando.componenteCargado()
    );
    this.controlCuadros.puedeActualizar(0);
  }
}