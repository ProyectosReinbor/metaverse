import * as THREE from "three";
export default class {
  constructor(
    archivos,
    modelo,
    segundosEntreCuadro,
    ruta,
    nombreArchivos
  ) {
    this.archivos = archivos;
    this.modelo = modelo;
    this.segundosEntreCuadro = segundosEntreCuadro;
    this.ruta = ruta;
    this.nombreArchivos = nombreArchivos;
    this.animaciones = [];
  }
  cargar() {
    this.reproductor = new THREE.AnimationMixer(this.modelo.objeto);
    this.cargarAnimaciones();
  }
  async cargarAnimacion(ruta, nombreArchivo) {
    const fbx = await this.archivos.obtener(
      'fbx',
      ruta,
      nombreArchivo,
    );
    this.animaciones[nombreArchivo] = fbx.animations[0];
  }
  cargarAnimaciones() {
    this.nombreArchivos.map(nombreArchivo => {
      this.cargarAnimacion(
        this.ruta,
        nombreArchivo,
      );
    });
  }
  clipAction(nombreAnimacion) {
    if (this.nombreAnimacion == nombreAnimacion) return;
    this.nombreAnimacion = nombreAnimacion;
    if (this.animacionAnterior) {
      this.animacionAnterior.fadeOut(0.5);
    }
    const clip = this.animaciones[this.nombreAnimacion];
    if (clip === undefined) return;
    this.animacion = this.reproductor.clipAction(clip);
    this.animacionAnterior = this.animacion;
    this.animacion.enabled = true;
    this.animacion.fadeIn(0.5);
    this.animacion.play();
  }
  actualizar() {
    this.reproductor.update(this.segundosEntreCuadro);
  }
}