const webCamElement = document.querySelector("#webcam")
const canvasElement = document.querySelector("#canvas")
const webcamPc = new Webcam(webCamElement, "user", canvasElement);
webcamPc.start();


function tiraFoto() {
  let foto = webcamPc.snap()
  document.querySelector("a").href = foto
}

const btnBaixarFoto = document.querySelector("a")
btnBaixarFoto.addEventListener('click', tiraFoto)