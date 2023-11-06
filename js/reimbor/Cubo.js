import * as THREE from "three";
export default class {
  constructor(
    escena,
    geometria,
    posicion,
  ) {
    this.escena = escena;
    this.geometria = new THREE.BoxGeometry(
      geometria.ancho,
      geometria.alto,
      geometria.profundidad,
    );
    this.posicion = posicion;
    this.material = new THREE.MeshBasicMaterial({ color: "#fff" });
    this.objeto = new THREE.Mesh(this.geometria, this.material);
    this.escena.add(this.objeto);
    this.objeto.position.set(
      this.posicion.x,
      this.posicion.y,
      this.posicion.z,
    );
  }
  static parametrosGeometria(
    ancho,
    alto,
    profundidad,
  ) {
    return {
      ancho,
      alto,
      profundidad,
    };
  }
  static parametrosPosicion(
    x,
    y,
    z,
  ) {
    return {
      x,
      y,
      z,
    };
  }
}