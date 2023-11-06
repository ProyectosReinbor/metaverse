export default class {
  constructor(estado, animaciones) {
    this.estado = estado;
    this.animaciones = animaciones;
  }
  actualizar() {
    if (this.estado.adelante)
      this.animaciones.clipAction("correrAdelante");
    else if (this.estado.atras)
      this.animaciones.clipAction("correrAtras");
    else if (this.estado.girarIzquierda)
      this.animaciones.clipAction("girarIzquierda");
    else if (this.estado.girarDerecha)
      this.animaciones.clipAction("girarDerecha");
    else
      this.animaciones.clipAction("parado");
  }
}