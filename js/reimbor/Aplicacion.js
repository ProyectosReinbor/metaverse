import * as THREE from 'three';
import Objeto from './Objeto.js';
import Archivos from './aplicacion/Archivos.js';
import ControlCuadros from './aplicacion/ControlCuadros.js';
import Renderizador from './aplicacion/Renderizador.js';
export default class extends Objeto {
  constructor() {
    super();
    this.escena = new THREE.Scene();
    this.camara = new THREE.PerspectiveCamera(
      75, window.innerWidth / window.innerHeight, 0.1, 1000
    );
    this.componentes.agregar(
      'renderizador',
      new Renderizador(this.escena, this.camara),
    );
    THREE.Cache.enabled = true;
    this.archivos = new Archivos();
    this.controlCuadros = new ControlCuadros(24, () => this.actualizar());
  }
  async cargar() {
    await this.componentes.cargar();
    this.controlCuadros.puedeActualizar(0);
  }
}