export default class {
  constructor() {
    this.contenedor = document.getElementById("cargando");
    this.mundo = document.getElementById("mundo");
    this.texto = document.getElementById("cargandoTexto");
    this.entrar = document.getElementById("cargandoEntrar");
    this.entrar.addEventListener("click", () => this.entrarClick());
  }
  cargar(numeroDeComponentes) {
    this.porcentaje = 0;
    this.componentePorcentaje = 100 / numeroDeComponentes;
  }
  componenteCargado() {
    this.porcentaje += this.componentePorcentaje;
    if (this.porcentaje >= 100) {
      this.entrar.classList.replace('btn-secondary', 'btn-primary');
    } else {
      this.entrar.classList.replace('btn-primary', 'btn-secondary');
    }
    this.texto.innerText = `Cargando mundo ${this.porcentaje}%`;
  }
  entrarClick() {
    if (this.porcentaje >= 100) {
      this.contenedor.classList.replace("d-block", "d-none");
      this.mundo.classList.replace("d-none", "d-block");
    } else {
      this.contenedor.classList.replace("d-none", "d-block");
      this.mundo.classList.replace("d-block", "d-none");
    }
  }
}