export default class {
  constructor(estado) {
    this.estado = estado;
    window.addEventListener("keydown", evento => this.teclaPresionada(evento.code));
    window.addEventListener("keyup", evento => this.teclaSoltada(evento.code));
  }
  teclaPresionada(codigo) {
    this.keydown = codigo;
    if (this.keydown == "KeyW") {
      this.estado.adelante = true;
    }
    if (this.keydown == "KeyS") {
      this.estado.atras = true;
    }
    if (this.keydown == "KeyD") {
      this.estado.girarDerecha = true;
    }
    if (this.keydown == "KeyA") {
      this.estado.girarIzquierda = true;
    }
  }
  teclaSoltada(codigo) {
    this.keyup = codigo;
    if (this.keyup == "KeyW") {
      this.estado.adelante = false;
    }
    if (this.keyup == "KeyS") {
      this.estado.atras = false;
    }
    if (this.keyup == "KeyD") {
      this.estado.girarDerecha = false;
    }
    if (this.keyup == "KeyA") {
      this.estado.girarIzquierda = false;
    }
  }
}