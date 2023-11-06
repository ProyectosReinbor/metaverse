export default class {
  constructor() {
    this.coleccion = [];
    this.nombres = [];
  }
  obtener(nombre) {
    const indice = this.nombres.indexOf(nombre);
    if (indice >= 0) return this.coleccion[indice];
  }
  agregar(nombre, componente) {
    if (this.nombres.includes(nombre)) return;
    let indice = this.nombres.length;
    this.nombres[indice] = nombre;
    this.coleccion[indice] = componente;
  }
  cargar(componenteCargado) {
    return new Promise(async (completar, error) => {
      for (const componente of this.coleccion) {
        if (componente.cargar) await componente.cargar();
        if (componenteCargado) componenteCargado();
      }
      completar();
    });
  }
  empezar() {
    this.coleccion.map(componente => {
      if (componente.empezar) componente.empezar();
    });
  }
  actualizar() {
    this.coleccion.map(componente => {
      if (componente.actualizar) componente.actualizar();
    });
  }
}