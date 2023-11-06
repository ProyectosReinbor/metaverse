export default class {
  constructor(
    escena,
    archivos,
    tipo,
    ruta,
    nombreArchivo,
  ) {
    this.escena = escena;
    this.archivos = archivos;
    this.tipo = tipo;
    this.ruta = ruta;
    this.nombreArchivo = nombreArchivo;
  }
  async cargar() {
    const archivo = await this.archivos.obtener(
      this.tipo,
      this.ruta,
      this.nombreArchivo,
    );
    if (this.tipo == 'gltf') {
      this.objeto = archivo.scene;
    } else {
      this.objeto = archivo;
    }
    this.escena.add(this.objeto);
  }
}