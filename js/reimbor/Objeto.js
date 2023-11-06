import Componentes from "./objeto/Componentes.js";
export default class {
  constructor() {
    this.componentes = new Componentes();
  }
  async cargar() {
    await this.componentes.cargar();
    this.empezar();
  }
  empezar() {
    this.componentes.empezar();
  }
  actualizar() {
    this.componentes.actualizar();
  }
}