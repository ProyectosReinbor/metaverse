import * as THREE from "three";
export default class {
  constructor(escena, camara) {
    this.escena = escena;
    this.camara = camara;
    this.renderizador = new THREE.WebGLRenderer({
      antialias: true
    });
    this.renderizador.setPixelRatio(window.devicePixelRatio);
    this.renderizador.setSize(window.innerWidth, window.innerHeight);
    const mundo = document.getElementById("mundo");
    mundo.appendChild(this.renderizador.domElement);
    window.addEventListener("resize", () => this.resize());
  }
  resize() {
    this.camara.aspect = window.innerWidth / window.innerHeight;
    this.camara.updateProjectionMatrix();
    this.renderizador.setSize(window.innerWidth, window.innerHeight);
  }
  actualizar() {
    this.renderizador.render(this.escena, this.camara);
  }
}