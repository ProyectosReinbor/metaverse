import * as THREE from "three";
export default class {
  constructor(camara, modelo) {
    this.camara = camara;
    this.modelo = modelo;
    this.contenedor = new THREE.Object3D;
    this.vista = new THREE.Object3D;
  }
  cargar() {
    this.objetivo = this.modelo.objeto;
    this.contenedor.position.set(
      0,
      2,
      -2
    );
    this.vista.position.set(0, 0, 2);
    this.objetivo.add(this.contenedor);
    this.objetivo.add(this.vista);
    console.log(this.contenedor);
  }
  actualizar() {
    const posicion = new THREE.Vector3().setFromMatrixPosition(this.contenedor.matrixWorld);
    this.camara.position.lerp(posicion, 0.2);
    const lookAt = new THREE.Vector3().setFromMatrixPosition(this.vista.matrixWorld);
    this.camara.lookAt(lookAt);
    // console.log(this.camara.position);
  }
}