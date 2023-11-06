export default class {
  constructor(modelo, estado, segundosEntreCuadro) {
    this.modelo = modelo;
    this.estado = estado;
    this.segundosEntreCuadro = segundosEntreCuadro;
    this.velocidad = 2 * this.segundosEntreCuadro;
    this.velocidadGirar = 3 * this.segundosEntreCuadro;
  }
  actualizar() {
    let movimiento = 0;
    if (this.estado.adelante) movimiento = 1;
    else if (this.estado.atras) movimiento = -1;
    const distancia = this.velocidad * movimiento;
    this.modelo.objeto.translateZ(distancia);

    let rotacion = 0;
    if (this.estado.girarIzquierda)
      rotacion = 1;
    else if (this.estado.girarDerecha)
      rotacion = -1;
    const angulo = this.velocidadGirar * rotacion;
    this.modelo.objeto.rotateY(angulo);
  }
}