import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as THREE from "three";
const Cargador = {
  gltf(ruta, nombreArchivo) {
    return new Promise((resolve, reject) => {
      const cargador = new GLTFLoader();
      cargador.setPath(ruta);
      cargador.load(
        `${nombreArchivo}.gltf`,
        archivo => resolve(archivo),
      );
    });
  },
  fbx(ruta, nombreArchivo) {
    return new Promise((resolve, reject) => {
      const cargador = new FBXLoader();
      cargador.setPath(ruta);
      cargador.load(
        `${nombreArchivo}.fbx`,
        archivo => resolve(archivo),
      );
    });
  },
  png(ruta, nombreArchivo) {
    return new Promise((resolve, reject) => {
      const cargador = new THREE.TextureLoader();
      cargador.setPath(ruta);
      cargador.load(
        `${nombreArchivo}.png`,
        archivo => resolve(archivo),
      );
    });
  }
}
export default class {
  constructor() {
    this.archivos = {};
  }
  asignar(ruta, nombreArchivo, archivo) {
    const nombre = `${ruta}${nombreArchivo}`;
    this.archivos[nombre] = archivo;
  }
  obtener(tipo, ruta, nombreArchivo) {
    const nombre = `${ruta}${nombreArchivo}`;
    const archivo = this.archivos[nombre];
    if (archivo) return archivo;
    return this.cargar(tipo, ruta, nombreArchivo);
  }
  async cargar(tipo, ruta, nombreArchivo) {
    const archivo = await Cargador[tipo](ruta, nombreArchivo);
    this.asignar(ruta, nombreArchivo, archivo);
    return archivo;
  }
}