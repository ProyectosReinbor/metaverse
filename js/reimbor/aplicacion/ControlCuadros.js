export default class {
  constructor(cuadrosPorSegundo, actualizar) {
    this.cuadrosPorSegundo = cuadrosPorSegundo;
    this.actualizar = actualizar;
    this.ultimoTotalMiliSegundos = 0;
    this.segundosEntreCuadro = 1 / this.cuadrosPorSegundo;
    this.miliSegundosEntreCuadro = this.segundosEntreCuadro * 1000;
  }
  puedeActualizar(totalMiliSegundos) {
    const miliSegundos = totalMiliSegundos - this.ultimoTotalMiliSegundos;
    if (miliSegundos >= this.miliSegundosEntreCuadro) {
      this.ultimoTotalMiliSegundos = totalMiliSegundos;
      this.actualizar();
    }
    requestAnimationFrame(
      totalMiliSegundos => this.puedeActualizar(totalMiliSegundos)
    );
  }
}