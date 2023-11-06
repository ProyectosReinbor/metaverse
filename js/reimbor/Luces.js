import * as THREE from "three";
export default class {
  constructor(escena) {
    this.escena = escena;
    this.luz = new THREE.AmbientLight("#fff", 5);
    this.luzDireccional = new THREE.DirectionalLight("#fff", 2);
  }
  cargar() {
    this.escena.add(this.luz);
    this.escena.add(this.luzDireccional);
  }
}