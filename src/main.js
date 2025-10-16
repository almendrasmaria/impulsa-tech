import './style.css'

document.getElementById("adjunto").addEventListener("change", function () {
  const archivo = this.files[0];
  if (archivo) {
    document.getElementById(
      "archivo-nombre"
    ).textContent = ` ${archivo.name}`;
  }
});